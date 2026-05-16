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
    <div className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <Link href={`/projects/${slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            <span className="absolute inset-0 rounded-xl" aria-hidden="true" />
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </Link>
        </div>
        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          →
        </span>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-slate-400">{description}</p>

      {metrics && metrics.length > 0 && (
        <div className="mb-6 grid grid-cols-2 gap-3 py-3 border-y border-slate-800">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg font-bold text-blue-400">{metric.value}</div>
              <div className="text-xs text-slate-500">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-[10px] font-mono text-blue-400 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {(github || demo) && (
        <div className="flex gap-2 pt-4 border-t border-slate-800">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex-1 text-xs font-mono text-blue-400 hover:text-blue-300 py-2 px-3 bg-blue-500/5 border border-blue-500/20 rounded hover:border-blue-500/50 transition-all duration-300 text-center"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex-1 text-xs font-mono text-blue-400 hover:text-blue-300 py-2 px-3 bg-blue-500/5 border border-blue-500/20 rounded hover:border-blue-500/50 transition-all duration-300 text-center"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
