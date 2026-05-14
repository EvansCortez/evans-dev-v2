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
      className="p-4 border border-zinc-800 rounded-lg text-xs text-zinc-400 hover:border-blue-500 hover:bg-blue-500/5 transition-all cursor-pointer group"
    >
      <div className="font-medium text-zinc-300 group-hover:text-blue-400 transition-colors">
        {title}
      </div>
      {showDate && <div className="text-zinc-500 text-[10px] mt-2">{date}</div>}
    </div>
  );
}
