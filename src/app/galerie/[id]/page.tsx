export async function generateStaticParams() {
  const images = JSON.parse(process.env.images || "[]") as [];
  return images.map((image: any) => ({
    id: image.path.replace("/static/galerie/", "").replace(".webp", ""),
  }));
}


export default function Galerie({
  params: { id: id },
}: {
  params: { id: string };
}) {
  return (
    <img
      src={`/static/galerie/${id}`}
      className="w-10/12 md:mx-2 md:w-full mx-auto rounded-lg"
    />
  );
}
