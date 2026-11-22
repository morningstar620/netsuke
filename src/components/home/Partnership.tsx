"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const points = [
  ["01", "Limited seats", "A capped number of partners each year. When we're full, we're full."],
  ["02", "A dedicated senior team", "Your own architects, engineers and security lead. No juniors learning on your business."],
  ["03", "Paid on performance", "A share of the growth we help create, agreed and measured upfront. Our incentives match yours."],
  ["04", "Global, always on", "Partners across continents, supported in their time zone. Your systems never sleep, and neither does our watch."],
] as const;

export function Partnership() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = Array.from(section.querySelectorAll<HTMLElement>(".partner_info"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      section.classList.add("is-shown");
      items.forEach((item) => item.classList.add("active"));
      return;
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) section.classList.add("is-shown");
    }, { threshold: 0.2 });
    sectionObserver.observe(section);

    const pointObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    }, { threshold: 0.35 });
    items.forEach((item) => pointObserver.observe(item));

    return () => {
      sectionObserver.disconnect();
      pointObserver.disconnect();
    };
  }, []);

  return (
    <section id="cstm_partnership" className="section-y" ref={sectionRef}>
      <Container>
        <div className="partnership-grid">
          <div className="partnership_info span-7">
            <div className="reveal-item">
              <SectionLabel align="start" tone="inverse">Performance-based technology Partnership</SectionLabel>
            </div>
            <h2 className="reveal-item">We don&apos;t bill hours. We share your growth.</h2>
            <p className="reveal-item">
              We work with a <span>select few serious businesses,</span> take full ownership of their technology, and tie our fee to the results we create together. Most agencies chase volume. We chase outcomes.
            </p>
            <div className="reveal-item">
              <Button href="#cstm_form">
                See if we’re the right fit
                <ArrowRight aria-hidden="true" className="ml-2.5 size-[18px]" />
              </Button>
            </div>
          </div>
          <div className="partnership_point span-5">
            {points.map(([index, title, copy]) => (
              <article className="partner_info" key={index}>
                <h6>{index}</h6>
                <h4>{title}</h4>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
