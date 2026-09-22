import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import MetricStrip from "@/components/MetricStrip";
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
    title: dictionary.nav.experience,
    description: dictionary.experiencePage.description,
    alternates: { canonical: `/${lang}/experience`, languages: hreflangAlternates("/experience") },
  };
}

export default async function LocalizedExperiencePage({
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
  const { experience, impactMetrics } = getPortfolioData(locale);

  return (
    <main className="portfolio-shell min-h-screen bg-[linear-gradient(180deg,#020617_0%,#111827_52%,#030712_100%)] px-6 py-16 text-white light:text-slate-900 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <PageIntro
          eyebrow={dictionary.experiencePage.eyebrow}
          title={dictionary.experiencePage.title}
          description={dictionary.experiencePage.description}
        />
        <div className="mb-12">
          <MetricStrip metrics={impactMetrics} />
        </div>
        <ExperienceTimeline experience={experience} />
      </div>
    </main>
  );
}
