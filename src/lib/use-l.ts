"use client";

import { useLocale } from "next-intl";
import { l, type MaybeLocalized } from "./l10n";
import type { Locale } from "@/i18n/routing";

// Client hook: returns a function that unwraps a MaybeLocalized field for
// the active locale. Use in Client Components.
export const useL = () => {
  const locale = useLocale() as Locale;
  return <T,>(field: MaybeLocalized<T>) => l(field, locale);
};
