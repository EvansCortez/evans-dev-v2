import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Evans Cortez | ML Engineer & Full-Stack Developer",
    template: "%s | Evans Cortez",
  },
  description:
    "Portfolio of Evans Cortez, a computer science student building machine learning systems, AI agents, and full-stack applications.",
  metadataBase: new URL("https://evanscortez.dev"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Evans Cortez",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "AI Security",
    "Prompt Injection",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Evans Cortez", url: "https://evanscortez.dev" }],
  openGraph: {
    title: "Evans Cortez | ML Engineer & Full-Stack Developer",
    description:
      "Machine learning, AI agent, and full-stack portfolio of Evans Cortez.",
    type: "website",
    url: "https://evanscortez.dev",
    siteName: "Evans Cortez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evans Cortez | ML Engineer & Full-Stack Developer",
    description:
      "Machine learning, AI agent, and full-stack portfolio of Evans Cortez.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-slate-950/50 px-6 py-5 backdrop-blur-md sm:px-10">
          <div className="text-xl font-bold tracking-tighter">
            EVANS<span className="text-blue-500">.CORTEZ</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-400 sm:gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/#research" className="hover:text-white transition-colors">Research</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
            <a href="/Evans-Cortez-Resume.pdf" className="border border-slate-700 px-4 py-2 rounded-md hover:border-blue-500 hover:text-white transition-colors">
              Resume
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* The Page Content */}
        <StructuredData />
        {children}
        <BackToTop />

        {/* Simple Footer */}
        <footer className="py-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          © 2026 Evans Cortez | Built with Next.js & React
        </footer>
      </body>
    </html>
  );
}
