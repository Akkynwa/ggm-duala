// components/lead-pastors/PastorsImage.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export function PastorsImage() {
  const t = useTranslations("leadPastors");

  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mx-auto max-w-4xl"
        >
          {/* Pastors Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/pastors/pastors.jpg"
              alt={t("hero.title")}
              width={1024}
              height={572}
              className="w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          {/* Caption */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t("image.caption")}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}