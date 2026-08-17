import { SiteShell } from "@/components/site-chrome";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <SiteShell>
      <section className="legal-page"><div className="container legal-layout"><aside><span className="eyebrow">Legal</span><h1>{title}</h1><small>Starter policy · Professional review required before production use</small></aside><article className="legal-copy">{children}</article></div></section>
    </SiteShell>
  );
}
