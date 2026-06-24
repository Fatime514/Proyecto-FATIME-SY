/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const heroImg = "/src/assets/images/yassa_poulet_hero_1782301879103.jpg";
import { Language, translations } from "../types";
import { ChevronDown, Utensils, CalendarRange, MapPin } from "lucide-react";

interface HeroProps {
  language: Language;
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ language, onScrollTo }: HeroProps) {
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream py-20 lg:py-0 border-b border-gold-500/10"
    >
      {/* Decorative Traditional Patterns & Ambient Glowing Backdrops */}
      <div className="absolute inset-0 z-0 opacity-[0.04] bg-[radial-gradient(#6b4423_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-warm-brown-500/5 blur-[100px] pointer-events-none z-0" />

      {/* Decorative Bottom Gold/Warm Brown Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[3px] bg-gradient-to-r from-gold-500/20 via-gold-500 to-gold-500/20" />

      {/* Main Responsive Grid Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Elegant Storytelling & Actions */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start">
          
          {/* Refined Badge */}
          <div className="flex items-center gap-2 rounded-full border border-gold-600/20 bg-gold-500/10 px-4 py-1.5 backdrop-blur-sm shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-600 animate-pulse" />
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-gold-700 uppercase">
              {t.badge}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-600 animate-pulse" />
          </div>

          {/* Elegant Display Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.15] tracking-tight text-dark-charcoal">
            {t.titlePre} <br className="hidden sm:inline lg:hidden" />
            <span className="font-serif-italic text-gold-600 block sm:inline italic">
              {t.titleHighlight}
            </span>{" "}
            <br className="hidden lg:inline" />
            <span className="text-warm-brown-800 text-3xl sm:text-5xl md:text-6xl font-medium block mt-2">
              {t.titlePost}
            </span>
          </h1>

          {/* Handcrafted Motif Separator */}
          <div className="flex items-center gap-4 text-gold-500/45 w-full justify-center lg:justify-start">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-xs font-mono tracking-wider text-gold-600/60">✦ ❖ ✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          {/* Exquisite Descriptive Subhead */}
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-warm-brown-800 font-sans font-light">
            {t.subtitle}
          </p>

          {/* Elegant Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onScrollTo("menu")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-gold-600 hover:bg-gold-700 hover:shadow-lg hover:shadow-gold-600/10 active:scale-[0.98] px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all focus:outline-none cursor-pointer"
            >
              <Utensils className="h-4.5 w-4.5" />
              {t.btnMenu}
            </button>
            
            <button
              onClick={() => onScrollTo("reservations")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border-2 border-warm-brown-800 hover:border-gold-600 hover:text-gold-600 active:scale-[0.98] bg-transparent px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest text-warm-brown-800 shadow-sm transition-all focus:outline-none cursor-pointer"
            >
              <CalendarRange className="h-4.5 w-4.5 text-gold-600" />
              {t.btnBook}
            </button>
          </div>
        </div>

        {/* Right Column: Custom Arched Image Showcase */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-6">
          {/* Secondary Decorative Frame Shadow behind the Main Arch */}
          <div className="absolute inset-0 m-auto translate-x-3 translate-y-3 rounded-t-[160px] border border-gold-500/15 aspect-[4/5] w-full max-w-[320px] md:max-w-[360px] pointer-events-none z-0" />

          {/* Main Arched Frame */}
          <div className="rounded-t-[160px] border-[10px] border-white shadow-2xl relative overflow-hidden aspect-[4/5] w-full max-w-[320px] md:max-w-[360px] z-10 hover:scale-[1.01] transition-transform duration-500">
            <img
              src={heroImg}
              alt="MOS-DOLLI Restaurant Atmosphere"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center transform scale-100"
            />
            {/* Subtle overlay inside frame to enhance depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Unique Boutique Badge Layered on Corner */}
          <div className="absolute -bottom-2 -left-2 sm:-left-6 bg-white border border-warm-brown-500/10 p-4 rounded-xl shadow-xl flex items-center gap-3 z-20 animate-fade-in max-w-xs">
            <div className="bg-gold-500/10 text-gold-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-gold-600" />
            </div>
            <div className="text-left">
              <p className="font-serif text-sm font-bold text-dark-charcoal leading-none">Vegueta, Las Palmas</p>
              <p className="font-sans text-[10px] text-warm-brown-600 font-semibold uppercase tracking-wider mt-1">
                {language === "en" ? "Historic Quarter" : "Casco Histórico"}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Smooth Scroll Down Indicator */}
      <div 
        onClick={() => onScrollTo("about")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 text-warm-brown-600 hover:text-gold-600 transition-colors animate-bounce"
      >
        <span className="font-sans text-[9px] font-bold tracking-widest uppercase">
          {language === "en" ? "Scroll Down" : "Deslizar"}
        </span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  );
}
