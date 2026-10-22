import ResponsiveImage from "@/components/responsive-image";
import { galleryImages } from "@/lib/data";

export function generateStaticParams() {
  return galleryImages.map((image) => ({
    id: image.path.replace("/static/galerie/", "").split(".")[0],
  }));
}

export default async function Galerie(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const { id } = params;

  const image = galleryImages.find((img) => img.path.includes(id));

  if (!image) return null;
  return (
    <ResponsiveImage
      src={image.path}
      alt={image.alt}
      maxWidth={1920}
      sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1240px) 100vw, 1200px"
      className="h-auto w-10/12 md:mx-2 md:w-full mx-auto rounded-lg"
    />
  );
}
