import type { Metadata } from "next";
import Link from "next/link";
import { PlatformVisual } from "@/components/product-visuals";
import { SectionHeading, SiteShell } from "@/components/site-chrome";
import { platformCapabilities } from "@/data/site";

export const metadata: Metadata = { title: "Platform", description: "One shared intelligence layer for context, AI agents, workflows, approvals, and control." };

export default function PlatformPage() {
  return (
    <SiteShell>
      <section className="subpage-hero platform-page-hero"><div className="container subpage-hero-grid"><div className="subpage-copy"><span className="eyebrow">The Optimus platform</span><h1>One intelligence layer. Multiple AI agents.</h1><p>A shared foundation designed to help specialized agents understand business context, coordinate workflows, and act within clear boundaries.</p><Link className="button" href="/contact">Explore a workflow <span>↗</span></Link></div><PlatformVisual /></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Platform foundation" title="The capabilities every agent can build on." /><div className="platform-cap-grid">{platformCapabilities.map((capability, index) => <article key={capability}><span>{String(index + 1).padStart(2, "0")}</span><h3>{capability}</h3><p>{[
        "Specialized agents that interpret signals and help move bounded work forward.",
        "Clear, observable paths connecting inputs, rules, decisions, and actions.",
        "Approved knowledge that helps agents understand the organization they serve.",
        "Connections designed around specific systems and validated use cases.",
        "Least-privilege access aligned to roles, workflows, and authorized context.",
        "Review gates for decisions and communications that need human judgment.",
        "Traceable activity, exceptions, and outcomes across agent workflows.",
        "Data protection, isolation, and responsible use designed into the foundation.",
      ][index]}</p></article>)}</div></div></section>
      <section className="section architecture-section dark-section"><div className="container"><SectionHeading eyebrow="How the layer works" title="Context in. Controlled action out." dark /><div className="architecture-flow"><div><span>Inputs</span><strong>Calls · Forms · Messages<br />Documents · Financial data</strong></div><i>→</i><div><span>Intelligence layer</span><strong>Understand · Orchestrate<br />Apply rules · Observe</strong></div><i>→</i><div><span>Outcomes</span><strong>Answer · Route · Prepare<br />Recommend · Act</strong></div></div></div></section>
      <section className="section"><div className="container control-grid"><div><span className="eyebrow">Focused now → platform later</span><h2>Extract the platform from proven product patterns.</h2></div><div className="prose"><p>Optimus is not starting by building infrastructure in search of a problem. The five initial products target clear, expensive workflows in customer operations and finance.</p><p>As repeated capabilities emerge, the common layer can grow around identity, permissions, context, agent orchestration, integrations, approvals, observability, and security.</p></div></div></section>
      <section className="final-cta"><div className="container"><span className="eyebrow">Bring a workflow</span><h2>See how Optimus could<br />fit your operation.</h2><Link className="button" href="/contact">Book a Demo <span>↗</span></Link></div></section>
    </SiteShell>
  );
}
