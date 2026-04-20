"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Nav } from "@/components/layout/nav";
import { MarketingLogo } from "@/components/ui/marketing-logo";
import { content } from "@/lib/site";
import { cn } from "@/lib/utils";
import { gradients } from "@/lib/tokens";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg-base/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        <MarketingLogo />
        <Nav />

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="min-h-[44px] cursor-not-allowed border border-white/20 px-6 py-2 text-cap font-bold uppercase tracking-widest text-white/50 opacity-60"
          >
            {content.header.loginLabel}
          </button>
          <Link
            href={content.links.playerSurvey}
            className="inline-flex min-h-[44px] items-center px-6 py-2 text-cap font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
            style={{ backgroundImage: gradients.brand }}
          >
            {content.header.signupLabel}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/5 lg:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMobileMenuOpen ? "Navigation schliessen" : "Navigation oeffnen"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 px-6 pb-6 pt-4 lg:hidden",
          isMobileMenuOpen ? "block" : "hidden",
        )}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
          {content.nav.map(({ href, label }) => (
            <Link
              key={`mobile-${href}-${label}`}
              href={href}
              className="rounded-md border border-white/10 px-4 py-3 text-cap font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href={content.links.playerSurvey}
            className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-md px-4 py-3 text-cap font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
            style={{ backgroundImage: gradients.brand }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {content.header.signupLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
