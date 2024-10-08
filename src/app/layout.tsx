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
        className="text-xs hover:underline underline-offset-4"
        href={`/produkte/${produkt.id}`}
      >
        <div className="space-y-2">
          <h4 className=""> {produkt.title}</h4>
        </div>
      </Link>
    </div>
  ));

  return (
    <html lang="de" className="w-full overflow-x-hidden">
      <body className={inter.className + "w-full overflow-x-hidden"}>
        <div className="flex flex-col min-h-screen">
          <header className="px-2 top-0 pt-2 h-14 flex items-center w-screen fixed bg-white z-10">
            <Link className="flex items-center justify-center" href="/">
              <TreePineIcon className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold hidden md:block">
                Holzhandlung Obert
              </span>
            </Link>
            <nav className="ml-auto text-xs md:text-sm font-semibold flex gap-2 md:gap-6">
              <Link
                className=" hover:underline underline-offset-4"
                href="/#umwelt"
              >
                Umwelt
              </Link>
              <Link
                className="hover:underline underline-offset-4"
                href="/#regional"
              >
                Regional
              </Link>

              <Popover>
                <PopoverTrigger asChild>
                  <Link
                    className=" hover:underline underline-offset-4"
                    href="/#lieferprogramm"

                  >
                    Lieferprogramm
                  </Link>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-80">
                  <div className="grid grid-cols-2 gap-2 md:gap-6">
                    {produktLinks}
                  </div>
                </PopoverContent>
              </Popover>

              <Link
                className=" hover:underline underline-offset-4"
                href="/#galerie"
              >
                Galerie
              </Link>
              <Link
                className=" hover:underline underline-offset-4"
                href="/#holzarten"
              >
                Holzarten
              </Link>
            </nav>
          </header>
          <main className="flex items-center flex-1 mt-14">{children}</main>
          <footer className="flex flex-col sm:flex-row pb-6 w-full shrink-0 items-center px-4 gap-2 md:px-6 border-t">
            <nav className="text-gray-600 flex-1 pt-6 mt-auto flex-wrap flex gap-0.5 mx-auto justify-items-center md:gap-4">
              <Link
                className="text-sm hover:underline underline-offset-4 flex-1 mx-0.5 text-center md:mx-0 md:text-left md:flex-none"
                href="/#kontakt"
              >
                Kontakt
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4 flex-1 mx-0.5 text-center md:mx-0 md:text-left md:flex-none"
                href="/partner"
              >
                Partner
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4 flex-1 mx-0.5 text-center md:mx-0 md:text-left md:flex-none"
                href="/team"
              >
                Team
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4 flex-1 mx-0.5 text-center md:mx-0 md:text-left md:flex-none"
                href="/agb"
              >
                AGB
              </Link>

              <Link
                className="text-sm hover:underline underline-offset-4 flex-1 mx-0.5 text-center md:mx-0 md:text-left md:flex-none"
                href="/datenschutz"
              >
                Datenschutz
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4 flex-1 mx-0.5 text-center md:mx-0 md:text-left md:flex-none"
                href="/impressum"
              >
                Impressum
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4 flex-1 mx-0.5 text-center md:mx-0 md:text-left md:flex-none"
                href="/haftungsausschluss"
              >
                Haftungsausschluss
              </Link>
            </nav>
            <div className="flex flex-col">
              <img
                src="/static/holzhandlung-obert.png"
                alt="Holzhandlung Obert"
                className="h-20 my-4 object-contain"
              />

              <p className="text-sm text-center text-gray-400 dark:text-gray-400">
                © 2024 Holzhandlung Obert. <br />
                Alle Rechte vorbehalten.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
