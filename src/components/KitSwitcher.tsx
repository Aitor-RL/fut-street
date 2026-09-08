"use client";

import Image from "next/image";
import { Children, useState } from "react";
import type { ReactNode } from "react";

type Kit = { name: string };

const kits: Kit[] = [
  { name: "Primera equipación" },
];
const kitImages = [
  { image: "/kits/rm1.png", alt: "Camiseta del Real Madrid, vista frontal" },
  { image: "/kits/rm1b.jpg", alt: "Camiseta del Real Madrid, vista trasera" },
];

export function KitSwitcher({ teamName, children }: { teamName: string; children: ReactNode }) {
  const [selectedKit, setSelectedKit] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const content = Children.toArray(children);
  const heading = content.slice(0, 2);
  const details = content.slice(2);

  return (
    <div className="product-detail">
      <div className="kit-image-wrap">
        {selectedKit === null ? <div className="kit-placeholder"><span>RM</span><small>Selecciona una equipación</small></div> : <><Image src={kitImages[imageIndex].image} alt={kitImages[imageIndex].alt} fill sizes="(max-width: 720px) 100vw, 55vw" className="kit-image" priority /><button className="kit-carousel-arrow kit-carousel-prev" type="button" aria-label="Ver imagen anterior" onClick={() => setImageIndex((imageIndex - 1 + kitImages.length) % kitImages.length)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7" /></svg></button><button className="kit-carousel-arrow kit-carousel-next" type="button" aria-label="Ver siguiente imagen" onClick={() => setImageIndex((imageIndex + 1) % kitImages.length)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5 7 7-7 7" /></svg></button><span className="kit-carousel-count">{imageIndex + 1} / {kitImages.length}</span></>}
      </div>
      <div className="product-info">
        {heading}
        <div className="kit-controls">
        <div className="kit-showcase-head">
          <span className="eyebrow">Equipaciones</span>
          <span className="kit-showcase-note">Vista previa · ejemplo</span>
        </div>
        <div className="kit-tabs" role="tablist" aria-label={`Equipaciones de ${teamName}`}>
          {kits.map((kit, index) => (
            <button className={selectedKit === index ? "kit-tab active" : "kit-tab"} key={kit.name} type="button" role="tab" aria-selected={selectedKit === index} onClick={() => setSelectedKit(index)}>
              {kit.name} <span aria-hidden="true">↗</span>
            </button>
          ))}
          <button className="kit-tab kit-tab-disabled" type="button" disabled>Segunda equipación <span>Próximamente</span></button>
        </div>
        </div>
        {details}
      </div>
    </div>
  );
}
