export async function generateStaticParams() {
  const images = JSON.parse(process.env.images || "[]") as [];
  return images.map((image: any) => ({
    id: image.path.replace("/static/galerie/", "").split(".")[0],
    filename: image.path.replace("/static/galerie/", ""),
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
  // @ts-ignore
  const filename = images.find((image: any) => image.path.includes(id))?.path;
  console.log(filename);
  return (
    <img
      src={`${filename}`}
      alt={alt}
      className="w-10/12 md:mx-2 md:w-full mx-auto rounded-lg"
    />
  );
}
