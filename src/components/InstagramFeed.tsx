/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, MessageCircle, Instagram } from "lucide-react";
import { Language, translations, mockInstagramPosts } from "../types";

interface InstagramFeedProps {
  language: Language;
}

export default function InstagramFeed({ language }: InstagramFeedProps) {
  const t = translations[language].instagram;

  return (
    <section 
      id="instagram-feed" 
      className="relative bg-dark-charcoal py-20 border-b border-gold-500/10"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-500 uppercase flex items-center justify-center gap-2">
            <Instagram className="h-4 w-4" />
            {translations[language].instagram.badge}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-cream mt-3 tracking-wide">
            {t.title}
          </h2>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gold-500/20" />
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {mockInstagramPosts.map((post) => {
            const caption = language === "en" ? post.captionEn : post.captionEs;
            
            return (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-lg overflow-hidden bg-black border border-gold-500/5 group"
                aria-label="View post on Instagram"
              >
                <img
                  src={post.image}
                  alt={caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover stats & caption */}
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="h-4 w-4 text-gold-500" />
                  
                  <p className="font-sans text-[11px] font-light text-cream/90 italic leading-relaxed shrink-0 line-clamp-3">
                    {caption}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-sans text-gold-500 font-bold border-t border-gold-500/10 pt-2 mt-2">
                    <div className="flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5 fill-gold-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5 fill-gold-500" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
