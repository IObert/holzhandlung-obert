/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    env: {
        images: JSON.stringify([
            {
                path: "/static/galerie/Gesamt.jpeg",
                alt: "Gesamtansicht",
            },
            {
                path: "/static/galerie/Hinten.jpeg",
                alt: "Hinten",
            },
            {
                path: "/static/galerie/Innen.jpeg",
                alt: "Innen",
            },
            {
                path: "/static/galerie/Regal1.jpeg",
                alt: "Regal1",
            },
            {
                path: "/static/galerie/Regal2.jpeg",
                alt: "Regal2",
            },
            {
                path: "/static/galerie/Vorne.jpeg",
                alt: "Vorne",
            },
        ])
    }
}

module.exports = nextConfig
