"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/portfolio";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
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
                  ? "border-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "border-slate-700 bg-slate-900/40 text-slate-400 hover:border-blue-500/60 hover:text-blue-300"
              }`}
            >
              {filter}
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
