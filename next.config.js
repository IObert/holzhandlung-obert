/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  env: {
    images: JSON.stringify([
      {
        path: "/static/galerie/Weit.webp",
        alt: "Gesamtansicht",
      },
      {
        path: "/static/galerie/Straßenansicht.webp",
        alt: "Straßenansicht",
      },
      {
        path: "/static/galerie/Vorne.webp",
        alt: "Vorderansicht",
      },
      {
        path: "/static/galerie/Regale.webp",
        alt: "Regale",
      },
      {
        path: "/static/galerie/Hinten.webp",
        alt: "Halle Hinten",
      },
      {
        path: "/static/galerie/Stapler.webp",
        alt: "Stapler",
      },
      {
        path: "/static/galerie/LKW.webp",
        alt: "LKW",
      },
      {
        path: "/static/galerie/Außen.webp",
        alt: "Außenseite",
      },
      {
        path: "/static/galerie/Pavatex.webp",
        alt: "Pavatex",
      },
    ]),
  },
};

module.exports = nextConfig;
