import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, SiteShell } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Security & Trust", description: "How Optimus approaches access, data protection, auditability, and human oversight." };

const principles = [
  ["Least privilege", "Agents should access only the context and actions required for an approved workflow."],
  ["Human oversight", "Consequential actions stay open to review and approval, especially in early product stages."],
  ["Data minimization", "Collect and retain only what a workflow needs, with retention designed to be configurable."],
  ["Traceability", "Make it possible to distinguish source data, calculations, AI interpretation, and approved action."],
  ["Tenant isolation", "Architect customer data and permissions around clear organizational boundaries."],
  ["Responsible AI", "Use deterministic calculations where precision matters and constrain AI to appropriate tasks."],
];

export default function SecurityPage() {
  return (
    <SiteShell>
      <section className="subpage-hero security-hero"><div className="container narrow-hero"><span className="eyebrow">Security & trust</span><h1>AI for business needs control.</h1><p>Optimus products are being designed around permissions, data protection, auditability, and human oversight for sensitive workflows.</p><Link className="button" href="/contact">Discuss your requirements <span>↗</span></Link></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Design principles" title="Trust is a system, not a badge." body="We communicate the controls we are designing toward without claiming certifications or capabilities that have not been verified." /><div className="security-grid">{principles.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="section trust-model-section dark-section"><div className="container"><SectionHeading eyebrow="Finance trust pattern" title="Separate calculation from interpretation." body="For consequential financial outputs, the authoritative numbers should come from verified data and deterministic code — not from a language model." dark /><div className="trust-model"><div><span>01</span><strong>Source data</strong></div><i>→</i><div><span>02</span><strong>Calculation</strong></div><i>→</i><div><span>03</span><strong>AI interpretation</strong></div><i>→</i><div><span>04</span><strong>Human approval</strong></div><i>→</i><div><span>05</span><strong>Action</strong></div></div></div></section>
      <section className="section"><div className="container control-grid"><div><span className="eyebrow">Honest by default</span><h2>Security claims should be earned and verified.</h2></div><div className="prose"><p>Optimus does not claim SOC 2, ISO 27001, HIPAA, PCI, private-VPC deployment, or zero data retention unless and until each statement is factually established.</p><p>As products move from prototypes to live workflows, controls will be documented against the actual architecture, customer requirements, and independent verification.</p></div></div></section>
    </SiteShell>
  );
}
