import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leadSubmissions = sqliteTable(
  "lead_submissions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    formType: text("form_type", { enum: ["demo", "design-partner", "contact"] }).notNull(),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    company: text("company").notNull(),
    role: text("role"),
    companySize: text("company_size"),
    website: text("website"),
    industry: text("industry"),
    productInterest: text("product_interest").notNull(),
    details: text("details"),
    desiredOutcome: text("desired_outcome"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [index("idx_lead_submissions_email_created").on(table.email, table.createdAt)],
);
