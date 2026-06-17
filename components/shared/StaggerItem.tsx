// components/shared/StaggerItem.tsx
"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/utils/animations";
import { cn } from "@/lib/utils/cn";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}