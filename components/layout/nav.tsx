import Link from "next/link";

const links = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/talent-bewerben", label: "Talent bewerben" },
  { href: "/vereine", label: "Vereine" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function Nav() {
  return (
    <nav aria-label="Hauptnavigation" className="flex flex-wrap justify-end gap-4 md:gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-neutral-700 transition hover:text-neutral-900"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
