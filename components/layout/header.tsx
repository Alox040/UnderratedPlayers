import Link from "next/link";
import { MarketingLogo } from "@/components/ui/marketing-logo";
import { Nav } from "@/components/layout/nav";
import { content } from "@/lib/site";
import { gradients } from "@/lib/tokens";

export function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/5 bg-bg-base/90 px-6 py-4 backdrop-blur-md lg:px-12">
      <MarketingLogo />
      <Nav />
      <div className="hidden items-center gap-4 lg:flex">
        <button
          type="button"
          className="border border-white/20 px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/5"
        >
          {content.header.loginLabel}
        </button>
        <Link
          href={content.links.playerSurvey}
          className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          style={{ backgroundImage: gradients.brand }}
        >
          {content.header.signupLabel}
        </Link>
      </div>
    </header>
  );
}
