/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Users, Music, ArrowRight } from "lucide-react";
import { Language, translations } from "../types";

interface EventsProps {
  language: Language;
  onScrollTo: (sectionId: string) => void;
}

export default function Events({ language, onScrollTo }: EventsProps) {
  const t = translations[language].events;

  return (
    <section 
      id="events" 
      className="relative bg-cream text-[#111111] py-24 overflow-hidden border-b border-gold-500/10"
    >
      {/* Decorative Traditional Border background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#6b4423_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-warm-brown-500 uppercase">
            {t.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-dark-charcoal mt-3 tracking-wide">
            {t.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-dark-charcoal/70 font-light leading-relaxed mt-4">
            {t.subtitle}
          </p>
          <div className="mx-auto mt-4 h-[1px] w-16 bg-warm-brown-500/30" />
        </div>

        {/* Events Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.list.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col justify-between rounded-xl bg-white border border-warm-brown-500/10 p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Event header tag */}
                <div className="flex items-center justify-between border-b border-dark-charcoal/5 pb-4">
                  <div className="flex items-center gap-2 text-warm-brown-500 font-sans text-xs font-semibold tracking-wider uppercase">
                    {event.id === "ev1" ? <Music className="h-4 w-4" /> : <Users className="h-4 w-4" />}
                    <span>{event.id === "ev1" ? (language === "en" ? "Music & Feast" : "Música y Festín") : (language === "en" ? "Culinary Workshop" : "Taller de Cocina")}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded bg-warm-brown-50 px-2.5 py-1 border border-warm-brown-500/10 text-warm-brown-600">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="font-sans text-[10px] font-bold tracking-wide uppercase">{event.id === "ev1" ? "FRIDAY" : "MONTHLY"}</span>
                  </div>
                </div>

                {/* Event Details */}
                <h3 className="font-serif text-2xl font-semibold text-dark-charcoal group-hover:text-warm-brown-500 transition-colors leading-snug">
                  {language === "en" ? event.titleEn : event.titleEs}
                </h3>
                <p className="font-sans text-xs font-bold text-gold-600 tracking-wider uppercase">
                  {event.date}
                </p>
                <p className="font-sans text-sm font-light text-dark-charcoal/75 leading-relaxed">
                  {language === "en" ? event.descEn : event.descEs}
                </p>
              </div>

              {/* Book Event Action CTA */}
              <div className="mt-8 pt-4 border-t border-dark-charcoal/5 flex items-center justify-between">
                <button
                  onClick={() => onScrollTo("reservations")}
                  className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-dark-charcoal hover:text-warm-brown-500 transition-all cursor-pointer"
                >
                  <span>{t.btnBookEvent}</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
