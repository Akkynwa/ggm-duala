// components/about/Leadership.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";

const leaders = [
  {
    image: "/images/about/pastor-1.jpg",
    nameKey: "pastor1",
    roleKey: "LeadPastor",
  },
  {
    image: "/images/about/pastor-2.jpg",
    nameKey: "pastor2",
    roleKey: "CoLeadPastor",
  },
];

export function Leadership() {
  const t = useTranslations("about");

  return (
    <section className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle={t("leadership.subtitle")}
          title={t("leadership.title")}
          description={t("leadership.description")}
          className="mb-14"
        />

        <div className="grid gap-10 md:grid-cols-2 max-w-3xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" as const }}
              className="text-center"
            >
              <div className="mx-auto mb-5 h-48 w-48 overflow-hidden rounded-full border-4 border-accent/30">
                <img
                  src={leader.image}
                  alt={t(`leadership.${leader.nameKey}`)}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {t(`leadership.${leader.nameKey}`)}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {t(`leadership.${leader.roleKey}`)}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {t(`leadership.${leader.nameKey}Bio`)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" href="/lead-pastors">
            {t("leadership.cta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}