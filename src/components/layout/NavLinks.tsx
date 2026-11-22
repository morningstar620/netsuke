"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { primaryNav, type NavItem } from "@/lib/navigation";

type NavLinksProps = {
  layout: "desktop" | "drawer";
  onNavigate?: () => void;
};

function isCurrent(pathname: string, item: NavItem) {
  return item.href === pathname;
}

export function NavLinks({ layout, onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const drawer = layout === "drawer";

  return (
    <ul
      className={cn(
        "m-0 list-none p-0",
        drawer
          ? "mt-[30px] mb-[30px] flex w-full flex-col items-start"
          : "flex items-center",
      )}
    >
      {primaryNav.map((item, index) => {
        const current = isCurrent(pathname, item);
        const edge = index === 0 || index === primaryNav.length - 1;
        const className = cn(
          "font-normal text-grey transition-colors duration-500 hover:text-deep",
          drawer
            ? "mb-[23px] text-[21px] leading-tight"
            : cn("text-[20px] leading-5", edge ? "mx-0" : "mx-px desktop:mx-[27px]"),
          current && "text-deep",
        );

        return (
          <li key={item.label}>
            {item.href ? (
              item.href.startsWith("/") ? (
                <Link
                  href={item.href}
                  className={className}
                  aria-current={current ? "page" : undefined}
                  onClick={onNavigate}
                >
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} className={className} onClick={onNavigate}>
                  {item.label}
                </a>
              )
            ) : (
              <span className={cn(className, "cursor-default hover:text-grey")} aria-disabled="true">
                {item.label}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
