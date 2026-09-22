import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
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
  const { researchFocus } = getPortfolioData(lang);
  return {
    title: dictionary.nav.research,
    description: researchFocus.abstract,
    alternates: { canonical: `/${lang}/research`, languages: hreflangAlternates("/research") },
  };
}

export default async function LocalizedResearchPage({
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
  const { researchFocus } = getPortfolioData(locale);

  return (
    <main className="portfolio-shell min-h-screen bg-[linear-gradient(180deg,#020617_0%,#111827_52%,#030712_100%)] px-6 py-16 text-white light:text-slate-900 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <PageIntro
          eyebrow={dictionary.researchPage.eyebrow}
          title={dictionary.researchPage.title}
          description={researchFocus.abstract}
        />
        <section className="grid gap-8 lg:grid-cols-[0.64fr_0.36fr]">
          <div className="space-y-8">
            <div>
              <h2 className="mb-5 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
                {dictionary.researchPage.methods}
              </h2>
              <div className="grid gap-4">
                {researchFocus.methods.map((method) => (
                  <p key={method} className="border-l border-slate-800 light:border-slate-300 pl-4 text-sm leading-7 text-slate-400 light:text-slate-600">
                    {method}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-5 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
                {dictionary.researchPage.securityImplications}
              </h2>
              <div className="grid gap-4">
                {researchFocus.implications.map((item) => (
                  <p key={item} className="border-l border-slate-800 light:border-slate-300 pl-4 text-sm leading-7 text-slate-400 light:text-slate-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="grid content-start gap-4">
            {researchFocus.performance.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-6 transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(45,212,191,0.35)] light:hover:shadow-[0_0_40px_-14px_rgba(15,118,110,0.25)]">
                <p className="text-3xl font-black text-teal-300 light:text-teal-700">{metric.value}</p>
                <p className="mt-3 text-xs font-mono uppercase tracking-widest text-slate-500 light:text-slate-600">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
