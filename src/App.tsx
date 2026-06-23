/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import ReservationForm from "./components/ReservationForm";
import Contact from "./components/Contact";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";
import OrderDrawer from "./components/OrderDrawer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Language, CartItem, MenuItem } from "./types";

export default function App() {
  // Load initial language preference from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("mosdolli_language");
    return (saved === "es" || saved === "en") ? saved : "en";
  });

  // Cart state management for online ordering
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("mosdolli_cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem("mosdolli_language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("mosdolli_cart", JSON.stringify(cart));
  }, [cart]);

  // Handler functions for cart actions
  const handleAddToOrder = (dish: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.menuItem.id === dish.id);
      if (existing) {
        return prevCart.map((item) =>
          item.menuItem.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { menuItem: dish, quantity: 1 }];
    });
    // Open cart drawer so user gets visual feedback of the addition
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.menuItem.id === dishId) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (dishId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.menuItem.id !== dishId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scrolling slightly to account for sticky navbar header height
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Sum total items inside order cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream font-sans antialiased text-dark-charcoal select-none selection:bg-gold-500 selection:text-black">
      
      {/* Sticky Header Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollTo={handleScrollToSection}
      />

      <main className="relative">
        {/* Hero Banner Section */}
        <Hero 
          language={language} 
          onScrollTo={handleScrollToSection} 
        />

        {/* Why Choose Us Section */}
        <Features 
          language={language} 
        />

        {/* About Us Narrative and Interior Showcase */}
        <About 
          language={language} 
          onScrollTo={handleScrollToSection} 
        />

        {/* Interactive Menu / Signature Dishes */}
        <Menu 
          language={language} 
          onAddToOrder={handleAddToOrder} 
        />

        {/* Customer Testimonials & Ratings */}
        <Testimonials 
          language={language} 
        />

        {/* Masonry Image Gallery */}
        <Gallery 
          language={language} 
        />

        {/* Upcoming Cultural Events List */}
        <Events 
          language={language} 
          onScrollTo={handleScrollToSection} 
        />

        {/* Professional Reservations Form */}
        <ReservationForm 
          language={language} 
        />

        {/* Address, Hours and Interactive Google Map Embed */}
        <Contact 
          language={language} 
        />

        {/* Beautiful Instagram Post Grid */}
        <InstagramFeed 
          language={language} 
        />
      </main>

      {/* Traditional Footer */}
      <Footer 
        language={language} 
        onScrollTo={handleScrollToSection} 
      />

      {/* Sidebar Shopping Cart Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        language={language}
      />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton 
        language={language} 
      />
      
    </div>
  );
}
