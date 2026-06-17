// components/shared/StaggerContainer.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/utils/animations";
import type { Transition } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

interface StaggerVisibleVariant {
  opacity?: number;
  transition?: Transition & {
    staggerChildren?: number;
    delayChildren?: number;
  };
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: StaggerContainerProps) {
  const visibleVariant = staggerContainer.visible as StaggerVisibleVariant;

  return (
    <motion.div
      variants={{
        hidden: staggerContainer.hidden,
        visible: {
          opacity: visibleVariant.opacity,
          transition: {
            staggerChildren: visibleVariant.transition?.staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}