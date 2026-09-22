import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { locales, localizedPath, hreflangAlternates } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = ["/", "/projects", "/experience", "/research", "/credentials", "/contact"];

function languageAlternates(route: string): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const [locale, path] of Object.entries(hreflangAlternates(route))) {
    if (locale === "x-default") continue;
    alternates[locale] = `${siteUrl}${path}`;
  }
  return alternates;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${siteUrl}${localizedPath(locale, route)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.9,
      alternates: { languages: languageAlternates(route) },
    }))
  );

  const projectEntries = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${siteUrl}${localizedPath(locale, `/projects/${project.slug}`)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: languageAlternates(`/projects/${project.slug}`) },
    }))
  );

  return [...staticEntries, ...projectEntries];
}
