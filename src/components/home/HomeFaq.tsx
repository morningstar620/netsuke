import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FaqList } from "@/components/shared/FaqList";

const items = [
  { question: "Why not just hire the cheapest team?", answer: "You can. Then you pay twice — once to build it, once to fix it. We’re the team you call so there’s no second bill." },
  { question: "Can you protect systems you didn’t build?", answer: "Yes. Our security layer can wrap around your existing apps, servers and data — we start with an audit and close the gaps." },
  { question: "Who owns the code?", answer: "You. 100%. Full source, docs and access handed over. No lock-in, no hostage situations." },
  { question: "You’re based in India — how does that work for international clients?", answer: "Smoothly. We keep live overlap hours with the Americas, Europe, the Middle East and Asia-Pacific, contract and invoice in USD, GBP or EUR, and work in your tools — Teams, Slack Connect, email or WhatsApp. Your senior team and partner lead are named from day one." },
  { question: "Will AI replace my team?", answer: "Nah. It replaces the copy-paste work your team secretly hates, so they can do the job you hired them for." },
  { question: "Why only a limited number of partners?", answer: "Because depth beats volume. A capped roster means your business gets our senior people, full attention and real accountability — not a slot in a queue." },
  { question: "How does performance-based pricing work?", answer: "We agree upfront what we’re measured on — revenue growth, profit or cost saved — and take a share of that gain. Hybrid models with a smaller base fee are available." },
];

export function HomeFaq() {
  return (
    <section id="cstm_faq" className="section-y">
      <Container>
        <div className="faq-grid">
          <div className="faq_info span-5">
            <SectionLabel align="start">NetsukeAI FAQ</SectionLabel>
            <h2>We won&apos;t ghost you.</h2>
            <p>Straight answers. No fine print.</p>
          </div>
          <div className="span-7">
            <FaqList items={items} label="home-faq" />
          </div>
        </div>
      </Container>
    </section>
  );
}
