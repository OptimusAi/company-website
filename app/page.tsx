import type { Metadata } from "next";
import Link from "next/link";
import { products, solutions, platformCapabilities } from "@/data/site";
import { ArrowLink, SectionHeading, SiteShell, StatusBadge } from "@/components/site-chrome";
import { AnalystVisual, ArVisual, LeadVisual, OfficeVisual, PlatformVisual, VoiceVisual } from "@/components/product-visuals";

export const metadata: Metadata = {
  title: "AI that does the work",
  description: "Intelligent AI agents for customer operations and finance, built in Calgary for businesses everywhere.",
};

function HeroSystem() {
  return (
    <div className="hero-system" aria-label="A simulated Optimus workflow moving from incoming context to approved action">
      <div className="hero-system-bar"><span>Optimus agent network</span><span><i /> Active simulation</span></div>
      <div className="hero-system-canvas">
        <div className="hero-inputs">
          <span><b>01</b>Incoming call</span>
          <span><b>02</b>Lead form</span>
          <span><b>03</b>AR aging</span>
        </div>
        <div className="hero-core">
          <div className="core-pulse" aria-hidden="true" />
          <small>Business context</small>
          <strong>OPTIMUS</strong>
          <span>Understands intent</span>
        </div>
        <div className="hero-output">
          <small>Recommended action</small>
          <strong>Route & prepare</strong>
          <span><i /> Human approval</span>
        </div>
        <div className="flow-line flow-line-a" /><div className="flow-line flow-line-b" />
      </div>
      <div className="hero-system-foot"><span>Context connected</span><span>Rules applied</span><span>Action traceable</span></div>
    </div>
  );
}

