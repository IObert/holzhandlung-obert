export default function Partner() {
  return (
    <section className="flex justify-center w-full h-full py-6 md:py-12 lg:py-24">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lernen Sie Unsere Partner Kennen
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Zusammen mit unseren Partnern bieten wir Ihnen ein breites Angebot
          </p>
        </div>
        <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a href="https://haeussermann.de/" target="_blank">
              <img
                alt="haeussermann Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/haeussermann.jpg"
                width="140"
              />
            </a>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a href="https://www.pavatex.de/" target="_blank">
              <img
                alt="Pavatex Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/pavatex.jpg"
                width="140"
              />
            </a>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a href="https://www.egger.com/de/" target="_blank">
              <img
                alt="Egger Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/egger.svg"
                width="140"
              />
            </a>
          </div>
        </div>
        <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a href="https://www.mocopinus.com/de/" target="_blank">
              <img
                alt="Mocopinus Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/mocopinus.bmp"
                width="140"
              />
            </a>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-8">
            <a href="https://www.mm-holz.com/" target="_blank">
              <img
                alt="MM Holz Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/mm-holz.png"
                width="140"
              />
            </a>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <a href="https://hwpan.de/" target="_blank">
              <img
                alt="Holzwerke Pfarrkirchen Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/static/partner/HP-Logo.bmp"
                width="140"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
