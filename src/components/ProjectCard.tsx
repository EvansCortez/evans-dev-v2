"use client";

import Link from "next/link";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({
  slug,
  title,
  description,
  tags,
  metrics,
  github,
  demo,
}: Pick<Project, "slug" | "title" | "description" | "tags" | "metrics" | "github" | "demo">) {
  return (
    <div className="group relative rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 p-6 transition-all duration-300 hover:border-teal-400/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-teal-500/10">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <Link href={`/projects/${slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            <span className="absolute inset-0 rounded-lg" aria-hidden="true" />
            <h3 className="text-xl font-bold tracking-tight text-white light:text-slate-900 transition-colors group-hover:text-teal-200">
              {title}
            </h3>
          </Link>
        </div>
        <span className="text-teal-300 light:text-teal-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          →
        </span>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-slate-400 light:text-slate-600">{description}</p>

      {metrics && metrics.length > 0 && (
        <div className="mb-6 grid grid-cols-2 gap-3 border-y border-slate-800 light:border-slate-300 py-3">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg font-bold text-teal-300 light:text-teal-700">{metric.value}</div>
              <div className="text-xs text-slate-500 light:text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-teal-400/20 bg-teal-400/10 light:bg-teal-100/70 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-teal-200 light:text-teal-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {(github || demo) && (
        <div className="flex gap-2 border-t border-slate-800 light:border-slate-300 pt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex-1 rounded border border-teal-400/20 bg-teal-400/5 light:bg-teal-100/70 px-3 py-2 text-center text-xs font-mono text-teal-200 light:text-teal-700 transition-all duration-300 hover:border-teal-400/50 hover:text-teal-100"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex-1 rounded border border-amber-300/20 bg-amber-300/5 light:bg-amber-100/70 px-3 py-2 text-center text-xs font-mono text-amber-100 light:text-amber-800 transition-all duration-300 hover:border-amber-300/50 hover:text-white"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
