// components/layout/ThemeToggle.tsx
"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ThemeToggleProps {
  className?: string;
}

// 1. Define standard subscription channels for the browser client window
const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  /* 2. Read hydration state cleanly. 
    On the server, this returns false.
    On the client browser, it instantly switches to true safely without cascading effects.
  */
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  // Safe layout placeholder to avoid layout shifts while rendering on server
  if (!isMounted) {
    return (
      <div 
        className={cn("h-9 w-9 rounded-full bg-transparent", className)} 
        aria-hidden="true" 
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full",
        "text-gray-700 hover:bg-gray-100",
        "dark:text-gray-300 dark:hover:bg-gray-800",
        "transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all duration-300",
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all duration-300",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        )}
      />
    </button>
  );
}