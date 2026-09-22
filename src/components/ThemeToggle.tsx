"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const THEME_EVENT = "portfolio-theme-change";

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  return savedTheme === "light" || (!savedTheme && prefersLight) ? "light" : "dark";
}

function subscribeToThemeChanges(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

export default function ThemeToggle({
  labelToLight,
  labelToDark,
}: {
  labelToLight: string;
  labelToDark: string;
}) {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getThemeSnapshot,
    () => "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    window.localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border border-slate-700 light:border-slate-300 bg-slate-950/55 light:bg-white/82 px-3 py-2 text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-900 transition-all duration-300 hover:border-teal-400/70 hover:text-teal-100"
      aria-label={theme === "dark" ? labelToLight : labelToDark}
      title={theme === "dark" ? labelToLight : labelToDark}
    >
      {theme === "dark" ? labelToLight : labelToDark}
    </button>
  );
}
