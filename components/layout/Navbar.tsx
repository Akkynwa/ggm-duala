// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "@/lib/i18n/routing";
import { navItems, siteConfig } from "@/lib/utils/constants";
import { cn } from "@/lib/utils/cn";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { Menu, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-shadow duration-300 bg-white dark:bg-gray-950",
          isScrolled
            ? "shadow-md border-gray-200 dark:border-gray-800"
            : "border-gray-100 dark:border-gray-900"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-[72px]">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-2.5 shrink-0"
          >
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              {!logoError ? (
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain"
                  onError={() => setLogoError(true)}
                  priority
                />
              ) : (
                <span className="font-display text-sm font-black text-primary dark:text-accent">
                  G
                </span>
              )}
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="font-display text-sm font-bold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav — plain text with vertical borders */}
          <div className="hidden h-full lg:flex lg:items-center">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative flex h-full items-center px-5 text-sm font-medium transition-colors duration-200",
                    index > 0 && "border-l border-gray-200 dark:border-gray-800",
                    active
                      ? "text-primary dark:text-white"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  )}
                >
                  {t(item.label)}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 border border-gray-200 dark:border-gray-800 p-1">
              <ThemeToggle />
              <div className="h-5 w-px bg-gray-200 dark:bg-gray-800" />
              <LanguageSwitcher />
            </div>

            <Link
              href="/giving"
              className="hidden sm:inline-flex items-center gap-1.5 bg-primary px-5 h-10 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-light dark:bg-white dark:text-primary dark:hover:bg-gray-100"
            >
              {t("nav.give")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-white text-foreground hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}