import { galleryImages } from "@/lib/data";

export function generateStaticParams() {
  return galleryImages.map((image) => ({
    id: image.path.replace("/static/galerie/", "").split(".")[0],
  }));
}

export default async function Galerie(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;

  const {
    id
  } = params;

  const image = galleryImages.find((img) => img.path.includes(id));

  return (
    <img
      src={image?.path}
      alt={image?.alt ?? id}
      className="w-10/12 md:mx-2 md:w-full mx-auto rounded-lg"
    />
  );
}
