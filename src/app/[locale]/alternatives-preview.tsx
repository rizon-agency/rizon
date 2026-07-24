import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { alternatives } from "@/lib/alternatives";
import { SectionHeader } from "@/components/section-header";
import { l } from "@/lib/l10n";
import type { Locale } from "@/i18n/routing";

export const AlternativesPreview = async () => {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("alternativesPreview");
  const featured = alternatives.slice(0, 3);
  return (
    <section className="container mt-32 md:mt-40">
      <SectionHeader
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {featured.map((alternative) => (
          <article
            key={alternative.slug}
            className="surface surface-hover flex flex-col p-7 md:p-8"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {alternative.category}
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              {alternative.competitor} alternative
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {l(alternative.heroSub, locale)}
            </p>
            <Link
              href={`/alternatives/${alternative.slug}`}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              {t("readComparison")}{" "}
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </article>
        ))}
      </div>
      <Link
        href="/lms-alternatives"
        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        {t("browseAll")}{" "}
        <ArrowRight
          size={15}
          className="transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </Link>
    </section>
  );
};
