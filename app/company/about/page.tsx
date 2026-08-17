import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, SiteShell } from "@/components/site-chrome";

export const metadata: Metadata = { title: "About", description: "Optimus AI is a Calgary company building intelligent agents for business operations." };

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="subpage-hero about-hero"><div className="container narrow-hero"><span className="eyebrow">About Optimus AI</span><h1>Make intelligent automation accessible to business.</h1><p>We’re building AI agents that understand context, coordinate workflows, and help execute real operational work.</p></div></section>
      <section className="section"><div className="container split-heading"><span className="section-index">OUR MISSION</span><div><h2>Build useful intelligence into the workflows that matter.</h2><p>Optimus starts with five focused products across customer operations and finance. The aim is practical: solve measurable problems, keep people in control, and turn repeated patterns into a coherent platform over time.</p></div></div></section>
      <section className="section values-section dark-section"><div className="container"><SectionHeading eyebrow="How we build" title="Principles before promises." dark /><div className="values-grid">{[
        ["Solve measurable problems", "Start with work that has a clear operational or financial consequence."],
        ["Keep humans in control", "Use review and approval wherever judgment or risk requires it."],
        ["Integrate thoughtfully", "Help teams improve their systems of work without unnecessary replacement."],
        ["Earn the platform", "Productize repeated patterns only after real workflows validate them."],
      ].map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="section calgary-section"><div className="container control-grid"><div><span className="eyebrow">Calgary, Alberta</span><h2>Built in Calgary.<br />Designed for businesses everywhere.</h2></div><div className="prose"><p>Our home gives us proximity to service, construction, energy, professional-services, and finance teams doing complex operational work every day.</p><p>Our ambition extends well beyond geography: build durable AI products that businesses can trust with meaningful work.</p><Link href="/contact" className="arrow-link">Start a conversation <span>↗</span></Link></div></div></section>
    </SiteShell>
  );
}
