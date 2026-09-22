import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import MetricStrip from "@/components/MetricStrip";
import PortfolioVisual from "@/components/PortfolioVisual";
import ProjectGrid from "@/components/ProjectGrid";
import TechStackVisualizer from "@/components/TechStackVisualizer";
import { getPortfolioData } from "@/data/getPortfolioData";
import { getDictionary, format } from "@/i18n/getDictionary";
import { isLocale, localizedPath, defaultLocale, hreflangAlternates, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang) || lang === defaultLocale) return {};
  const { profile } = getPortfolioData(lang);
  return {
    title: profile.role,
    description: profile.summary,
    alternates: {
      canonical: `/${lang}`,
      languages: hreflangAlternates("/"),
    },
  };
}

export default async function LocalizedHome({
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
  const { focusAreas, impactMetrics, profile, projects, researchFocus, technologies, experience } =
    getPortfolioData(locale);
  const featuredProjects = projects.slice(0, 4);
  const [pursuingBeforeSchool, pursuingAfterSchoolRaw] = dictionary.home.pursuing.split("{school}");
  const pursuingAfterSchool = format(pursuingAfterSchoolRaw, { graduation: profile.graduation });

  return (
    <div className="portfolio-shell min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.16),transparent_36%),radial-gradient(circle_at_82%_12%,rgba(251,191,36,0.1),transparent_28%),linear-gradient(180deg,#020617_0%,#111827_45%,#030712_100%)] font-sans text-white">
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-16 sm:px-8 lg:py-24">
        <AnimatedSection>
          <section className="mb-24 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-6 text-sm font-mono uppercase tracking-widest text-amber-200 light:text-amber-800">
                {dictionary.home.eyebrow}
              </p>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white light:text-slate-900 sm:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-light leading-tight text-slate-300 light:text-slate-900 sm:text-3xl">
                {profile.role}
              </p>
              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 light:text-slate-600 sm:text-lg">
                {profile.summary} {pursuingBeforeSchool}
                <span className="font-semibold text-teal-200 light:text-teal-700">{profile.school}</span>
                {pursuingAfterSchool}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={localizedPath(locale, "/projects")}
                  className="rounded-md bg-teal-400 light:bg-teal-700 px-5 py-3 text-sm font-semibold text-slate-950 light:text-white transition-all duration-300 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-500/20"
                >
                  {dictionary.home.viewWork}
                </Link>
                <Link
                  href={localizedPath(locale, "/contact")}
                  className="rounded-md border border-slate-600 light:border-slate-300 bg-slate-950/40 light:bg-white/82 px-5 py-3 text-sm font-semibold text-white light:text-slate-900 transition-all duration-300 hover:border-amber-300/70 hover:text-amber-100"
                >
                  {dictionary.home.contact}
                </Link>
                <a
                  href={profile.resume}
                  className="rounded-md border border-slate-700 light:border-slate-300 px-5 py-3 text-sm font-semibold text-slate-300 light:text-slate-900 transition-all duration-300 hover:border-teal-400/70 hover:text-white"
                >
                  {dictionary.home.resume}
                </a>
              </div>
            </div>
            <PortfolioVisual />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-28">
            <MetricStrip metrics={impactMetrics} />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-32 grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Link
                key={area.label}
                href={localizedPath(locale, area.label === "AI Security" ? "/research" : "/projects")}
                className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-6 transition-all duration-300 hover:border-teal-400/50 hover:bg-slate-900/80 hover:shadow-[0_0_40px_-12px_rgba(45,212,191,0.35)] light:hover:shadow-[0_0_40px_-14px_rgba(15,118,110,0.25)]"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-amber-200 light:text-amber-800">
                  {area.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-600">{area.value}</p>
              </Link>
            ))}
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-32">
            <div className="mb-10 flex flex-col justify-between gap-4 border-b border-slate-800 light:border-slate-300 pb-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
                  {dictionary.home.selectedWorkEyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white light:text-slate-900">{dictionary.home.selectedWorkTitle}</h2>
              </div>
              <Link href={localizedPath(locale, "/projects")} className="text-sm font-semibold text-teal-200 light:text-teal-700 hover:text-teal-100">
                {dictionary.home.allProjects}
              </Link>
            </div>
            <ProjectGrid projects={featuredProjects} filterAllLabel={dictionary.projectsPage.filterAll} />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-32 grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
            <div>
              <p className="text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
                {dictionary.home.experienceEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white light:text-slate-900">{dictionary.home.experienceTitle}</h2>
              <p className="mt-5 text-sm leading-7 text-slate-400 light:text-slate-600">
                {dictionary.home.experienceBlurb}
              </p>
              <Link href={localizedPath(locale, "/experience")} className="mt-6 inline-flex text-sm font-semibold text-teal-200 light:text-teal-700 hover:text-teal-100">
                {dictionary.home.fullTimeline}
              </Link>
            </div>
            <ExperienceTimeline experience={experience} />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-32 grid gap-10 lg:grid-cols-[0.58fr_0.42fr]">
            <div className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-6 transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(45,212,191,0.35)] light:hover:shadow-[0_0_40px_-14px_rgba(15,118,110,0.25)]">
              <p className="text-sm font-mono uppercase tracking-widest text-amber-200 light:text-amber-800">
                {researchFocus.title}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white light:text-slate-900">{dictionary.home.researchTitle}</h2>
              <p className="mt-5 text-sm leading-7 text-slate-400 light:text-slate-600">{researchFocus.abstract}</p>
              <Link href={localizedPath(locale, "/research")} className="mt-6 inline-flex text-sm font-semibold text-teal-200 light:text-teal-700 hover:text-teal-100">
                {dictionary.home.readResearchFocus}
              </Link>
            </div>
            <TechStackVisualizer technologies={technologies} categoryLabels={dictionary.techCategories} />
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}
