import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Become a Design Partner", description: "Work with Optimus AI to develop and validate a high-value operational workflow." };

export default function DesignPartnerPage() {
  return (
    <SiteShell>
      <section className="form-page partner-form-page"><div className="container form-page-grid"><div className="form-intro"><span className="eyebrow">Design Partner program</span><h1>Build the future of work with us.</h1><p>We’re looking to collaborate with selected businesses that want to rethink customer, operational, or finance workflows with AI.</p><div className="contact-points"><div><span>01</span><strong>A real workflow</strong><p>A repeated, costly process with a clear owner and measurable outcome.</p></div><div><span>02</span><strong>Shared learning</strong><p>Open, structured feedback that helps shape a focused product.</p></div><div><span>03</span><strong>Controlled progress</strong><p>Sample or approved data, bounded scope, and people in the loop.</p></div></div></div><div className="form-card"><LeadForm mode="design-partner" /></div></div></section>
    </SiteShell>
  );
}
