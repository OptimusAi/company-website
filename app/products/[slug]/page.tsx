import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductVisual } from "@/components/product-visuals";
import { ArrowLink, SectionHeading, SiteShell, StatusBadge } from "@/components/site-chrome";
import { getProduct, products } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug && item.family === product.family).slice(0, 2);

  return (
    <SiteShell>
      <section className="subpage-hero product-hero">
        <div className="container subpage-hero-grid">
          <div className="subpage-copy">
            <StatusBadge status={product.status} />
            <span className="eyebrow">Optimus {product.family}</span>
            <h1>{product.headline}</h1>
            <p>{product.description}</p>
            <div className="button-row"><Link href="/contact" className="button">Book a Demo <span>↗</span></Link><Link href="/design-partner" className="button button-secondary">Become a Design Partner</Link></div>
          </div>
          <ProductVisual slug={product.slug} />
        </div>
      </section>

      <section className="section product-problem">
        <div className="container split-heading"><span className="section-index">THE OPPORTUNITY</span><div><h2>Less friction. More forward motion.</h2><p>{product.problem}</p></div></div>
      </section>

      <section className="section workflow-section dark-section">
        <div className="container">
          <SectionHeading eyebrow="Core workflow" title="A bounded path from signal to action." body="Each step is designed around approved context, clear rules, and human intervention where judgment matters." dark />
          <div className="workflow-steps">
            {product.workflow.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < product.workflow.length - 1 ? <i>→</i> : null}</div>)}
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container capability-grid">
          <SectionHeading eyebrow="Capabilities" title={`What ${product.name} is designed to do.`} />
          <div className="feature-list">
            {product.capabilities.map((capability, index) => <div key={capability}><span>{String(index + 1).padStart(2, "0")}</span><strong>{capability}</strong><i>↗</i></div>)}
          </div>
        </div>
      </section>

      <section className="section control-section">
        <div className="container control-grid">
          <div><span className="eyebrow">Human control</span><h2>Designed for trust, not blind autonomy.</h2><p>Early workflows keep consequential actions visible, reviewable, and constrained by explicit business rules.</p><ArrowLink href="/security">How Optimus approaches security</ArrowLink></div>
          <div className="control-cards">
            {product.controls.map((control, index) => <article key={control}><span>0{index + 1}</span><strong>{control}</strong><p>{index === 0 ? "Scope each workflow to the context it needs." : index === 1 ? "Keep important actions open to review." : "Make outcomes understandable and traceable."}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section outcomes-section">
        <div className="container"><SectionHeading eyebrow="Intended outcomes" title="Built around measurable operational value." /><div className="outcome-grid">{product.outcomes.map((outcome, index) => <div key={outcome}><span>0{index + 1}</span><strong>{outcome}</strong></div>)}</div></div>
      </section>

      {related.length ? <section className="section related-section"><div className="container"><SectionHeading eyebrow="Related products" title={`More from Optimus ${product.family}.`} /><div className="related-grid">{related.map((item) => <Link href={`/products/${item.slug}`} key={item.slug}><StatusBadge status={item.status} /><h3>{item.name}</h3><p>{item.description}</p><span className="arrow-link">Explore <i>↗</i></span></Link>)}</div></div></section> : null}

      <section className="final-cta"><div className="container"><span className="eyebrow">Start with a real workflow</span><h2>See what {product.name}<br />could do for your team.</h2><div className="button-row"><Link className="button" href="/contact">Book a Demo <span>↗</span></Link><Link className="button button-secondary" href="/design-partner">Become a Design Partner</Link></div></div></section>
    </SiteShell>
  );
}
