"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import type { Product } from "@/lib/data";

export default function MobileMenu({ products }: { products: Product[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
      >
        {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>
      {open && (
        <nav className="absolute top-14 left-0 w-screen bg-white border-b shadow-lg z-20 px-6 py-4">
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <Link
              className="hover:underline underline-offset-4"
              href="/#umwelt"
              onClick={() => setOpen(false)}
            >
              Umwelt
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="/#regional"
              onClick={() => setOpen(false)}
            >
              Regional
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="/#lieferprogramm"
              onClick={() => setOpen(false)}
            >
              Lieferprogramm
            </Link>
            <div className="pl-4 flex flex-col gap-2">
              {products.map((produkt) => (
                <Link
                  key={produkt.id}
                  className="text-xs text-gray-600 hover:underline underline-offset-4"
                  href={`/produkte/${produkt.id}`}
                  onClick={() => setOpen(false)}
                >
                  {produkt.title}
                </Link>
              ))}
            </div>
            <Link
              className="hover:underline underline-offset-4"
              href="/#galerie"
              onClick={() => setOpen(false)}
            >
              Galerie
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="/#holzarten"
              onClick={() => setOpen(false)}
            >
              Holzarten
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
