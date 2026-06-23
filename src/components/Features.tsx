/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChefHat, Leaf, Heart, Sparkles } from "lucide-react";
import { Language, translations } from "../types";

interface FeaturesProps {
  language: Language;
}

export default function Features({ language }: FeaturesProps) {
  const t = translations[language].features;

  const featuresList = [
    {
      icon: ChefHat,
      title: t.cuisine.title,
      description: t.cuisine.desc,
      color: "from-gold-600/20 to-gold-950/20",
    },
    {
      icon: Leaf,
      title: t.ingredients.title,
      description: t.ingredients.desc,
      color: "from-green-600/10 to-emerald-950/20",
    },
    {
      icon: Heart,
      title: t.hospitality.title,
      description: t.hospitality.desc,
      color: "from-warm-brown-600/20 to-warm-brown-950/20",
    },
    {
      icon: Sparkles,
      title: t.experience.title,
      description: t.experience.desc,
      color: "from-gold-600/20 to-amber-950/20",
    },
  ];

  return (
    <section 
      id="features" 
      className="relative bg-cream py-24 border-b border-gold-500/10"
    >
      {/* Decorative Golden Rays in Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,#6b442304,transparent_40%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,#d4a01704,transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
            {t.title}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-dark-charcoal mt-3 tracking-wide">
            {t.subtitle}
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-16 bg-gold-500/40" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-xl bg-white border border-warm-brown-500/10 p-8 shadow-sm hover:border-gold-500/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-warm-brown-500 to-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                
                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded bg-gold-500/10 border border-gold-500/20 text-gold-600 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-medium text-dark-charcoal mt-6 group-hover:text-gold-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-warm-brown-800 mt-3 leading-relaxed font-sans font-light">
                  {feature.description}
                </p>
                
                {/* Decorative Pattern Background element */}
                <div className="absolute bottom-[-20px] right-[-20px] h-16 w-16 opacity-5 border border-gold-500/30 rounded-full group-hover:scale-150 transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
