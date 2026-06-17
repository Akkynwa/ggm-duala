// hooks/useTheme.ts
"use client";

import { useTheme as useNextTheme } from "next-themes";

export function useTheme() {
  const { theme, setTheme, resolvedTheme, themes, systemTheme } = useNextTheme();

  const isDark = resolvedTheme === "dark";
  const isLight = resolvedTheme === "light";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return {
    theme,
    setTheme,
    resolvedTheme,
    themes,
    systemTheme,
    isDark,
    isLight,
    toggleTheme,
  };
}