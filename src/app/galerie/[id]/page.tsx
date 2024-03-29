export async function generateStaticParams() {
  const images = JSON.parse(process.env.images || "[]") as [];
  return images.map((image: any) => ({
    id: image.path.replace("/static/galerie/", "").replace(".webp", ""),
    alt: image.alt,
  }));
}

export default function Galerie({
  params: { id: id },
}: {
  params: { id: string };
}) {
  const images = JSON.parse(process.env.images || "[]") as [];
  // @ts-ignore
  const alt = images.find((image: any) => image.path.includes(id))?.alt;
  return (
    <img
      src={`/static/galerie/${id}`}
      alt={alt}
      className="w-10/12 md:mx-2 md:w-full mx-auto rounded-lg"
    />
  );
}
