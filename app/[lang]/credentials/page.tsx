import type { Metadata } from "next";
import CertificationCard from "@/components/CertificationCard";
import PageIntro from "@/components/PageIntro";
import TechStackVisualizer from "@/components/TechStackVisualizer";
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
    title: dictionary.nav.credentials,
    description: dictionary.credentialsPage.description,
    alternates: { canonical: `/${lang}/credentials`, languages: hreflangAlternates("/credentials") },
  };
}

export default async function LocalizedCredentialsPage({
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
  const { certifications, coursework, technologies } = getPortfolioData(locale);

  return (
    <main className="portfolio-shell min-h-screen bg-[linear-gradient(180deg,#020617_0%,#111827_52%,#030712_100%)] px-6 py-16 text-white light:text-slate-900 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <PageIntro
          eyebrow={dictionary.credentialsPage.eyebrow}
          title={dictionary.credentialsPage.title}
          description={dictionary.credentialsPage.description}
        />
        <section className="mb-16 grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
              {dictionary.credentialsPage.technicalProficiencies}
            </h2>
            <TechStackVisualizer technologies={technologies} categoryLabels={dictionary.techCategories} />
          </div>
          <div>
            <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
              {dictionary.credentialsPage.relevantCoursework}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {coursework.map((group) => (
                <div key={group.category} className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-5">
                  <h3 className="text-sm font-semibold text-slate-200 light:text-slate-900">{group.category}</h3>
                  <div className="mt-4 space-y-2">
                    {group.items.map((course) => (
                      <p key={course} className="text-sm text-slate-400 light:text-slate-600">
                        <span className="mr-3 text-teal-300 light:text-teal-700">/</span>
                        {course}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
            {dictionary.credentialsPage.certifications}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} title={cert.title} date={cert.date} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
