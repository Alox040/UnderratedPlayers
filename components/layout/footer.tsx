import Link from "next/link";
import { MarketingLogo } from "@/components/ui/marketing-logo";
import { content } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-bg-base pb-8 pt-16 text-white">
      <div className="mx-auto mb-16 grid max-w-container grid-cols-1 gap-12 px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-12">
        <div className="lg:col-span-2">
          <div className="mb-6 origin-left scale-90">
            <MarketingLogo />
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
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
          <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
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
          <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
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
      </div>

      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-8 md:flex-row lg:px-12">
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
          (c) {new Date().getFullYear()} {content.brand.name}. {content.footer.copyrightSuffix}
        </p>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
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
