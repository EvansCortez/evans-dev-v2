"use client";

import type { Dictionary } from "@/i18n/getDictionary";

const categoryKeyByLabel: Record<string, keyof Dictionary["techCategories"]> = {
  Languages: "languages",
  "ML & Data Science": "mlAndData",
  "Web & Backend": "webAndBackend",
  Databases: "databases",
  "Tools & Platforms": "tools",
};

export default function TechStackVisualizer({
  technologies,
  categoryLabels,
}: {
  technologies: { name: string; category: string }[];
  categoryLabels?: Dictionary["techCategories"];
}) {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category}>
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 light:text-slate-600 mb-3">
            {categoryLabels?.[categoryKeyByLabel[category]] ?? category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies
              .filter((t) => t.category === category)
              .map((tech) => (
                <div
                  key={tech.name}
                  className="cursor-default rounded-md border border-teal-400/25 bg-teal-400/10 light:bg-teal-100/70 px-3 py-1.5 text-xs font-medium text-teal-100 light:text-teal-700 transition-all duration-300 hover:border-amber-200/50 hover:text-amber-100 hover:shadow-lg hover:shadow-teal-500/10"
                >
                  {tech.name}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
