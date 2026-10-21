"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
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
            <img src={image.path} alt={image.alt} loading="lazy" />
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
              <img src={images[index].path} alt={images[index].alt} />
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
                  <img src={image.path} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
