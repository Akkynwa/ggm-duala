// components/about/AboutHero.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  const t = useTranslations("about");

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="grid lg:grid-cols-2 lg:min-h-[70vh]">
        
        {/* LEFT: Content */}
        <div className="relative flex items-center px-4 py-20 sm:px-8 lg:px-12 lg:py-0 border-r border-border">
          {/* Decorative background element */}
          <div className="absolute -left-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="relative z-10 max-w-xl"
          >
            {/* Number */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block font-display text-[120px] font-black leading-none text-accent/20 sm:text-[180px]"
            >
              01
            </motion.span>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="-mt-8 mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
            >
              {t("hero.title").split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 h-1 w-20 origin-left bg-accent"
            />
          </motion.div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" as const }}
          className="relative h-[400px] overflow-hidden lg:h-auto"
        >
          <Image
            src="/images/about/about-hero.jpg"
            alt={t("hero.title")}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-l lg:from-background lg:via-transparent lg:to-transparent" />
          
          {/* Bottom accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent lg:left-auto lg:right-0 lg:top-0 lg:h-full lg:w-1" />
        </motion.div>
      </div>
    </section>
  );
}