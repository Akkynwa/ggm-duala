// components/about/CoreValues.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function CoreValues() {
  const t = useTranslations("about");

  const values = [
    "faith", "excellence", "love", "integrity", 
    "service", "community", "growth", "worship"
  ];

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle={t("values.subtitle")}
          title={t("values.title")}
          description={t("values.description")}
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" as const }}
              className="flex items-center gap-4 rounded-xl border border-border p-5 hover:border-accent/50 hover:shadow-md transition-all duration-300"
            >
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <h4 className="font-semibold text-foreground">
                  {t(`values.items.${value}.title`)}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t(`values.items.${value}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}