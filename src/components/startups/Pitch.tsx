import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  ["/images/pitch_one.png", "[WEEK 1]", "Shape The Idea", "Pressure-test the problem, the user and the one feature that must wow."],
  ["/images/pitch_two.png", "[WEEKS 2–X]", "Design & Build", "Weekly builds you can show advisors and early users as you go."],
  ["/images/pitch_three.png", "[WEEK X]", "Polish The Demo", "Script and rehearse the demo path so nothing breaks on stage."],
  ["/images/pitch_four.png", "PITCH DAY & AFTER", "Raise & Scale", "  Join technical due-diligence calls, then help you scale once funded."],
] as const;

export function Pitch() {
  return (
    <section id="cstm_pitch" className="section-y">
      <Container>
        <div className="section-copy">
          <SectionLabel>Idea to pitch day</SectionLabel>
          <h2>Fast. Not rushed.</h2>
          <p>A typical MVP development timeline, from idea to pitch day.</p>
        </div>
        <div className="pitch_content">
          {steps.map(([icon, when, title, copy]) => (
            <article className="pitch_content_info" key={title}>
              <div className="pitch_img"><Image src={icon} alt="" width={135} height={135} className="mx-auto h-auto w-full max-w-[30%]" /></div>
              <h3>{when}</h3>
              <h4>{title}</h4>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
