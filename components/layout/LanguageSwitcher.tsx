// components/layout/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/routing";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/cn";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSwitcherProps {
  className?: string;
}

// Map locales to ISO 3166-1 alpha-2 country codes for the SVG pipeline
const countryCodes: Record<Locale, string> = {
  en: "us",
  fr: "fr",
  de: "de",
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (locale: Locale) => {
    router.replace(pathname, { locale });
    setIsOpen(false);
  };

  // Ultra-reliable CDN for high-quality SVG country flags
  const getFlagUrl = (locale: Locale) => 
    `https://flagcdn.com/${countryCodes[locale]}.svg`;

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex h-10 items-center gap-2 rounded-xl px-3 text-sm font-semibold tracking-wide transition-all duration-300",
          "border border-gray-200/40 bg-white/50 text-foreground",
          "hover:bg-gray-50 hover:text-primary dark:border-gray-800/40 dark:bg-gray-950/50 dark:hover:bg-gray-900",
          "focus:outline-none focus:ring-2 focus:ring-primary/40 active:scale-95"
        )}
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <Globe className={cn("h-4 w-4 text-muted-foreground transition-transform duration-300", isOpen && "rotate-12")} />
        
        {/* Render Flag as a real cross-platform layout Image */}
        <div className="flex h-4 w-5 shrink-0 overflow-hidden rounded-sm shadow-sm border border-gray-200/20">
          <img
            src={getFlagUrl(currentLocale)}
            alt={`${currentLocale} flag`}
            className="h-full w-full object-cover"
          />
        </div>

        <span className="hidden md:inline text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {currentLocale}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute right-0 top-full z-50 mt-2 min-w-[180px] overflow-hidden rounded-xl p-1.5",
              "border border-gray-200/60 bg-white/90 shadow-xl backdrop-blur-xl",
              "dark:border-gray-800/60 dark:bg-gray-950/95"
            )}
          >
            {locales.map((locale) => {
              const isSelected = locale === currentLocale;
              return (
                <button
                  key={locale}
                  onClick={() => switchLocale(locale)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    isSelected
                      ? "bg-primary text-white shadow-md shadow-primary/10 dark:bg-white dark:text-primary"
                      : "text-gray-700 hover:bg-gray-100/80 dark:text-gray-300 dark:hover:bg-gray-900/80"
                  )}
                >
                  <div className="flex h-4 w-5 shrink-0 overflow-hidden rounded-sm shadow-sm border border-white/20">
                    <img
                      src={getFlagUrl(locale)}
                      alt={`${localeNames[locale]} flag`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <span className="tracking-wide">{localeNames[locale]}</span>
                  {isSelected && (
                    <Check className="ml-auto h-4 w-4 stroke-[3]" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}