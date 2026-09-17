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
      className="group cursor-pointer rounded-lg border border-zinc-800 light:border-slate-300 p-4 text-xs text-zinc-400 light:text-slate-600 transition-all hover:border-teal-400/60 hover:bg-teal-400/5"
    >
      <div className="font-medium text-zinc-300 light:text-slate-800 transition-colors group-hover:text-teal-200">
        {title}
      </div>
      {showDate && <div className="text-zinc-500 light:text-slate-600 text-[10px] mt-2">{date}</div>}
    </div>
  );
}
