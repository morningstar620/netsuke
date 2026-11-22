"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const messages = [
  "Start anywhere. Every strong pitch begins with clarity.",
  "Early days. Honestly? Perfect time to talk.",
  "Good start. You are building momentum.",
  "Promising. The story is taking shape.",
  "Getting stronger. Investors can see the signal.",
  "Very close. The foundations look solid.",
  "Pitch-ready. Now make the story impossible to ignore.",
];

const cards = [
  "A clear problem worth solving",
  "A defined target customer",
  "Proof people want it",
  "A product investors can see and touch",
  "A believable plan for the money",
  "A tech roadmap that survives due diligence",
];

export function QuickVibe() {
  const [active, setActive] = useState<boolean[]>([true, false, false, false, false, false]);
  const count = active.filter(Boolean).length;
  const width = useMemo(() => Math.floor((count / cards.length) * 10000) / 100, [count]);

  return (
    <section id="cstm_quickvibe" className="section-y">
      <Container>
        <div className="section-copy quickvibe_info">
          <SectionLabel tone="inverse">Quick vibe check</SectionLabel>
          <h2>Are you pitch-ready? Be honest.</h2>
          <p className="quick-lead">Tick what you&apos;ve already got. Whatever&apos;s missing is usually exactly what is built.</p>
        </div>
        <div className="progress-card">
          <div className="progress-row">
            <p className="progress-label">Readiness</p>
            <div className="progress-track" aria-hidden="true">
              <div className="progress-fill" style={{ width: `${width}%` }} />
            </div>
            <p className="progress-count">{count}/6</p>
          </div>
          <p className="progress-message" aria-live="polite">{messages[Math.min(count, messages.length - 1)]}</p>
        </div>
        <div className="quickvibe_cards_info">
          {cards.map((card, index) => (
            <button
              key={card}
              type="button"
              className="quickvibe_cardinfo"
              aria-pressed={active[index]}
              onClick={() => setActive((current) => current.map((value, item) => (item === index ? !value : value)))}
            >
              <span className="checkbox" aria-hidden="true">✓</span>
              <span className="card-text">
                {index === 2 ? <>Proof people want it<br />(waitlists, invites, LOIs)</> : card}
              </span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
