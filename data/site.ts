export type ProductStatus =
  | "Private Pilot"
  | "Early Access"
  | "In Development";

export type Product = {
  slug: "voice" | "lead" | "office" | "ar" | "analyst";
  name: string;
  family: "Business" | "Finance";
  status: ProductStatus;
  label: string;
  headline: string;
  description: string;
  problem: string;
  capabilities: string[];
  controls: string[];
  workflow: string[];
  outcomes: string[];
};

export const products: Product[] = [
  {
    slug: "voice",
    name: "Optimus Voice",
    family: "Business",
    status: "Private Pilot",
    label: "Customer conversations",
    headline: "Every call answered. Every opportunity captured.",
    description:
      "AI-powered customer conversations designed to capture intent, qualify requests, and move the right callers toward a next step.",
    problem:
      "Service businesses miss after-hours calls, lose customer context, and interrupt teams to answer the same questions. Voice creates a controlled first response without inventing prices, availability, or guarantees.",
    capabilities: [
      "Inbound call handling",
      "Intent and urgency detection",
      "Customer detail capture",
      "Appointment requests",
      "Human handoff",
      "Call summaries",
    ],
    controls: [
      "Configured business rules",
      "Explicit safety escalation",
      "Human transfer paths",
    ],
    workflow: ["Answer", "Understand", "Qualify", "Book", "Notify"],
    outcomes: ["Faster response", "Structured context", "Fewer missed opportunities"],
  },
  {
    slug: "lead",
    name: "Optimus Lead",
    family: "Business",
    status: "Private Pilot",
    label: "Lead conversion",
    headline: "Turn inquiries into opportunities.",
    description:
      "Engage inbound prospects quickly, collect qualification details, follow up, and route promising opportunities to people.",
    problem:
      "Inbound leads often wait too long, receive inconsistent qualification, and disappear between forms, inboxes, calendars, and sales systems.",
    capabilities: [
      "Immediate lead engagement",
      "Configurable qualification",
      "Structured lead profiles",
      "Scheduling",
      "Follow-up workflows",
      "CRM-ready payloads",
    ],
    controls: ["Message policies", "Frequency limits", "Opt-out handling"],
    workflow: ["Capture", "Engage", "Qualify", "Route", "Follow up"],
    outcomes: ["Faster first response", "Consistent qualification", "Cleaner handoffs"],
  },
  {
    slug: "office",
    name: "Optimus Office",
    family: "Business",
    status: "Early Access",
    label: "Workflow automation",
    headline: "Automate the work between the work.",
    description:
      "Coordinate bounded, repeatable workflows across communications, documents, approvals, and business systems.",
    problem:
      "Teams lose time reading repetitive emails, finding documents, copying information, preparing routine responses, and chasing approvals.",
    capabilities: [
      "Request classification",
      "Structured extraction",
      "Context retrieval",
      "Workflow routing",
      "Draft generation",
      "Audit trails",
    ],
    controls: ["Workflow-specific permissions", "Approval steps", "Allowed actions"],
    workflow: ["Understand", "Retrieve", "Prepare", "Approve", "Act"],
    outcomes: ["Fewer manual steps", "Faster turnaround", "Visible exceptions"],
  },
  {
    slug: "ar",
    name: "Optimus AR",
    family: "Finance",
    status: "In Development",
    label: "Receivables intelligence",
    headline: "Turn receivables into actionable intelligence.",
    description:
      "Help finance teams prioritize collections, organize follow-up, understand blockers, and focus on accounts that need human attention.",
    problem:
      "Receivables teams move between aging reports, inboxes, spreadsheets, and accounting systems with limited visibility into why cash is delayed.",
    capabilities: [
      "Aging segmentation",
      "Collections prioritization",
      "Blocker tracking",
      "Promise-to-pay tracking",
      "Draft follow-up",
      "Management visibility",
    ],
    controls: [
      "Deterministic calculations",
      "Review before external outreach",
      "Source visibility",
    ],
    workflow: ["Import", "Prioritize", "Investigate", "Review", "Follow up"],
    outcomes: ["Clearer priorities", "Organized follow-up", "Faster blocker resolution"],
  },
  {
    slug: "analyst",
    name: "Optimus Analyst",
    family: "Finance",
    status: "In Development",
    label: "Financial intelligence",
    headline: "Ask business questions. Get financial answers.",
    description:
      "Explore performance, understand variances, identify drivers, and investigate financial information through traceable analysis.",
    problem:
      "Important finance questions can require hours of pulling, joining, calculating, investigating, and explaining information from multiple datasets.",
    capabilities: [
      "Budget versus actuals",
      "Variance ranking",
      "Trend analysis",
      "Natural-language questions",
      "Drill-down",
      "Source references",
    ],
    controls: [
      "Verified source data",
      "Deterministic metrics",
      "Separated AI interpretation",
    ],
    workflow: ["Validate", "Calculate", "Investigate", "Explain", "Trace"],
    outcomes: ["Faster answers", "Visible drivers", "Traceable explanations"],
  },
];

export const solutions = [
  {
    slug: "home-services",
    name: "Home Services",
    eyebrow: "For appointment-driven teams",
    headline: "Turn every inquiry into a well-run next step.",
    description:
      "Help HVAC, plumbing, electrical, roofing, landscaping, and renovation teams respond quickly while keeping business rules and people in control.",
    workflows: ["Answer calls", "Capture job details", "Assess urgency", "Request appointments", "Follow up"],
    products: ["voice", "lead", "office"],
  },
  {
    slug: "construction",
    name: "Construction",
    eyebrow: "For complex project operations",
    headline: "Connect the workflows around every project.",
    description:
      "Coordinate customer inquiries, documents, approvals, routine communications, and receivables without replacing core project systems.",
    workflows: ["Qualify opportunities", "Route documents", "Prepare responses", "Track approvals", "Prioritize AR"],
    products: ["lead", "office", "ar"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    eyebrow: "For knowledge-intensive firms",
    headline: "Give skilled teams more time for judgment.",
    description:
      "Streamline intake, routine communications, document workflows, and financial investigation while preserving human review.",
    workflows: ["Structure intake", "Retrieve context", "Prepare drafts", "Route decisions", "Analyze performance"],
    products: ["lead", "office", "analyst"],
  },
  {
    slug: "finance",
    name: "Finance Teams",
    eyebrow: "For controllers, CFOs, and operators",
    headline: "Move from manual investigation to financial clarity.",
    description:
      "Bring discipline to receivables workflows and accelerate analysis with deterministic calculations, visible sources, and controlled AI interpretation.",
    workflows: ["Prioritize collections", "Track blockers", "Investigate variance", "Trace drivers", "Review actions"],
    products: ["ar", "analyst"],
  },
];

export const platformCapabilities = [
  "AI agents",
  "Workflow orchestration",
  "Business context",
  "Integrations",
  "Permissions",
  "Human approvals",
  "Observability",
  "Security",
];

export const navGroups = [
  {
    label: "Products",
    links: products.map((product) => ({
      label: product.name.replace("Optimus ", ""),
      href: `/products/${product.slug}`,
      note: product.label,
    })),
  },
  {
    label: "Solutions",
    links: solutions.map((solution) => ({
      label: solution.name,
      href: `/solutions/${solution.slug}`,
      note: solution.eyebrow.replace("For ", ""),
    })),
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
