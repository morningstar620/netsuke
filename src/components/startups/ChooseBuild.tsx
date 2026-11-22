"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const payments = [
  ["Fixed Fee", "One clear price, agreed upfront, paid by milestone. No surprises."],
  ["Equity + reduced fee", "For founders we believe in: a lower fee in exchange for a small equity stake."],
  ["Hybrid", "A fixed build fee now, with a performance share once you’re funded and growing."],
] as const;

const builds = [
  {
    id: "clickable",
    tab: "Clickable Prototype",
    kicker: "Pre-seed · Test the idea",
    title: "Clickable prototype",
    copy: "Best for: early investor conversations and testing the idea with real users.",
    points: ["High-fidelity, clickable app screens", "The core user journey, demo-ready", "Brand-ready visual design", "Investor walkthrough script"],
  },
  {
    id: "pitch",
    tab: "Pitch MVP",
    kicker: "Pre-seed / Seed · Prove it works",
    title: "Pitch MVP",
    copy: "Best for: rounds where investors want to see it genuinely working.",
    points: ["Working app with real data", "Core features, end to end", "Hosted demo investors can try", "Traction and metrics dashboard"],
  },
  {
    id: "launch",
    tab: "Launch-ready MVP",
    kicker: "Seed · Raise and launch",
    title: "Launch-ready MVP",
    copy: "Best for: founders who want to raise and launch to paying customers at once.",
    points: ["Production-grade, scalable code", "Security layer from day one", "Web and app store launch", "Technical roadmap for due diligence"],
  },
];

export function ChooseBuild() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const build = builds[tab];

  return (
    <section id="cstm_choosebuild" className="section-y">
      <Container>
        <div className="section-copy choosebuild_info">
          <SectionLabel tone="inverse">Choose Your Build</SectionLabel>
          <h2>Match the build to the round.</h2>
          <p className="choose-lead">Prototype and MVP development packages for pre-seed and seed-stage founders.</p>
        </div>
        <div className="choosebuild_tab">
          <div className="nav" role="tablist" aria-label="Build packages">
            {builds.map((item, index) => (
              <button key={item.id} type="button" className="nav-link" role="tab" aria-selected={tab === index} onClick={() => { setTab(index); setOpen(null); }}>
                {item.tab}
              </button>
            ))}
          </div>
          <div className="choosebuild_tabinfo" role="tabpanel">
            <div className="choosebuild_tabinfo_content">
              <h5 className="pay-label">{build.kicker}</h5>
              <h3>{build.title}</h3>
              <p>{build.copy}</p>
              <ul>
                {build.points.map((point) => (
                  <li key={point}><CircleCheck aria-hidden="true" size={20} color="#1300c9" />{point}</li>
                ))}
              </ul>
              <div className="choosebuild_points">
                <div className="choose_points"><p>Timeline: [X] weeks</p></div>
                <div className="choose_points"><p>From [PRICE]</p></div>
              </div>
            </div>
            <div className="choosebuild_tabinfo_image">
              <h5 className="pay-label">How you pay</h5>
              <h3>Pick the deal that fits your runway.</h3>
              <div className="pay-list">
                {payments.map(([title, copy]) => {
                  const id = `${build.id}-${title}`;
                  const expanded = open === id;
                  return (
                    <div className="pay-item" key={id}>
                      <button type="button" aria-expanded={expanded} aria-controls={id} onClick={() => setOpen(expanded ? null : id)}>{title}</button>
                      <div className="pay-panel" id={id} hidden={!expanded}><p>{copy}</p></div>
                    </div>
                  );
                })}
              </div>
              <p className="pay-note">Equity deals are offered selectively, agreed transparently before any work begins.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
