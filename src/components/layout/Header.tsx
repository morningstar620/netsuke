import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinks } from "@/components/layout/NavLinks";

export function Header() {
  return (
    <header className="bg-white">
      <nav aria-label="Primary">
        <Container className="flex items-center justify-between py-2">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="NetsukeAI"
              width={221}
              height={37}
              priority
            />
          </Link>
          <div className="hidden min-w-0 flex-1 items-center nav:flex">
            <div className="mx-auto">
              <NavLinks layout="desktop" />
            </div>
            <Button href="#cstm_form" className="shrink-0">
              Get Started
              <ArrowRight aria-hidden="true" className="ml-2.5 size-[18px]" />
            </Button>
          </div>
          <MobileNav />
        </Container>
      </nav>
    </header>
  );
}
