/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from "react";
import { Search, ShoppingBag, Star, RefreshCw, Sparkles, ChevronLeft, ChevronRight, LayoutGrid, Sliders } from "lucide-react";
import { MenuItem, Language, translations, signatureDishes } from "../types";
import { motion, AnimatePresence } from "motion/react";

const culturalSpotlights: Record<string, { titleEn: string; titleEs: string; textEn: string; textEs: string; compactEn: string; compactEs: string }> = {
  dish1: {
    titleEn: "✨ The Soul of Senegal",
    titleEs: "✨ El Alma de Senegal",
    textEn: "Thieboudienne is the official national dish of Senegal, originating in the coastal town of Saint-Louis. It represents 'Teranga' (hospitality), traditionally shared in a single large platter around family and guests.",
    textEs: "El Thieboudienne es el plato nacional oficial de Senegal, con origen en la ciudad de Saint-Louis. Representa la 'Teranga' (hospitalidad), compartiéndose tradicionalmente en una gran bandeja entre familiares e invitados.",
    compactEn: "Senegal's beloved national dish, representing Teranga (hospitality) and shared unity.",
    compactEs: "El amado plato nacional de Senegal, que representa la Teranga (hospitalidad) y la unión."
  },
  dish2: {
    titleEn: "✨ A Comfort Classic",
    titleEs: "✨ Un Clásico Reconfortante",
    textEn: "Mafe is a rich, satisfying peanut stew with roots in the Mandinka culture. Highly popular across West Africa, it celebrates the bountiful harvest of peanut crops with warm, nutty comfort.",
    textEs: "El Mafe es un guiso rico y satisfactorio a base de cacahuete, con profundas raíces en la cultura Mandinga. Muy popular en África Occidental, celebra las cosechas tradicionales brindando calidez.",
    compactEn: "A comforting peanut stew celebrating the rich historic harvests of West Africa.",
    compactEs: "Un reconfortante estofado de cacahuete que celebra las cosechas de África Occidental."
  },
  dish3: {
    titleEn: "✨ Citrus & Spice Legacy",
    titleEs: "✨ El Legado de Cítricos y Especias",
    textEn: "Yassa Poulet comes from the lush Casamance region in southern Senegal. The secret to its iconic tang is a slow marinade of heaps of caramelized sweet onions in fresh lemon juice, mustard, and garlic.",
    textEs: "El Yassa Poulet proviene de la exuberante región de Casamance al sur de Senegal. El secreto de su sabor cítrico icónico es una marinada lenta de abundante cebolla caramelizada, limón, mostaza y ajo.",
    compactEn: "A vibrant citrus and caramelized onion masterpiece from the Casamance region.",
    compactEs: "Vibrante obra maestra de cítricos y cebolla de la región de Casamance."
  },
  dish4: {
    titleEn: "✨ Cultural Legacy of Thiéré",
    titleEs: "✨ Legado Cultural del Thiéré",
    textEn: "Thiéré is Senegal's traditional, iron-rich millet couscous, deeply woven into West African family culture. Hand-rolled and steamed repeatedly, it is traditionally served as the centerpiece dish during Tamkharit (Islamic New Year).",
    textEs: "El Thiéré es el cuscús de mijo tradicional de Senegal, rico en hierro y profundamente arraigado en la cultura familiar. Elaborado a mano y cocido al vapor, se sirve durante el Tamkharit (Año Nuevo Islámico).",
    compactEn: "Traditional steamed millet made by hand to bring families together in celebration.",
    compactEs: "Mijo hecho a mano cocido al vapor, elaborado tradicionalmente para unir a las familias."
  }
};

interface MenuProps {
  language: Language;
  onAddToOrder: (dish: MenuItem) => void;
}

