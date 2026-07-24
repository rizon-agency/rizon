import type { Locale } from "@/i18n/routing";

export type Localized<T> = { en: T } & Partial<Record<Exclude<Locale, "en">, T>>;

export const l = <T>(field: Localized<T>, locale: Locale): T =>
  field[locale] ?? field.en;
