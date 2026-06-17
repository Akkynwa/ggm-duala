// components/home/CallToAction.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { Heart, Users, MessageCircle } from "lucide-react";

export function CallToAction() {
  const t = useTranslations();

  const ctas = [
    {
      title: t("community.title"),
      description: t("community.description"),
      buttonText: t("community.cta"),
      href: "/gc",
      icon: Users,
      variant: "accent" as const,
      bgClass: "bg-primary",
    },
    {
      title: t("counselling.title"),
      description: t("counselling.description"),
      buttonText: t("counselling.cta"),
      href: "/prayer-request",
      icon: Heart,
      variant: "primary" as const,
      bgClass: "bg-muted",
      darkBgClass: "dark:bg-gray-800",
    },
  ];

  return (
    <>
      {/* Community Section */}
      <section className="bg-primary py-20 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
              {t("community.title")}
            </h2>
            <p className="mb-3 text-base text-white/70">
              {t("community.description")}
            </p>
            <p className="mb-8 text-base text-white/70">
              {t("community.description2")}
            </p>
            <Button variant="accent" size="lg" href="/gc" external>
              {t("community.cta")}
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Counselling Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <MessageCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              {t("counselling.title")}
            </h2>
            <p className="mb-8 text-base text-muted-foreground">
              {t("counselling.description")}
            </p>
            <Button variant="primary" size="lg" href="/prayer-request" external>
              <Heart className="h-5 w-5" />
              {t("counselling.cta")}
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}