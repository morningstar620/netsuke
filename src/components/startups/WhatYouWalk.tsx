import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const left = [
  ["/images/build_icon_one.png", "A working MVP", "Real screens, real flows, real data. Investors tap through it themselves."],
  ["/images/build_icon_two.png", "A due-diligence roadmap.", "Architecture, scaling plan and costs — the answers technical investors ask for."],
] as const;

const right = [
  ["/images/build_icon_three.png", "A pitch-ready demo", "A rehearsed live demo flow that tells your story in under three minutes."],
  ["/images/build_icon_four.png", "Code you won't rebuild", "Secure, scalable foundations  so funding goes into growth, not rewrites."],
] as const;

function Cards({ items }: { items: readonly (readonly [string, string, string])[] }) {
  return items.map(([icon, title, copy]) => (
    <article className="walk_card" key={title}>
      <div className="card_icon"><Image src={icon} alt="" width={75} height={75} /></div>
      <h4>{title}</h4>
      <p>{copy}</p>
    </article>
  ));
}

export function WhatYouWalk() {
  return (
    <section id="cstm_whatyouwalk" className="section-y">
      <Container>
        <div className="walk-grid">
          <div className="whatyouwalk_info span-5">
            <SectionLabel align="start">What you walk into the room with</SectionLabel>
            <h2>Not slides about a product.<br />The product.</h2>
            <p>Investor ready MVP development that gives you something real to demo, test and defend in due diligence.</p>
          </div>
          <div className="whatyouwalk_card span-7">
            <div className="walk_marginzero"><Cards items={left} /></div>
            <div className="walk_margintop"><Cards items={right} /></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
