import { and, count, eq, gte } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db";
import { leadSubmissions } from "@/db/schema";

const optionalText = z.string().trim().max(3000).optional().or(z.literal(""));

const leadSchema = z.object({
  formType: z.enum(["demo", "design-partner", "contact"]),
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254).transform((value) => value.toLowerCase()),
  company: z.string().trim().min(2).max(180),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  companySize: z.string().trim().max(40).optional().or(z.literal("")),
  website: z.string().trim().url().max(300).optional().or(z.literal("")),
  industry: z.string().trim().max(120).optional().or(z.literal("")),
  productInterest: z.enum(["Voice", "Lead", "Office", "AR", "Analyst", "Not sure"]),
  details: optionalText,
  desiredOutcome: optionalText,
  consent: z.literal("yes"),
  faxNumber: z.string().max(0).optional().or(z.literal("")),
});

type LeadSubmission = z.infer<typeof leadSchema>;

const formLabels: Record<LeadSubmission["formType"], string> = {
  demo: "Demo request",
  contact: "Contact request",
  "design-partner": "Design Partner application",
};

function createNotificationText(submission: LeadSubmission) {
  const fields = [
    ["Request type", formLabels[submission.formType]],
    ["Name", submission.fullName],
    ["Email", submission.email],
    ["Company", submission.company],
    ["Role / title", submission.role],
    ["Company size", submission.companySize],
    ["Website", submission.website],
    ["Industry", submission.industry],
    ["Product interest", submission.productInterest],
    ["Workflow or request details", submission.details],
    ["Desired outcome", submission.desiredOutcome],
  ].filter((field): field is [string, string] => Boolean(field[1]));

  return [
    "A new request was submitted through the Optimus AI website.",
    "",
    ...fields.map(([label, value]) => `${label}:\n${value}`),
  ].join("\n\n");
}

async function sendLeadNotification(submission: LeadSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");

  const recipient = submission.formType === "design-partner"
    ? process.env.DESIGN_PARTNER_TO_EMAIL || "info@optimus-ai.com"
    : process.env.DEMO_REQUEST_TO_EMAIL || "info@optimus-ai.com";
  const sender = process.env.RESEND_FROM_EMAIL || "Optimus AI Website <info@optimus-ai.com>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: submission.email,
      subject: `${formLabels[submission.formType]} — ${submission.fullName} at ${submission.company}`,
      text: createNotificationText(submission),
    }),
  });

  if (!response.ok) throw new Error(`Resend returned ${response.status}.`);
}

export async function POST(request: Request) {
  try {
    const parsed = leadSchema.safeParse(await request.json());
    if (!parsed.success) {
      return Response.json(
        { error: "Please check the required fields and try again." },
        { status: 400 },
      );
    }

    const db = getDb();
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
      .toISOString()
      .replace("T", " ")
      .slice(0, 19);
    const [recent] = await db
      .select({ value: count() })
      .from(leadSubmissions)
      .where(and(eq(leadSubmissions.email, parsed.data.email), gte(leadSubmissions.createdAt, oneHourAgo)));

    if (recent.value >= 3) {
      return Response.json(
        { error: "We’ve already received several requests from this email. Please try again later." },
        { status: 429 },
      );
    }

    const submission = parsed.data;
    await db.insert(leadSubmissions).values({
      formType: submission.formType,
      fullName: submission.fullName,
      email: submission.email,
      company: submission.company,
      role: submission.role || null,
      companySize: submission.companySize || null,
      website: submission.website || null,
      industry: submission.industry || null,
      productInterest: submission.productInterest,
      details: submission.details || null,
      desiredOutcome: submission.desiredOutcome || null,
    });

    try {
      await sendLeadNotification(submission);
    } catch {
      return Response.json(
        { error: "Your request was saved, but the team notification could not be delivered. Please email info@optimus-ai.com directly." },
        { status: 502 },
      );
    }

    return Response.json(
      { message: "Thank you. The Optimus team will review your request and follow up." },
      { status: 201 },
    );
  } catch {
    return Response.json(
      { error: "The request could not be saved right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
