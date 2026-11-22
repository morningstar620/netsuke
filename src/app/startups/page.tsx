import type { Metadata } from "next";
import { site } from "@/lib/site";
import { StartupsHero } from "@/components/startups/Hero";
import { WhatYouWalk } from "@/components/startups/WhatYouWalk";
import { ChooseBuild } from "@/components/startups/ChooseBuild";
import { Pitch } from "@/components/startups/Pitch";
import { QuickVibe } from "@/components/startups/QuickVibe";
import { StartupsFaq } from "@/components/startups/Faq";

export const metadata: Metadata = {
  title: "Startups",
  description: site.startupsDescription,
};

export default function StartupsPage() {
  return (
    <main className="page-sections">
      <StartupsHero />
      <WhatYouWalk />
      <ChooseBuild />
      <Pitch />
      <QuickVibe />
      <StartupsFaq />
    </main>
  );
}
