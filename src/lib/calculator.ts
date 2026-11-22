export const HOURLY_RATE = 45;
export const ANNUAL_HOURS_PER_ROLE = 1920;

export type CalculatorInput = {
  id: string;
  label: string;
  hours: number;
  value: number;
  aria: string;
};

export const calculatorInputs: CalculatorInput[] = [
  { id: "discovery", label: "Discovery & UX", hours: 1800, value: 60, aria: "Discovery and UX automation potential" },
  { id: "build", label: "Core build (MVP)", hours: 2250, value: 80, aria: "Core build automation potential" },
  { id: "security", label: "Security hardening", hours: 900, value: 40, aria: "Security hardening automation potential" },
  { id: "testing", label: "Testing & optimization", hours: 1080, value: 20, aria: "Testing and optimization automation potential" },
];

export function calculateSavings(inputs: { hours: number; value: number }[]) {
  const hours = inputs.reduce((sum, input) => sum + (input.hours * input.value) / 100, 0);
  const rounded = Math.round(hours);
  return {
    annual: rounded * HOURLY_RATE,
    hours: rounded,
    roles: (rounded / ANNUAL_HOURS_PER_ROLE).toFixed(1),
  };
}
