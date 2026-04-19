import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeContent } from "@/lib/site";
import { marketingPlayerImages } from "@/lib/site/marketing-media";

export function FeaturesSection() {
  const { features } = homeContent;

  return (
    <section className="mx-auto w-full max-w-container px-6 pb-24 text-white lg:px-12">
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="accent-bar-green" />
              <h3 className="text-xl font-black uppercase tracking-widest">
                {features.talentsTitle}
              </h3>
            </div>
            <Link
              href={features.talentsCta.href}
              className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-brand-green hover:underline"
            >
              {features.talentsCta.label} <ChevronRight size={14} aria-hidden />
            </Link>
          </div>

          <div className="relative">
            <div
              className="absolute top-1/3 -left-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1f2937] transition-colors hover:bg-white/20"
              aria-hidden
            >
              <ChevronLeft size={16} className="text-white" />
            </div>
            <div
              className="absolute top-1/3 -right-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1f2937] transition-colors hover:bg-white/20"
              aria-hidden
            >
              <ChevronRight size={16} className="text-white" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {features.players.map((player, index) => (
                <div
                  key={player.name}
                  className="group overflow-hidden rounded-xl border border-white/5 bg-bg-card transition-all hover:border-white/15"
                >
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-[#152132] to-bg-card">
                    <div className="absolute left-4 top-4 z-20">
                      <span className="rounded-sm bg-brand-green px-2 py-1 text-[10px] font-black text-black">
                        {player.position}
                      </span>
                    </div>
                    <div className="absolute right-4 top-4 z-20 text-right leading-none">
                      <div className="text-3xl font-black text-brand-green drop-shadow-md">
                        {player.rating}
                      </div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-white/70">
                        {features.ratingLabel}
                      </div>
                    </div>

                    <Image
                      src={marketingPlayerImages[index]}
                      alt={player.name}
                      fill
                      className="absolute bottom-0 left-1/2 w-[85%] -translate-x-1/2 object-contain opacity-80 mix-blend-luminosity transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h4 className="mb-1 text-lg font-black uppercase tracking-wide">
                      {player.name}
                    </h4>
                    <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/50">
                      {player.age} YEARS {features.ageCountrySeparator} {player.country}
                    </div>
                    <p className="mb-6 min-h-[48px] text-xs leading-relaxed text-white/60">
                      {player.description}
                    </p>
                    <Link
                      href={player.profileHref}
                      className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-green hover:underline"
                    >
                      {player.profileCtaLabel} <ChevronRight size={14} aria-hidden />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="xl:col-span-4">
          <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="accent-bar-blue" />
            <h3 className="text-xl font-black uppercase tracking-widest">
              {features.missionTitle}
            </h3>
          </div>

          <div className="h-[calc(100%-4rem)] rounded-xl border border-white/5 bg-bg-card p-8">
            <p className="mb-8 text-sm leading-relaxed text-white/80">
              {features.missionDescription}
            </p>

            <ul className="mb-10 space-y-8">
              {features.missionItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <Icon size={24} className={item.iconClass} aria-hidden />
                    </div>
                    <div>
                      <h5 className="mb-1 text-sm font-bold uppercase tracking-wide">
                        {item.title}
                      </h5>
                      <p className="text-xs leading-relaxed text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Link
              href={features.missionCta.href}
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-green hover:underline"
            >
              {features.missionCta.label} <ChevronRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
