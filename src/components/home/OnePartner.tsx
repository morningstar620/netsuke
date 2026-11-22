"use client";

import { useState } from "react";
import { ChevronRight, CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const tabs = [
  {
    id: "app",
    label: "App & Software Development",
    title: "Software that fits like it was made for you.",
    copy: "Web, mobile and enterprise platforms designed around how your business actually runs not how an off the shelf tool assumes it does.",
    points: ["iOS & Android apps", "SaaS & internal platforms", "ERP / CRM customisation", "Scalable cloud architecture"],
    stack: "TypeScript · Swift · Kotlin · Go · AWS / GCP / Azure",
  },
  {
    id: "ai",
    label: "AI Products",
    title: "AI that earns its place in your business.",
    copy: "Custom AI applications, agents and copilots — built on your data, tested on your edge cases, deployed where you control them.",
    points: ["AI agents & copilots", "AI on private company knowledge", "Document & vision AI", "Evaluation & monitoring"],
    stack: "LLMs · Vector search · Python · Private deployment",
  },
  {
    id: "automation",
    label: "Automation",
    title: "Delete the busywork. Keep the people.",
    copy: "End-to-end automation that connects your tools, moves your data and makes routine decisions — deployed quickly, quietly reliable.",
    points: ["Workflow automation", "System integrations & APIs", "AI document processing", "Reporting on autopilot"],
    stack: "Orchestration · APIs · Event pipelines · AI agents",
  },
  {
    id: "security",
    label: "Security Layer",
    title: "Protected from data loss and theft. For life.",
    copy: "Our extra security layer for the software we build and the systems you already run — backups, access control, monitoring and recovery.",
    points: ["Encrypted backups & recovery", "Zero-trust access", "24/7 threat monitoring", "Code audits & pen-testing"],
    stack: "Encryption · SIEM · DevSecOps · Zero-trust",
  },
  {
    id: "problem",
    label: "Problem-Solving Products",
    title: "A problem with no product for it? We build it.",
    copy: "We turn a painful, specific industry problem into a focused product — from discovery to launch, with you owning every line.",
    points: ["Discovery & validation", "Product design & UX", "MVP in weeks", "Scale-up engineering"],
    stack: "Product strategy · UX · Full-stack",
  },
  {
    id: "business",
    label: "Business & Tech Strategy",
    title: "Strategy from people who also ship.",
    copy: "Technology roadmaps, AI readiness and build-vs-buy calls from engineers who will actually build the answer.",
    points: ["AI readiness assessment", "Tech roadmap & architecture", "Build vs buy decisions", "Fractional CTO"],
    stack: "Strategy · Architecture · Delivery",
  },
];

export function OnePartner() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="cstm_onepartner" className="section-y">
      <Container>
        <div className="section-copy onepartner_info">
          <SectionLabel>One partner, every layer</SectionLabel>
          <h2>Stop stitching together five vendors.</h2>
        </div>
        <div className="onepartner_tabs">
          <div className="partner-row">
            <div className="nav" role="tablist" aria-orientation="vertical" aria-label="Partner services">
              {tabs.map((item, index) => (
                <button key={item.id} type="button" role="tab" id={`partner-tab-${item.id}`} aria-selected={active === index} aria-controls={`partner-panel-${item.id}`} onClick={() => setActive(index)}>
                  <span>{item.label}</span>
                  <ChevronRight aria-hidden="true" size={21} />
                </button>
              ))}
            </div>
            <div className="tab-content" role="tabpanel" id={`partner-panel-${tab.id}`} aria-labelledby={`partner-tab-${tab.id}`}>
              <div className="partnertabs_content">
                <h3>{tab.title}</h3>
                <p>{tab.copy}</p>
                <ul>
                  {tab.points.map((point) => (
                    <li key={point}>
                      <CircleCheck aria-hidden="true" size={26} color="#0455fd" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="tabs_text">{tab.stack}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
