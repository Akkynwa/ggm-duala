// components/shared/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils/animations";
import type { Variants, Transition } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "article";
  id?: string;
}

export function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as: Component = "section",
  id,
}: AnimatedSectionProps) {
  const visibleVariant = variants.visible as {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: Transition;
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          opacity: visibleVariant.opacity,
          y: visibleVariant.y,
          x: visibleVariant.x,
          scale: visibleVariant.scale,
          transition: {
            ...(visibleVariant.transition || {}),
            delay,
          },
        },
      }}
      className={className}
      id={id}
      // @ts-expect-error - framer-motion motion.div supports the `as` prop for polymorphic rendering
      as={Component}
    >
      {children}
    </motion.div>
  );
}