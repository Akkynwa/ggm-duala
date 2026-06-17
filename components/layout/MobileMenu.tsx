// components/layout/MobileMenu.tsx
"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "@/lib/i18n/routing";
import { navItems, siteConfig, socialLinks } from "@/lib/utils/constants";
import { useScrollLock } from "@/hooks/useScroll";
import { cn } from "@/lib/utils/cn";
import { X, ExternalLink, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useScrollLock(isOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const closeButton = menuRef.current.querySelector<HTMLButtonElement>(
        '[data-close-button]'
      );
      closeButton?.focus();
    }
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const panelVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 300,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 300,
      },
    },
  };

  const getItemTransition = (index: number) => ({
    delay: 0.1 + index * 0.05,
    duration: 0.3,
    ease: "easeOut" as const,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-in Panel */}
          <motion.div
            ref={menuRef}
            className={cn(
              "fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col",
              "bg-white shadow-2xl dark:bg-gray-900",
              "lg:hidden"
            )}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <span className="font-display text-sm font-bold text-accent">
                    G
                  </span>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-primary dark:text-white">
                    {siteConfig.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {siteConfig.tagline}
                  </p>
                </div>
              </Link>
              <button
                data-close-button
                onClick={onClose}
                className={cn(
                  "rounded-xl p-2.5 transition-all",
                  "text-gray-400 hover:bg-red-50 hover:text-red-500",
                  "dark:hover:bg-red-900/20 dark:hover:text-red-400"
                )}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-6">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={getItemTransition(index)}
                  >
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={onClose}
                      className={cn(
                        "group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200",
                        isActive(item.href)
                          ? "bg-primary text-white shadow-lg shadow-primary/25"
                          : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50"
                      )}
                    >
                      <span>{t(item.label)}</span>
                      {item.external ? (
                        <ExternalLink
                          className={cn(
                            "h-4 w-4 transition-transform group-hover:scale-110",
                            isActive(item.href)
                              ? "text-white/70"
                              : "text-gray-400"
                          )}
                        />
                      ) : (
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                            isActive(item.href)
                              ? "text-white/70"
                              : "text-gray-400"
                          )}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer with Social Links */}
            <motion.div
              className="border-t border-gray-100 px-5 py-5 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t("footer.stayConnected")}
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "rounded-xl p-2.5 transition-all",
                      "text-gray-400 hover:bg-gray-100 hover:text-primary",
                      "dark:hover:bg-gray-800 dark:hover:text-white"
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <p className="mt-5 text-center text-xs text-muted-foreground">
                &copy; 2026 {siteConfig.name}. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}