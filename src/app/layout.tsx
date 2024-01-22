import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { TreePineIcon } from "lucide-react";
import "./globals.css";
import { generateStaticParams } from "./produkte/[id]/page";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holzhandlung Obert",
  description: "Holzhandlung Obert - Qualität gibt Sicherheit",
  keywords:
    "Holzhandlung Obert, Holz, Holzhandlung, Obert, Regional, Schwarzwald, Pellets, Familienunternehmen, Qualität, Sicherheit",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const produkte = (await generateStaticParams()) as any[];

  const produktLinks = produkte.map((produkt: any) => (
    <div key={produkt.id} className="">
      <Link
        className="text-xs font-medium hover:underline underline-offset-4"
        href={`/produkte/${produkt.id}`}
      >
        <div className="space-y-2">
          <h4 className="font-medium "> {produkt.title}</h4>
        </div>
      </Link>
    </div>
  ));

  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="px-4 top-0 lg:px-6 h-14 flex items-center w-full fixed bg-white z-10">
            <Link className="flex items-center justify-center" href="/">
              <TreePineIcon className="h-6 w-6" />
              <span className="text-lg font-semibold hidden md:block">
                Holzhandlung Obert
              </span>
            </Link>
            <nav className="ml-auto flex gap-2 md:gap-6">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/#umwelt"
              >
                Umwelt
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/#regional"
              >
                Regional
              </Link>

              <Popover>
                <PopoverTrigger asChild>
                  <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/#lieferprogramm"

                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   document
                    //     .getElementById("lieferprogramm")
                    //     ?.scrollIntoView({ behavior: "smooth" });
                    // }}
                  >
                    Lieferprogramm
                  </Link>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-80">
                  <div className="grid grid-cols-2 gap-2 md:gap-6">{produktLinks}</div>
                </PopoverContent>
              </Popover>

              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/#galerie"
              >
                Galerie
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/#holzarten"
              >
                Holzarten
              </Link>
            </nav>
          </header>
          <main className="flex items-center flex-1 my-20">{children}</main>
          <footer className="flex flex-col gap-2 sm:flex-row pb-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <div className="flex flex-col">
              <img
                src="/static/holzhandlung-obert.png"
                className="h-20 my-4 object-contain"
              />

              <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 Holzhandlung Obert. Alle Rechte vorbehalten.
              </p>
            </div>
            <nav className="sm:ml-auto mt-auto flex gap-2 md:gap-6">
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
                href="/haftungsausschluss"
              >
                Haftungsausschluss
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="/datenschutz"
              >
                Datenschutz
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="/impressum"
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
