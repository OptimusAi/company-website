import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading, SiteShell, StatusBadge } from "@/components/site-chrome";
import { getProduct, getSolution, solutions } from "@/data/site";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  return solution ? { title: `${solution.name} AI Solutions`, description: solution.description } : {};
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const solution = getSolution((await params).slug);
  if (!solution) notFound();
  const solutionProducts = solution.products.map((slug) => getProduct(slug)).filter(Boolean);

  return (
    <SiteShell>
      <section className="subpage-hero solution-hero">
        <div className="container narrow-hero"><span className="eyebrow">{solution.eyebrow}</span><h1>{solution.headline}</h1><p>{solution.description}</p><Link className="button" href="/contact">Talk to Optimus <span>↗</span></Link></div>
      </section>
      <section className="section workflow-solution-section"><div className="container"><SectionHeading eyebrow="Where Optimus fits" title="Practical support across the workflow." /><div className="solution-workflow">{solution.workflows.map((workflow, index) => <div key={workflow}><span>0{index + 1}</span><strong>{workflow}</strong>{index < solution.workflows.length - 1 ? <i>→</i> : null}</div>)}</div></div></section>
      <section className="section solution-products dark-section"><div className="container"><SectionHeading eyebrow="Recommended product set" title={`Built for ${solution.name.toLowerCase()} workflows.`} dark /><div className="related-grid">{solutionProducts.map((product) => product ? <Link href={`/products/${product.slug}`} key={product.slug}><StatusBadge status={product.status} /><h3>{product.name}</h3><p>{product.description}</p><span className="arrow-link">Explore <i>↗</i></span></Link> : null)}</div></div></section>
      <section className="section guardrails-section"><div className="container control-grid"><div><span className="eyebrow">The Optimus approach</span><h2>Fit the workflow.<br />Respect the business.</h2></div><div className="principle-list"><div><span>01</span><strong>Integrate where it creates value</strong><p>Work with approved systems instead of forcing wholesale replacement.</p></div><div><span>02</span><strong>Start with a bounded use case</strong><p>Validate a measurable workflow before expanding scope.</p></div><div><span>03</span><strong>Keep people in control</strong><p>Use human review where judgment or consequence demands it.</p></div></div></div></section>
      <section className="final-cta"><div className="container"><span className="eyebrow">Build around your operation</span><h2>Find the right place<br />to put AI to work.</h2><div className="button-row"><Link className="button" href="/contact">Book a Demo <span>↗</span></Link><Link className="button button-secondary" href="/design-partner">Become a Design Partner</Link></div></div></section>
    </SiteShell>
  );
}
