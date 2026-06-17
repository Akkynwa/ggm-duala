// components/events/FeaturedEvent.tsx
"use client";

import { useTranslations } from "next-intl";
import { EventCard } from "./EventCard";
import { motion } from "framer-motion";

interface FeaturedEventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  href: string;
}

export function FeaturedEvent(event: FeaturedEventProps) {
  const t = useTranslations("events");

  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("featured.subtitle")}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t("featured.title")}
          </h2>
        </motion.div>
        <EventCard {...event} featured index={0} />
      </div>
    </section>
  );
}