// components/about/OurStory.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";

export function OurStory() {
  const t = useTranslations("about");

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/about/our-story.jpg"
                  alt="Our Story"
                  className="h-[400px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-2xl bg-accent/20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <SectionTitle
              subtitle={t("story.subtitle")}
              title={t("story.title")}
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{t("story.paragraph1")}</p>
              <p>{t("story.paragraph2")}</p>
              <p>{t("story.paragraph3")}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}