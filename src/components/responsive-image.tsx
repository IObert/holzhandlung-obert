import type { ImgHTMLAttributes } from "react";
import generatedImages from "@/lib/generated-images.json";

type ImageInfo = {
  width: number;
  height: number;
  variants: { src: string; width: number; bytes: number }[];
};
const images: Record<string, ImageInfo> = generatedImages;

// object-fit: cover can require more pixels than the element's visible width.
export function imageWidthAtHeight(src: string, height: number) {
  const image = images[src];
  return image ? Math.ceil((height * image.width) / image.height) : height;
}

type Props = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "alt"
> & {
  src: string;
  alt: string;
  maxWidth?: number;
};

// Plain HTML: variants are generated before dev/build, never on the web server.
export default function ResponsiveImage({
  src,
  alt,
  sizes,
  maxWidth = Infinity,
  width,
  height,
  decoding = "async",
  ...props
}: Props) {
  const image = images[src];
  if (!image)
    return (
      <img
        {...props}
        alt={alt}
        src={src}
        sizes={sizes}
        width={width}
        height={height}
        decoding={decoding}
      />
    );
  const candidates = image.variants.filter(
    (variant) => variant.width <= maxWidth,
  );
  const variants = candidates.length ? candidates : image.variants.slice(0, 1);
  // A modest fallback is also useful for browsers without responsive-image support.
  const fallback =
    variants.find((variant) => variant.width >= 480) ||
    variants[variants.length - 1];
  return (
    <img
      {...props}
      alt={alt}
      src={fallback.src}
      srcSet={variants
        .map((variant) => `${variant.src} ${variant.width}w`)
        .join(", ")}
      sizes={sizes || "100vw"}
      width={width ?? image.width}
      height={height ?? image.height}
      decoding={decoding}
    />
  );
}
