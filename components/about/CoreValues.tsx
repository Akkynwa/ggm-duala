// components/about/CoreValues.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";

export function CoreValues() {
  const t = useTranslations("about");

  const values = [
    { key: "faith", large: "F", color: "bg-red-500" },
    { key: "excellence", large: "E", color: "bg-amber-500" },
    { key: "love", large: "L", color: "bg-pink-500" },
    { key: "integrity", large: "I", color: "bg-emerald-500" },
    { key: "service", large: "S", color: "bg-blue-500" },
    { key: "community", large: "C", color: "bg-purple-500" },
    { key: "growth", large: "G", color: "bg-teal-500" },
    { key: "worship", large: "W", color: "bg-orange-500" },
  ];

  return (
    <section className="relative bg-black py-20 lg:py-28 dark:bg-black">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
            {t("values.subtitle")}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {t("values.title")}
          </h2>
          <div className="mt-6 h-1 w-24 bg-accent" />
        </motion.div>

        {/* Values — big letter grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" as const }}
              className="group relative overflow-hidden border border-white/10 p-6 transition-colors hover:border-white/30"
            >
              {/* Big letter */}
              <span
                className={`absolute -right-4 -top-4 flex h-24 w-24 items-center justify-center font-display text-[100px] font-black leading-none text-white/[0.03] transition-all duration-500 group-hover:text-white/[0.08] group-hover:scale-110`}
              >
                {value.large}
              </span>

              {/* Colored dot */}
              <div className={`mb-5 h-3 w-3 rounded-full ${value.color}`} />

              {/* Title */}
              <h4 className="relative font-display text-xl font-bold text-white">
                {t(`values.items.${value.key}.title`)}
              </h4>

              {/* Description */}
              <p className="relative mt-2 text-sm leading-relaxed text-white/50">
                {t(`values.items.${value.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}