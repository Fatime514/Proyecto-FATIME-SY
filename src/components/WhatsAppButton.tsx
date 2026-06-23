/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from "lucide-react";
import { Language } from "../types";

interface WhatsAppButtonProps {
  language: Language;
}

export default function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const phoneNumber = "34624965510";
  const message = language === "en" 
    ? "Hello! I would like to ask a question or request information about MOS-DOLLI."
    : "¡Hola! Me gustaría hacer una consulta o solicitar información sobre MOS-DOLLI.";
    
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      id="whatsapp-floating-btn"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-12" />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#1a1a1a] px-3 py-1.5 text-xs font-medium text-cream opacity-0 shadow-md transition-opacity group-hover:opacity-100 pointer-events-none border border-gold-500/20">
        {language === "en" ? "Chat with us" : "Escríbenos"}
      </span>
    </a>
  );
}
