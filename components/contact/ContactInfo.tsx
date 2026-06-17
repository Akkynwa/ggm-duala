// components/contact/ContactInfo.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactInfoItem {
  icon: typeof MapPin;
  label: string;
  value: string;
  subValue?: string;
}

export function ContactInfo() {
  const t = useTranslations("contact");

  const infoItems: ContactInfoItem[] = [
    {
      icon: MapPin,
      label: t("info.address"),
      value: "123 Church Street, Yaoundé",
      subValue: "Cameroon",
    },
    {
      icon: Phone,
      label: t("info.phone"),
      value: "+237 6 12 34 56 78",
      subValue: "+237 6 98 76 54 32",
    },
    {
      icon: Mail,
      label: t("info.email"),
      value: "info@ggmcameroun.org",
      subValue: "prayer@ggmcameroun.org",
    },
    {
      icon: Clock,
      label: t("info.officeHours"),
      value: "Monday - Friday: 9:00 AM - 5:00 PM",
      subValue: "Saturday: 9:00 AM - 1:00 PM",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {infoItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" as const }}
              className="group rounded-2xl border border-border p-6 text-center transition-all hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{item.label}</h3>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
              {item.subValue && (
                <p className="mt-1 text-xs text-muted-foreground">{item.subValue}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}