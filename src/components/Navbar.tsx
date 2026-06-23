/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Globe, CalendarDays } from "lucide-react";
import { Language, translations } from "../types";

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({
  language,
  onLanguageChange,
  cartCount,
  onOpenCart,
  onScrollTo,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, id: "home" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.menu, id: "menu" },
    { label: t.nav.gallery, id: "gallery" },
    { label: t.nav.events, id: "events" },
    { label: t.nav.reservations, id: "reservations" },
    { label: t.nav.contact, id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 border-b border-warm-brown-500/10 py-3 shadow-md backdrop-blur-md"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo with African Pattern */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-warm-brown-600 to-gold-600 p-0.5 shadow-md">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-cream">
                <svg
                  viewBox="0 0 100 100"
                  className="h-6 w-6 fill-gold-600 transition-transform duration-500 group-hover:scale-110"
                >
                  <path d="M47.7,11.5c-0.6,0.5-1.1,1-1.6,1.4c-1.4,1.1-2.9,2.2-4.1,3.4c-1,1-1.8,2.1-2.4,3.3c-0.4,0.8-0.9,1.6-1,2.4 c-0.1,0.8,0.2,1.6,0.3,2.4c0.2,1.1,0.6,2.1,0.6,3.2c0,0.8-0.2,1.6-0.3,2.3c-0.4,1.4-1.1,2.8-1.5,4.2c-0.5,1.7-0.9,3.5-1.5,5.1 c-0.4,1.1-1.1,2.1-1.7,3.1c-0.8,1.4-1.7,2.8-2.6,4.1c-1.1,1.6-2.5,3.1-3.6,4.7c-0.7,1-1.1,2.2-1.3,3.4c-0.3,1.4-0.1,2.7,0.4,4.1 c0.5,1.2,1.1,2.3,1.6,3.5c0.7,1.6,1.4,3.1,2,4.7c0.4,1,1,1.9,1.8,2.6c1.1,1,2.5,1.7,3.9,2c1.7,0.4,3.5,0.2,5.2-0.2 c1.1-0.3,2.1-0.9,3.1-1.5c1.4-0.8,2.7-1.8,4-2.8c0.7-0.5,1.4-1.1,2.1-1.6c1.2-0.9,2.5-1.6,3.9-2.2c1.7-0.7,3.5-1.1,5.3-1.4 c1.6-0.3,3.3-0.5,4.9-0.8c1.6-0.3,3.1-0.9,4.4-1.9c1.2-1,2.1-2.3,2.7-3.7c0.7-1.6,1.1-3.3,1.5-5c0.4-1.7,0.6-3.5,0.7-5.2 c0.1-1.7-0.1-3.3-0.5-4.9c-0.3-1.2-0.8-2.3-1.4-3.4c-0.8-1.4-1.8-2.6-2.9-3.8c-1-1.1-2.1-2.1-3.3-3c-1.1-0.9-2.3-1.6-3.6-2.3 c-1.2-0.7-2.6-1.1-4-1.4c-1.4-0.3-2.9-0.4-4.3-0.3c-1.4,0.1-2.7,0.5-4,0.9C49.9,10.6,48.8,11,47.7,11.5z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-gold-500 uppercase leading-none">
                MOS-DOLLI
              </span>
              <span className={`font-sans text-[10px] tracking-[0.25em] uppercase mt-1 leading-none font-medium transition-colors duration-300 ${
                isScrolled ? "text-warm-brown-600" : "text-warm-brown-100"
              }`}>
                {t.brandSubtitle}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1.5 xl:gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2 xl:px-3 py-2 font-sans text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors focus:outline-none ${
                    isScrolled ? "text-dark-charcoal hover:text-gold-600" : "text-white/90 hover:text-gold-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border-l border-gold-500/10 pl-4">
              <Globe className={`h-3.5 w-3.5 transition-colors ${isScrolled ? "text-gold-600" : "text-gold-400/80"}`} />
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-1.5 py-1 font-sans text-[11px] font-bold tracking-wider transition-colors focus:outline-none ${
                  language === "en" 
                    ? (isScrolled ? "text-gold-600 border-b border-gold-600" : "text-gold-400 border-b border-gold-400")
                    : (isScrolled ? "text-warm-brown-400 hover:text-dark-charcoal" : "text-warm-brown-200 hover:text-white")
                }`}
              >
                EN
              </button>
              <span className="text-warm-brown-300 text-xs">/</span>
              <button
                onClick={() => onLanguageChange("es")}
                className={`px-1.5 py-1 font-sans text-[11px] font-bold tracking-wider transition-colors focus:outline-none ${
                  language === "es" 
                    ? (isScrolled ? "text-gold-600 border-b border-gold-600" : "text-gold-400 border-b border-gold-400")
                    : (isScrolled ? "text-warm-brown-400 hover:text-dark-charcoal" : "text-warm-brown-200 hover:text-white")
                }`}
              >
                ES
              </button>
            </div>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all focus:outline-none ${
                isScrolled 
                  ? "bg-warm-brown-500/5 border-warm-brown-500/15 text-dark-charcoal hover:bg-gold-500/10 hover:border-gold-500/30" 
                  : "bg-white/10 border-white/15 text-white hover:bg-white/20 hover:border-white/35"
              }`}
              aria-label="View online order"
            >
              <ShoppingBag className="h-4.5 w-4.5 text-gold-500" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-sans font-bold text-black animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick("reservations")}
              className="flex items-center gap-2 rounded bg-gold-500 px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wider text-black shadow-md hover:bg-gold-400 active:scale-95 transition-all focus:outline-none"
            >
              <CalendarDays className="h-4 w-4" />
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Language Switcher Quick toggle */}
            <button
              onClick={() => onLanguageChange(language === "en" ? "es" : "en")}
              className={`flex items-center gap-1 rounded border px-2.5 py-1.5 font-sans text-[11px] font-bold transition-all ${
                isScrolled
                  ? "bg-warm-brown-500/5 border-warm-brown-500/15 text-gold-600"
                  : "bg-black/40 border-gold-500/15 text-gold-500"
              }`}
              aria-label="Toggle Language"
            >
              <Globe className="h-3 w-3" />
              {language.toUpperCase()}
            </button>

            {/* Mobile Cart Button */}
            <button
              onClick={onOpenCart}
              className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                isScrolled
                  ? "bg-warm-brown-500/5 border-warm-brown-500/15 text-dark-charcoal"
                  : "bg-black/40 border-gold-500/15 text-cream"
              }`}
              aria-label="View Order"
            >
              <ShoppingBag className="h-4 w-4 text-gold-500" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gold-500 text-[9px] font-sans font-bold text-black">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded p-2 transition-all ${
                isScrolled ? "text-dark-charcoal hover:bg-warm-brown-500/5" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-warm-brown-500/10 backdrop-blur-md animate-fade-in absolute w-full left-0 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-4 py-3 font-sans text-sm font-semibold tracking-wider text-dark-charcoal uppercase rounded hover:bg-warm-brown-500/5 hover:text-gold-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-gold-500/5 pt-3 px-4">
            <button
              onClick={() => handleNavClick("reservations")}
              className="w-full flex items-center justify-center gap-2 rounded bg-gold-500 py-3 font-sans text-xs font-bold uppercase tracking-wider text-black shadow-md"
            >
              <CalendarDays className="h-4.5 w-4.5" />
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
