// components/events/EventList.tsx
"use client";

import { useTranslations } from "next-intl";
import { EventCard } from "./EventCard";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  href: string;
}

interface EventListProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
}

export function EventList({ upcomingEvents, pastEvents }: EventListProps) {
  const t = useTranslations("events");

  return (
    <>
      {/* Upcoming Events */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {t("upcoming.title")}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t("upcoming.description")}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.title} {...event} index={index} />
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">{t("upcoming.empty")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
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
              {t("past.title")}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t("past.description")}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.slice(0, 6).map((event, index) => (
              <EventCard key={event.title} {...event} index={index} />
            ))}
          </div>

          {pastEvents.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">{t("past.empty")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
              {t("calendar.title")}
            </h2>
            <p className="mb-8 text-base text-white/70">
              {t("calendar.description")}
            </p>
            <Button variant="accent" size="lg" href="/events/calendar">
              {t("calendar.cta")}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}