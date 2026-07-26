import { routing, type Locale } from "./routing";

const BASE = "https://rizon.agency";

export const localizedUrl = (path: string, locale: string) =>
  `${BASE}${locale === routing.defaultLocale ? "" : `/${locale}`}${path}`;

export const languagesFor = (
  path: string,
  locales: readonly string[] = routing.locales,
) => ({
  ...Object.fromEntries(locales.map((l) => [l, localizedUrl(path, l)])),
  "x-default": localizedUrl(path, routing.defaultLocale),
});

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
  de: "de_DE",
};
