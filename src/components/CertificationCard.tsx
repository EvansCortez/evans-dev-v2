"use client";

import { useState } from "react";

interface CertificationCardProps {
  title: string;
  date: string;
}

export default function CertificationCard({ title, date }: CertificationCardProps) {
  const [showDate, setShowDate] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDate(true)}
      onMouseLeave={() => setShowDate(false)}
      className="group cursor-pointer rounded-lg border border-zinc-800 light:border-slate-300 backdrop-blur-xl ring-1 ring-white/5 light:ring-black/5 p-4 text-xs text-zinc-400 light:text-slate-600 transition-all hover:border-teal-400/60 hover:bg-teal-400/5 hover:shadow-[0_0_30px_-14px_rgba(45,212,191,0.35)]"
    >
      <div className="font-medium text-zinc-300 light:text-slate-800 transition-colors group-hover:text-teal-200">
        {title}
      </div>
      {showDate && <div className="text-zinc-500 light:text-slate-600 text-[10px] mt-2">{date}</div>}
    </div>
  );
}
