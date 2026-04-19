import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EddyAgent — Scouting & Talentberatung",
    template: "%s | EddyAgent",
  },
  description:
    "Professionelles Fußball-Scouting und Talentberatung für Spieler und Vereine.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "EddyAgent",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
