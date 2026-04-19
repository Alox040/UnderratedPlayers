import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/layout/nav";

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="EddyAgent"
            width={32}
            height={32}
            priority
          />
          <span className="text-sm font-semibold tracking-tight text-neutral-900">
            EddyAgent
          </span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
