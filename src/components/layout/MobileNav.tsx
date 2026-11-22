"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NavLinks } from "@/components/layout/NavLinks";
import { cn } from "@/lib/utils";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const openedOnce = useRef(false);
  const titleId = useId();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };

    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const previous = {
      html: html.style.overflow,
      body: body.style.overflow,
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = previous.html;
      body.style.overflow = previous.body;
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      openedOnce.current = true;
      return;
    }

    if (openedOnce.current) {
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusable = () =>
      Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => element.tabIndex !== -1,
      );

    const frame = window.requestAnimationFrame(() => {
      focusable()[0]?.focus();
    });

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          "relative z-[1060] size-[52px] overflow-hidden border border-[rgb(19_0_201/40%)] bg-transparent nav:hidden",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep",
        )}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <Menu
          aria-hidden="true"
          className={cn(
            "absolute top-1/2 left-1/2 size-7 -translate-x-1/2 -translate-y-1/2 text-deep transition duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none",
            open ? "scale-[.55] rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
          )}
        />
        <X
          aria-hidden="true"
          className={cn(
            "absolute top-1/2 left-1/2 size-7 -translate-x-1/2 -translate-y-1/2 text-deep transition duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none",
            open ? "scale-100 rotate-0 opacity-100" : "scale-[.55] -rotate-90 opacity-0",
          )}
        />
      </button>

      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-[1040] border-0 bg-[rgba(1,0,5,.56)] backdrop-blur-[5px] nav:hidden",
          "transition-[opacity,visibility] duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={close}
      />

      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={open ? undefined : true}
        inert={open ? undefined : true}
        className={cn(
          "fixed top-0 left-0 z-[1050] flex h-dvh w-[min(88vw,390px)] flex-col items-start overflow-x-hidden overflow-y-auto bg-white p-[30px] shadow-[22px_0_70px_rgba(1,0,5,.18)] nav:hidden",
          "transition-[transform,visibility] duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none",
          open
            ? "visible translate-x-0 delay-0"
            : "invisible -translate-x-[102%] delay-[0ms,650ms]",
        )}
      >
        <Link href="/" id={titleId} onClick={close}>
          <Image
            src="/images/logo.png"
            alt="NetsukeAI"
            width={221}
            height={37}
          />
        </Link>
        <NavLinks layout="drawer" onNavigate={close} />
        <Button href="#cstm_form" className="px-[25px] py-[22px]" onClick={close}>
          Get Started
          <ArrowRight aria-hidden="true" className="ml-2.5 size-[18px]" />
        </Button>
      </div>
    </>
  );
}
