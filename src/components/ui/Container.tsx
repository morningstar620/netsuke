import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-3 content:max-w-[540px] tablet:max-w-[720px] nav:max-w-[960px] desktop:max-w-[1140px] panel:max-w-[1440px] ultra:max-w-[1600px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
