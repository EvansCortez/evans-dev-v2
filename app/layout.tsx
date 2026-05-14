import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evans Cortez | ML Engineer & Developer",
  description: "Portfolio of Evans Cortez, CS Student and Machine Learning enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
          <div className="text-xl font-bold tracking-tighter">
            EVANS<span className="text-blue-500">.CORTEZ</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#about" className="hover:text-white transition-colors">Research</Link>
            <a href="mailto:evans.cortez23@stjohns.edu" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">
              Contact
            </a>
          </div>
        </nav>

        {/* The Page Content */}
        {children}

        {/* Simple Footer */}
        <footer className="py-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          © 2026 Evans Cortez | Built with Next.js & React
        </footer>
      </body>
    </html>
  );
}