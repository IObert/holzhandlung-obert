export async function generateStaticParams() {
  return [
    {
      id: "daemmstoffe",
      title: "Dämmstoffe",
      description: "Unverzichtbar für effizienten Hitze- und Schallschutz.",
      image: "/static/produkte/daemm.webp",
    },
    {
      id: "holzwerkstoffplatten",
      title: "Holzwerkstoff-Platten",
      description:
        "Vielseitig einsetzbar, dienen als stabile Basis in Möbeln und Konstruktionen.",
      image: "/static/produkte/osb.webp",
    },
    {
      id: "konstruktionsvollholz",
      title: "Konstruktionsvollholz",
      description:
        "Überzeugt als robustes Baumaterial, besonders in tragenden Elementen.",
      details: (
        <div>
          <ul className="list-disc pl-6">
            <li>Ausschließlich aus güteüberwachter Produktion</li>
            <li>Individuell und vielseitig einsetzbar</li>
          </ul>
          <p className="my-6">
            <h3 className="text-xl font-bold">KVH NSi</h3>
            für <span className="font-bold">n</span>icht{" "}
            <span className="font-bold">si</span>chtbare Verwendung
          </p>
          <p className="my-6">
            <h3 className="text-xl font-bold">KVH Si</h3>
            für <span className="font-bold">si</span>chtbare Verwendung
          </p>
        </div>
      ),
      image: "/static/produkte/kvh.webp",
    },
    {
      id: "duo-trio-balken",
      title: "Duo-/Trio- Balken",
      description:
        "Durch ihre Schichtbauweise stabil, sind ideal für Decken und Dächer.",
      details: (
        <div>
          <ul className="list-disc pl-6">
            <li>Ausschließlich aus güteüberwachter Produktion</li>
            <li>Für Stabilität und Ästhetik</li>
          </ul>
          <p className="my-6">
            <h3 className="text-xl font-bold">Duo-/Trio- Balken NSi</h3>
            für <span className="font-bold">n</span>icht{" "}
            <span className="font-bold">si</span>chtbare Verwendung
          </p>
          <p className="my-6">
            <h3 className="text-xl font-bold">Duo-/Trio- Balken Si</h3>
            für <span className="font-bold">si</span>chtbare Verwendung
          </p>
        </div>
      ),
      image: "/static/produkte/duo.webp",
    },
    {
      id: "brettschichtholz",
      title: "Brettschichtholz",
      description:
        "Stark und formstabil, eignet sich für anspruchsvolle Tragstrukturen.",
      image: "/static/produkte/bsh.webp",
    },
    {
      id: "brettstapelelemente",
      title: "Brettstapelelemente",
      description:
        "Als innovative Baukomponenten, ermöglichen schnellen Aufbau.",
      details: (
        <div>
          <p>In verschiedenen Oberflächenqualitäten:</p>
          <ul className="list-disc pl-10">
            <li>Unterseite sichtbar</li>
            <li>Beidseitig nicht sichtbar</li>
          </ul>
        </div>
      ),
      image: "/static/produkte/Brettstapel.webp",
    },
    {
      id: "profilbretter",
      title: "Profilbretter",
      description: "Verschönern Fassaden, Fußböden und Decken.",
      details: (
        <div>
          <p>In verschiedenen Qualitäten und Holzarten:</p>
          <ul className="list-disc pl-10">
            <li>Fasebretter</li>
            <li>Rundprofilbretter</li>
            <li>Glattkantbretter</li>
            <li>Fußbodenbretter</li>
            <li>Rauhspund</li>
            <li>Stülpschalung</li>
            <li>Sonderprofile</li>
          </ul>
        </div>
      ),
      image: "/static/produkte/profilbretter.webp",
    },
    {
      id: "schnittholz",
      title: "Schnittholz",
      description:
        "Vielseitig einsetzbar, bildet die Basis für diverse Bauvorhaben.",
      details: (
        <div>
          <p>In verschiedenen Qualitäten:</p>
          <ul className="list-disc pl-10">
            <li>Listen-Bauholz</li>
            <li>Latten</li>
            <li>Kreuzrahmen</li>
            <li>Bretter</li>
            <li>Dielen</li>
            <li>Kanthölzer</li>
            <li>Kanthölzer</li>
            <li>Kanthölzer</li>
            <li>Rauhspund</li>
            <li>Palettenhölzer</li>
            <li>Blockware</li>
            <li>Rohhobler</li>
          </ul>
        </div>
      ),
      image: "/static/produkte/schnittholz.webp",
    },
    {
      id: "pellets",
      title: "Pellets",
      description: "Dienen als nachhaltige Energiequelle.",
      image: "/static/produkte/pellets.webp",
    },
    {
      id: "rauspund",
      title: "Rauspund",
      description: "Stabile und diffusionsoffene Beplankung.",
      image: "/static/produkte/rauspund.webp",
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
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-20">
                {produkt?.description}
              </p>
              {produkt?.details}
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
