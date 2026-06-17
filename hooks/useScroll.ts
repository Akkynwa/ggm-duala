// hooks/useScroll.ts
"use client";

import { useEffect } from "react";

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const originalOverflow = body.style.overflow;
    const originalPosition = body.style.position;
    const originalWidth = body.style.width;
    const originalTop = body.style.top;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = `-${scrollY}px`;

    return () => {
      body.style.overflow = originalOverflow;
      body.style.position = originalPosition;
      body.style.width = originalWidth;
      body.style.top = originalTop;
      window.scrollTo(0, scrollY);
    };
  }, [locked]);
}