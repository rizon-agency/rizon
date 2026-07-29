import type en from "../messages/en.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: "en" | "fr" | "es" | "de";
    Messages: typeof en;
  }
}

declare global {
  interface Window {
    // Umami tracker global, present once the tracker script loads.
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

export {};
