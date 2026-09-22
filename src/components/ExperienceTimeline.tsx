import type { experience as defaultExperience } from "@/data/portfolio";

type ExperienceItem = (typeof defaultExperience)[number];

export default function ExperienceTimeline({ experience }: { experience: ExperienceItem[] }) {
  return (
    <div className="space-y-6">
      {experience.map((item) => (
        <article
          key={item.id}
          className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-6 transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(45,212,191,0.35)] light:hover:shadow-[0_0_40px_-14px_rgba(15,118,110,0.25)]"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h2 className="text-2xl font-bold text-white light:text-slate-900">{item.role}</h2>
              <p className="mt-2 font-medium text-teal-300 light:text-teal-700">
                {item.company} · {item.location}
              </p>
            </div>
            <p className="text-sm font-mono text-slate-500 light:text-slate-600">{item.dates}</p>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 light:text-slate-600">
            {item.summary}
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="border-l border-slate-800 light:border-slate-300 pl-4 text-sm leading-6 text-slate-400 light:text-slate-600"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
