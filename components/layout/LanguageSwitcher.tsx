// components/layout/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/routing";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/cn";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface LanguageSwitcherProps {
  className?: string;
}

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

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium",
          "text-gray-700 hover:bg-gray-100",
          "dark:text-gray-300 dark:hover:bg-gray-800",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary/50"
        )}
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-[10px] font-bold text-primary dark:bg-primary/20 dark:text-accent">
          {localeFlags[currentLocale]}
        </span>
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute right-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-lg",
            "bg-white shadow-lg ring-1 ring-black/5",
            "dark:bg-gray-800 dark:ring-white/10"
          )}
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={cn(
                "flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                locale === currentLocale
                  ? "bg-primary/10 text-primary font-semibold dark:bg-primary/20 dark:text-accent"
                  : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              )}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs font-bold text-primary dark:bg-primary/20 dark:text-accent">
                {localeFlags[locale]}
              </span>
              <span>{localeNames[locale]}</span>
              {locale === currentLocale && (
                <span className="ml-auto text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}