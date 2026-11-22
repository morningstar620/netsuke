"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const creative = {
  eyebrow: "THE NON-NEGOTIABLES",
  heading: "Our Commitments",
  points: [
    "Transparent, milestone-based delivery.",
    "Clean, documented, maintainable architecture.",
    "Security engineered into every layer.",
    "Rapid deployment of business automation.",
    "Outcome-based engagement models.",
  ],
};

const corporate = {
  eyebrow: "THE NON-NEGOTIABLES",
  heading: "The non-negotiables, fr",
  points: [
    "You see progress every week. No disappearing acts.",
    "No spaghetti. Future devs won’t curse your name.",
    "Your data doesn’t leak. Period.",
    "Boring tasks? Gone in days, not quarters.",
    "We charge for results, not for sounding smart.",
  ],
};

const icons = [
  <svg key="1" viewBox="0 0 24 24"><path className="solid" d="M3 11.4 20.5 3.8c.8-.3 1.5.4 1.2 1.2l-7.6 17.5c-.3.8-1.4.8-1.7 0l-2.5-6.3-6.9-3.1c-.8-.3-.8-1.4 0-1.7Z" /><path d="m9.9 16.2 5.2-5.2" /></svg>,
  <svg key="2" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>,
  <svg key="3" viewBox="0 0 24 24"><path d="M12 3 19 6v5c0 5-3.2 8.2-7 10-3.8-1.8-7-5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg key="4" viewBox="0 0 24 24"><path className="solid" d="M13.5 2 5 13h5l-.5 9L19 10h-5l-.5-8Z" /></svg>,
  <svg key="5" viewBox="0 0 24 24"><path d="M3 20h18M5 17V9h4v8M10 17V5h4v12M15 17v-6h4v6" /></svg>,
];

export function Commitments() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isCorporate, setCorporate] = useState(false);
  const content = isCorporate ? corporate : creative;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      section.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        section.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cstm_commitments" className="section-y" ref={sectionRef}>
      <Container>
        <div className="section-copy">
          <SectionLabel>{content.eyebrow}</SectionLabel>
          <h2>{content.heading}</h2>
        </div>
        <div className="mode-wrap">
          <button className="mode" type="button" aria-pressed={isCorporate} onClick={() => setCorporate((value) => !value)}>
            <span>Corporate Mode</span>
            <span className="switch" aria-hidden="true" />
          </button>
        </div>
        <div className="commitments_content">
          {content.points.map((point, index) => (
            <article className="commitments_contentpoints" key={creative.points[index]}>
              <div className="icon-circle" aria-hidden="true">{icons[index]}</div>
              <div className="contentpoints_info">
                <h3>0{index + 1}</h3>
                <p>{point}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
