import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { hreflangAlternates } from "@/i18n/config";

const siteUrl = "https://evanscortez.dev";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
      languages: hreflangAlternates(`/projects/${project.slug}`),
    },
    keywords: [
      project.title,
      project.category,
      ...project.tags,
      "Evans Cortez",
      "Portfolio case study",
    ],
    openGraph: {
      title: `${project.title} | Evans Cortez`,
      description: project.summary,
      type: "article",
      url: `${siteUrl}/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Evans Cortez`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteUrl}/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: "Evans Cortez",
      url: siteUrl,
    },
    keywords: project.tags.join(", "),
    programmingLanguage: project.tags.filter((tag) =>
      ["Python", "Java", "JavaScript/TypeScript", "SQL"].includes(tag)
    ),
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-8 py-20 text-white light:text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Link
        href="/projects"
        className="mb-12 w-fit text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700 transition-colors hover:text-teal-100"
      >
        ← Back to projects
      </Link>

      <section className="mb-16">
        <p className="mb-4 text-sm font-mono uppercase tracking-widest text-amber-200 light:text-amber-800">
          {project.category}
        </p>
        <h1 className="mb-6 max-w-4xl text-5xl font-black tracking-tight text-white light:text-slate-900 md:text-7xl">
          {project.title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-400 light:text-slate-600">
          {project.summary}
        </p>
      </section>

      <section className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-6 transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(45,212,191,0.35)] light:hover:shadow-[0_0_40px_-14px_rgba(15,118,110,0.25)]"
          >
            <div className="text-3xl font-bold text-teal-300 light:text-teal-700">
              {metric.value}
            </div>
            <div className="mt-2 text-xs font-mono uppercase tracking-wider text-slate-500 light:text-slate-600">
              {metric.label}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
          Problem
        </h2>
        <p className="max-w-4xl text-base leading-8 text-slate-400 light:text-slate-600">
          {project.problem}
        </p>
      </section>

      <div className="mb-16 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-teal-400/20 bg-teal-400/10 light:bg-teal-100/70 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-teal-200 light:text-teal-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <section className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {project.repoStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-5 transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(45,212,191,0.35)] light:hover:shadow-[0_0_40px_-14px_rgba(15,118,110,0.25)]"
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 light:text-slate-600">
              {stat.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-teal-200 light:text-teal-700">
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
            Architecture
          </h2>
          <ul className="space-y-4 text-sm leading-7 text-slate-400 light:text-slate-600">
            {project.architecture.map((item) => (
              <li key={item} className="border-l border-slate-800 light:border-slate-300 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
            Technical Decisions
          </h2>
          <ul className="space-y-4 text-sm leading-7 text-slate-400 light:text-slate-600">
            {project.technicalDecisions.map((item) => (
              <li key={item} className="border-l border-slate-800 light:border-slate-300 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
            Build Highlights
          </h2>
          <ul className="space-y-4 text-sm leading-7 text-slate-400 light:text-slate-600">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="border-l border-slate-800 light:border-slate-300 pl-4">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
            Outcomes
          </h2>
          <ul className="space-y-4 text-sm leading-7 text-slate-400 light:text-slate-600">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="border-l border-slate-800 light:border-slate-300 pl-4">
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
            Challenges
          </h2>
          <ul className="space-y-4 text-sm leading-7 text-slate-400 light:text-slate-600">
            {project.challenges.map((challenge) => (
              <li key={challenge} className="border-l border-slate-800 light:border-slate-300 pl-4">
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 border-b border-slate-800 light:border-slate-300 pb-4 text-sm font-mono uppercase tracking-widest text-teal-300 light:text-teal-700">
            What I Learned
          </h2>
          <ul className="space-y-4 text-sm leading-7 text-slate-400 light:text-slate-600">
            {project.learnings.map((learning) => (
              <li key={learning} className="border-l border-slate-800 light:border-slate-300 pl-4">
                {learning}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-teal-400 light:bg-teal-700 px-5 py-3 text-sm font-semibold text-slate-950 light:text-white transition-all duration-300 hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-500/20"
          >
            View GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-600 light:border-slate-300 px-5 py-3 text-sm font-semibold text-white light:text-slate-900 transition-all duration-300 hover:border-amber-200/70"
          >
            Live Demo
          </a>
        )}
      </div>
    </main>
  );
}
