import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s | EddyAgent Admin" },
  robots: { index: false, follow: false },
};

/**
 * Admin-Shell — nur strukturell. Auth, Navigation und Daten folgen später.
 */
export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white px-6 py-4">
        <p className="text-sm font-medium text-neutral-500">
          Admin-Bereich (Vorbereitung)
        </p>
      </header>
      <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
    </div>
  );
}
