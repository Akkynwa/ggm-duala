// components/shared/Button.tsx
"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { Loader2 } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
        accent:
          "bg-accent text-primary hover:bg-accent-hover shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary",
        ghost:
          "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
        white:
          "bg-white text-primary hover:bg-gray-100 shadow-lg shadow-black/10",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, href, external, disabled, ...props }, ref) => {
    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cn(buttonVariants({ variant, size, className }))}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {children}
        </motion.a>
      );
    }

    const isDisabled = loading || disabled;

    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isDisabled}
        whileHover={isDisabled ? undefined : { scale: 1.03 }}
        whileTap={isDisabled ? undefined : { scale: 0.97 }}
        {...(props as HTMLMotionProps<"button">)}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };