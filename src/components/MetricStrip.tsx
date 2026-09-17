export type MetricItem = {
  label: string;
  value: string;
  detail?: string;
};

export default function MetricStrip({ metrics }: { metrics: MetricItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-lg border border-slate-800 light:border-slate-300 bg-slate-950/55 light:bg-white/82 p-5"
        >
          <p className="text-3xl font-black text-teal-300 light:text-teal-700">{metric.value}</p>
          <p className="mt-3 text-xs font-mono uppercase tracking-widest text-slate-500 light:text-slate-600">
            {metric.label}
          </p>
          {metric.detail && (
            <p className="mt-3 text-sm leading-6 text-slate-400 light:text-slate-600">{metric.detail}</p>
          )}
        </div>
      ))}
    </div>
  );
}
