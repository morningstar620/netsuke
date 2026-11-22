"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { calculateSavings, calculatorInputs } from "@/lib/calculator";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const hoursFormat = new Intl.NumberFormat("en-US");

export function Calculator() {
  const [values, setValues] = useState(calculatorInputs.map((input) => input.value));
  const result = useMemo(
    () => calculateSavings(calculatorInputs.map((input, index) => ({ hours: input.hours, value: values[index] }))),
    [values],
  );

  return (
    <section id="cstm_calculator" className="section-y">
      <Container>
        <div className="calc-grid">
          <div>
            <div className="calculator_info">
              <SectionLabel align="start" tone="inverse">Do the math</SectionLabel>
              <h2>How much is busywork costing you?</h2>
            </div>
            {calculatorInputs.map((input, index) => (
              <div className="slider-row" key={input.id}>
                <label className="slider-label" htmlFor={input.id}>{input.label}</label>
                <div className="slider-controls">
                  <input
                    id={input.id}
                    type="range"
                    min={0}
                    max={100}
                    value={values[index]}
                    aria-label={input.aria}
                    style={{ ["--progress" as string]: `${values[index]}%` }}
                    onChange={(event) => {
                      const next = [...values];
                      next[index] = Number(event.target.value);
                      setValues(next);
                    }}
                  />
                  <output className="percentage" htmlFor={input.id}>{values[index]}%</output>
                </div>
              </div>
            ))}
          </div>
          <div className="result-card">
            <p className="result-kicker">You could reclaim, per year</p>
            <p className="total">{money.format(result.annual)}</p>
            <div className="stats">
              <div className="stat"><span className="stat-label">Hours freed / year</span><strong>{hoursFormat.format(result.hours)}</strong></div>
              <div className="stat"><span className="stat-label">Full-time roles’ worth</span><strong>{result.roles}</strong></div>
            </div>
            <p className="explanation">Estimate: people × hours × 48 weeks × automatable share × hourly cost. Your real number comes from a free process audit.</p>
            <a className="cta" href="#cstm_form">
              Get my real number
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
