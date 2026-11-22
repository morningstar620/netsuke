"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const items = [
  ["/images/protect_iconone.png", "Protection against data loss", "Encrypted, versioned backups in separate locations. Lose a laptop, a server or a region — not your data."],
  ["/images/protect_icontwo.png", "Stop data theft at the door", "Zero-trust access, encryption in transit and at rest, and every login verified. Stolen passwords open nothing."],
  ["/images/protect_iconthree.png", "Watched around the clock", "Continuous threat monitoring and alerts. Suspicious activity is caught and contained before it becomes a headline."],
  ["/images/protect_iconfour.png", "Recovery, rehearsed", "Disaster-recovery plans we actually test. If something fails, you're back up in [RECOVERY TIME]."],
  ["/images/protect_iconfive.png", "Secure code, every release", "Automated scans and peer review on every change, plus pen-testing before anything goes live."],
  ["/images/protect_iconsix.png", "You own everything", "Full source code, documentation and keys handed over. No lock-in, no hostage code."],
] as const;

export function Protection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = Array.from(section.querySelectorAll<HTMLElement>(".protect_info"));
    const row = section.querySelector<HTMLElement>(".protect-grid");
    if (!row) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const canPin = !reduced && window.innerWidth >= 992 && row.scrollHeight <= window.innerHeight - 32;
      if (!canPin) {
        section.classList.remove("protection-scroll-pinned");
        section.style.removeProperty("--protection-scroll-height");
        cards.forEach((card) => {
          const top = card.getBoundingClientRect().top;
          card.classList.toggle("active", reduced || top <= window.innerHeight * 0.75);
        });
        return;
      }

      const stage = Math.max(480, window.innerHeight * 0.7);
      const height = window.innerHeight + cards.length * stage;
      section.classList.add("protection-scroll-pinned");
      section.style.setProperty("--protection-scroll-height", `${height}px`);
      const rect = section.getBoundingClientRect();
      const distance = Math.max(height - window.innerHeight, 1);
      const raw = -rect.top / distance;
      const progress = Math.min(1, Math.max(0, raw));
      const visible = raw < 0 ? 0 : Math.floor(progress * cards.length) + 1;
      cards.forEach((card, index) => card.classList.toggle("active", index < visible));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="cstm_protection" className="section-y" ref={sectionRef}>
      <Container className="container">
        <div className="protect-grid">
          <div className="protection_info span-6">
            <SectionLabel align="start">Data Protection</SectionLabel>
            <h2>
              Leave security to us.
              <br />
              You focus on running your business.
            </h2>
            <Image src="/images/protection.png" alt="Security operations overview" width={665} height={626} className="h-auto max-w-full" />
          </div>
          <div className="protection_content span-6">
            <div className="protect_content_img">
              <Image src="/images/protect_content.png" alt="" width={127} height={724} className="h-auto max-w-full" />
            </div>
            <div>
              {items.map(([icon, title, copy]) => (
                <article className="protect_info" key={title}>
                  <div className="protect_icon">
                    <Image src={icon} alt="" width={84} height={84} />
                  </div>
                  <div className="protect_content">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
