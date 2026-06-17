// lib/i18n/config.ts
export const locales = ["en", "fr", "de"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
};