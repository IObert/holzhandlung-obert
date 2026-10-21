"use client";

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
        <a href="/#lieferprogramm">Lieferprogramm</a>
        <div className="mobile-products">
          {products.map((p) => (
            <a key={p.id} href={`/produkte/${p.id}/`}>
              {p.title}
            </a>
          ))}
        </div>
        <a href="/#umwelt">Umwelt</a>
        <a href="/#regional">Regional</a>
        <a href="/#holzarten">Holzarten</a>
        <a href="/#galerie">Galerie</a>
        <a href="/#kontakt">Kontakt</a>
      </nav>
    </details>
  );
}
