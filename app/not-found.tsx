import Link from "next/link";
import { SiteShell } from "@/components/site-chrome";

export default function NotFound() {
  return <SiteShell><section className="not-found"><div className="container"><span className="eyebrow">404 · Page not found</span><h1>This workflow<br />doesn’t exist.</h1><p>The page may have moved, or the route may still be on the roadmap.</p><Link className="button" href="/">Return home <span>↗</span></Link></div></section></SiteShell>;
}
