// components/sermons/SermonGrid.tsx
"use client";

import { useTranslations } from "next-intl";
import { SermonCard } from "./SermonCard";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Sermon {
  title: string;
  series: string;
  speaker: string;
  date: string;
  duration: string;
  thumbnail: string;
  href: string;
}

interface SermonGridProps {
  sermons: Sermon[];
  title: string;
  description?: string;
}

export function SermonGrid({ sermons, title, description }: SermonGridProps) {
  const t = useTranslations("sermons");

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
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-muted-foreground">{description}</p>
          )}
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, index) => (
            <SermonCard key={sermon.title} {...sermon} index={index} />
          ))}
        </div>

        {sermons.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">{t("empty")}</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" href="/sermons/all">
            {t("viewAll")}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}