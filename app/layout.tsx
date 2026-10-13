import type { Metadata } from "next";
import { hreflangAlternates } from "@/i18n/config";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Evans Cortez | AI & Software Development",
    template: "%s | Evans Cortez",
  },
  description:
    "Portfolio of Evans Cortez, a computer science student building machine learning systems, AI agents, and full-stack applications.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: hreflangAlternates("/"),
  },
  keywords: [
    "Evans Cortez",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "AI Security",
    "Prompt Injection",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Evans Cortez", url: siteUrl }],
  openGraph: {
    title: "Evans Cortez | AI & Software Development",
    description:
      "Machine learning, AI agent, and full-stack portfolio of Evans Cortez.",
    type: "website",
    url: siteUrl,
    siteName: "Evans Cortez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evans Cortez | AI & Software Development",
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
        {children}
      </body>
    </html>
  );
}
