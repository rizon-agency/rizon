import type { ReactNode } from "react";

// The small blue pill label used above section headings across the site.
export const Eyebrow = ({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "primary";
  className?: string;
}) => {
  const isPrimary = variant === "primary";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium ${
        isPrimary
          ? "bg-primary-foreground/15 text-primary-foreground"
          : "bg-primary/10 text-primary"
      } ${className}`}
    >
      <span
        className={`size-1.5 rounded-full ${
          isPrimary ? "bg-primary-foreground" : "bg-primary"
        }`}
        aria-hidden
      />
      {children}
    </span>
  );
};
