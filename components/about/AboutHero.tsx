// components/about/AboutHero.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";

export function AboutHero() {
  const t = useTranslations("about");

  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <Container className="relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            {t("hero.subtitle")}
          </p>
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t("hero.title")}
          </h1>
        </motion.div>
      </Container>
    </section>
  );
}