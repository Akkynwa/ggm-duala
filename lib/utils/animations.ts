// lib/utils/animations.ts
import type { Variants } from "framer-motion";

// Fade Up
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Fade In
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Slide In from Left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Slide In from Right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Scale In
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Stagger Container (for parent elements)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger Item (for children)
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Text Reveal (character by character)
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

// Card Hover
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

// Button Tap
export const buttonTap = {
  rest: { scale: 1 },
  tap: {
    scale: 0.97,
    transition: {
      duration: 0.1,
    },
  },
};

// Page Transition
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn" as const,
    },
  },
};

// Section Heading
export const sectionHeading: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Scroll Progress
export const scrollReveal = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
});

// Hero Text Reveal (staggered)
export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const, // easeOutQuad
    },
  },
};