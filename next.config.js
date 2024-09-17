/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    images: JSON.stringify([
      {
        path: "/static/galerie/Weit.webp",
        alt: "Gesamtansicht",
      },
      {
        path: "/static/galerie/Strassenansicht.webp",
        alt: "Straßenansicht",
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
        path: "/static/galerie/Aussen.webp",
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
