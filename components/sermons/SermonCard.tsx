// components/sermons/SermonCard.tsx
"use client";

import { Card } from "@/components/shared/Card";
import { motion } from "framer-motion";
import { Clock, Play, Headphones, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils/formatDate";

interface SermonCardProps {
  title: string;
  series: string;
  speaker: string;
  date: string;
  duration: string;
  thumbnail: string;
  href: string;
  index?: number;
}

export function SermonCard({
  title,
  series,
  speaker,
  date,
  duration,
  thumbnail,
  href,
  index = 0,
}: SermonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" as const }}
    >
      <Card hover padding="none" className="group overflow-hidden">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary shadow-lg">
              <Play className="h-6 w-6 fill-current" />
            </div>
          </div>
          <span className="absolute right-3 top-3 z-10 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
            {duration}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-accent">
            {series}
          </p>
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{speaker}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{formatDate(date, "MMM d, yyyy")}</span>
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:gap-1.5 transition-all"
            >
              <Play className="h-3.5 w-3.5" />
              Watch
            </Link>
            <Link
              href={`${href}?mode=audio`}
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              <Headphones className="h-3.5 w-3.5" />
              Listen
            </Link>
            <Link
              href={`${href}?mode=download`}
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-accent transition-colors ml-auto"
            >
              <Download className="h-3.5 w-3.5" />
              Save
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}