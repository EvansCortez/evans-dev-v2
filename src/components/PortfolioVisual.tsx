const nodes = [
  { label: "AI", className: "left-[10%] top-[18%] border-teal-300/40 text-teal-100" },
  { label: "SQL", className: "right-[12%] top-[22%] border-amber-200/40 text-amber-100" },
  { label: "NLP", className: "left-[18%] bottom-[18%] border-fuchsia-300/35 text-fuchsia-100" },
  { label: "UX", className: "right-[16%] bottom-[16%] border-sky-300/35 text-sky-100" },
];

export default function PortfolioVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-slate-800 bg-slate-950/70 p-6 shadow-2xl shadow-black/25">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.22),transparent_32%),radial-gradient(circle_at_70%_65%,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="absolute inset-10 rounded-full border border-slate-700/70" />
      <div className="absolute inset-20 rounded-full border border-dashed border-slate-700/70" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-300/30 bg-slate-900/90 shadow-[0_0_80px_rgba(45,212,191,0.22)]" />
      <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300/90 shadow-[0_0_36px_rgba(45,212,191,0.48)]" />
      <div className="absolute left-1/2 top-1/2 h-px w-[76%] -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-200/60 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[76%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-amber-100/50 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
        {["agent", "model", "product"].map((item) => (
          <div key={item} className="h-1.5 rounded-full bg-slate-700">
            <div className="h-full rounded-full bg-teal-300" style={{ width: item === "agent" ? "82%" : item === "model" ? "68%" : "74%" }} />
          </div>
        ))}
      </div>
      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute rounded-full border bg-slate-950/80 px-4 py-2 text-xs font-mono uppercase tracking-widest backdrop-blur ${node.className}`}
        >
          {node.label}
        </div>
      ))}
      <div className="relative z-10">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
          Portfolio System
        </p>
        <p className="mt-3 max-w-[15rem] text-sm leading-6 text-slate-300">
          AI research, production-minded engineering, and useful interfaces orbiting one portfolio.
        </p>
      </div>
    </div>
  );
}
