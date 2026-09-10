"use client";

import Image from "next/image";
import { Children, useRef, useState } from "react";
import type { ReactNode, TouchEvent } from "react";
import type { Kit } from "@/data/products";

export function KitSwitcher({
  teamName,
  kits = [],
  children,
}: {
  teamName: string;
  kits?: Kit[];
  children: ReactNode;
}) {
  const [selectedKit, setSelectedKit] = useState<number | null>(kits.length > 0 ? 0 : null);
  const [imageIndex, setImageIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 45;

  const currentKit = selectedKit !== null && kits[selectedKit] ? kits[selectedKit] : null;
  const kitImages = currentKit ? currentKit.images : [];

  const handleSelectKit = (index: number) => {
    setSelectedKit(index);
    setImageIndex(0);
  };

  const onTouchStart = (e: TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || kitImages.length <= 1) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setImageIndex((prev) => (prev + 1) % kitImages.length);
    } else if (isRightSwipe) {
      setImageIndex((prev) => (prev - 1 + kitImages.length) % kitImages.length);
    }
  };

  const content = Children.toArray(children);
  const heading = content.slice(0, 2);
  const details = content.slice(2);

  const currentImage = kitImages[imageIndex] || kitImages[0];

  return (
    <div className="product-detail">
      <div
        className="kit-image-wrap"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {!currentImage ? (
          <div className="kit-placeholder">
            <span>{teamName.slice(0, 2).toUpperCase()}</span>
            <small>Sin imágenes disponibles</small>
          </div>
        ) : (
          <>
            <Image
              src={currentImage.image}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 720px) 100vw, 55vw"
              className="kit-image"
              priority
            />
            {kitImages.length > 1 && (
              <>
                <button
                  className="kit-carousel-arrow kit-carousel-prev"
                  type="button"
                  aria-label="Ver imagen anterior"
                  onClick={() =>
                    setImageIndex(
                      (imageIndex - 1 + kitImages.length) % kitImages.length
                    )
                  }
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m14.5 5-7 7 7 7" />
                  </svg>
                </button>
                <button
                  className="kit-carousel-arrow kit-carousel-next"
                  type="button"
                  aria-label="Ver siguiente imagen"
                  onClick={() =>
                    setImageIndex((imageIndex + 1) % kitImages.length)
                  }
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m9.5 5 7 7-7 7" />
                  </svg>
                </button>
                <div className="kit-carousel-dots" aria-hidden="true">
                  {kitImages.map((_, i) => (
                    <span
                      key={i}
                      className={`kit-dot ${i === imageIndex ? "active" : ""}`}
                    />
                  ))}
                </div>
                <span className="kit-carousel-count">
                  {imageIndex + 1} / {kitImages.length}
                </span>
              </>
            )}
          </>
        )}
      </div>
      <div className="product-info">
        {heading}
        {kits.length > 0 && (
          <div className="kit-controls">
            <div className="kit-showcase-head">
              <span className="eyebrow">Equipaciones</span>
              <span className="kit-showcase-note">Vista previa · catálogo</span>
            </div>
            <div
              className="kit-tabs"
              role="tablist"
              aria-label={`Equipaciones de ${teamName}`}
            >
              {kits.map((kit, index) => (
                <button
                  className={selectedKit === index ? "kit-tab active" : "kit-tab"}
                  key={kit.name}
                  type="button"
                  role="tab"
                  aria-selected={selectedKit === index}
                  onClick={() => handleSelectKit(index)}
                >
                  {kit.name} <span aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {details}
      </div>
    </div>
  );
}
