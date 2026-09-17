import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

const siteUrl = "https://evanscortez.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/projects", "/experience", "/research", "/credentials", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.9,
    } as const)),
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
