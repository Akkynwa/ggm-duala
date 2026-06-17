// components/contact/ChurchMap.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/shared/Button";
import { ExternalLink } from "lucide-react";

export function ChurchMap() {
  const t = useTranslations("contact");

  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("map.subtitle")}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t("map.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" as const }}
          className="overflow-hidden rounded-2xl border border-border shadow-lg"
        >
          {/* Google Maps Embed */}
          <div className="relative h-[400px] w-full lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.74525678249!2d11.5021!3d3.866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf1c8b5c0f4d%3A0x7e1ff25c8e9e3d2!2sYaound%C3%A9!5e0!3m2!1sen!2scm!4v1697000000000!5m2!1sen!2scm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GGM Cameroun Location"
              className="grayscale-[30%]"
            />
          </div>

          {/* Directions Button */}
          <div className="flex items-center justify-between gap-4 border-t border-border bg-card px-6 py-4">
            <p className="text-sm text-muted-foreground">
              GGM Cameroun, Yaoundé, Cameroon
            </p>
            <Button
              variant="outline"
              size="sm"
              href="https://maps.app.goo.gl/CF1QuTQyN3L5Puvh6"
              external
            >
              <ExternalLink className="h-4 w-4" />
              {t("map.directions")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}