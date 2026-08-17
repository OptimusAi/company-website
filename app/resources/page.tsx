import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, SiteShell } from "@/components/site-chrome";

export const metadata: Metadata = { title: "Resources", description: "Practical thinking on AI agents, operations, customer workflows, and finance." };

const topics = [
  ["AI operations", "From chatbots to AI agents that participate in real, controlled workflows."],
  ["Customer workflows", "How service businesses can capture intent, context, and next steps."],
  ["Finance intelligence", "Where AI can assist receivables and analysis — and where deterministic systems must lead."],
];

export default function ResourcesPage() {
  return (
    <SiteShell>
      <section className="subpage-hero resource-hero"><div className="container narrow-hero"><span className="eyebrow">Resources</span><h1>Practical ideas for putting AI to work.</h1><p>Clear thinking on agents, operational workflows, human control, and the path from experimentation to measurable value.</p></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="What we’re exploring" title="A resource library built around real questions." /><div className="resource-grid">{topics.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p><small>Insights coming soon</small></article>)}</div></div></section>
      <section className="section resource-note-section"><div className="container resource-note"><span className="eyebrow">No content mill</span><h2>Useful before prolific.</h2><p>We’ll publish when there is something specific to explain: a workflow pattern, a product lesson, a control decision, or a practical guide that helps operators make a better choice.</p><Link href="/contact" className="arrow-link">Suggest a topic <span>↗</span></Link></div></section>
    </SiteShell>
  );
}
