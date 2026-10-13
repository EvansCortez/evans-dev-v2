import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/portfolio";
import { hreflangAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Evans Cortez across AI agents, recommendation systems, and web development.",
  alternates: {
    canonical: "/projects",
    languages: hreflangAlternates("/projects"),
  },
};

export default function ProjectsPage() {
  return (
    <main className="portfolio-shell min-h-screen bg-[linear-gradient(180deg,#020617_0%,#111827_52%,#030712_100%)] px-6 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <PageIntro
          eyebrow="01 / Project Archive"
          title="Built, explored, and in progress."
          description="Browse portfolio projects as practical systems: what problem they solve, how they are structured, what tradeoffs shaped them, and where each one can grow next."
        />
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
