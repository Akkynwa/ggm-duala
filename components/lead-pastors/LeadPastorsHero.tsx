// components/lead-pastors/LeadPastorsHero.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function LeadPastorsHero() {
  const t = useTranslations("leadPastors");

  return (
    <section className="relative bg-primary pt-24 lg:pt-32 overflow-hidden">
      
      {/* Background Image Engine */}
      <div className="absolute inset-0 select-none pointer-events-none">
        {/* The actual source image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/pastors/hero-bg.jpeg')" }}
        />
        
        {/* Protective gradient overlay to preserve contrast and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary" />
        
        {/* Your original radial dot matrix accent pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Typography Layer */}
      <div className="container-custom relative py-16 lg:py-24 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            {t("hero.subtitle")}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}