import { defaultLocale, type Locale } from "@/i18n/config";
import {
  profile,
  impactMetrics,
  focusAreas,
  experience,
  coursework,
  projects,
  certifications,
  technologies,
  researchFocus,
} from "./portfolio";
import type { PortfolioTranslation } from "./translationTypes";
import { es } from "./translations/es";
import { fr } from "./translations/fr";
import { pt } from "./translations/pt";
import { ko } from "./translations/ko";
import { ja } from "./translations/ja";
import { it } from "./translations/it";
import { yue } from "./translations/yue";
import { zhHans } from "./translations/zh-Hans";
import { zhHant } from "./translations/zh-Hant";

const translations: Partial<Record<Locale, PortfolioTranslation>> = {
  es,
  fr,
  pt,
  ko,
  ja,
  it,
  yue,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
};

export function getPortfolioData(locale: Locale) {
  if (locale === defaultLocale) {
    return {
      profile,
      impactMetrics,
      focusAreas,
      experience,
      coursework,
      projects,
      certifications,
      technologies,
      researchFocus,
    };
  }

  const t = translations[locale] ?? {};

  return {
    profile: { ...profile, ...t.profile, role: profile.role, summary: profile.summary, graduation: profile.graduation },
    impactMetrics,
    focusAreas: focusAreas.map((area) => ({
      ...area,
      ...t.focusAreas?.[area.label],
    })),
    experience,
    coursework,
    projects: projects.map((project) => ({
      ...project,
      ...t.projects?.[project.slug],
    })),
    certifications,
    technologies,
    researchFocus,
  };
}
