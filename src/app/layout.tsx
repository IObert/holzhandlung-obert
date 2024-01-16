import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { TreePineIcon } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holzhandlung Obert",
  description: "Holzhandlung Obert - Qualität gibt Sicherheit",
  keywords: "Holzhandlung Obert, Holz, Holzhandlung, Obert, Regional, Schwarzwald, Pellets, Familienunternehmen, Qualität, Sicherheit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="/">
              <TreePineIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Holzhandlung Obert</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Lieferprogramm
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Galerie
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Umwelt
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Holzarten
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Service
              </Link>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 Holzhandlung Obert. Alle Rechte vorbehalten.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Kontakt
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="/partner"
              >
                Partner
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="/agb"
              >
                AGB
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Impressum
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
