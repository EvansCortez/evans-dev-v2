import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionary";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { pt } from "./dictionaries/pt";
import { ko } from "./dictionaries/ko";
import { ja } from "./dictionaries/ja";
import { it } from "./dictionaries/it";
import { yue } from "./dictionaries/yue";
import { zhHans } from "./dictionaries/zh-Hans";
import { zhHant } from "./dictionaries/zh-Hant";

const dictionaries: Record<Locale, Dictionary> = {
  en,
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

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
export { format } from "./dictionary";
