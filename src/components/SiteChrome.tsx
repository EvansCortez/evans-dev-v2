import BackToTop from "@/components/BackToTop";
import SiteNav from "@/components/SiteNav";
import StructuredData from "@/components/StructuredData";
import { getDictionary, format } from "@/i18n/getDictionary";
import { getPortfolioData } from "@/data/getPortfolioData";
import type { Locale } from "@/i18n/config";

export default function SiteChrome({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dictionary = getDictionary(locale);
  const { profile } = getPortfolioData(locale);
  const year = new Date().getFullYear().toString();

  return (
    <>
      <SiteNav locale={locale} dictionary={dictionary} />
      <StructuredData jobTitle={profile.role} />
      {children}
      <BackToTop label={dictionary.backToTop} />
      <footer className="py-10 border-t border-slate-800 text-center text-slate-500 text-sm">
        {format(dictionary.footer, { year })}
      </footer>
    </>
  );
}
