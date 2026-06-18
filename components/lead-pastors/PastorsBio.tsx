// components/lead-pastors/PastorsBio.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function PastorsBio() {
  const t = useTranslations("leadPastors");

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="prose prose-lg max-w-none dark:prose-invert"
          >
            {/* Pastor Godman */}
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              <Link
                href={t("bio.pastorGodmanLink")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-accent dark:text-white dark:hover:text-accent inline-flex items-center gap-1"
              >
                {t("bio.pastorGodmanName")}
                <ExternalLink className="h-3 w-3" />
              </Link>
              , {t("bio.pastorGodmanDescription")}
            </p>

            {/* Pastor Bola */}
            <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
              <span className="font-bold text-primary dark:text-white">
                {t("bio.pastorBolaName")}
              </span>
              , {t("bio.pastorBolaDescription")}
            </p>

            {/* Together */}
            <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
              {t("bio.together")}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}