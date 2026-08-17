import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") || incoming.get("host") || "optimus-ai.com";
  const protocol = incoming.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const base = `${protocol}://${host}`;

  return {
    metadataBase: new URL(base),
    title: { default: "Optimus AI — AI that does the work", template: "%s — Optimus AI" },
    description: "Intelligent AI agents for customer operations and finance.",
    alternates: { canonical: "/" },
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
    openGraph: {
      type: "website",
      siteName: "Optimus AI",
      title: "Optimus AI — AI that does the work",
      description: "Intelligent AI agents for customer operations and finance.",
      url: base,
      images: [{ url: `${base}/og.png`, width: 1732, height: 909, alt: "Optimus AI — AI that does the work" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Optimus AI — AI that does the work",
      description: "Intelligent AI agents for customer operations and finance.",
      images: [`${base}/og.png`],
    },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Optimus AI",
  url: "https://optimus-ai.com",
  logo: "https://optimus-ai.com/optimus-ai-logo.png",
  description: "AI agents for customer operations and finance.",
  address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "Alberta", addressCountry: "CA" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
