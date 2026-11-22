import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: ReactNode;
  align?: "center" | "start";
  tone?: "default" | "inverse";
  className?: string;
};

export function SectionLabel({
  children,
  align = "center",
  tone = "default",
  className,
}: SectionLabelProps) {
  const inverse = tone === "inverse";

  return (
    <div
      className={cn(
        "mb-[30px] flex items-center gap-5 max-tablet:mb-5",
        align === "center"
          ? "justify-center"
          : "justify-start max-nav:justify-center",
        className,
      )}
    >
      <h6
        className={cn(
          "m-0 text-eyebrow uppercase",
          inverse ? "text-white" : "text-gradient",
        )}
      >
        {children}
      </h6>
      <span
        aria-hidden="true"
        className={cn(
          "relative hidden h-0.5 w-[70px] micro:block wide:hidden desktop:block",
          inverse ? "bg-white" : "bg-brand-gradient",
        )}
      >
        <span
          className={cn(
            "absolute top-1/2 -right-1.5 size-3 -translate-y-1/2 rounded-full",
            inverse ? "bg-white" : "bg-brand-gradient",
          )}
        />
      </span>
    </div>
  );
}
