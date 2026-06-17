// components/home/Sermons.tsx
"use client";

import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { Play, Clock, Headphones } from "lucide-react";

const sermons = [
  {
    title: "The Power of Faith",
    series: "Faith Series",
    date: "June 12, 2026",
    duration: "45 min",
    image: "/images/sermons/sermon-1.jpg",
  },
  {
    title: "Walking in Purpose",
    series: "Purpose Driven",
    date: "June 5, 2026",
    duration: "38 min",
    image: "/images/sermons/sermon-2.jpg",
  },
  {
    title: "The Grace of Giving",
    series: "Kingdom Finances",
    date: "May 29, 2026",
    duration: "42 min",
    image: "/images/sermons/sermon-3.jpg",
  },
];

export function Sermons() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Recent Messages"
          title="Latest Sermons"
          description="Be inspired and transformed by the Word of God."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover padding="none" className="overflow-hidden">
                <div className="relative">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="aspect-video w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary shadow-lg">
                      <Play className="h-6 w-6 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-accent">{sermon.series}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                    {sermon.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {sermon.duration}
                    </span>
                    <span>{sermon.date}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" href="/sermons">
            <Headphones className="h-5 w-5" />
            All Sermons
          </Button>
        </div>
      </Container>
    </section>
  );
}