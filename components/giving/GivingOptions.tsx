// components/giving/GivingOptions.tsx
"use client";

import { useTranslations } from "next-intl";
import { DonationCard } from "./DonationCard";
import { motion } from "framer-motion";
import { Heart, Church, Globe, GraduationCap } from "lucide-react";

export function GivingOptions() {
  const t = useTranslations("giving");

  const options = [
    {
      key: "tithe",
      icon: Heart,
      color: "bg-red-500/10 text-red-500",
    },
    {
      key: "offering",
      icon: Church,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      key: "missions",
      icon: Globe,
      color: "bg-green-500/10 text-green-500",
    },
    {
      key: "building",
      icon: GraduationCap,
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("options.subtitle")}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t("options.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {t("options.description")}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option, index) => (
            <DonationCard
              key={option.key}
              title={t(`options.items.${option.key}.title`)}
              description={t(`options.items.${option.key}.description`)}
              icon={option.icon}
              features={[
                t(`options.items.${option.key}.feature1`),
                t(`options.items.${option.key}.feature2`),
              ]}
              color={option.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}