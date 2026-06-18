// components/home/Hero.tsx
"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { motion, Variants } from "framer-motion";
import { MapPin, Play, UserPlus} from "lucide-react";

export function Hero() {
  const t = useTranslations("home");

  // Smooth, lightweight orchestration optimized for mobile rendering engines
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.05 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] as const } 
    },
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary px-0">
      
      {/* 1. IMMERSIVE MOBILE BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
        />
        {/* Dynamic Multi-stage Vignette: Darker at the bottom for thumb-zone readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40 lg:bg-gradient-to-r lg:from-primary/95 lg:via-primary/80 lg:to-primary/40" />
        
        {/* Subtle decorative grid accent */}
        <div 
          className="absolute inset-0 opacity-[0.03] hidden sm:block"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* 2. CORE CONTENT HUB */}
      <Container className="relative z-10 w-full py-12 xs:py-16 sm:py-20 lg:py-32">
        <motion.div 
          className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome Tagline Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent mx-auto lg:mx-0"
          >
            <span>{t("hero.welcome")}</span>
          </motion.div>

          {/* Impact Typography Frame */}
          <div className="space-y-3 sm:space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]"
            >
              Grace of God <span className="text-accent">Mission</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="font-display text-lg xs:text-xl sm:text-2xl font-medium tracking-wide text-white/90"
            >
              {t("hero.tagline")}
            </motion.p>
          </div>

          {/* Description Block */}
          <motion.p 
            variants={itemVariants}
            className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed font-light px-2 sm:px-0"
          >
            {t("hero.description")}
          </motion.p>

          {/* Location Context Pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center gap-2 text-white/80 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2 mx-auto lg:mx-0 backdrop-blur-sm"
          >
            <MapPin className="h-4 w-4 text-accent" />
            <span className="font-medium">Douala, Cameroon</span>
          </motion.div>

          {/* 3. THUMB-ZONE OPTIMIZED BUTTON CLUSTER */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-4 px-4 sm:px-0"
          >
            {/* Find Location Primary Callout */}
            <Button 
              variant="accent" 
              size="lg" 
              href="/locations" 
              className="shadow-lg shadow-accent/10 py-3.5 sm:py-3 font-semibold text-center flex justify-center items-center"
            >
              <MapPin className="h-5 w-5" />
              {t("hero.findLocation")}
            </Button>
            
            {/* Live Streaming Secondary Callout */}
            <Button
              variant="white"
              size="lg"
              href="/"
              external
              className="py-3.5 sm:py-3 font-semibold text-center flex justify-center items-center"
            >
              <Play className="h-5 w-5 fill-current" />
              {t("hero.attendOnline")}
            </Button>

            {/* Become a Member Minimalist Link */}
            <Button
              variant="outline"
              size="lg"
              href="/greatness-kit"
              className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 py-3.5 sm:py-3 font-semibold text-center flex justify-center items-center"
            >
              <UserPlus className="h-5 w-5" />
              {t("hero.becomeMember")}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}