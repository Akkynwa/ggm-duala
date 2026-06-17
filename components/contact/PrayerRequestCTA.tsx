// components/contact/PrayerRequestCTA.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";

export function PrayerRequestCTA() {
  const t = useTranslations("contact");

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Heart className="h-8 w-8 text-accent" />
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
            {t("prayer.title")}
          </h2>
          <p className="mb-8 text-base text-white/70">
            {t("prayer.description")}
          </p>
          <Button variant="accent" size="lg" href="/prayer-request">
            {t("prayer.cta")}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}