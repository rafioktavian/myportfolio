"use client";

import { useEffect, useRef } from "react";

export function ScrollEffects() {
  const lastScroll = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let idleTimer = 0;

    const update = () => {
      const current = window.scrollY;
      const delta = current - lastScroll.current;

      if (Math.abs(delta) > 2) {
        const nextDirection = delta > 0 ? "down" : "up";
        root.dataset.scrollDirection = nextDirection;
        root.dataset.scrolling = "true";
        root.style.setProperty("--scroll-velocity", String(Math.min(Math.abs(delta), 28)));

        window.clearTimeout(idleTimer);
        idleTimer = window.setTimeout(() => {
          root.dataset.scrolling = "false";
          root.style.setProperty("--scroll-velocity", "0");
        }, 130);
      }

      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--scroll-progress", String(current / maxScroll));
      lastScroll.current = current;
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    lastScroll.current = window.scrollY;
    root.dataset.scrollDirection = "down";
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
      delete root.dataset.scrollDirection;
      delete root.dataset.scrolling;
    };
  }, []);

  return null;
}
