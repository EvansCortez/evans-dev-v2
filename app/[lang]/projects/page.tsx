import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectGrid from "@/components/ProjectGrid";
import { getPortfolioData } from "@/data/getPortfolioData";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale, defaultLocale, hreflangAlternates, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang) || lang === defaultLocale) return {};
  const dictionary = getDictionary(lang);
  return {
    title: dictionary.nav.projects,
    description: dictionary.projectsPage.description,
    alternates: { canonical: `/${lang}/projects`, languages: hreflangAlternates("/projects") },
  };
}

export default async function LocalizedProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === defaultLocale) {
    notFound();
  }
  const locale = lang as Locale;

  const dictionary = getDictionary(locale);
  const { projects } = getPortfolioData(locale);

  return (
    <main className="portfolio-shell min-h-screen bg-[linear-gradient(180deg,#020617_0%,#111827_52%,#030712_100%)] px-6 py-16 text-white light:text-slate-900 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <PageIntro
          eyebrow={dictionary.projectsPage.eyebrow}
          title={dictionary.projectsPage.title}
          description={dictionary.projectsPage.description}
        />
        <ProjectGrid projects={projects} filterAllLabel={dictionary.projectsPage.filterAll} />
      </div>
    </main>
  );
}
