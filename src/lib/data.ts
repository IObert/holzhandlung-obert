export interface GalleryImage {
  path: string;
  alt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const galleryImages: GalleryImage[] = [
  { path: "/static/galerie/Weit.webp", alt: "Gesamtansicht" },
  { path: "/static/galerie/Strassenansicht.webp", alt: "Straßenansicht" },
  { path: "/static/galerie/Regale.webp", alt: "Regale" },
  { path: "/static/galerie/Hinten.webp", alt: "Halle Hinten" },
  { path: "/static/galerie/Stapler.webp", alt: "Stapler" },
  { path: "/static/galerie/Aussen.webp", alt: "Außenseite" },
  { path: "/static/galerie/Pavatex.webp", alt: "Pavatex" },
];

export const products: Product[] = [
  {
    id: "konstruktionsvollholz",
    title: "Konstruktionsvollholz",
    description:
      "Überzeugt als robustes Baumaterial, besonders in tragenden Elementen",
    image: "/static/produkte/kvh.webp",
  },
  {
    id: "osbplatten",
    title: "EGGER OSB- und DHF-Platten",
    description:
      "OSB- und DHF-Platten sind eine stabile Basis in Wänden, Böden und Decken",
    image: "/static/produkte/osb.webp",
  },
  {
    id: "daemmstoffe",
    title: "PAVATEX Dämmplatten aus Holzweichfasern",
    description:
      "Dämmplatten bieten ökologische Wärmedämmung, hervorragenden sommerlichen Hitze- und Schallschutz, sind diffusionsoffen und speichern Feuchtigkeit und Wärme",
    image: "/static/produkte/daemm.webp",
  },
  {
    id: "duo-trio-balken",
    title: "Duo-/Trio-Balken®",
    description:
      "Durch ihre Schichtbauweise stabil, sind ideal für Decken und Dächer.",
    image: "/static/produkte/duo.webp",
  },
  {
    id: "brettschichtholz",
    title: "Brettschichtholz",
    description:
      "Stark und formstabil, eignet sich für anspruchsvolle Tragstrukturen",
    image: "/static/produkte/bsh.webp",
  },
  {
    id: "ecobox",
    title: "EGGER EcoBox",
    description: "Die ressourcenschonende Stütze für den modernen Holzbau",
    image: "/static/produkte/ecobox.webp",
  },
  {
    id: "schnittholz",
    title: "Schnittholz",
    description:
      "Stammt überwiegend von Schwarzwälder Sägewerken und ist vielseitig einsetzbar",
    image: "/static/produkte/schnittholz.webp",
  },
  {
    id: "rauspund",
    title: "Rauspund",
    description: "Diffussionsoffene Beplankungen in Wänden und auf Böden",
    image: "/static/produkte/rauspund.webp",
  },
  {
    id: "profilbretter",
    title: "Profilbretter",
    description:
      "Mit oder ohne Farbbehandlung. Vielseitig einsetzbar in Fassaden, Decken und Fußböden",
    image: "/static/produkte/profilbretter.webp",
  },
  {
    id: "pellets",
    title: "Pellets aus Baden-Württemberg",
    description: "Dienen als nachhaltige Energiequelle",
    image: "/static/produkte/pellets.webp",
  },
];
