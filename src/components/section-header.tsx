import { Diamond } from "lucide-react";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export const SectionHeader = ({
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={className}>
      <span className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <Diamond size={12} strokeWidth={2.5} aria-hidden className="fill-primary" />
        {label}
      </span>
      <h2 className="mt-5 text-4xl font-semibold tracking-tight leading-[1.05] text-balance md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};
