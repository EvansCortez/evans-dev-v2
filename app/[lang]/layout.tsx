import SiteChrome from "@/components/SiteChrome";
import { nonDefaultLocales, isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return nonDefaultLocales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <SiteChrome locale={lang as Locale}>{children}</SiteChrome>;
}
