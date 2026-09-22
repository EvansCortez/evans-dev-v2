"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

export default function SiteNav({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: localizedPath(locale, "/"), label: dictionary.nav.home },
    { href: localizedPath(locale, "/projects"), label: dictionary.nav.projects },
    { href: localizedPath(locale, "/experience"), label: dictionary.nav.experience },
    { href: localizedPath(locale, "/research"), label: dictionary.nav.research },
    { href: localizedPath(locale, "/credentials"), label: dictionary.nav.credentials },
    { href: localizedPath(locale, "/contact"), label: dictionary.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Link href={localizedPath(locale, "/")} className="text-xl font-bold tracking-tighter" onClick={() => setIsOpen(false)}>
          EVANS<span className="text-teal-300 light:text-teal-700">.CORTEZ</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-400 light:text-slate-600 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
          <a
            href="/Evans-Cortez-Resume.pdf"
            className="rounded-md border border-slate-700 light:border-slate-300 px-4 py-2 transition-colors hover:border-amber-200/70 hover:text-white"
          >
            {dictionary.nav.resume}
          </a>
          <LocaleSwitcher locale={locale} label={dictionary.nav.languagePicker} />
          <ThemeToggle labelToLight={dictionary.nav.themeToLight} labelToDark={dictionary.nav.themeToDark} />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-md border border-slate-700 light:border-slate-300 px-3 py-2 text-sm font-medium text-slate-300 light:text-slate-900 transition-colors hover:border-teal-400/70 hover:text-white lg:hidden"
          aria-label={isOpen ? dictionary.nav.menuClose : dictionary.nav.menuOpen}
          aria-expanded={isOpen}
        >
          {isOpen ? dictionary.nav.menuClose : dictionary.nav.menuOpen}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-1 border-t border-slate-800 light:border-slate-300 px-6 py-4 text-sm font-medium text-slate-400 light:text-slate-600 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-2 hover:bg-slate-900/60 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Evans-Cortez-Resume.pdf"
            className="rounded-md px-2 py-2 hover:bg-slate-900/60 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {dictionary.nav.resume}
          </a>
          <div className="mt-2 flex flex-wrap items-center gap-2 px-2">
            <LocaleSwitcher locale={locale} label={dictionary.nav.languagePicker} onNavigate={() => setIsOpen(false)} />
            <ThemeToggle labelToLight={dictionary.nav.themeToLight} labelToDark={dictionary.nav.themeToDark} />
          </div>
        </div>
      )}
    </nav>
  );
}
