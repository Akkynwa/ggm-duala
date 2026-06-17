// components/shared/ParallaxImage.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // negative = moves slower, positive = moves faster
  height?: string;
}

export function ParallaxImage({
  src,
  alt,
  className,
  speed = -0.3,
  height = "500px",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden rounded-2xl", className)}
      style={{ height }}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}