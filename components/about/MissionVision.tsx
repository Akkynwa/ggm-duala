// components/about/MissionVision.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export function MissionVision() {
  const t = useTranslations("about");

  const items = [
    {
      key: "mission",
      icon: Target,
      number: "01",
    },
    {
      key: "vision",
      icon: Eye,
      number: "02",
    },
    {
      key: "purpose",
      icon: Heart,
      number: "03",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Decorative line at top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-border" />

      <Container className="relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
            Our Foundation
          </p>
          <h2 className="mt-3 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
            What Drives Us
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" as const }}
              className="group relative flex flex-col border-l-2 border-border pl-6 transition-colors hover:border-accent"
            >
              {/* Number */}
              <span className="font-display text-5xl font-black text-muted/50 transition-colors group-hover:text-accent/30">
                {item.number}
              </span>

              {/* Icon */}
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <item.icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {t(`${item.key}.title`)}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`${item.key}.description`)}
              </p>

              {/* Bottom accent that appears on hover */}
              <div className="mt-auto pt-6">
                <div className="h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}