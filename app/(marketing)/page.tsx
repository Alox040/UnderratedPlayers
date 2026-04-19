import { CtaSection } from "@/components/sections/cta-section";
import { Hero } from "@/components/sections/hero";
import { LeistungenSection } from "@/components/sections/leistungen-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LeistungenSection />
      <CtaSection />
    </>
  );
}
