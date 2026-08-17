import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Book a Demo", description: "Talk with Optimus AI about a customer operations or finance workflow." };

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="form-page"><div className="container form-page-grid"><div className="form-intro"><span className="eyebrow">Book a demo</span><h1>Bring us the work that slows your team down.</h1><p>Tell us about the customer, operational, or finance workflow you want to improve. We’ll use the conversation to understand the problem — not force a generic AI pitch.</p><div className="contact-points"><div><span>01</span><strong>Workflow first</strong><p>Start with the work, the current constraints, and the outcome that matters.</p></div><div><span>02</span><strong>Honest fit</strong><p>We’ll be clear about product maturity and whether Optimus is the right path.</p></div><div><span>03</span><strong>Built in Calgary</strong><p>Working with ambitious businesses in Canada and beyond.</p></div></div></div><div className="form-card"><LeadForm /></div></div></section>
    </SiteShell>
  );
}
