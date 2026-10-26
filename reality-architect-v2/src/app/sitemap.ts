import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { visibleProjects } from "@/data/projects";

const base = "https://hellosounak.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    { url: `${base}/projects`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.5 },
    ...visibleProjects.map((p) => ({ url: `${base}/projects/${p.slug}`, priority: 0.7 })),
  ];
}
