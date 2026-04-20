import { testimonials } from "@/content/testimonials";
import { Card } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section className="border-y border-white/10 bg-bg-base py-16 text-white">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Stimmen aus dem Spiel
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="rounded-xl border-white/5 bg-bg-card p-6 shadow-none"
            >
              <p className="text-white">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm text-text-body">
                {t.author} - {t.context}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
