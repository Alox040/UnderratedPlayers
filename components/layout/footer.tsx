import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-600">
          © {new Date().getFullYear()} EddyAgent — Scouting & Talentberatung.
        </p>
        <div className="flex gap-6 text-sm">
          <Link className="text-neutral-600 hover:text-neutral-900" href="/impressum">
            Impressum
          </Link>
          <Link className="text-neutral-600 hover:text-neutral-900" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
