import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { researchFocus } from "@/data/portfolio";
import { hreflangAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Research",
  description:
    "AI security research by Evans Cortez focused on adversarial prompt injection detection for generative AI systems.",
  alternates: {
    canonical: "/research",
    languages: hreflangAlternates("/research"),
  },
};

export default function ResearchPage() {
  return (
    <main className="portfolio-shell min-h-screen bg-[linear-gradient(180deg,#020617_0%,#111827_52%,#030712_100%)] px-6 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <PageIntro
          eyebrow="Research"
          title="Adversarial prompt injection detection for safer AI systems."
          description={researchFocus.abstract}
        />
        <section className="grid gap-8 lg:grid-cols-[0.64fr_0.36fr]">
          <div className="space-y-8">
            <div>
              <h2 className="mb-5 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
                Methods
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
                Security Implications
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
