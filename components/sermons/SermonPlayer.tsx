// components/sermons/SermonPlayer.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { Play, Clock, User, Calendar } from "lucide-react";
import Image from "next/image";
import { formatDate } from "@/lib/utils/formatDate";

interface SermonPlayerProps {
  title: string;
  series: string;
  speaker: string;
  date: string;
  duration: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
}

export function SermonPlayer({
  title,
  series,
  speaker,
  date,
  duration,
  description,
  thumbnail,
  videoUrl,
}: SermonPlayerProps) {
  const t = useTranslations("sermons");

  return (
    <section className="bg-primary py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Video/Thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="relative aspect-video overflow-hidden rounded-2xl"
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <button
                className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-primary shadow-2xl transition-transform hover:scale-110"
                aria-label="Play sermon"
              >
                <Play className="h-8 w-8 fill-current" />
              </button>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t("latest.label")}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-lg text-accent">{series}</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <User className="h-5 w-5 text-accent" />
                <span className="font-medium text-white">{speaker}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Calendar className="h-5 w-5 text-accent" />
                <span>{formatDate(date, "EEEE, MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Clock className="h-5 w-5 text-accent" />
                <span>{duration}</span>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-white/70">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="accent" size="lg">
                <Play className="h-5 w-5 fill-current" />
                {t("actions.watch")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                {t("actions.listen")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                {t("actions.download")}
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}