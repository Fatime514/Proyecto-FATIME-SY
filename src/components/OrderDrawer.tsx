/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Trash2, Plus, Minus, Truck, Store, CheckCircle2 } from "lucide-react";
import { CartItem, Language, translations } from "../types";

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
  language: Language;
}

export default function OrderDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  language,
}: OrderDrawerProps) {
  const t = translations[language];
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("pickup");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate prices
  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const deliveryFee = deliveryMethod === "delivery" && subtotal < 35 ? 3.50 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      onClearCart();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="order-drawer-container">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform bg-white border-l border-warm-brown-500/10 text-dark-charcoal shadow-2xl flex flex-col h-full animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-warm-brown-500/10 px-6 py-5">
            <div>
              <h2 className="font-serif text-2xl text-gold-600 font-semibold tracking-wide">
                {t.ordering.title}
              </h2>
              <p className="text-xs text-warm-brown-600 mt-0.5">
                {t.ordering.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-dark-charcoal hover:bg-warm-brown-500/10 hover:text-gold-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Success Overlay */}
          {showSuccess ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-cream">
              <div className="h-16 w-16 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center text-gold-600 mb-6">
                <CheckCircle2 className="h-10 w-10 animate-bounce" />
              </div>
              <h3 className="font-serif text-2xl text-gold-600 font-bold mb-3">
                {language === "en" ? "Order Confirmed!" : "¡Pedido Confirmado!"}
              </h3>
              <p className="text-sm text-warm-brown-800 max-w-xs leading-relaxed mb-8">
                {t.ordering.orderSuccess}
              </p>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  onClose();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-warm-brown-600 to-gold-600 hover:from-gold-600 hover:to-warm-brown-600 text-black font-sans font-semibold uppercase tracking-wider rounded-md shadow-lg transition-all"
              >
                {t.ordering.orderBtnClose}
              </button>
            </div>
          ) : (
            <>
              {/* Cart List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div className="rounded-full bg-warm-brown-500/10 border border-warm-brown-500/20 p-4 mb-4 text-warm-brown-600">
                      <Plus className="h-8 w-8" />
                    </div>
                    <p className="text-sm text-warm-brown-600 max-w-xs">
                      {t.ordering.emptyCart}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.menuItem.id}
                        className="flex items-start gap-4 rounded-lg bg-warm-brown-50/50 p-4 border border-warm-brown-500/10 hover:border-gold-500/30 transition-all"
                      >
                        <img
                          src={item.menuItem.image}
                          alt={language === "en" ? item.menuItem.nameEn : item.menuItem.nameEs}
                          referrerPolicy="no-referrer"
                          className="h-16 w-16 rounded-md object-cover border border-warm-brown-500/10"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-base text-dark-charcoal font-semibold truncate">
                            {language === "en" ? item.menuItem.nameEn : item.menuItem.nameEs}
                          </h4>
                          <p className="text-sm text-gold-600 font-medium mt-0.5">
                            {(item.menuItem.price * item.quantity).toFixed(2)}€
                          </p>
                          
                          {/* Controls */}
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                              className="rounded bg-warm-brown-500/10 hover:bg-warm-brown-500/25 p-1 text-dark-charcoal transition-colors"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-sm font-sans font-semibold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                              className="rounded bg-warm-brown-500/10 hover:bg-warm-brown-500/25 p-1 text-dark-charcoal transition-colors"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.menuItem.id)}
                          className="text-warm-brown-600 hover:text-red-600 p-1 rounded hover:bg-red-500/10 transition-colors self-start"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-warm-brown-500/10 bg-cream px-6 py-5 space-y-4">
                  {/* Delivery vs Pickup Selector */}
                  <div className="grid grid-cols-2 gap-2 bg-white p-1.5 rounded-lg border border-warm-brown-500/10">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod("pickup")}
                      className={`flex items-center justify-center gap-2 py-2 rounded-md font-sans text-xs font-semibold tracking-wider uppercase transition-all ${
                        deliveryMethod === "pickup"
                          ? "bg-gold-500 text-black shadow-md"
                          : "text-dark-charcoal hover:bg-warm-brown-500/10"
                      }`}
                    >
                      <Store className="h-4 w-4" />
                      {t.ordering.pickupOption}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod("delivery")}
                      className={`flex items-center justify-center gap-2 py-2 rounded-md font-sans text-xs font-semibold tracking-wider uppercase transition-all ${
                        deliveryMethod === "delivery"
                          ? "bg-gold-500 text-black shadow-md"
                          : "text-dark-charcoal hover:bg-warm-brown-500/10"
                      }`}
                    >
                      <Truck className="h-4 w-4" />
                      {t.ordering.deliveryOption}
                    </button>
                  </div>

                  {/* Pricing breakdown */}
                  <div className="space-y-2 text-sm font-sans">
                    <div className="flex justify-between text-warm-brown-800">
                      <span>{t.ordering.subtotal}</span>
                      <span className="font-semibold">{subtotal.toFixed(2)}€</span>
                    </div>
                    {deliveryMethod === "delivery" && (
                      <div className="flex justify-between text-warm-brown-800">
                        <span>{t.ordering.delivery}</span>
                        <span className="font-semibold">{deliveryFee > 0 ? `${deliveryFee.toFixed(2)}€` : t.ordering.deliveryFree}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gold-600 font-serif text-lg font-bold border-t border-warm-brown-500/10 pt-2">
                      <span>{t.ordering.total}</span>
                      <span>{total.toFixed(2)}€</span>
                    </div>
                  </div>

                  {/* Simple checkout form details */}
                  <form onSubmit={handleCheckout} className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder={language === "en" ? "Full Name" : "Nombre Completo"}
                        className="w-full bg-white border border-warm-brown-500/20 rounded px-3 py-2 text-xs text-dark-charcoal focus:outline-none focus:border-gold-500 transition-colors placeholder-warm-brown-400"
                      />
                      <input
                        type="tel"
                        required
                        placeholder={language === "en" ? "Phone Number" : "Teléfono"}
                        className="w-full bg-white border border-warm-brown-500/20 rounded px-3 py-2 text-xs text-dark-charcoal focus:outline-none focus:border-gold-500 transition-colors placeholder-warm-brown-400"
                      />
                    </div>
                    {deliveryMethod === "delivery" && (
                      <input
                        type="text"
                        required
                        placeholder={language === "en" ? "Las Palmas Delivery Address" : "Dirección de Entrega en Las Palmas"}
                        className="w-full bg-white border border-warm-brown-500/20 rounded px-3 py-2 text-xs text-dark-charcoal focus:outline-none focus:border-gold-500 transition-colors placeholder-warm-brown-400"
                      />
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gold-500 text-black font-sans font-bold uppercase tracking-wider rounded shadow-md hover:bg-gold-400 active:scale-95 transition-all disabled:opacity-50 text-xs flex items-center justify-center gap-2 mt-2"
                    >
                      {isSubmitting ? (
                        <span className="inline-block h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        t.ordering.checkoutBtn
                      )}
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
