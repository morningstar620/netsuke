import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "dark" | "light";

type SharedProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonLinkProps = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> & {
    href: string;
    disabled?: boolean;
  };

type ButtonElementProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonLinkProps | ButtonElementProps;

function buttonClass(variant: Variant, className?: string) {
  return cn(
    "group relative isolate inline-flex cursor-pointer items-center overflow-hidden rounded-pill px-button-x py-button-y text-[20px] leading-[20px] font-semibold no-underline shadow-button transition-transform duration-200 ease-in-out",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep",
    "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
    "motion-reduce:transition-none",
    variant === "dark" &&
      "border border-black bg-black text-white hover:border-deep",
    variant === "light" &&
      "border border-deep bg-white text-deep hover:scale-105 hover:text-white",
    className,
  );
}

function Wipe() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-0 -z-10 origin-top-left translate-x-[-100%] rotate-[10deg] rounded-[3rem] bg-brand-gradient transition-transform duration-200 ease-out group-hover:translate-x-0 group-hover:rotate-0 motion-reduce:transition-none"
    />
  );
}

function isAppRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "dark";

  if (props.href !== undefined) {
    const { href, className, children, disabled, ...anchorProps } = props;
    const classes = buttonClass(variant, className);

    if (disabled) {
      return (
        <a
          {...anchorProps}
          href={href}
          aria-disabled="true"
          tabIndex={-1}
          className={classes}
          onClick={(event) => {
            event.preventDefault();
            anchorProps.onClick?.(event);
          }}
        >
          <Wipe />
          {children}
        </a>
      );
    }

    if (isAppRoute(href)) {
      return (
        <Link href={href} className={classes} onClick={anchorProps.onClick}>
          <Wipe />
          {children}
        </Link>
      );
    }

    return (
      <a {...anchorProps} href={href} className={classes}>
        <Wipe />
        {children}
      </a>
    );
  }

  const { className, children, type = "button", ...buttonProps } = props;

  return (
    <button {...buttonProps} type={type} className={buttonClass(variant, className)}>
      <Wipe />
      {children}
    </button>
  );
}
