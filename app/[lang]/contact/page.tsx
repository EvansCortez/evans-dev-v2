import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
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
  return {
    title: dictionary.nav.contact,
    description: dictionary.contactPage.description,
    alternates: { canonical: `/${lang}/contact`, languages: hreflangAlternates("/contact") },
  };
}

export default async function LocalizedContactPage({
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
  const { profile } = getPortfolioData(locale);

  return (
    <main className="portfolio-shell min-h-screen bg-[linear-gradient(180deg,#020617_0%,#111827_52%,#030712_100%)] px-6 py-16 text-white light:text-slate-900 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <PageIntro
          eyebrow={dictionary.contactPage.eyebrow}
          title={dictionary.contactPage.title}
          description={dictionary.contactPage.description}
          actions={
            <>
              <a href={`mailto:${profile.email}`} className="rounded-md border border-slate-600 light:border-slate-300 px-5 py-3 text-sm font-semibold text-white light:text-slate-900 transition-colors hover:border-teal-300">
                {dictionary.contactPage.email}
              </a>
              <a href={profile.resume} className="rounded-md bg-teal-400 light:bg-teal-700 px-5 py-3 text-sm font-semibold text-slate-950 light:text-white transition-colors hover:bg-teal-300">
                {dictionary.contactPage.resume}
              </a>
            </>
          }
        />
        <section className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-6">
            <h2 className="text-2xl font-bold text-white light:text-slate-900">{dictionary.contactPage.directLinks}</h2>
            <div className="mt-6 space-y-4 text-sm">
              <a className="block text-teal-200 light:text-teal-700 hover:text-teal-100" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="block text-teal-200 light:text-teal-700 hover:text-teal-100" href={profile.github} target="_blank" rel="noopener noreferrer">
                github.com/EvansCortez
              </a>
              <a className="block text-teal-200 light:text-teal-700 hover:text-teal-100" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/evans-cortez
              </a>
            </div>
          </div>
          <ContactForm dictionary={dictionary.contactForm} />
        </section>
      </div>
    </main>
  );
}
