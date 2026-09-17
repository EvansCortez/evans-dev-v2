"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 700);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full border border-teal-400/40 bg-slate-950/90 light:bg-white/82 px-4 py-3 text-sm font-bold text-teal-200 light:text-teal-700 shadow-lg shadow-teal-500/15 backdrop-blur transition-all duration-300 hover:border-teal-300 hover:text-white ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}
