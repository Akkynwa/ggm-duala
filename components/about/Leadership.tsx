// components/about/Leadership.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const leaders = [
  {
    image: "/images/about/pastor-1.jpg",
    nameKey: "pastor1",
    roleKey: "globalLeadPastor",
    bioKey: "pastor1Bio",
    accent: "from-accent to-yellow-400",
  },
  {
    image: "/images/about/pastor-2.jpg",
    nameKey: "pastor2",
    roleKey: "globalCoLeadPastor",
    bioKey: "pastor2Bio",
    accent: "from-purple-400 to-pink-400",
  },
];

export function Leadership() {
  const t = useTranslations("about");

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Background number */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 select-none font-display text-[200px] font-black leading-none text-muted/20 lg:text-[300px]">
        02
      </div>

      <Container className="relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
              {t("leadership.subtitle")}
            </p>
            <h2 className="mt-3 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              {t("leadership.title")}
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            {t("leadership.description")}
          </p>
        </motion.div>

        {/* Leaders grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.nameKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" as const }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Top accent gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${leader.accent}`} />

              <div className="grid sm:grid-cols-[1fr_2fr]">
                {/* Image side */}
                <div className="relative h-64 overflow-hidden sm:h-full">
                  <Image
                    src={leader.image}
                    alt={t(`leadership.${leader.nameKey}`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent sm:bg-gradient-to-r sm:from-card sm:via-transparent sm:to-transparent" />
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  {/* Role badge */}
                  <span className="inline-flex w-fit items-center gap-1 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                    {t(`leadership.${leader.roleKey}`)}
                  </span>

                  {/* Name */}
                  <h3 className="mt-4 font-display text-2xl font-black text-foreground sm:text-3xl">
                    {t(`leadership.${leader.nameKey}`)}
                  </h3>

                  {/* Bio */}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                    {t(`leadership.${leader.bioKey}`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Button variant="outline" size="lg" href="/lead-pastors">
            {t("leadership.cta")}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}