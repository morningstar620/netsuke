import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FaqList } from "@/components/shared/FaqList";

const items = [
  { question: "Do you take equity?", answer: "Sometimes. For founders we really believe in, we offer a reduced fee in exchange for a small equity stake — agreed transparently before any work starts." },
  { question: "Who owns the code and IP?", answer: "You do, 100%. Investors will check — and they’ll find clean, complete ownership." },
  { question: "Will we need to rebuild after we raise?", answer: "Not with a Launch-ready MVP. We build on production-grade foundations, so your round goes into growth, not rewrites." },
  { question: "Can you help with the pitch itself?", answer: "We prep and rehearse your live demo, and join technical due-diligence calls to handle the hard questions." },
  { question: "Is my idea safe with you?", answer: "NDA before you share a word. Your idea stays yours." },
];

export function StartupsFaq() {
  return (
    <section id="cstm_faq" className="section-y startup_faq">
      <Container>
        <div className="faq-grid">
          <div className="faq_info startup_faq_info span-5">
            <SectionLabel align="start">Founder FAQ</SectionLabel>
            <h2>The stuff founders actually ask.</h2>
            <p>MVP and prototype development FAQ for startup founders.</p>
          </div>
          <div className="span-7">
            <FaqList items={items} label="founder-faq" />
          </div>
        </div>
      </Container>
    </section>
  );
}
