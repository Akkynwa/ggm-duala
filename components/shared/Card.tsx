// components/shared/Card.tsx
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "small" | "default" | "large";
  animate?: boolean;
  onClick?: () => void;
}

const paddingClasses = {
  none: "",
  small: "p-4",
  default: "p-6",
  large: "p-8",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "default",
  animate = false,
  onClick,
}: CardProps) {
  const classes = cn(
    "rounded-2xl bg-card text-card-foreground shadow-sm border border-border/50",
    hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
    paddingClasses[padding],
    onClick && "cursor-pointer",
    className
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={classes}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}