export default function Menu({ language, onAddToOrder }: MenuProps) {
  const t = translations[language].menu;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const [activeSlide, setActiveSlide] = useState(0);
  const [layoutMode, setLayoutMode] = useState<"slides" | "grid">("slides");

  const categories = [
    { id: "all", label: t.categories.all },
    { id: "mains", label: t.categories.mains },
    { id: "drinks", label: t.categories.drinks },
    { id: "desserts", label: t.categories.desserts },
  ];

  // Filter dishes based on selected category and search input
  const filteredDishes = useMemo(() => {
    return signatureDishes.filter((dish) => {
      const name = language === "en" ? dish.nameEn.toLowerCase() : dish.nameEs.toLowerCase();
      const desc = language === "en" ? dish.descriptionEn.toLowerCase() : dish.descriptionEs.toLowerCase();
      const tags = language === "en" ? dish.tagsEn.map(t=>t.toLowerCase()) : dish.tagsEs.map(t=>t.toLowerCase());
      
      const matchesSearch =
        name.includes(searchQuery.toLowerCase()) ||
        desc.includes(searchQuery.toLowerCase()) ||
        tags.some((tag) => tag.includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "all" || dish.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, language]);

  // Reset slide index when selection or search query changes
  useEffect(() => {
    setActiveSlide(0);
  }, [selectedCategory, searchQuery, filteredDishes.length]);

  const handleAddToCart = (dish: MenuItem) => {
    onAddToOrder(dish);
    setAddedItems((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [dish.id]: false }));
    }, 1500);
  };

  const handlePrevSlide = () => {
    if (filteredDishes.length === 0) return;
    setActiveSlide((prev) => (prev === 0 ? filteredDishes.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    if (filteredDishes.length === 0) return;
    setActiveSlide((prev) => (prev === filteredDishes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="menu" 
      className="relative bg-cream py-24 border-b border-gold-500/10"
    >
      {/* Abstract native pattern elements in the background */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#6b4423_2px,transparent_2px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-600 uppercase flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-gold-600/80" />
            {t.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-dark-charcoal mt-3 tracking-wide">
            {t.title}
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-20 bg-gold-500/30" />
        </div>

        {/* Search & Filter Bar Controls */}
        <div className="mb-12 space-y-6 max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-warm-brown-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-white border border-warm-brown-300/25 focus:border-gold-500 text-black placeholder-warm-brown-300 rounded-lg py-4 pl-12 pr-4 font-sans text-sm outline-none transition-all shadow-inner focus:ring-1 focus:ring-gold-500/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-sans text-warm-brown-300 hover:text-gold-500"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded font-sans text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                  selectedCategory === cat.id
                    ? "bg-gold-500 text-black shadow-md border border-gold-500"
                    : "bg-white text-neutral-800 border border-warm-brown-300/20 hover:border-gold-500/40 hover:text-black shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Layout Mode Selector Toggle (Slides vs Cards Grid) */}
          <div className="flex justify-center items-center gap-2 pt-4 border-t border-warm-brown-300/10">
            <span className="font-sans text-[10px] font-bold tracking-widest text-warm-brown-600 uppercase mr-1">
              {language === "en" ? "Display:" : "Ver como:"}
            </span>
            <div className="bg-white rounded-lg p-1 border border-warm-brown-300/20 shadow-sm flex items-center">
              <button
                onClick={() => setLayoutMode("slides")}
                className={`px-3 py-1.5 rounded-md font-sans text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                  layoutMode === "slides"
                    ? "bg-gold-500 text-black shadow-sm"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                }`}
              >
                <Sliders className="h-3 w-3" />
                <span>{language === "en" ? "Slideshow" : "Diapositivas"}</span>
              </button>
              <button
                onClick={() => setLayoutMode("grid")}
                className={`px-3 py-1.5 rounded-md font-sans text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                  layoutMode === "grid"
                    ? "bg-gold-500 text-black shadow-sm"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                }`}
              >
                <LayoutGrid className="h-3 w-3" />
                <span>{language === "en" ? "Cards Grid" : "Tarjetas"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Slideshow Presentation of Dishes */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-warm-brown-300/10 max-w-md mx-auto shadow-sm">
            <RefreshCw className="h-8 w-8 text-warm-brown-300 mx-auto animate-spin mb-4" />
            <p className="font-sans text-sm text-warm-brown-200">
              {t.noResults}
            </p>
          </div>
        ) : layoutMode === "slides" ? (
          <div className="relative max-w-5xl mx-auto px-2 sm:px-12">
            
            {/* Slide Frame container */}
            <div className="relative min-h-[460px] overflow-visible">
              <AnimatePresence mode="wait">
                {(() => {
                  const dish = filteredDishes[activeSlide] || filteredDishes[0];
                  if (!dish) return null;
                  const name = language === "en" ? dish.nameEn : dish.nameEs;
                  const desc = language === "en" ? dish.descriptionEn : dish.descriptionEs;
                  const tags = language === "en" ? dish.tagsEn : dish.tagsEs;
                  const isAdded = addedItems[dish.id];

                  return (
                    <motion.div
                      key={dish.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-2xl shadow-xl border border-warm-brown-300/10 overflow-hidden min-h-[450px]"
                    >
                      {/* Column 1: Food Picture */}
                      <div className="relative lg:col-span-6 h-64 lg:h-auto min-h-[280px] overflow-hidden bg-neutral-100 shrink-0">
                        <img
                          src={dish.image}
                          alt={name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Rating Badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-1 rounded bg-black/75 backdrop-blur-md px-3 py-1.5 text-gold-500 border border-gold-500/25">
                          <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                          <span className="font-sans text-xs font-bold mt-0.5">{dish.rating.toFixed(1)}</span>
                        </div>

                        {/* Culinary tags */}
                        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                          {tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="rounded bg-gold-500 text-black px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Details & Buy action */}
                      <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between bg-white text-black">
                        <div>
                          {/* Slide Count */}
                          <div className="font-mono text-[11px] text-warm-brown-500 font-bold tracking-widest uppercase mb-4 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                            {language === "en" ? "Slide" : "Diapositiva"} {activeSlide + 1} / {filteredDishes.length}
                          </div>

                          {/* Title and Pricing */}
                          <div className="flex justify-between items-baseline gap-4 mb-4 border-b border-warm-brown-300/10 pb-4">
                            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-black tracking-wide leading-tight">
                              {name}
                            </h3>
                            <span className="font-sans text-xl sm:text-2xl font-bold text-gold-600 shrink-0">
                              {dish.price.toFixed(2)}€
                            </span>
                          </div>

                          {/* Description details */}
                          <p className="font-sans text-sm sm:text-base font-light text-neutral-700 leading-relaxed mb-6">
                            {desc}
                          </p>

                          {/* Dynamic Cultural Spotlight */}
                          {culturalSpotlights[dish.id] && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mb-8 p-4 sm:p-5 rounded-xl bg-gold-50/60 border border-gold-500/20 text-warm-brown-900 text-xs sm:text-sm font-sans space-y-2.5 relative overflow-hidden"
                            >
                              <div className="absolute top-0 right-0 w-12 h-12 bg-gold-500/5 rounded-full translate-x-3 -translate-y-3 pointer-events-none" />
                              <div className="flex items-center gap-2 font-bold text-gold-700 uppercase tracking-wider text-[10px] sm:text-[11px]">
                                <Sparkles className="h-4 w-4 text-gold-600 animate-pulse" />
                                <span>
                                  {language === "en" 
                                    ? culturalSpotlights[dish.id].titleEn 
                                    : culturalSpotlights[dish.id].titleEs}
                                </span>
                              </div>
                              <p className="leading-relaxed font-light text-neutral-800">
                                {language === "en" 
                                  ? culturalSpotlights[dish.id].textEn 
                                  : culturalSpotlights[dish.id].textEs}
                              </p>
                            </motion.div>
                          )}
                        </div>

                        {/* Add To Cart Trigger */}
                        <div className="mt-auto">
                          <button
                            onClick={() => handleAddToCart(dish)}
                            disabled={isAdded}
                            className={`w-full py-4 rounded-lg font-sans text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 ${
                              isAdded
                                ? "bg-green-600 text-white shadow-md cursor-default"
                                : "bg-black text-white hover:bg-gold-500 hover:text-black shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <span className="text-sm">✓</span>
                                <span>{t.added}</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="h-4 w-4" />
                                <span>{t.addToOrder}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* Left and Right Chevron buttons */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-0 sm:left-[-16px] top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-warm-brown-300/15 shadow-md hover:shadow-lg hover:border-gold-500 text-black hover:text-gold-600 transition-all cursor-pointer z-20 focus:outline-none active:scale-90"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-0 sm:right-[-16px] top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-warm-brown-300/15 shadow-md hover:shadow-lg hover:border-gold-500 text-black hover:text-gold-600 transition-all cursor-pointer z-20 focus:outline-none active:scale-90"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.5]" />
            </button>

            {/* Slide indicators / pagination dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {filteredDishes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2.5 transition-all duration-300 rounded-full ${
                    activeSlide === idx
                      ? "w-8 bg-gold-500"
                      : "w-2.5 bg-warm-brown-300/30 hover:bg-warm-brown-300/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        ) : (
          /* Cards Grid View */
          <div className="mx-auto max-w-7xl px-2 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDishes.map((dish) => {
                const name = language === "en" ? dish.nameEn : dish.nameEs;
                const desc = language === "en" ? dish.descriptionEn : dish.descriptionEs;
                const tags = language === "en" ? dish.tagsEn : dish.tagsEs;
                const isAdded = addedItems[dish.id];

                return (
                  <motion.div
                    key={dish.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-warm-brown-300/10 overflow-hidden flex flex-col justify-between hover:scale-[1.01] transition-all duration-300"
                  >
                    {/* Dish Image */}
                    <div className="relative h-48 overflow-hidden bg-neutral-100 shrink-0">
                      <img
                        src={dish.image}
                        alt={name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Rating */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 rounded bg-black/75 backdrop-blur-md px-2 py-1 text-gold-500 border border-gold-500/15">
                        <Star className="h-3 w-3 fill-gold-500 text-gold-500" />
                        <span className="font-sans text-[10px] font-bold mt-0.5">{dish.rating.toFixed(1)}</span>
                      </div>

                      {/* Category Tag */}
                      <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                        {tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded bg-gold-500 text-black px-2 py-0.5 text-[9px] font-sans font-bold uppercase tracking-wider shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content details */}
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex justify-between items-baseline gap-2">
                          <h4 className="font-serif text-lg font-bold text-black tracking-wide leading-tight line-clamp-1">
                            {name}
                          </h4>
                          <span className="font-sans text-base font-extrabold text-gold-600 shrink-0">
                            {dish.price.toFixed(2)}€
                          </span>
                        </div>
                        <p className="font-sans text-xs font-light text-neutral-600 leading-relaxed line-clamp-3">
                          {desc}
                        </p>

                        {/* Dynamic Cultural Spotlight Compact */}
                        {culturalSpotlights[dish.id] && (
                          <div className="mt-2 p-2.5 rounded bg-gold-50/70 border border-gold-500/10 text-[10px] leading-relaxed text-warm-brown-900 font-sans font-light">
                            <span className="font-bold text-gold-700 block uppercase tracking-wider text-[8px] mb-0.5">
                              {language === "en" ? culturalSpotlights[dish.id].titleEn : culturalSpotlights[dish.id].titleEs}
                            </span>
                            {language === "en"
                              ? culturalSpotlights[dish.id].compactEn
                              : culturalSpotlights[dish.id].compactEs
                            }
                          </div>
                        )}
                      </div>

                      {/* Order action */}
                      <div className="pt-4 mt-auto">
                        <button
                          onClick={() => handleAddToCart(dish)}
                          disabled={isAdded}
                          className={`w-full py-2.5 rounded-lg font-sans text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                            isAdded
                              ? "bg-green-600 text-white shadow-sm cursor-default"
                              : "bg-black text-white hover:bg-gold-500 hover:text-black shadow-sm hover:shadow-md active:scale-95"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <span className="text-xs">✓</span>
                              <span>{t.added}</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="h-3.5 w-3.5" />
                              <span>{t.addToOrder}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
