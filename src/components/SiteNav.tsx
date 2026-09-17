"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Link href="/" className="text-xl font-bold tracking-tighter" onClick={() => setIsOpen(false)}>
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
            Resume
          </a>
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-md border border-slate-700 light:border-slate-300 px-3 py-2 text-sm font-medium text-slate-300 light:text-slate-900 transition-colors hover:border-teal-400/70 hover:text-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "Close" : "Menu"}
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
            Resume
          </a>
          <div className="mt-2 px-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
