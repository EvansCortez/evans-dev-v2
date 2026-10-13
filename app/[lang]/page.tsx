import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioHome from "@/components/PortfolioHome";
import { getPortfolioData } from "@/data/getPortfolioData";
import { isLocale, defaultLocale, hreflangAlternates } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang) || lang === defaultLocale) return {};
  const { profile } = getPortfolioData(lang);
  return {
    title: profile.role,
    description: profile.summary,
    alternates: {
      canonical: `/${lang}`,
      languages: hreflangAlternates("/"),
    },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === defaultLocale) notFound();
  return <PortfolioHome locale={lang} />;
}
