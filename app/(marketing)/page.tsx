import { CtaSection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsStrip } from "@/components/sections/stats-strip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <FeaturesSection />
      <CtaSection />
    </>
  );
}
