import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Partnership } from "@/components/home/Partnership";
import { FlipCards } from "@/components/home/FlipCards";
import { Workflow } from "@/components/home/Workflow";
import { Protection } from "@/components/home/Protection";
import { Growth } from "@/components/home/Growth";
import { OnePartner } from "@/components/home/OnePartner";
import { Calculator } from "@/components/home/Calculator";
import { Commitments } from "@/components/home/Commitments";
import { HomeFaq } from "@/components/home/HomeFaq";

export default function HomePage() {
  return (
    <main className="page-sections">
      <Hero />
      <WhatWeDo />
      <Partnership />
      <FlipCards />
      <Workflow />
      <Protection />
      <Growth />
      <OnePartner />
      <Calculator />
      <Commitments />
      <HomeFaq />
    </main>
  );
}
