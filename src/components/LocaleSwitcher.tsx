"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales, localeLabels, localizedPath, type Locale } from "@/i18n/config";

function stripLocalePrefix(pathname: string, locale: Locale): string {
  if (locale === "en") return pathname;
  const prefix = `/${locale}`;
  if (pathname === prefix) return "/";
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}

export default function LocaleSwitcher({
  locale,
  label,
  onNavigate,
}: {
  locale: Locale;
  label: string;
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    const basePath = stripLocalePrefix(pathname, locale);
    router.push(localizedPath(nextLocale, basePath));
    onNavigate?.();
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      aria-label={label}
      className="rounded-md border border-slate-700 light:border-slate-300 bg-slate-950/55 light:bg-white/82 px-3 py-2 text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-900 outline-none transition-colors hover:border-teal-400/70 focus:border-teal-300"
    >
      {locales.map((code) => (
        <option key={code} value={code} className="bg-slate-950 text-white">
          {localeLabels[code]}
        </option>
      ))}
    </select>
  );
}
