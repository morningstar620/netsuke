"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqList({ items, label }: { items: FaqItem[]; label: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="cstm_faqcontent">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `${label}-panel-${index}`;
        const number = String(index + 1).padStart(2, "0");
        return (
          <div className="accordion-item" key={item.question}>
            <h3 className="accordion-header">
              <button
                type="button"
                className="accordion-button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span className="faq_number">{number}</span>
                <span>{item.question}</span>
              </button>
            </h3>
            <div id={panelId} className="accordion-panel" hidden={!expanded}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
