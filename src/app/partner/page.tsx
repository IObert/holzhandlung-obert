export default function Partner() {
  return (
    <section className="flex justify-center w-full h-full py-12 md:py-24 lg:py-32">
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
            <img
              alt="Egger Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/static/partner/egger.svg"
              width="140"
            />
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              alt="Pavatex Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/static/partner/pavatex.png"
              width="140"
            />
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-8">
            <img
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/static/partner/egger.svg"
              width="140"
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/static/partner/pavatex.png"
              width="140"
            />
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/static/partner/egger.svg"
              width="140"
            />
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/static/partner/pavatex.png"
              width="140"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
