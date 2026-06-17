// components/ministries/MinistryCard.tsx
"use client";

import { Card } from "@/components/shared/Card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface MinistryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  href: string;
  color: string;
  index?: number;
}

export function MinistryCard({
  title,
  description,
  icon: Icon,
  image,
  href,
  color,
  index = 0,
}: MinistryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" as const }}
    >
      <Card hover padding="none" className="group overflow-hidden">
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className={`absolute bottom-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {description}
              </p>
            </div>
          </div>
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}