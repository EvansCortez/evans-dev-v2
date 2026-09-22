import type { Metadata } from "next";
import AmbientBackdrop from "@/components/AmbientBackdrop";
import { hreflangAlternates } from "@/i18n/config";
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
        <AmbientBackdrop />
        {children}
      </body>
    </html>
  );
}
