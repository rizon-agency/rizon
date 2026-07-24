"use client";

import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const LOCALE_LABEL: Record<(typeof routing.locales)[number], string> = {
  en: "EN",
  fr: "FR",
  es: "ES",
  de: "DE",
};

export const LocaleSwitcher = ({
  className,
  overHero = false,
}: {
  className?: string;
  overHero?: boolean;
}) => {
  const locale = useLocale() as (typeof routing.locales)[number];
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label="Select language"
        className={cn(
          "inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2",
          overHero
            ? "border-white/40 text-white/85 hover:text-white focus-visible:ring-white/50"
            : "border-border text-foreground/70 hover:text-foreground focus-visible:ring-ring/50",
          className,
        )}
      >
        {LOCALE_LABEL[locale]}
        <ChevronDown size={12} strokeWidth={2} aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-32 min-w-0"
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(l) =>
            router.replace(pathname, {
              locale: l as (typeof routing.locales)[number],
            })
          }
        >
          {routing.locales.map((l) => (
            <DropdownMenuRadioItem
              key={l}
              value={l}
              className="text-xs font-medium tracking-tight"
            >
              {LOCALE_LABEL[l]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
