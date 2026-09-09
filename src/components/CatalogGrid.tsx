"use client";

import { useMemo, useState } from "react";
import { leagues as allLeagues, type League, type Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function CatalogGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [selectedLeague, setSelectedLeague] = useState<"Todas" | League>("Todas");

  const filterOptions = [
    "Todas",
    ...Array.from(new Set(products.map((product) => product.league))),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchTarget = `${product.name} ${product.category} ${product.league} ${product.team}`.toLowerCase();
      const matchesQuery = searchTarget.includes(query.toLowerCase().trim());
      const matchesLeague =
        selectedLeague === "Todas" || product.league === selectedLeague;
      return matchesQuery && matchesLeague;
    });
  }, [selectedLeague, query, products]);

  const handleSelectLeague = (leagueName: "Todas" | League) => {
    setSelectedLeague((prev) => (prev === leagueName ? "Todas" : leagueName));
  };

  return (
    <>
      <section className="league-section" aria-labelledby="league-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Competiciones</p>
            <h2 id="league-heading">Elige tu liga.</h2>
          </div>
          <p className="league-note">
            Toca una liga para filtrar<br />
            las camisetas disponibles.
          </p>
        </div>
        <div className="league-grid">
          {allLeagues.map((league) => {
            const isSelected = selectedLeague === league.name;
            return (
              <button
                key={league.name}
                type="button"
                className={`league-tile ${isSelected ? "league-tile-active" : ""}`}
                onClick={() => handleSelectLeague(league.name)}
                aria-pressed={isSelected}
              >
                <span className="league-code">{league.code}</span>
                <div>
                  <h3>{league.name}</h3>
                  <p>{league.country}</p>
                </div>
                <span className="league-arrow" aria-hidden="true">
                  {isSelected ? "✓" : "↗"}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <div className="catalog-tools" id="productos">
        <div className="search-wrap">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar camiseta o equipo..."
            aria-label="Buscar camiseta o equipo"
          />
          {query && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setQuery("")}
              aria-label="Limpiar búsqueda"
            >
              ×
            </button>
          )}
        </div>

        <div className="filter-row" role="group" aria-label="Filtrar por liga">
          {filterOptions.map((item) => (
            <button
              key={item}
              type="button"
              className={selectedLeague === item ? "filter active" : "filter"}
              onClick={() => setSelectedLeague(item as "Todas" | League)}
              aria-pressed={selectedLeague === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="catalog-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-state">
          <p>No encontramos camisetas para el filtro o búsqueda seleccionada.</p>
          <button
            type="button"
            className="filter active reset-btn"
            onClick={() => {
              setQuery("");
              setSelectedLeague("Todas");
            }}
          >
            Ver todas las camisetas
          </button>
        </div>
      )}
    </>
  );
}
