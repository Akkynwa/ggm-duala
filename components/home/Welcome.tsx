// components/home/Welcome.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Welcome() {
  const t = useTranslations();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/hero/welcome.jpg"
                alt="Welcome"
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-2xl bg-accent/20 lg:h-64 lg:w-64" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              title={t("welcome.title")}
              align="left"
              className="mb-6"
            />
            <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("welcome.description")}
            </p>
            <Button variant="primary" size="lg" href="/about">
              <Heart className="h-5 w-5" />
              {t("welcome.joinFamily")}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}