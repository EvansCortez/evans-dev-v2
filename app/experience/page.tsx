import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import MetricStrip from "@/components/MetricStrip";
import PageIntro from "@/components/PageIntro";
import { impactMetrics } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience for Evans Cortez, including IT support, data engineering, and AI agent building.",
};

export default function ExperiencePage() {
  return (
    <main className="portfolio-shell min-h-screen bg-[linear-gradient(180deg,#020617_0%,#111827_52%,#030712_100%)] px-6 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <PageIntro
          eyebrow="Experience"
          title="Hands-on technical work across infrastructure, data, and AI."
          description="A timeline of roles where operational reliability, user support, code review, automation, and AI agent work came together."
        />
        <div className="mb-12">
          <MetricStrip metrics={impactMetrics} />
        </div>
        <ExperienceTimeline />
      </div>
    </main>
  );
}
