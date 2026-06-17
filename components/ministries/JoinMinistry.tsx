// components/ministries/JoinMinistry.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { Heart, ClipboardList } from "lucide-react";

export function JoinMinistry() {
  const t = useTranslations("ministries");

  return (
    <section className="bg-primary py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Heart className="h-8 w-8 text-accent" />
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mb-8 text-base text-white/70">
            {t("cta.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="lg" href="/contact">
              <ClipboardList className="h-5 w-5" />
              {t("cta.joinButton")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="border-white/30 text-white hover:bg-white hover:text-primary"
            >
              {t("cta.contactButton")}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}