function ProductPortfolio() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <SectionHeading
          eyebrow="Product portfolio"
          title="Purpose-built AI for the work that runs your business."
          body="Focused products for customer operations and finance, designed around measurable workflows and human control."
        />
        <div className="family-labels">
          <div><span>01</span><strong>Optimus Business</strong><small>Customer + operational workflows</small></div>
          <div><span>02</span><strong>Optimus Finance</strong><small>Receivables + financial intelligence</small></div>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className={`product-card product-card-${product.family.toLowerCase()}`} key={product.slug}>
              <div className="product-card-top"><span className="mono">0{products.indexOf(product) + 1}</span><StatusBadge status={product.status} /></div>
              <div>
                <span className="eyebrow">Optimus {product.family}</span>
                <h3>{product.name.replace("Optimus ", "")}</h3>
                <p>{product.description}</p>
              </div>
              <ArrowLink href={`/products/${product.slug}`}>Explore {product.name}</ArrowLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <SiteShell>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><i /> Optimus AI · Calgary, Canada</span>
            <h1>AI that does<br />the <em>work.</em></h1>
            <p>Intelligent AI agents for customer operations and finance — built to answer, understand, coordinate, analyze, and move work forward.</p>
            <div className="button-row">
              <Link className="button" href="/contact">Book a Demo <span>↗</span></Link>
              <Link className="button button-secondary" href="#products">Explore Optimus</Link>
            </div>
            <div className="hero-note"><span>Built in Calgary.</span><span>Designed for businesses everywhere.</span></div>
          </div>
          <HeroSystem />
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <div>VOICE <i /> LEAD <i /> OFFICE <i /> AR <i /> ANALYST <i /> HUMAN CONTROL <i /> BUSINESS CONTEXT <i /></div>
        </div>
      </section>

      <section className="section transformation">
        <div className="container split-heading">
          <span className="section-index">01 / THE SHIFT</span>
          <div>
            <h2>From repetitive work<br />to intelligent operations.</h2>
            <p>Businesses lose time and opportunity to calls, follow-up, administrative workflows, receivables management, and manual financial analysis. Optimus brings AI into those workflows so teams can focus on decisions, relationships, and higher-value work.</p>
          </div>
        </div>
        <div className="container transformation-strip">
          {[
            ["Calls", "Answered with context"], ["Leads", "Engaged while intent is high"], ["Workflows", "Coordinated across systems"], ["Finance", "Explained with traceability"],
          ].map(([label, value], index) => <div key={label}><span>0{index + 1}</span><small>{label}</small><strong>{value}</strong></div>)}
        </div>
      </section>

      <ProductPortfolio />

      <section className="section showcase-section dark-section">
        <div className="container showcase-grid">
          <div className="showcase-copy">
            <span className="eyebrow">Optimus Voice · Private Pilot</span>
            <h2>Every call answered.<br />Every opportunity captured.</h2>
            <p>Understand why someone is calling, capture what the team needs, and move appropriate customers toward the next approved step.</p>
            <ol className="number-list">
              <li><span>01</span>Intent identified</li><li><span>02</span>Details captured</li><li><span>03</span>Next action requested</li>
            </ol>
            <ArrowLink href="/products/voice">Explore Optimus Voice</ArrowLink>
          </div>
          <VoiceVisual />
        </div>
      </section>

      <section className="section duo-showcase">
        <div className="container">
          <SectionHeading eyebrow="Operational agents" title="Move opportunity forward. Keep judgment close." />
          <div className="duo-grid">
            <article className="duo-panel">
              <div className="duo-copy"><span className="eyebrow">Optimus Lead</span><h3>Turn inquiries into opportunities.</h3><p>Respond, qualify, follow up, and hand people a more complete picture.</p></div>
              <LeadVisual />
              <ArrowLink href="/products/lead">Explore Lead</ArrowLink>
            </article>
            <article className="duo-panel duo-panel-dark">
              <div className="duo-copy"><span className="eyebrow">Optimus Office</span><h3>Automate the work between the work.</h3><p>Coordinate bounded workflows across requests, documents, approvals, and systems.</p></div>
              <OfficeVisual />
              <ArrowLink href="/products/office">Explore Office</ArrowLink>
            </article>
          </div>
        </div>
      </section>

      <section className="section finance-section">
        <div className="container">
          <SectionHeading eyebrow="Optimus Finance" title="Intelligence for modern finance teams." body="Improve receivables operations and financial analysis without asking teams to replace the systems they already rely on." dark />
          <div className="finance-showcase">
            <div className="finance-copy"><span className="status-line">IN DEVELOPMENT · SAMPLE DATA</span><h3>Receivables, prioritized.</h3><p>Surface payment blockers, promises, disputes, and the accounts that need human attention.</p><ArrowLink href="/products/ar">Explore Optimus AR</ArrowLink></div>
            <ArVisual />
          </div>
          <div className="finance-showcase finance-showcase-reverse">
            <AnalystVisual />
            <div className="finance-copy"><span className="status-line">IN DEVELOPMENT · SAMPLE DATA</span><h3>Financial answers, traced.</h3><p>Investigate performance and variance using deterministic calculations and visible sources.</p><ArrowLink href="/products/analyst">Explore Optimus Analyst</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="section platform-section">
        <div className="container platform-grid">
          <div>
            <SectionHeading eyebrow="The Optimus platform" title="One intelligence layer. Multiple AI agents." body="Every product is designed around a shared foundation for business context, workflow orchestration, permissions, human approvals, and observability." />
            <div className="capability-list">
              {platformCapabilities.map((capability, index) => <div key={capability}><span>{String(index + 1).padStart(2, "0")}</span><strong>{capability}</strong></div>)}
            </div>
            <ArrowLink href="/platform">Explore the platform</ArrowLink>
          </div>
          <PlatformVisual />
        </div>
      </section>

      <section className="section industries-section">
        <div className="container">
          <SectionHeading eyebrow="Solutions" title="Built around real operational workflows." />
          <div className="industry-grid">
            {solutions.map((solution, index) => (
              <Link href={`/solutions/${solution.slug}`} className="industry-card" key={solution.slug}>
                <span className="mono">0{index + 1}</span><div><h3>{solution.name}</h3><p>{solution.description}</p></div><span className="round-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="Connect. Understand. Act." body="Bring approved context into a controlled workflow, then let the right agent recommend or execute the next step." />
          <div className="process-grid">
            {[
              ["Connect", "Approved business data, communications, and workflows."],
              ["Understand", "Requests, context, documents, and financial information."],
              ["Act", "Recommended or approved next steps with people in control."],
            ].map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p><div className="process-line"><i /></div></article>)}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-grid">
          <div><span className="eyebrow">Trust by design</span><h2>AI for business needs control.</h2><p>Optimus is being designed around permissions, data protection, auditability, and human oversight for sensitive workflows.</p><ArrowLink href="/security">Explore security</ArrowLink></div>
          <div className="trust-card">
            {[
              ["01", "Controlled access", "Give agents only the context and actions a workflow requires."],
              ["02", "Visible reasoning", "Separate source data, calculations, AI interpretation, and approved action."],
              ["03", "Human review", "Keep people in the loop for consequential decisions and communications."],
            ].map(([number, title, body]) => <div key={title}><span>{number}</span><strong>{title}</strong><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container vision-grid">
          <div><span className="eyebrow">The long view</span><h2>We’re building the intelligence layer for business operations.</h2><p>Focused products now. A common platform as proven patterns emerge.</p></div>
          <div className="vision-roadmap">
            <div><span>Today</span><strong>Voice · Lead · Office<br />AR · Analyst</strong><small>Focused product portfolio</small></div>
            <i aria-hidden="true">→</i>
            <div><span>Roadmap concepts</span><strong>AP · Close · Cash<br />Documents · Support</strong><small>Future opportunities, not currently available</small></div>
            <i aria-hidden="true">→</i>
            <div className="vision-end"><span>Platform direction</span><strong>Optimus AI<br />Operations Platform</strong><small>Built from validated workflows</small></div>
          </div>
        </div>
      </section>

      <section className="section partner-section">
        <div className="container partner-card">
          <span className="eyebrow">Design Partner program</span>
          <h2>Build the future of work with us.</h2>
          <p>We’re collaborating with selected businesses to understand, develop, and validate high-value operational workflows.</p>
          <Link href="/design-partner" className="button button-light">Become a Design Partner <span>↗</span></Link>
        </div>
      </section>

      <section className="final-cta">
        <div className="container"><span className="eyebrow">Start a conversation</span><h2>Put AI to work in<br />your business.</h2><div className="button-row"><Link className="button" href="/contact">Book a Demo <span>↗</span></Link><Link className="button button-secondary" href="#products">Explore Products</Link></div></div>
      </section>
    </SiteShell>
  );
}
