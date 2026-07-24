import type { Locale } from "@/i18n/routing";

// Strict localized value — every field must at minimum have an English value.
export type Localized<T> = { en: T } & Partial<Record<Exclude<Locale, "en">, T>>;

// Content that may be a plain T or a Localized<T> wrapper. Use this in content
// types so translations can be added per-field without wrapping every entry.
export type MaybeLocalized<T> = T | Localized<T>;

const isLocalized = <T,>(v: MaybeLocalized<T>): v is Localized<T> =>
  typeof v === "object" && v !== null && !Array.isArray(v) && "en" in v;

export const l = <T,>(field: MaybeLocalized<T>, locale: Locale): T =>
  isLocalized(field) ? (field[locale] ?? field.en) : field;
