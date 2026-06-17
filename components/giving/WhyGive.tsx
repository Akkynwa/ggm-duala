// components/giving/WhyGive.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";
import { Heart, TrendingUp, Users, Globe } from "lucide-react";

export function WhyGive() {
  const t = useTranslations("giving");

  const reasons = [
    {
      key: "worship",
      icon: Heart,
      color: "bg-red-500/10 text-red-500",
    },
    {
      key: "growth",
      icon: TrendingUp,
      color: "bg-green-500/10 text-green-500",
    },
    {
      key: "community",
      icon: Users,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      key: "impact",
      icon: Globe,
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("why.subtitle")}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t("why.title")}
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" as const }}
              className="text-center"
            >
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${reason.color}`}>
                <reason.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {t(`why.items.${reason.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`why.items.${reason.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}