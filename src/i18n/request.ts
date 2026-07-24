import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Messages = Record<string, unknown>;

const isObject = (v: unknown): v is Messages =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const deepMerge = (base: Messages, overlay: Messages): Messages => {
  const out: Messages = { ...base };
  for (const key of Object.keys(overlay)) {
    const b = out[key];
    const o = overlay[key];
    out[key] = isObject(b) && isObject(o) ? deepMerge(b, o) : o;
  }
  return out;
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const en = (await import(`../../messages/en.json`)).default as Messages;
  const messages =
    locale === "en"
      ? en
      : deepMerge(en, (await import(`../../messages/${locale}.json`)).default);

  return { locale, messages };
});
