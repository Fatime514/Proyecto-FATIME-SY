/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MessageSquareQuote } from "lucide-react";
import { Language, translations, mockTestimonials } from "../types";

interface TestimonialsProps {
  language: Language;
}

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language].testimonials;

  return (
    <section 
      id="testimonials" 
      className="relative bg-cream text-[#111111] py-24 overflow-hidden border-b border-gold-500/10"
    >
      {/* Background African motif elements */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6b4423_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-warm-brown-500 uppercase">
            {t.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-dark-charcoal mt-3 tracking-wide">
            {t.title}
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-16 bg-warm-brown-500/30" />
        </div>



        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockTestimonials.map((review) => {
            const role = language === "en" ? review.roleEn : review.roleEs;
            const comment = language === "en" ? review.commentEn : review.commentEs;

            return (
              <div
                key={review.id}
                className="relative flex flex-col justify-between rounded-lg bg-white border border-warm-brown-500/10 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Curly Quote Accent */}
                <MessageSquareQuote className="absolute top-4 right-4 h-8 w-8 text-warm-brown-500/10" />

                {/* Stars */}
                <div className="flex gap-0.5 text-gold-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="font-sans text-xs sm:text-sm font-light text-dark-charcoal/85 italic leading-relaxed mb-6 flex-1">
                  “{comment}”
                </p>

                {/* Guest Profile Details */}
                <div className="flex items-center gap-3 border-t border-dark-charcoal/5 pt-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="h-10 w-10 rounded-full object-cover border border-warm-brown-500/20"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-dark-charcoal leading-none">
                      {review.name}
                    </h4>
                    <span className="font-sans text-[10px] text-warm-brown-500 font-medium tracking-wider uppercase block mt-1 leading-none">
                      {role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
