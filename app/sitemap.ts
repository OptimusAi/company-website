import type { MetadataRoute } from "next";
import { products, solutions } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://optimus-ai.com";
  const routes = ["", "/platform", "/security", "/resources", "/company/about", "/contact", "/design-partner", "/privacy", "/terms"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...products.map((product) => ({ url: `${base}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...solutions.map((solution) => ({ url: `${base}/solutions/${solution.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
