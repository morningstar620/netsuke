export type NavItem = {
  label: string;
  href: string | null;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How We Work", href: "#cstm_work" },
  { label: "Services", href: null },
  { label: "Starts Up", href: "/startups" },
  { label: "AI Agents", href: null },
];
