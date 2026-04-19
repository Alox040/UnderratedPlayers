import Link from "next/link";
import { content } from "@/lib/site";

export function MarketingLogo() {
  return (
    <Link href={content.links.home} className="flex cursor-pointer items-center gap-2">
      <div className="relative h-10 w-10 shrink-0">
        <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
          <path
            d="M 20 20 L 20 60 C 20 85 60 85 60 60 L 60 40"
            fill="none"
            stroke="var(--color-brand-blue)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M 60 45 L 60 10"
            fill="none"
            stroke="var(--color-brand-green)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <polygon
            points="40,25 60,0 80,25"
            fill="var(--color-brand-green)"
          />
          <circle cx="40" cy="40" r="10" fill="white" />
          <path d="M 40 30 L 45 35 L 40 45 L 35 35 Z" fill="black" />
          <circle cx="48" cy="42" r="2" fill="black" />
          <circle cx="32" cy="42" r="2" fill="black" />
          <circle cx="40" cy="48" r="2" fill="black" />
        </svg>
      </div>
      <div className="flex flex-col justify-center leading-none">
        <span className="text-sm font-black tracking-wider text-brand-blue">
          {content.brand.logoLines[0]}
        </span>
        <span className="text-sm font-black tracking-wider text-brand-green">
          {content.brand.logoLines[1]}
        </span>
      </div>
    </Link>
  );
}
