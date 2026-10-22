"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import ResponsiveImage from "@/components/responsive-image";
import type { GalleryImage } from "@/lib/data";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const move = (direction: number) =>
    setIndex(
      (current) => (current + direction + images.length) % images.length,
    );

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const modal = dialog.current;
    modal?.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      modal?.close();
    };
  }, [open]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, imageIndex) => (
          <button
            className="gallery-tile"
            type="button"
            key={image.path}
            aria-label={`${image.alt} in der Galerie öffnen`}
            onClick={() => {
              setIndex(imageIndex);
              setOpen(true);
            }}
          >
            <ResponsiveImage
              src={image.path}
              alt={image.alt}
              loading="lazy"
              maxWidth={imageIndex === 0 ? 1280 : 768}
              sizes={
                imageIndex === 0
                  ? "(max-width: 700px) calc(100vw - 40px), (max-width: 1336px) 64vw, 820px"
                  : "(max-width: 700px) calc((100vw - 56px) / 2), (max-width: 1336px) 32vw, 400px"
              }
            />
            <span>
              {image.alt}
              <ArrowUpRight size={18} />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label="Bildergalerie unseres Lagers"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        {open && (
          <div className="gallery-overlay-content">
            <div className="gallery-toolbar">
              <p>Galerie</p>
              <button
                type="button"
                className="gallery-control"
                aria-label="Galerie schließen"
                onClick={() => setOpen(false)}
                autoFocus
              >
                <X />
              </button>
            </div>
            <div
              className="gallery-stage"
              onTouchStart={(event) => {
                touchStart.current = event.changedTouches[0].clientX;
              }}
              onTouchEnd={(event) => {
                if (touchStart.current !== null) {
                  const distance =
                    event.changedTouches[0].clientX - touchStart.current;
                  if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
                }
                touchStart.current = null;
              }}
            >
              <button
                type="button"
                className="gallery-control gallery-prev"
                aria-label="Vorheriges Bild"
                onClick={() => move(-1)}
              >
                <ChevronLeft />
              </button>
              <ResponsiveImage
                key={images[index].path}
                src={images[index].path}
                alt={images[index].alt}
                maxWidth={1920}
                sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1164px) calc(100vw - 112px), 1050px"
              />
              <button
                type="button"
                className="gallery-control gallery-next"
                aria-label="Nächstes Bild"
                onClick={() => move(1)}
              >
                <ChevronRight />
              </button>
            </div>
            <p className="gallery-caption" aria-live="polite">
              {images[index].alt}
              <span>
                {index + 1} / {images.length}
              </span>
            </p>
            <div className="gallery-thumbnails" aria-label="Bild auswählen">
              {images.map((image, imageIndex) => (
                <button
                  type="button"
                  key={image.path}
                  aria-label={image.alt}
                  aria-pressed={index === imageIndex}
                  onClick={() => setIndex(imageIndex)}
                >
                  <ResponsiveImage
                    src={image.path}
                    alt=""
                    loading="lazy"
                    maxWidth={160}
                    sizes="76px"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
