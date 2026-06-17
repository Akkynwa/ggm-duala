// components/about/MissionVision.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { Card } from "@/components/shared/Card";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export function MissionVision() {
  const t = useTranslations("about");

  const items = [
    {
      key: "mission",
      icon: Target,
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
    },
    {
      key: "vision",
      icon: Eye,
      color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
    },
    {
      key: "purpose",
      icon: Heart,
      color: "text-red-500 bg-red-50 dark:bg-red-900/20",
    },
  ];

  return (
    <section className="bg-muted py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" as const }}
            >
              <Card hover padding="large" className="text-center h-full">
                <div
                  className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t(`${item.key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`${item.key}.description`)}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}