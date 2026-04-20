import { homeContent } from "@/lib/site";

/**
 * Kennzahlen-Leiste gemäß Figma-Export.
 */
export function StatsStrip() {
  const { stats } = homeContent;

  return (
    <div className="relative z-20 mx-auto mb-20 w-full max-w-container px-6 lg:mt-0 lg:px-12 -mt-10">
      <div className="grid grid-cols-2 gap-4 rounded-lg border border-white/5 bg-bg-card py-8 px-4 shadow-2xl md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-4 px-4 text-center md:flex-row md:text-left"
            >
              <div className="rounded-full bg-white/5 p-3">
                <Icon size={28} className={stat.iconClass} aria-hidden />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight text-brand-green lg:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-label font-bold uppercase tracking-widest text-white sm:text-xs">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
