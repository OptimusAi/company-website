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
