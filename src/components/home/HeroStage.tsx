"use client";

import { useEffect, useState, type ReactNode } from "react";

export function HeroStage({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero_section");
    if (!hero) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const observer = new IntersectionObserver(
      (entries) => {
        if (reduced.matches || entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero_section"
      className={active ? "hero-animation-active" : undefined}
    >
      {children}
    </section>
  );
}
