// components/shared/HoverCard.tsx
"use client";

import { motion } from "framer-motion";
import { cardHover } from "@/lib/utils/animations";
import { cn } from "@/lib/utils/cn";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function HoverCard({ children, className, onClick }: HoverCardProps) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={cn(
        "cursor-pointer rounded-2xl bg-card p-6 shadow-sm border border-border/50",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}