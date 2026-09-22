export const locales = [
  "en",
  "es",
  "fr",
  "pt",
  "ko",
  "ja",
  "it",
  "yue",
  "zh-Hans",
  "zh-Hant",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const nonDefaultLocales = locales.filter(
  (locale) => locale !== defaultLocale
) as Exclude<Locale, "en">[];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  pt: "Português",
  ko: "한국어",
  ja: "日本語",
  it: "Italiano",
  yue: "廣東話",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === "/" ? "" : path;
  return locale === defaultLocale ? path : `/${locale}${normalized || ""}`;
}

export function hreflangAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = localizedPath(locale, path);
  }
  alternates["x-default"] = localizedPath(defaultLocale, path);
  return alternates;
}
