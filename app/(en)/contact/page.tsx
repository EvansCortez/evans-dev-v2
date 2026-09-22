import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";
import { profile } from "@/data/portfolio";
import { hreflangAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Evans Cortez for AI, machine learning, full-stack, research, and technical support opportunities.",
  alternates: {
    canonical: "/contact",
    languages: hreflangAlternates("/contact"),
  },
};

export default function ContactPage() {
  return (
    <main className="portfolio-shell min-h-screen bg-[linear-gradient(180deg,#020617_0%,#111827_52%,#030712_100%)] px-6 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <PageIntro
          eyebrow="Contact"
          title="Let's build something useful."
          description="Reach out for AI/ML opportunities, full-stack projects, research collaboration, or technical support work."
          actions={
            <>
              <a href={`mailto:${profile.email}`} className="rounded-md border border-slate-600 light:border-slate-300 px-5 py-3 text-sm font-semibold text-white light:text-slate-900 transition-colors hover:border-teal-300">
                Email
              </a>
              <a href={profile.resume} className="rounded-md bg-teal-400 light:bg-teal-700 px-5 py-3 text-sm font-semibold text-slate-950 light:text-white transition-colors hover:bg-teal-300">
                Resume
              </a>
            </>
          }
        />
        <section className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-6">
            <h2 className="text-2xl font-bold text-white light:text-slate-900">Direct links</h2>
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
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
