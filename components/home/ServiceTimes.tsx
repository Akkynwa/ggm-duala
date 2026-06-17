// components/home/ServiceTimes.tsx
"use client";

import { Container } from "@/components/shared/Container";
import { Card } from "@/components/shared/Card";
import { motion } from "framer-motion";
import { Clock, MapPin, Calendar } from "lucide-react";

const services = [
  {
    day: "Sunday",
    time: "8:00 AM, 10:00 AM & 12:00 PM",
    type: "Worship Service",
    icon: Calendar,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
  },
  {
    day: "Wednesday",
    time: "6:00 PM",
    type: "Bible Study",
    icon: Clock,
    color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
  },
  {
    day: "Friday",
    time: "6:00 PM",
    type: "Prayer Meeting",
    icon: MapPin,
    color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
  },
];

export function ServiceTimes() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Join Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Service Times
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover padding="large" className="text-center">
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {service.day}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {service.type}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.time}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}