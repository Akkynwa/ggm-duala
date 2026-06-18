// components/about/OurStory.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export function OurStory() {
  const t = useTranslations("about");

  return (
    <section className="relative overflow-hidden bg-muted py-20 lg:py-28">
      {/* Background number — continues the chapter sequence */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none font-display text-[180px] font-black leading-none text-accent/[0.04] lg:text-[250px]">
        03
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/about/our-story.jpg"
                alt={t("story.title")}
                width={600}
                height={750}
                className="h-[450px] w-full object-cover lg:h-[550px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card px-6 py-4 shadow-xl"
            >
              <p className="font-display text-3xl font-black text-accent">15+</p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Years of Impact
              </p>
            </motion.div>

            {/* Accent block */}
            <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-2xl bg-accent/10 lg:h-40 lg:w-40" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            {/* Subtitle */}
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
              {t("story.subtitle")}
            </p>

            {/* Title */}
            <h2 className="mt-3 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              {t("story.title")}
            </h2>

            {/* Decorative line */}
            <div className="mt-6 h-1 w-16 bg-accent" />

            {/* Paragraphs with drop cap on first */}
            <div className="mt-8 space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-5xl first-letter:font-black first-letter:text-accent first-letter:leading-none">
                {t("story.paragraph1")}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("story.paragraph2")}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("story.paragraph3")}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}