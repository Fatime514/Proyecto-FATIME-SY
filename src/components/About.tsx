/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const interiorImg = "/src/assets/images/restaurant_interior_1782237993083.jpg";
import { Language, translations } from "../types";
import { Coffee, ShieldCheck, MapPin } from "lucide-react";

interface AboutProps {
  language: Language;
  onScrollTo: (sectionId: string) => void;
}

export default function About({ language, onScrollTo }: AboutProps) {
  const t = translations[language].about;

  return (
    <section 
      id="about" 
      className="relative bg-cream text-black py-24 overflow-hidden border-b border-gold-500/10"
    >
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#6b4423_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Elegant Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-warm-brown-500" />
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-warm-brown-500 uppercase">
                {t.badge}
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold leading-tight text-dark-charcoal tracking-wide">
              {t.titlePre}{" "}
              <span className="font-serif-italic text-warm-brown-500 block sm:inline italic">
                {t.titleHighlight}
              </span>
            </h2>

            <div className="h-[2px] w-24 bg-gold-500/50" />

            <div className="space-y-4 font-sans text-sm sm:text-base text-dark-charcoal/80 font-light leading-relaxed">
              <p>{t.text1}</p>
              <p>{t.text2}</p>
            </div>

            {/* Chef Quote Card */}
            <div className="relative border-l-4 border-gold-500 bg-warm-brown-50 p-6 rounded-r-lg shadow-sm">
              <span className="absolute top-2 right-4 text-6xl text-gold-500/15 font-serif select-none">”</span>
              <p className="font-serif text-base sm:text-lg italic text-warm-brown-800 leading-relaxed">
                {t.chefNote}
              </p>
              <p className="font-sans text-[11px] font-bold tracking-wider text-warm-brown-500 uppercase mt-3">
                — Chef de Cuisine, MOS-DOLLI
              </p>
            </div>

            {/* Quick facts icons */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-dark-charcoal/10">
              <div className="flex items-center gap-2.5">
                <Coffee className="h-5 w-5 text-warm-brown-500 flex-shrink-0" />
                <span className="font-sans text-xs font-medium text-dark-charcoal">{language === "en" ? "Coffee Ritual" : "Ritual de Café"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-warm-brown-500 flex-shrink-0" />
                <span className="font-sans text-xs font-medium text-dark-charcoal">{language === "en" ? "100% Authentic" : "100% Auténtico"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 text-warm-brown-500 flex-shrink-0" />
                <span className="font-sans text-xs font-medium text-dark-charcoal">Las Palmas</span>
              </div>
            </div>

            <button
              onClick={() => onScrollTo("menu")}
              className="mt-6 flex items-center gap-2 rounded bg-dark-charcoal hover:bg-dark-charcoal/90 active:scale-95 text-cream px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              {t.btn}
            </button>
          </div>

          {/* Column 2: Gorgeous Styled Image & Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Elegant Background Card backing */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-lg border-2 border-warm-brown-500/20 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500/10 rounded-lg pointer-events-none -z-10" />

            {/* Real Interior Image Container */}
            <div className="relative overflow-hidden rounded-lg shadow-xl border-4 border-cream">
              <img
                src={interiorImg}
                alt="MOS-DOLLI Elegant Dining Hall"
                referrerPolicy="no-referrer"
                className="w-full object-cover rounded shadow-inner transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-cream">
                <p className="font-serif text-sm italic">{language === "en" ? "MOS-DOLLI Interior, Vegueta" : "Interior de MOS-DOLLI, Vegueta"}</p>
              </div>
            </div>

            {/* Corner traditional decoration widget */}
            <div className="absolute top-[-15px] right-[-15px] h-12 w-12 bg-gold-500 flex items-center justify-center rounded-full shadow-md text-black font-serif text-lg font-bold select-none border border-cream">
              ❖
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
