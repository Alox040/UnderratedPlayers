import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gradients } from "@/lib/tokens";
import { homeContent } from "@/lib/site";
import { marketingCtaGlobeImage } from "@/lib/site/marketing-media";

/**
 * CTA-Banner gemäß Figma-Export.
 */
export function CtaSection() {
  const { cta } = homeContent;

  return (
    <section className="mx-auto w-full max-w-container px-6 pb-24 lg:px-12">
      <div className="relative flex w-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-bg-card md:flex-row">
        <div className="absolute bottom-0 left-0 top-0 w-full overflow-hidden opacity-40 mix-blend-screen md:w-1/3">
          <Image
            src={marketingCtaGlobeImage}
            alt={cta.imageAlt}
            fill
            className="object-cover object-left"
            sizes="(min-width: 768px) 33vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-card" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col items-center gap-8 p-12 text-center md:ml-[10%] md:flex-row md:justify-between md:p-20 md:text-left xl:ml-[25%]">
          <div className="max-w-lg">
            <h2 className="mb-4 text-3xl font-black uppercase leading-tight tracking-tight text-white lg:text-4xl">
              {cta.titleLines.map((line) => (
                <span
                  key={line.text}
                  className={`block ${line.className ?? "text-white"}`}
                >
                  {line.text}
                </span>
              ))}
            </h2>
            <p className="text-sm font-medium leading-relaxed text-white/70">
              {cta.description}
            </p>
          </div>
          <div>
            <Link
              href={cta.button.href}
              className="flex min-h-[44px] flex-shrink-0 items-center gap-2 px-8 py-4 text-cap font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
              style={{ backgroundImage: gradients.greenCta }}
            >
              {cta.button.label} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
