import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroStage } from "@/components/home/HeroStage";
import "@/components/home/hero.css";

const heading = "Got a bold idea and a pitch coming up?";

function renderLetters(text: string, delays: { index: number }) {
  const nodes: ReactNode[] = [];
  let word: ReactNode[] = [];
  let wordKey = 0;
  const flush = () => {
    if (word.length === 0) return;
    nodes.push(<span className="hero-word" key={`word-${wordKey}`}>{word}</span>);
    word = [];
  };
  Array.from(text).forEach((character, index) => {
    if (/\s/.test(character)) {
      flush();
      nodes.push(character);
      return;
    }
    if (word.length === 0) wordKey = delays.index;
    const delay = delays.index * 35;
    delays.index += 1;
    word.push(
      <span key={`letter-${index}`} className="hero-letter" style={{ "--hero-letter-delay": `${delay}ms` } as CSSProperties}>
        {character}
      </span>,
    );
  });
  flush();
  return nodes;
}

function Icon({ tone }: { tone: "light" | "deep" }) {
  return (
    <span className={tone === "deep" ? "hero-icon ml-2.5 inline-flex text-deep [-webkit-text-fill-color:#1300c9] group-hover:text-white group-hover:[-webkit-text-fill-color:#fff]" : "hero-icon ml-2.5 inline-flex"}>
      <ArrowRight aria-hidden="true" className="size-[18px]" />
    </span>
  );
}

export function StartupsHero() {
  const delays = { index: 0 };
  return (
    <HeroStage>
      <div className="pt-[100px] max-nav:pt-[60px]">
        <Container>
          <div className="hero_content text-center">
            <div className="gradient_color mb-10 inline-block rounded-pill border border-deep bg-white px-[22px] py-[11px] max-[576px]:hidden">
              <ul className="m-0 p-0">
                <li className="inline-block text-[16px] leading-4 font-normal uppercase text-gradient">Custom AI agent development & deployment</li>
              </ul>
            </div>
            <h1 aria-label={heading} className="mx-auto mb-[30px] w-full max-w-[71%] max-nav:max-w-full">
              {renderLetters("Got a bold idea ", delays)}
              <br />
              {renderLetters("and a pitch ", delays)}
              <span className="text-deep">{renderLetters("coming up?", delays)}</span>
            </h1>
            <p className="hero_change_color hero-copy mx-auto w-full max-w-[50%] max-nav:max-w-full">We build the prototype that makes investors lean in.</p>
            <p className="hero-copy mx-auto mb-[50px] w-full max-w-[50%] max-nav:max-w-full max-[767px]:mb-[30px]">From napkin sketch to a working MVP investors can click, test and believe in — designed, engineered and secured by the same senior team that builds for established businesses worldwide.</p>
            <div className="hero_btn max-[767px]:w-full">
              <Button href="#cstm_form" className="max-[767px]:mb-5 max-[767px]:w-full max-[767px]:max-w-[55%] max-[767px]:justify-center max-[576px]:max-w-full">
                Apply As A Founder
                <Icon tone="light" />
              </Button>
              <Button href="#cstm_form" className="ml-[27px] border-black bg-transparent bg-brand-gradient bg-clip-text text-transparent [-webkit-text-fill-color:transparent] hover:border-deep hover:text-white hover:[-webkit-text-fill-color:#fff] max-[767px]:mb-5 max-[767px]:w-full max-[767px]:max-w-[55%] max-[767px]:justify-center max-[576px]:ml-0 max-[576px]:max-w-full">
                Choose your build
                <Icon tone="deep" />
              </Button>
            </div>
            <p className="hero_small hero-copy mx-auto w-full max-w-[50%] max-nav:max-w-full">Limited founder slots each quarter · NDA before you share a word</p>
          </div>
          <div className="banner_image mt-[60px] text-center max-[767px]:mt-5">
            <Image src="/images/startups_banner.png" alt="Founder pitch prototype on a laptop" width={1585} height={457} priority className="mx-auto block h-auto w-full max-w-[80%] object-contain max-nav:max-w-full" />
          </div>
        </Container>
      </div>
    </HeroStage>
  );
}
