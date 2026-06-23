/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";
import { Language, translations } from "../types";

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language].contact;
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError(language === "en" ? "Enter a valid email" : "Introduce un correo válido");
      return;
    }

    setNewsletterError("");
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => {
      setNewsletterSuccess(false);
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className="relative bg-cream text-[#111111] py-24 border-b border-gold-500/10"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Column 1: Contact details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-warm-brown-500 uppercase">
                {t.badge}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-dark-charcoal mt-3 tracking-wide">
                {t.title}
              </h2>
              <div className="h-[2px] w-20 bg-warm-brown-500/40 mt-4" />
            </div>

            {/* List of details */}
            <div className="space-y-6 py-4">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-warm-brown-500/10 border border-warm-brown-500/20 text-warm-brown-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-dark-charcoal">
                    {t.addressLabel}
                  </h4>
                  <p className="font-sans text-sm font-light text-dark-charcoal/80 mt-1 leading-relaxed">
                    {t.addressText}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-warm-brown-500/10 border border-warm-brown-500/20 text-warm-brown-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-dark-charcoal">
                    {t.phoneLabel}
                  </h4>
                  <a 
                    href={`tel:${t.phoneText.replace(/\s+/g, "")}`}
                    className="font-sans text-sm font-semibold text-gold-700 hover:text-warm-brown-500 transition-colors mt-1 block"
                  >
                    {t.phoneText}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-warm-brown-500/10 border border-warm-brown-500/20 text-warm-brown-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-dark-charcoal">
                    {t.emailLabel}
                  </h4>
                  <a 
                    href={`mailto:${t.emailText}`}
                    className="font-sans text-sm font-medium text-dark-charcoal/80 hover:text-gold-700 transition-colors mt-1 block"
                  >
                    {t.emailText}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4 border-t border-dark-charcoal/10 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-warm-brown-500/10 border border-warm-brown-500/20 text-warm-brown-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-dark-charcoal">
                    {t.hoursLabel}
                  </h4>
                  <p className="font-sans text-sm font-semibold text-dark-charcoal mt-1">
                    {t.hoursText}
                  </p>
                  <p className="font-sans text-[11px] font-light text-dark-charcoal/60 italic mt-0.5">
                    {t.kitchenNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter card */}
            <div className="rounded-lg bg-white border border-warm-brown-500/10 p-5 shadow-sm">
              <h4 className="font-serif text-base font-bold text-dark-charcoal flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-warm-brown-500" />
                {t.newsletterTitle}
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="mt-3 flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError("");
                    }}
                    placeholder={t.newsletterPlaceholder}
                    className="w-full bg-[#fafafa] border border-warm-brown-500/20 rounded px-3 py-2 text-xs text-dark-charcoal placeholder-warm-brown-300 focus:outline-none focus:border-warm-brown-500"
                  />
                  {newsletterError && (
                    <span className="absolute left-0 -bottom-4 text-[10px] text-red-500">{newsletterError}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-dark-charcoal text-cream hover:bg-gold-500 hover:text-black transition-colors rounded px-4 flex items-center justify-center text-xs font-sans font-bold uppercase tracking-wider gap-1.5"
                >
                  <Send className="h-3 w-3" />
                  <span>{t.newsletterBtn}</span>
                </button>
              </form>
              {newsletterSuccess && (
                <p className="text-green-600 text-xs font-sans mt-3 font-semibold animate-fade-in">
                  {t.newsletterSuccess}
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Maps iFrame embed */}
          <div className="lg:col-span-7 h-96 lg:h-auto min-h-[350px] relative rounded-xl overflow-hidden shadow-md border border-warm-brown-500/15">
            <iframe
              src="https://maps.google.com/maps?q=Paseo%20de%20San%20Jos%C3%A9%2C%20Vegueta%2C%20Las%20Palmas%20de%20Gran%20Canaria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="MOS-DOLLI Restaurant Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 brightness-95 opacity-90 hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
