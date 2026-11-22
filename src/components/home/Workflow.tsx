"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChartColumn,
  ChartLine,
  Cog,
  Lightbulb,
  ListChecks,
  Menu,
  Network,
  Target,
  UserCog,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Step = {
  tab: string;
  title: string;
  accent: string;
  description: string;
  you: string;
  deliver: string;
  Icon: LucideIcon;
};

const workflows: Record<"idea" | "busywork", Step[]> = {
  idea: [
    { tab: "Understand your idea", title: "Understand your ", accent: "idea", description: "You share the idea — rough is fine. We ask the questions that matter, so we understand the business behind it, not just the feature list.", you: "Share the idea, goals and constraints", deliver: "A clear scope brief, under NDA", Icon: Lightbulb },
    { tab: "Build the strategy", title: "Build the ", accent: "strategy", description: "We turn the idea into a development strategy: the right tech, a phased roadmap, a threat model and fixed milestones you can hold us to.", you: "Approve the plan and priorities", deliver: "Roadmap, stack, timeline and cost", Icon: Target },
    { tab: "Execution", title: "Build with ", accent: "precision", description: "Our engineers build in weekly sprints with security checks on every change. You see a working build every week — no surprises.", you: "Review weekly builds, give feedback", deliver: "Secure, tested, documented software", Icon: UserCog },
    { tab: "Release & monitor", title: "Release & ", accent: "monitor", description: "We launch, watch performance and threats around the clock, and keep shipping improvements as your users and business grow.", you: "Run your business and grow", deliver: "Monitoring, protection, improvements", Icon: ChartColumn },
  ],
  busywork: [
    { tab: "Understand your requirement", title: "Understand your ", accent: "requirement", description: "STell us what eats your team’s time. We sit with your workflow and learn how work actually moves through your business.", you: "Walk us through a normal week", deliver: "A map of your real workflows", Icon: ListChecks },
    { tab: "Find the busywork", title: "Find the ", accent: "busywork", description: "We pinpoint the repetitive, rules-based work — data entry, reports, approvals, follow-ups — and rank it by time saved.", you: "Pick what to automate first", deliver: "Ranked automation plan with ROI", Icon: Network },
    { tab: "Automate the work", title: "Automate the ", accent: "work", description: "We build AI agents and integrations that do the work end-to-end, with a human in the loop for anything that needs judgement.", you: "Test with real cases", deliver: "Live, secure automations", Icon: Cog },
    { tab: "Monitor to improve", title: "Monitor to ", accent: "improve", description: "Every automation is monitored. We catch exceptions, tune accuracy and find the next process worth automating.", you: "Enjoy the hours back", deliver: "Reports, fixes and new automations", Icon: ChartLine },
  ],
};

export function Workflow() {
  const [mode, setMode] = useState<"idea" | "busywork">("idea");
  const [step, setStep] = useState(0);
  const steps = workflows[mode];
  const current = steps[step];

  const selectMode = (next: "idea" | "busywork") => {
    if (next === mode) return;
    setMode(next);
    setStep(0);
  };

  return (
    <section id="cstm_work" className="section-y">
      <Container>
        <div className="section-copy work_info">
          <SectionLabel tone="inverse">How we work</SectionLabel>
          <h2>
            Share it with us.
            <br />
            Watch it come to life.
          </h2>
          <p className="work-lead">Four steps from your first message to a product that keeps getting better. Pick what you&apos;re bringing us.</p>
          <div className="howwork_btn" role="group" aria-label="Workflow type">
            <button type="button" className={mode === "idea" ? "active" : undefined} aria-pressed={mode === "idea"} onClick={() => selectMode("idea")}>I have an idea</button>
            <button type="button" className={mode === "busywork" ? "active" : undefined} aria-pressed={mode === "busywork"} onClick={() => selectMode("busywork")}>I have busywork</button>
          </div>
        </div>
        <div className="howwork_tabs">
          <div className="workflow-tabs" role="tablist" aria-label="Workflow steps">
            {steps.map((item, index) => {
              const Icon = item.Icon;
              return (
                <button key={item.tab} type="button" role="tab" aria-selected={step === index} id={`workflow-tab-${mode}-${index}`} aria-controls={`workflow-panel-${mode}-${index}`} onClick={() => setStep(index)}>
                  <span className="workstabs_icon"><Icon aria-hidden="true" size={24} /></span>
                  <span className="workstabs_info">
                    <p>0{index + 1}</p>
                    <span>{item.tab}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="workflow-panel" role="tabpanel" id={`workflow-panel-${mode}-${step}`} aria-labelledby={`workflow-tab-${mode}-${step}`}>
            <div className="tabs_content">
              <div className="tabs_info">
                <p className="step-kicker">STEP {step + 1} OF 4</p>
                <h3 className="step-title">{current.title}<span>{current.accent}</span></h3>
                <p>{current.description}</p>
                <div className="tabs_card">
                  <div className="work_card">
                    <div className="card_icon"><Menu aria-hidden="true" size={22} /></div>
                    <div className="card_info"><p>You do</p><strong>{current.you}</strong></div>
                  </div>
                  <div className="work_card">
                    <div className="card_icon"><Users aria-hidden="true" size={22} /></div>
                    <div className="card_info"><p>We deliver</p><strong>{current.deliver}</strong></div>
                  </div>
                </div>
                <div className="panel-controls">
                  <button type="button" className="circle-btn" aria-label="Previous step" disabled={step === 0} onClick={() => setStep((value) => Math.max(0, value - 1))}><ArrowLeft aria-hidden="true" size={18} /></button>
                  <button type="button" className="circle-btn" aria-label="Next step" disabled={step === 3} onClick={() => setStep((value) => Math.min(3, value + 1))}><ArrowRight aria-hidden="true" size={18} /></button>
                </div>
              </div>
              <div className="tabs_img">
                <Image src="/images/work_flow.gif" alt="work-flow" width={613} height={459} className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
