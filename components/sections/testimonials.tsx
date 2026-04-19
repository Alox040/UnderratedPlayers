import { testimonials } from "@/content/testimonials";
import { Card } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section className="border-y border-neutral-100 bg-neutral-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Stimmen aus dem Spiel
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.id}>
              <p className="text-neutral-800">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm text-neutral-500">
                {t.author} — {t.context}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
