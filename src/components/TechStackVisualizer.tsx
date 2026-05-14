"use client";

export default function TechStackVisualizer({
  technologies,
}: {
  technologies: { name: string; category: string }[];
}) {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category}>
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
            {category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies
              .filter((t) => t.category === category)
              .map((tech) => (
                <div
                  key={tech.name}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-md text-xs text-blue-300 font-medium hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default"
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
