// components/home/Events.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";

const events = [
  {
    image: "/images/events/event-1.jpg",
    title: "LED NY 2026",
    link: "#",
  },
  {
    image: "/images/events/event-2.jpg",
    title: "The Wives - Now Streaming",
    link: "https://www.youtube.com",
    external: true,
  },
  {
    image: "/images/events/event-3.jpg",
    title: "Global Community",
    link: "/globalcommunity",
  },
  {
    image: "/images/events/event-4.jpg",
    title: "Exponential 2026 Resource",
    link: "https://resource.exponentialng.org",
    external: true,
  },
];

export function Events() {
  const t = useTranslations();

  return (
    <section className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionTitle
          title={t("events.title")}
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <motion.a
              key={event.title}
              href={event.link}
              target={event.external ? "_blank" : undefined}
              rel={event.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-sm font-semibold text-white">
                  {event.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" href="/events">
            View All Events
          </Button>
        </div>
      </Container>
    </section>
  );
}