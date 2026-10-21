import type { Metadata } from "next";
import Link from "next/link";

import { TreePineIcon, Phone } from "lucide-react";
import "./globals.css";
import MobileMenu from "@/components/mobile-menu";
import { products } from "@/lib/data";

const footerLinks = [
  { href: "/#kontakt", label: "Kontakt" },
  { href: "/partner", label: "Partner" },
  { href: "/team", label: "Team" },
  { href: "/agb", label: "AGB" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
  { href: "/haftungsausschluss", label: "Haftungsausschluss" },
];

export const metadata: Metadata = {
  title: {
    default: "Holzhandlung Obert",
    template: "%s | Holzhandlung Obert",
  },
  description: "Holzhandlung Obert - Qualität gibt Sicherheit",
  keywords:
    "Holzhandlung Obert, Holz, Holzhandlung, Obert, Regional, Schwarzwald, Pellets, Familienunternehmen, Qualität, Sicherheit",
  openGraph: {
    title: "Holzhandlung Obert",
    description: "Holzhandlung Obert - Qualität gibt Sicherheit",
    url: "https://holzhandlung-obert.de",
    siteName: "Holzhandlung Obert",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="w-full overflow-x-hidden">
      <body className="site-body">
        <div className="flex flex-col min-h-screen">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
          >
            Zum Hauptinhalt springen
          </a>
          <header className="site-header">
            <div className="site-width header-inner">
              <Link
                className="brand"
                href="/"
                aria-label="Holzhandlung Obert – Startseite"
              >
                <TreePineIcon size={37} strokeWidth={1.5} />
                <span>
                  <strong>Holzhandlung Obert</strong>
                </span>
              </Link>
              <nav className="desktop-nav" aria-label="Hauptnavigation">
                <Link href="/#lieferprogramm">Lieferprogramm</Link>
                <Link href="/#umwelt">Umwelt</Link>
                <Link href="/#regional">Regional</Link>
                <Link href="/#holzarten">Holzarten</Link>
                <Link href="/#galerie">Galerie</Link>
              </nav>
              <Link className="header-contact" href="/#kontakt">
                <Phone size={16} /> Kontakt
              </Link>
              <MobileMenu products={products} />
            </div>
          </header>
          <main id="main-content" className="site-main">
            {children}
          </main>
          <footer className="site-footer">
            <div className="site-width">
              <div className="footer-top">
                <Link className="brand" href="/">
                  <TreePineIcon size={34} strokeWidth={1.5} />
                  <span>
                    <strong>Holzhandlung Obert</strong>
                  </span>
                </Link>
              </div>
              <div className="footer-bottom">
                <p>
                  © 2026 Holzhandlung Obert.
                  <br />
                  Alle Rechte vorbehalten.
                </p>
                <nav aria-label="Weitere Seiten">
                  {footerLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
