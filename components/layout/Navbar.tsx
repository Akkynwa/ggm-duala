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
import { ExternalLink, Menu} from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 shadow-xl shadow-black/[0.03] backdrop-blur-md dark:bg-gray-950/90 border-b border-gray-200/20 dark:border-gray-800/20"
            : "bg-transparent"
        )}
      >
        {/* Decorative dynamic top accent wire */}
        <div className="h-[3px] bg-gradient-to-r from-accent via-purple-500 to-accent" />

        <nav className="container-custom px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between lg:h-[72px]">
            
            {/* BRAND LOGO DOCK */}
            <Link href="/" className="group flex items-center gap-2.5 shrink-0">
              <div className="relative">
                {!logoError ? (
                  <Image
                    src={siteConfig.logo}
                    alt={siteConfig.name}
                    width={44}
                    height={44}
                    className="h-9 w-auto xs:h-10 lg:h-11"
                    onError={() => setLogoError(true)}
                    priority
                  />
                ) : (
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-yellow-400 font-display text-base font-black text-primary xs:h-10 xs:w-10 lg:h-11 lg:w-11"
                  >
                    G
                  </motion.div>
                )}
                <div className="absolute -inset-2 rounded-full bg-accent/10 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
              </div>
              
              <div className="flex flex-col text-left">
                <span className="hidden xs:block font-display text-sm font-bold tracking-tight text-primary dark:text-white sm:text-base lg:text-lg leading-tight">
                  {siteConfig.name}
                </span>
                <span className="hidden sm:block text-[9px] font-medium uppercase tracking-[0.18em] text-accent mt-0.5 leading-none">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            {/* DESKTOP FLUID NAVIGATION PILLS */}
            <div className="hidden lg:block">
              <div className="relative flex items-center gap-0.5 rounded-full border border-gray-200/40 bg-gray-100/40 p-1 backdrop-blur-sm dark:border-gray-700/40 dark:bg-gray-800/40">
                {navItems.map((item) => {
                  const itemActive = isActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                        itemActive
                          ? "text-white dark:text-primary"
                          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      )}
                    >
                      {itemActive && (
                        <motion.div
                          layoutId="activeNavPill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-light dark:from-accent dark:to-yellow-400 shadow-md shadow-primary/15"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {t(item.label)}
                        {item.external && <ExternalLink className="h-3 w-3 opacity-60" />}
                      </span>

                      {!itemActive && hoveredItem === item.label && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -right-0.5 -top-0.5"
                        >
                        </motion.span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* QUICK ACTIONS & MENUS CONTAINER */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="flex items-center gap-1 rounded-full border border-gray-200/40 bg-gray-100/40 p-0.5 backdrop-blur-sm dark:border-gray-700/40 dark:bg-gray-800/40">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
              
              <Link
                href="/giving"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-primary shadow-md shadow-accent/20 transition-all hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] lg:text-sm lg:px-5 lg:py-2.5"
              >
                {t("nav.give")}
              </Link>
              
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={cn(
                  "inline-flex items-center justify-center rounded-xl p-2.5 lg:hidden",
                  "text-gray-700 hover:bg-gray-100 active:bg-gray-200/70",
                  "dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700/70",
                  "transition-colors outline-none focus:ring-2 focus:ring-accent/20"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
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