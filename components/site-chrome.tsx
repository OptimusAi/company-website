import Image from "next/image";
import Link from "next/link";
import { navGroups, products, solutions } from "@/data/site";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Optimus AI home">
      <Image
        className="logo-image"
        src="/optimus-ai-logo.png"
        alt="OptimusAI"
        width={1023}
        height={251}
      />
    </Link>
  );
}

function NavGroup({
  group,
}: {
  group: (typeof navGroups)[number];
}) {
  return (
    <details className="nav-group">
      <summary>{group.label}</summary>
      <div className="mega-menu">
        <div className="mega-menu-intro">
          <span className="eyebrow">Explore</span>
          <p>
            {group.label === "Products"
              ? "Purpose-built agents for customer operations and finance."
              : "Practical AI for the workflows that keep teams moving."}
          </p>
        </div>
        <div className="mega-links">
          {group.links.map((link) => (
            <Link href={link.href} key={link.href}>
              <span>{link.label}</span>
              <small>{link.note}</small>
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}

export function Navbar() {
  return (
    <header className="navbar-shell">
      <nav className="navbar container" aria-label="Primary navigation">
        <Logo />
        <div className="desktop-nav">
          {navGroups.map((group) => (
            <NavGroup group={group} key={group.label} />
          ))}
          <Link href="/platform">Platform</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/company/about">Company</Link>
        </div>
        <Link className="button button-small desktop-cta" href="/contact">
          Book a Demo
        </Link>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <div className="mobile-panel">
            <div className="mobile-panel-head">
              <Logo />
              <span className="label">Menu</span>
            </div>
            <div className="mobile-links">
              <span className="eyebrow">Products</span>
              {products.map((product) => (
                <Link href={`/products/${product.slug}`} key={product.slug}>
                  {product.name}
                  <small>{product.status}</small>
                </Link>
              ))}
              <span className="eyebrow">Solutions</span>
              {solutions.map((solution) => (
                <Link href={`/solutions/${solution.slug}`} key={solution.slug}>
                  {solution.name}
                </Link>
              ))}
              <Link href="/platform">Platform</Link>
              <Link href="/security">Security</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/company/about">Company</Link>
            </div>
            <Link className="button" href="/contact">
              Book a Demo
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo />
          <p>AI agents for customer operations and finance.</p>
          <span>Built in Calgary. Designed for businesses everywhere.</span>
        </div>
        <div className="footer-columns">
          <div>
            <h3>Products</h3>
            {products.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.slug}>
                {product.name.replace("Optimus ", "")}
              </Link>
            ))}
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/platform">Platform</Link>
            <Link href="/security">Security</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/design-partner">Design Partner</Link>
          </div>
          <div>
            <h3>Company</h3>
            <Link href="/company/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Optimus AI</span>
        <span>Focused now. Platform later.</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className="status-badge">
      <i aria-hidden="true" />
      {status}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
}) {
  return (
    <header className={`section-heading ${dark ? "section-heading-dark" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </header>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="arrow-link" href={href}>
      {children} <span aria-hidden="true">↗</span>
    </Link>
  );
}
