type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  actions,
}: PageIntroProps) {
  return (
    <section className="mb-16 grid gap-8 border-b border-slate-800 light:border-slate-300 pb-12 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
      <div>
        <p className="mb-5 text-sm font-mono uppercase tracking-widest text-amber-200 light:text-amber-800">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white light:text-slate-900 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 light:text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
      {actions && <div className="flex flex-wrap gap-3 lg:justify-end">{actions}</div>}
    </section>
  );
}
