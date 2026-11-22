import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cards = [
  { icon: "/images/icon_1.png", alt: "Build or integrate icon", title: "Build or integrate", heading: "Need an app or software? We're here.", copy: "Share your idea and leave it to us." },
  { icon: "/images/icon_2.png", alt: "Automation icon", title: "Automation", heading: "Busywork, gone. Quickly.", copy: "Replace your repititive idea with AI and automation. Be Smart!" },
  { icon: "/images/icon_3.png", alt: "Protection icon", title: "Protection", heading: "Leave security to us.", copy: "You move ahead while we build security layer around your business- no data loss, no theft." },
  { icon: "/images/icon_4.png", alt: "Launch icon", title: "Launch", heading: "Within weeks!", copy: "And all set to go!" },
];

export function WhatWeDo() {
  return (
    <section id="cstm_whatwedo" className="section-y">
      <Container>
        <div className="section-copy">
          <SectionLabel>What we Do</SectionLabel>
          <h2>Build it. Bot it. Lock it.</h2>
        </div>
        <div className="main_card">
          {cards.map((card) => (
            <article className="whatwedo_card" key={card.title}>
              <div className="card_icon">
                <Image src={card.icon} alt={card.alt} width={75} height={75} />
              </div>
              <h5>{card.title}</h5>
              <h4>{card.heading}</h4>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
