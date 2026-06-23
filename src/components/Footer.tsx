/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, MessageCircle, ArrowUp } from "lucide-react";
import { Language, translations } from "../types";

interface FooterProps {
  language: Language;
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ language, onScrollTo }: FooterProps) {
  const t = translations[language];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer" 
      className="bg-[#0b0b0b] text-cream border-t border-gold-500/10 py-16 relative"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-warm-brown-600 to-gold-600 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#111111] text-xs">
                  ❖
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider text-gold-500 uppercase leading-none">
                  {t.brandName}
                </span>
                <span className="font-sans text-[9px] tracking-[0.25em] text-cream uppercase mt-1 leading-none font-light">
                  {t.brandSubtitle}
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs font-light text-warm-brown-100/70 leading-relaxed max-w-sm">
              {language === "en"
                ? "Connecting hearts through the authentic depth of Senegalese tastes, spices, and warm hospitality in the historic center of Vegueta."
                : "Conectando corazones a través de la auténtica profundidad de los sabores, especias y hospitalidad de Senegal en el casco histórico de Vegueta."}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-brown-500/10 border border-gold-500/10 hover:border-gold-500/30 text-cream hover:text-gold-500 transition-all focus:outline-none"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-brown-500/10 border border-gold-500/10 hover:border-gold-500/30 text-cream hover:text-gold-500 transition-all focus:outline-none"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/34624965510"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-brown-500/10 border border-gold-500/10 hover:border-gold-500/30 text-cream hover:text-gold-500 transition-all focus:outline-none"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-500 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 font-sans text-xs font-light text-warm-brown-100/80">
                <li>
                  <button onClick={() => onScrollTo("home")} className="hover:text-gold-500 transition-colors uppercase tracking-wider">{t.nav.home}</button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("about")} className="hover:text-gold-500 transition-colors uppercase tracking-wider">{t.nav.about}</button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("menu")} className="hover:text-gold-500 transition-colors uppercase tracking-wider">{t.nav.menu}</button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("gallery")} className="hover:text-gold-500 transition-colors uppercase tracking-wider">{t.nav.gallery}</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-500 mb-4">
                Experiences
              </h4>
              <ul className="space-y-2.5 font-sans text-xs font-light text-warm-brown-100/80">
                <li>
                  <button onClick={() => onScrollTo("events")} className="hover:text-gold-500 transition-colors uppercase tracking-wider">{t.nav.events}</button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("reservations")} className="hover:text-gold-500 transition-colors uppercase tracking-wider">{t.nav.reservations}</button>
                </li>
                <li>
                  <button onClick={() => onScrollTo("contact")} className="hover:text-gold-500 transition-colors uppercase tracking-wider">{t.nav.contact}</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Info details */}
          <div className="md:col-span-3 space-y-4 font-sans text-xs font-light text-warm-brown-100/85">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-500 mb-4">
              Vegueta
            </h4>
            <p className="leading-relaxed">
              Paseo de San José, Vegueta,<br />
              35015 Las Palmas de Gran Canaria,<br />
              España / Spain
            </p>
            <p className="font-semibold text-gold-500 border-t border-gold-500/10 pt-3 mt-3">
              {t.contact.hoursText}
            </p>
          </div>

        </div>

        {/* Bottom copyright details and back-to-top */}
        <div className="border-t border-gold-500/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] font-light text-warm-brown-100/50">
          <p>
            {language === "en" 
              ? `© ${currentYear} MOS-DOLLI Senegalese Restaurant. All Rights Reserved.`
              : `© ${currentYear} MOS-DOLLI Restaurante Senegalés. Todos los derechos reservados.`}
          </p>

          <button
            onClick={handleBackToTop}
            className="flex items-center gap-1.5 hover:text-gold-500 transition-colors uppercase tracking-wider focus:outline-none cursor-pointer"
          >
            <span>{language === "en" ? "Back to top" : "Volver arriba"}</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
