import { Diamond } from "lucide-react";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  description?: string;
  className?: string;
  variant?: "default" | "primary";
};

export const SectionHeader = ({
  label,
  title,
  description,
  className = "",
  variant = "default",
}: SectionHeaderProps) => {
  const isPrimary = variant === "primary";

  return (
    <div className={className}>
      <span className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${isPrimary ? "text-primary-foreground/70" : "text-primary"}`}>
        <Diamond size={12} strokeWidth={2.5} aria-hidden className={isPrimary ? "fill-primary-foreground/70" : "fill-primary"} />
        {label}
      </span>
      <h2 className="mt-5 text-4xl font-semibold tracking-tight leading-[1.05] text-balance md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-xl text-base leading-relaxed text-pretty md:text-lg ${isPrimary ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};
