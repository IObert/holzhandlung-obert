"use client";

import Link from "next/link";
import type { Product } from "@/lib/data";
export default function MobileMenu({ products }: { products: Product[] }) {
  return (
    <details className="mobile-menu">
      <summary aria-label="Navigation öffnen">
        Menü <span>☰</span>
      </summary>
      <nav
        aria-label="Mobile Navigation"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) {
            event.currentTarget.closest("details")?.removeAttribute("open");
          }
        }}
      >
        <Link href="/#lieferprogramm">Lieferprogramm</Link>
        <div className="mobile-products">
          {products.map((p) => (
            <Link key={p.id} href={`/produkte/${p.id}/`}>
              {p.title}
            </Link>
          ))}
        </div>
        <Link href="/#umwelt">Umwelt</Link>
        <Link href="/#regional">Regional</Link>
        <Link href="/#holzarten">Holzarten</Link>
        <Link href="/#galerie">Galerie</Link>
        <Link href="/#kontakt">Kontakt</Link>
      </nav>
    </details>
  );
}
