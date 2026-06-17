// components/giving/DonationCard.tsx
"use client";

import { Card } from "@/components/shared/Card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DonationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
  index?: number;
}

export function DonationCard({
  title,
  description,
  icon: Icon,
  features,
  color,
  index = 0,
}: DonationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" as const }}
    >
      <Card hover padding="large" className="h-full">
        <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <ul className="mt-5 space-y-2.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}