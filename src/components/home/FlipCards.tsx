"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

function easeInOut(value: number) {
  return value < 0.5 ? 2 * value * value : 1 - ((-2 * value + 2) ** 2) / 2;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function FlipCards() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      section.classList.add("flip-reduced");
      return;
    }

    const cardOne = section.querySelector<HTMLElement>("#cardOne");
    const cardTwo = section.querySelector<HTMLElement>("#cardTwo");
    const dot1 = section.querySelector<HTMLElement>("#dot1");
    const dot2 = section.querySelector<HTMLElement>("#dot2");
    if (!cardOne || !cardTwo || !dot1 || !dot2) return;

    let frame = 0;
    const rotations = [0, 0];
    let suppressScroll = false;

    const paint = (first: number, second: number) => {
      rotations[0] = first;
      rotations[1] = second;
      cardOne.style.transform = `rotateY(${first}deg)`;
      cardTwo.style.transform = `rotateY(${second}deg)`;
      const progress = second > 0 ? 0.5 : 0;
      dot1.classList.toggle("active", progress < 0.5 && first < 180);
      dot2.classList.toggle("active", first >= 90 || second > 0);
      cardOne.querySelectorAll<HTMLElement>(".card-face").forEach((face, index) => {
        face.inert = index === 0 ? first > 90 : first <= 90;
      });
      cardTwo.querySelectorAll<HTMLElement>(".card-face").forEach((face, index) => {
        face.inert = index === 0 ? second > 90 : second <= 90;
      });
    };

    const update = () => {
      frame = 0;
      if (suppressScroll) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = clamp(-rect.top / distance, 0, 1);
      const first = easeInOut(clamp(progress / 0.45, 0, 1)) * 180;
      const second = easeInOut(clamp((progress - 0.5) / 0.5, 0, 1)) * 180;
      paint(first, second);
      dot1.classList.toggle("active", progress < 0.5);
      dot2.classList.toggle("active", progress >= 0.5);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const toggle = (index: number) => {
      const next = rotations[index] > 90 ? 0 : 180;
      paint(index === 0 ? next : rotations[0], index === 1 ? next : rotations[1]);
      suppressScroll = true;
      window.requestAnimationFrame(() => {
        suppressScroll = false;
      });
    };

    section.querySelectorAll<HTMLButtonElement>("[data-flip]").forEach((button) => {
      button.addEventListener("click", () => toggle(Number(button.dataset.flip)));
    });

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
    <section id="cstm_whatever" className="section-y" ref={sectionRef}>
      <div className="flip-sticky">
        <Container>
          <div className="section-copy">
            <SectionLabel>Whatever stage you&apos;re at</SectionLabel>
            <h2>From first pitch to full scale.</h2>
          </div>
          <div className="cards">
            <article className="flip-card">
              <div className="flip-inner" id="cardOne">
                <div className="card-face card1-front">
                  <span className="card_number">01/02</span>
                  <p className="card-title">Investor-ready MVPs & prototypes</p>
                  <div className="card_line" />
                </div>
                <div className="card-face card1-back">
                  <h3>For Founder</h3>
                  <p className="card-title">Investor-ready MVPs & prototypes</p>
                  <p>Got a bold idea and a pitch coming up? We build the prototype that makes investors lean in — fast, secure and fully yours.</p>
                  <Button href="/startups">
                    Explore For Startups
                    <ArrowRight aria-hidden="true" className="ml-2.5 size-[18px]" />
                  </Button>
                </div>
              </div>
              <button type="button" className="flip-keyboard" data-flip="0">Flip card</button>
            </article>
            <article className="flip-card">
              <div className="flip-inner" id="cardTwo">
                <div className="card-face card2-front">
                  <span className="card_number">02/02</span>
                  <p className="card-title">Custom AI agents, built & deployed</p>
                  <div className="card_line" />
                </div>
                <div className="card-face card2-back">
                  <h3>For Businesses</h3>
                  <p className="card-title">Custom AI agents, built & deployed</p>
                  <p>AI agents that run your sales, support and operations at superso    nic speed, around the clock. Skip the hustle  we&apos;ve got the build.</p>
                  <Button href="/startups" variant="light">
                    Explore For Startups
                    <ArrowRight aria-hidden="true" className="ml-2.5 size-[18px]" />
                  </Button>
                </div>
              </div>
              <button type="button" className="flip-keyboard" data-flip="1">Flip card</button>
            </article>
          </div>
          <div className="progress-wrap">
            <button type="button" className="progress-dot active" id="dot1" data-flip="0" aria-label="Show the founder card" />
            <button type="button" className="progress-dot" id="dot2" data-flip="1" aria-label="Show the business card" />
          </div>
        </Container>
      </div>
    </section>
  );
}
