"use client";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextTopLoader
        color="#003de5"
        height={2}
        showSpinner={false}
        shadow={false}
      />
      {children}
    </ThemeProvider>
  );
}
