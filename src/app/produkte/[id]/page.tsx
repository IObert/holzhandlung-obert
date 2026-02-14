import { products } from "@/lib/data";
import type { Metadata } from "next";
import { ReactNode } from "react";

export function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Metadata {
  const produkt = products.find((p) => p.id === id);
  return {
    title: produkt?.title,
    description: produkt?.description,
  };
}

const productDetails: Record<string, ReactNode> = {
  konstruktionsvollholz: (
    <div>
      <ul className="list-disc pl-6">
        <li>Ausschließlich aus güteüberwachter Produktion</li>
        <li>Individuell und vielseitig einsetzbar</li>
      </ul>
      <div className="my-6">
        <h3 className="text-xl font-bold">KVH® NSi</h3>
        für <span className="font-bold">n</span>icht{" "}
        <span className="font-bold">si</span>chtbare Verwendung
      </div>
      <div className="my-6">
        <h3 className="text-xl font-bold">KVH® Si</h3>
        für <span className="font-bold">si</span>chtbare Verwendung
      </div>
    </div>
  ),
  osbplatten: (
    <div>
      <div className="my-6">
        <h3 className="text-xl font-bold">EGGER OSB 3 Top</h3>
        Bietet drei wichtige Funktionen: Luftdichtheit, Dampfbremse,
        Aussteifung
      </div>
      <div className="my-6">
        <h3 className="text-xl font-bold">EGGER OSB Flammex</h3>
        Innovative Brandschutzlösung für vielseitige Anwendungen
      </div>
      <div className="my-6">
        <h3 className="text-xl font-bold">EGGER DHF Platte</h3>
        Kann als Außenbeplankung eingesetzt werden
      </div>
    </div>
  ),
  "duo-trio-balken": (
    <div>
      <ul className="list-disc pl-6">
        <li>Ausschließlich aus güteüberwachter Produktion</li>
        <li>Für Stabilität und Ästhetik</li>
      </ul>
      <div className="my-6">
        <h3 className="text-xl font-bold">Duo-/Trio-Balken® NSi</h3>
        für <span className="font-bold">n</span>icht{" "}
        <span className="font-bold">si</span>chtbare Verwendung
      </div>
      <div className="my-6">
        <h3 className="text-xl font-bold">Duo-/Trio-Balken® Si</h3>
        für <span className="font-bold">si</span>chtbare Verwendung
      </div>
    </div>
  ),
  brettschichtholz: (
    <div>
      <ul className="list-disc pl-10">
        <li>Gerade Binder</li>
        <li>Bogenbinder</li>
        <li>Brettschichtelemente aus Brettschichtholz</li>
      </ul>
    </div>
  ),
  ecobox: (
    <div>
      <ul className="list-disc pl-10">
        <li>verringert den Holzverbrauch bis zu 38%</li>
        <li>reduziert die Wärmebrücken</li>
      </ul>
    </div>
  ),
  schnittholz: (
    <div>
      <p className="mb-4">In verschiedenen Qualitäten:</p>
      <ul className="list-disc pl-10">
        <li>Dachlatten</li>
        <li>Konterlatten</li>
        <li>Bretter</li>
        <li>Dielen</li>
        <li>Traufkeile</li>
      </ul>
    </div>
  ),
  rauspund: (
    <div>
      <p className="mb-4">Verschiedene Stärken am Lager</p>
      <ul className="list-disc pl-10">
        <li>21,0 x 146 mm in 5,00 m Länge</li>
        <li>23,5 x 146 mm in 5,00 m Länge</li>
        <li>27,0 x 156 mm in 5,00 m Länge</li>
        <li>Sonderstärken auf Anfrage möglich</li>
      </ul>
    </div>
  ),
  profilbretter: (
    <div>
      <p className="mb-4">In verschiedenen Qualitäten und Holzarten:</p>
      <ul className="list-disc pl-10">
        <li>Fasebretter</li>
        <li>Rundprofilbretter</li>
        <li>Glattkantbretter</li>
        <li>Fußbodenbretter</li>
        <li>Stülpschalung</li>
        <li>Sonderprofile</li>
      </ul>
    </div>
  ),
  pellets: (
    <div>
      <p className="mb-4">Premiumpellets nach DINplus + ENplus</p>
      <ul className="list-disc pl-10">
        <li>Lose Ware</li>
        <li>Sackware (15kg)</li>
      </ul>
    </div>
  ),
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function Produkt({
  params: { id },
}: {
  params: { id: string };
}) {
  const produkt = products.find((p) => p.id === id);
  const details = productDetails[id];

  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            alt={produkt?.title}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="550"
            src={produkt?.image}
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                {produkt?.title}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-20">
                {produkt?.description}
              </p>
              {details}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
