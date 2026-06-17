// components/events/EventCard.tsx
"use client";

import { Card } from "@/components/shared/Card";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils/formatDate";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  href: string;
  featured?: boolean;
  index?: number;
}

export function EventCard({
  title,
  date,
  time,
  location,
  image,
  category,
  href,
  featured = false,
  index = 0,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" as const }}
      className={featured ? "lg:col-span-2" : ""}
    >
      <Card hover padding="none" className="group overflow-hidden h-full">
        <div className={`grid ${featured ? "lg:grid-cols-2" : ""} h-full`}>
          {/* Image */}
          <div className={`relative ${featured ? "lg:h-full" : "h-48"} overflow-hidden`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes={featured 
                ? "(max-width: 1024px) 100vw, 50vw" 
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
              {category}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-6">
            <div>
              <h3 className={`font-display font-bold text-foreground group-hover:text-primary transition-colors ${featured ? "text-2xl" : "text-lg"}`}>
                {title}
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{formatDate(date)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
            <Link
              href={href}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
            >
              Event Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}