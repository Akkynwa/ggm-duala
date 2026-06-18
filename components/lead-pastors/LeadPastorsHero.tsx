// components/lead-pastors/LeadPastorsHero.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function LeadPastorsHero() {
  const t = useTranslations("leadPastors");

  return (
    <section className="relative bg-primary pt-24 lg:pt-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            {t("hero.subtitle")}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}