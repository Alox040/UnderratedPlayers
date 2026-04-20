"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/lib/site";
import { cn } from "@/lib/utils";

function linkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Hauptnavigation"
      className="hidden items-center gap-8 text-cap font-bold uppercase tracking-widest text-white lg:flex"
    >
      {content.nav.map(({ href, label }) => {
        const active = linkActive(pathname, href);
        return (
          <Link
            key={`${href}-${label}`}
            href={href}
            className={cn(
              "border-b-2 pb-1 transition-colors",
              active
                ? "border-brand-green text-white"
                : "border-transparent text-white hover:text-white/70",
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
