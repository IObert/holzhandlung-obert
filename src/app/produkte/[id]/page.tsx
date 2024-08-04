export async function generateStaticParams() {
  return [
    {
      id: "konstruktionsvollholz",
      title: "Konstruktionsvollholz",
      description:
        "Überzeugt als robustes Baumaterial, besonders in tragenden Elementen",
      details: (
        <div>
          <ul className="list-disc pl-6">
            <li>Ausschließlich aus güteüberwachter Produktion</li>
            <li>Individuell und vielseitig einsetzbar</li>
          </ul>
          <p className="my-6">
            <h3 className="text-xl font-bold">KVH® NSi</h3>
            für <span className="font-bold">n</span>icht{" "}
            <span className="font-bold">si</span>chtbare Verwendung
          </p>
          <p className="my-6">
            <h3 className="text-xl font-bold">KVH® Si</h3>
            für <span className="font-bold">si</span>chtbare Verwendung
          </p>
        </div>
      ),
      image: "/static/produkte/kvh.webp",
    },

    {
      id: "osbplatten",
      title: "OSB- und DHF-Platten",
      description:
        "OSB- und DHF-Platten sind eine stabile Basis in Wänden, Böden und Decken",
      image: "/static/produkte/osb.webp",
      details: (
        <div>
          <p className="my-6">
            <h3 className="text-xl font-bold">OSB 3</h3>
            Die umweltfreundliche Standardplatte für Holzbau und Innenausbau
          </p>
          <p className="my-6">
            <h3 className="text-xl font-bold">OSB 4 Top</h3>
            Bietet drei wichtige Funktionen: Luftdichtheit, Dampfbremse,
            Aussteifung
          </p>
          <p className="my-6">
            <h3 className="text-xl font-bold">DHF Platte</h3>
            Kann als Außenbeplankung eingesetzt werden
          </p>
        </div>
      ),
    },
    {
      id: "daemmstoffe",
      title: "Dämmplatten aus Holzweichfasern",
      description:
        "Dämmplatten bieten ökologische Wärmedämmung, hervorragenden sommerlichen Hitze- und Schallschutz, sind diffusionsoffen und speichern Feuchtigkeit und Wärme",
      image: "/static/produkte/daemm.webp",
    },
    {
      id: "duo-trio-balken",
      title: "Duo-/Trio-Balken®",
      description:
        "Durch ihre Schichtbauweise stabil, sind ideal für Decken und Dächer.",
      details: (
        <div>
          <ul className="list-disc pl-6">
            <li>Ausschließlich aus güteüberwachter Produktion</li>
            <li>Für Stabilität und Ästhetik</li>
          </ul>
          <p className="my-6">
            <h3 className="text-xl font-bold">Duo-/Trio-Balken NSi</h3>
            für <span className="font-bold">n</span>icht{" "}
            <span className="font-bold">si</span>chtbare Verwendung
          </p>
          <p className="my-6">
            <h3 className="text-xl font-bold">Duo-/Trio-Balken Si</h3>
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
        "Stark und formstabil, eignet sich für anspruchsvolle Tragstrukturen",
      details: (
        <div>
          <ul className="list-disc pl-10">
            <li>Gerade Binder</li>
            <li>Bogenbinder</li>
            <li>Brettschichtelemente aus Brettschichtholz</li>
          </ul>
        </div>
      ),
      image: "/static/produkte/bsh.webp",
    },
    {
      id: "schnittholz",
      title: "Schnittholz",
      description:
        "Stammt überwiegend von Schwarzwälder Sägewerken und ist vielseitig einsetzbar",
      details: (
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
      image: "/static/produkte/schnittholz.webp",
    },

    {
      id: "rauspund",
      title: "Rauspund",
      description: "Diffussionsoffene Beplankungen in Wänden und auf Böden",
      details: (
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
      image: "/static/produkte/rauspund.webp",
    },
    {
      id: "profilbretter",
      title: "Profilbretter",
      description:
        "Mit oder ohne Farbbehandlung. Vielseitig einsetzbar in Fassaden, Decken und Fußböden",
      details: (
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
      image: "/static/produkte/profilbretter.webp",
    },

    {
      id: "pellets",
      title: "Pellets aus Baden-Württemberg",
      description: "Dienen als nachhaltige Energiequelle",
      details: (
        <div>
          <p className="mb-4">Premiumpellets nach DINplus + ENplus</p>
          <ul className="list-disc pl-10">
            <li>Lose Ware</li>
            <li>Sackware (15kg)</li>
          </ul>
        </div>
      ),
      image: "/static/produkte/pellets.webp",
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
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
