export async function generateStaticParams() {
  return [
    {
      id: "daemmstoffe",
      title: "Dämmstoffe",
      description: "Unverzichtbar für effizienten Hitze- und Schallschutz.",
      image: "/static/produkte/damm.jpeg",
    },
    {
      id: "holzwerkstoffplatten",
      title: "Holzwerkstoff-Platten",
      description:
        "Vielseitig einsetzbar, dienen als stabile Basis in Möbeln und Konstruktionen.",
      image: "/static/produkte/osb.png",
    },
    {
      id: "konstruktionsvollholz",
      title: "Konstruktionsvollholz",
      description:
        "Überzeugt als robustes Baumaterial, besonders in tragenden Elementen.",
      image: "/static/produkte/kvh.jpeg",
    },
    {
      id: "duo-trio-balken",
      title: "Duo-/Trio- Balken",
      description:
        "Durch ihre Schichtbauweise stabil, sind ideal für Decken und Dächer.",
      image: "/static/produkte/duo-trio.jpeg",
    },
    {
      id: "brettschichtholz",
      title: "Brettschichtholz",
      description:
        "Stark und formstabil, eignet sich für anspruchsvolle Tragstrukturen.",
      image: "/static/produkte/bsh.jpeg",
    },
    {
      id: "brettstapelelemente",
      title: "Brettstapelelemente",
      description:
        "Als innovative Baukomponenten, ermöglichen schnellen Aufbau.",
      image: "/static/produkte/Brettstapel.png",
    },
    {
      id: "profilbretter",
      title: "Profilbretter",
      description: "Verschönern Fassaden, Fußböden und Decken.",
      image: "/static/produkte/profilbretter.jpeg",
    },
    {
      id: "schnittholz",
      title: "Schnittholz",
      description:
        "Vielseitig einsetzbar, bildet die Basis für diverse Bauvorhaben.",
      image: "/static/produkte/Schnittholz.jpeg",
    },
    {
      id: "pellets",
      title: "Pellets",
      description: "Dienen als nachhaltige Energiequelle.",
      image: "/static/produkte/pellets.jpeg",
    },
    {
      id: "rauspund",
      title: "Rauspund",
      description: "Stabile und diffusionsoffene Beplankung.",
      image: "/static/produkte/rauspund.jpeg",
    },
  ];
}

export default async function Galerie({
  params: { id: id },
}: {
  params: { id: string };
}) {
  const produkte = await generateStaticParams();

  const produkt = produkte.find((produkt) => produkt.id === id);

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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {produkt?.title}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {produkt?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-[800px] mx-auto">
        <b>NSi</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ohne Sichtansprüche
        <br />
        <b> Si</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sichtqualität
        <br />
        <b>WiGa</b>&nbsp;&nbsp;&nbsp; -
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wintergartenqualität (ähnlich
        Fensterqualität)
        <br />
        <br />
        <b>Sortierklassen </b>
        <ul style={{ listStyleType: "square" }}>
          <li>GL 24 (BS 11)</li> <pre></pre>
          <li>GL 28 (BS 14)</li> <pre></pre>
          <li>GL 32 (BS 16)</li> <pre></pre>
          <li>GL 36 (BS 18)</li>
        </ul>
        <b>Sonderformen </b>
        <ul style={{ listStyleType: "square" }}>
          <li> rund oder rechteckig</li> <pre></pre>
          <li>gebogen oder gerade</li> <pre></pre>
          <li>mit oder ohne Abbund und Verbindungsteilen</li> <pre></pre>
        </ul>
      </div> */}
    </div>
  );
}
