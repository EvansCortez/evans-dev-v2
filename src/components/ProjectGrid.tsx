"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/portfolio";

export default function ProjectGrid({
  projects,
  filterAllLabel = "All",
}: {
  projects: Project[];
  filterAllLabel?: string;
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const values = new Set<string>();
    projects.forEach((project) => {
      values.add(project.category);
      project.tags.forEach((tag) => values.add(tag));
    });
    return ["All", ...Array.from(values).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeFilter || project.tags.includes(activeFilter)
    );
  }, [activeFilter, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2" aria-label="Filter projects">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md border px-3 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "border-teal-300 bg-teal-400 light:bg-teal-700 text-slate-950 light:text-white shadow-lg shadow-teal-500/20"
                  : "border-slate-700 light:border-slate-300 bg-slate-950/45 light:bg-white/82 text-slate-400 light:text-slate-600 hover:border-teal-400/60 hover:text-teal-100"
              }`}
            >
              {filter === "All" ? filterAllLabel : filter}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
