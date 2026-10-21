import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner",
  description: "Unsere Partner - Holzhandlung Heidi Obert",
};

export default function Partner() {
  return (
    <section className="subpage partners-page">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lernen Sie unsere Partner kennen
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Zusammen mit unseren Partnern bieten wir Ihnen ein breites Angebot
          </p>
        </div>
        <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a
              href="https://haeussermann.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Häussermann-Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/haeussermann.jpg"
                width="140"
              />
            </a>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a
              href="https://www.pavatex.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="PAVATEX-Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/pavatex.jpg"
                width="140"
              />
            </a>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a
              href="https://www.egger.com/de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="EGGER-Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/egger.svg"
                width="140"
              />
            </a>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-8">
            <a
              href="https://www.mm-holz.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Logo von MM Holz"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/mm-holz.png"
                width="140"
              />
            </a>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a
              href="https://hwpan.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Logo der Holzwerke Pfarrkirchen"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/HP-Logo.png"
                width="140"
              />
            </a>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a
              href="https://www.storaenso.com/de-de/products/wood-products/sawn-and-planed-wood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Logo von Stora Enso"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/storaenso.png"
                width="140"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
