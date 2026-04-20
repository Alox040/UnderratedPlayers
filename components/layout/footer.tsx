import Link from "next/link";
import { ArrowRight, Instagram, Twitter, Youtube } from "lucide-react";
import { MarketingLogo } from "@/components/ui/marketing-logo";
import { content } from "@/lib/site";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-bg-base pb-8 pt-16 text-white">
      <div className="mx-auto mb-16 grid max-w-container grid-cols-1 gap-12 px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-12">
        <div className="md:col-span-3 lg:col-span-2">
          <div className="mb-6 origin-left scale-90">
            <MarketingLogo />
          </div>
          <div className="mb-6 flex gap-4 text-white/50">
            <span
              className="cursor-default opacity-50"
              aria-label="Instagram coming soon"
            >
              <Instagram size={20} />
            </span>
            <span
              className="cursor-default opacity-50"
              aria-label="Twitter coming soon"
            >
              <Twitter size={20} />
            </span>
            <span
              className="cursor-default opacity-50"
              aria-label="TikTok coming soon"
            >
              <TikTokIcon />
            </span>
            <span
              className="cursor-default opacity-50"
              aria-label="YouTube coming soon"
            >
              <Youtube size={20} />
            </span>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-label font-bold uppercase tracking-widest text-white/40">
            {content.footer.platformTitle}
          </h4>
          <ul className="space-y-3 text-xs font-medium text-white/70">
            {content.footer.platformLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-label font-bold uppercase tracking-widest text-white/40">
            {content.footer.companyTitle}
          </h4>
          <ul className="space-y-3 text-xs font-medium text-white/70">
            {content.footer.companyLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-label font-bold uppercase tracking-widest text-white/40">
            {content.footer.supportTitle}
          </h4>
          <ul className="space-y-3 text-xs font-medium text-white/70">
            {content.footer.supportLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 lg:col-span-2 lg:col-start-4 lg:row-start-1">
          <h4 className="mb-2 text-label font-bold uppercase tracking-widest text-white">
            Stay Updated
          </h4>
          <p className="mb-4 text-xs text-white/50">
            Subscribe to our newsletter
            <br />
            for the latest updates.
          </p>
          <div className="flex overflow-hidden rounded-md border border-white/20 bg-white/5">
            <input
              type="email"
              placeholder="Enter your email"
              readOnly
              className="flex-1 border-none bg-transparent px-4 py-3 text-xs text-white outline-none placeholder:text-white/40"
              aria-label="Email for newsletter"
            />
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="flex cursor-not-allowed items-center justify-center bg-brand-blue/60 px-4 opacity-60"
              aria-label="Newsletter submit unavailable"
            >
              <ArrowRight size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-8 md:flex-row lg:px-12">
        <p className="text-label font-bold uppercase tracking-widest text-white/40">
          (c) {new Date().getFullYear()} {content.brand.name}. {content.footer.copyrightSuffix}
        </p>
        <div className="flex gap-6 text-label font-bold uppercase tracking-widest text-white/40">
          {content.footer.legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
