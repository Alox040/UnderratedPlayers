import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gradients } from "@/lib/tokens";
import { homeContent } from "@/lib/site";
import { marketingHeroImage } from "@/lib/site/marketing-media";

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden pb-20 pt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={marketingHeroImage}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover object-center opacity-60 mix-blend-screen"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: gradients.heroBgH }}
        />
        <div
          className="absolute inset-0"
          style={{ background: gradients.heroBgV }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-container grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
        <div className="max-w-xl">
          <h1 className="mb-6 text-6xl font-black leading-[1.05] tracking-tighter sm:text-7xl">
            {hero.titleLines.map((line) => (
              <span key={line.text} className={`block ${line.className}`}>
                {line.text}
              </span>
            ))}
          </h1>
          <p className="mb-10 text-sm font-medium leading-relaxed text-text-body sm:text-base">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="flex min-h-[44px] items-center gap-2 bg-brand-green px-6 py-3 text-cap font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90 sm:text-xs"
            >
              {hero.primaryCta.label} <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="flex min-h-[44px] items-center gap-2 border border-white/30 px-6 py-3 text-cap font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/5 sm:text-xs"
            >
              {hero.secondaryCta.label} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-20 hidden flex-col items-center justify-center text-center lg:mt-0 lg:flex">
          <div className="relative mb-8 h-64 w-64">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full overflow-visible drop-shadow-2xl"
              aria-hidden
            >
              <path
                d="M 20 20 L 20 60 C 20 85 60 85 60 60 L 60 40"
                fill="none"
                stroke="var(--color-brand-blue)"
                strokeWidth="18"
                strokeLinecap="round"
              />
              <path
                d="M 60 45 L 60 -10"
                fill="none"
                stroke="var(--color-brand-green)"
                strokeWidth="18"
                strokeLinecap="round"
              />
              <polygon
                points="35,10 60,-25 85,10"
                fill="var(--color-brand-green)"
              />
              <circle cx="40" cy="40" r="14" fill="white" />
              <path d="M 40 26 L 47 33 L 40 47 L 33 33 Z" fill="black" />
            </svg>
          </div>
          <h2 className="mb-2 text-3xl font-black uppercase tracking-widest text-white">
            {hero.kickerTitle}
          </h2>
          <h2 className="mb-4 text-5xl font-black uppercase leading-none tracking-tighter">
            {hero.kickerLines.map((line) => (
              <span key={line.text} className={`block ${line.className}`}>
                {line.text}
              </span>
            ))}
          </h2>
          <p className="text-sm font-bold uppercase tracking-widest text-text-body">
            {hero.kickerSubtitle.prefix}{" "}
            <span className="text-brand-blue">{hero.kickerSubtitle.accent}</span>{" "}
            {hero.kickerSubtitle.suffix}
          </p>
        </div>
      </div>
    </section>
  );
}
