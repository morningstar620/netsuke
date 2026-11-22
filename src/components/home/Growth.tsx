"use client";

import { useEffect, useRef } from "react";
import { ChevronsRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const headingText = "Your growth shouldn't stop due to worries about what’s happening behind you";
const sourceHeading = "Your growth shouldn't stop to worry about what's running behind you.";

export function Growth() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      heading.textContent = sourceHeading;
      return;
    }

    let characters = -1;
    let frame = 0;
    let baseHeight = 0;

    const measure = () => {
      const current = heading.textContent;
      heading.style.minHeight = "";
      heading.textContent = headingText;
      heading.style.minHeight = `${heading.getBoundingClientRect().height}px`;
      heading.textContent = current;
      baseHeight = section.offsetHeight;
    };

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const distance = baseHeight + window.innerHeight * 0.5;
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / distance));
      const segment = (start: number, end: number) => Math.min(1, Math.max(0, (progress - start) / (end - start)));
      const next = Math.floor(segment(0.2, 0.4) * headingText.length);
      if (next !== characters) {
        characters = next;
        heading.textContent = headingText.slice(0, next);
      }
      const focus = segment(0.4, 0.6);
      const button = segment(0.6, 0.8);
      const netsuke = segment(0.8, 1);
      section.style.setProperty("--growth-focus-opacity", focus.toFixed(3));
      section.style.setProperty("--growth-focus-offset", `${(1 - focus) * 28}px`);
      section.style.setProperty("--growth-button-opacity", button.toFixed(3));
      section.style.setProperty("--growth-button-offset", `${(1 - button) * 24}px`);
      section.style.setProperty("--growth-netsuke-opacity", netsuke.toFixed(3));
      section.style.setProperty("--growth-netsuke-offset", `${(1 - netsuke) * 28}px`);
    };

    const request = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    section.classList.add("growth-scroll-ready");
    measure();
    update();
    window.addEventListener("scroll", request, { passive: true });
    const onResize = () => {
      measure();
      request();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="cstm_growth" className="section-y" ref={sectionRef}>
      <Container>
        <div className="section-copy growth_info">
          <h2 ref={headingRef} aria-label={headingText}>{sourceHeading}</h2>
        </div>
        <div className="growth_content">
          <div className="growth_contentinfo">
            <h5>You focus on</h5>
            <ul>
              <li>Your Idea</li>
              <li>Your Customers</li>
              <li>Your Growth</li>
            </ul>
          </div>
          <div className="circle_arrow" aria-hidden="true">
            <span><ChevronsRight size={40} /></span>
          </div>
          <div className="growth_contentinfo growth_color">
            <h5>Netsuke AI take care of</h5>
            <ul>
              <li>Development Strategy</li>
              <li>Apps, Software & AI</li>
              <li>Security & Operations</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
