// components/giving/GivingCTA.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Heart, CreditCard, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";

export function GivingCTA() {
  const t = useTranslations("giving");

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Heart className="h-8 w-8 text-accent" />
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mb-10 text-base text-white/70">
            {t("cta.description")}
          </p>

          {/* Payment Methods */}
          <div className="mb-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3">
              <CreditCard className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-white">{t("cta.card")}</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3">
              <Smartphone className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-white">{t("cta.mobile")}</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3">
              <Heart className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-white">{t("cta.online")}</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="accent" size="xl" href="/giving/donate">
            {t("cta.button")}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}