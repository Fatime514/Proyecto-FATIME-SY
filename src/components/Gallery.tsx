/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GalleryItem, Language, translations, mockGallery } from "../types";

interface GalleryProps {
  language: Language;
}

// Enriched gallery list with interior, events, and cultural art
const fullGalleryList: GalleryItem[] = [
  ...mockGallery,
  {
    id: "gal_interior_table",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    titleEn: "Premium Table Setup",
    titleEs: "Montaje de Mesa Premium",
    category: "interior"
  },
  {
    id: "gal_events_music",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    titleEn: "Annual Cultural Music Festival",
    titleEs: "Festival Anual de Música Cultural",
    category: "events"
  },
  {
    id: "gal_culture_artifacts",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    titleEn: "Authentic African Hand-Carved Artifacts",
    titleEs: "Artefactos Tallados a Mano Auténticos",
    category: "culture"
  }
];

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language].gallery;
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    { id: "all", label: t.filterAll },
    { id: "food", label: t.filterFood },
    { id: "interior", label: t.filterInterior },
    { id: "events", label: t.filterEvents },
    { id: "culture", label: t.filterCulture },
  ];

  const filteredItems = fullGalleryList.filter((item) => {
    return activeFilter === "all" || item.category === activeFilter;
  });

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((x) => x.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section 
      id="gallery" 
      className="relative bg-cream py-24 border-b border-gold-500/10"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
            {t.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-dark-charcoal mt-3 tracking-wide">
            {t.title}
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-16 bg-gold-500/30" />
        </div>

        {/* Gallery Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded font-sans text-[11px] font-semibold tracking-wider uppercase transition-all focus:outline-none ${
                activeFilter === cat.id
                  ? "bg-gold-500 text-black border border-gold-500 shadow-md animate-pulse-subtle"
                  : "bg-white text-dark-charcoal border border-warm-brown-500/10 shadow-sm hover:border-gold-500 hover:text-gold-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Image Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item) => {
            const title = language === "en" ? item.titleEn : item.titleEs;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="relative break-inside-avoid rounded-lg overflow-hidden bg-black border border-gold-500/5 shadow hover:border-gold-500/20 group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-750 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay details on hover */}
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-gold-500 text-xs font-sans font-bold uppercase tracking-widest mb-1">
                    <Eye className="h-4 w-4" />
                    <span>View Image</span>
                  </div>
                  <h4 className="font-serif text-lg text-cream font-medium tracking-wide">
                    {title}
                  </h4>
                  <p className="font-sans text-[10px] text-warm-brown-300 uppercase tracking-widest mt-1.5 border-t border-gold-500/10 pt-1.5">
                    {item.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal overlay */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 rounded-full p-2.5 bg-black border border-neutral-800 text-cream hover:bg-gold-500 hover:text-black transition-all shadow-lg"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev Image Control */}
            <button
              onClick={handlePrev}
              className="absolute left-6 rounded-full p-3 bg-black border border-neutral-800 text-cream hover:bg-gold-500 hover:text-black transition-all shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Image Control */}
            <button
              onClick={handleNext}
              className="absolute right-6 rounded-full p-3 bg-black border border-neutral-800 text-cream hover:bg-gold-500 hover:text-black transition-all shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Main Lightbox Content */}
            <div
              className="max-w-4xl max-h-[80vh] px-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={language === "en" ? filteredItems[lightboxIndex].titleEn : filteredItems[lightboxIndex].titleEs}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] max-w-full rounded border border-gold-500/10 shadow-2xl object-contain"
              />
              <div className="text-center mt-5 space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl text-gold-500 font-medium">
                  {language === "en" ? filteredItems[lightboxIndex].titleEn : filteredItems[lightboxIndex].titleEs}
                </h3>
                <p className="font-sans text-xs text-warm-brown-300 uppercase tracking-widest">
                  {filteredItems[lightboxIndex].category}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
