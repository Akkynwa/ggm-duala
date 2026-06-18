// components/home/Welcome.tsx
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/shared/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const slideshowImages = [
  "/images/hero/welcome.jpg",
  "/images/hero/welcome-2.jpg",
  "/images/hero/welcome-3.jpg",
  "/images/hero/welcome-4.jpg",
  "/images/hero/welcome-5.jpg",
];

export function Welcome() {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Slideshow */}
          <div className="relative order-first">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-[500px] shadow-xl border border-border bg-muted">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentIndex}
                  src={slideshowImages[currentIndex]}
                  alt={`Church family slide ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.08 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 1, ease: "easeInOut" },
                    scale: { duration: 6, ease: "linear" },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-48 w-48 rounded-2xl bg-muted border border-border lg:h-64 lg:w-64" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title={t("welcome.title")}
              align="left"
              className="mb-6 text-foreground"
            />
            <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("welcome.description")}
            </p>
            <Button variant="primary" size="lg" href="/about">
              <Heart className="h-5 w-5 fill-current" />
              {t("welcome.joinFamily")}
            </Button>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}