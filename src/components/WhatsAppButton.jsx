import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(
    `Hello ${COMPANY_INFO.name},\nI am looking for electrical power transmission and distribution materials. Please share product availability and pricing details.`
  );

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip on Desktop hover */}
      {showTooltip && (
        <div className="hidden sm:flex mb-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-lg shadow-xl border border-slate-200 items-center gap-2 animate-fade-in max-w-xs">
          <span>Chat directly with <strong>PSPL Secunderabad</strong> for stock inquiries & quotes!</span>
          <button 
            onClick={() => setShowTooltip(false)} 
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg shadow-green-950/20 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat on WhatsApp with Pavan Sai Power Lines"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5 fill-current" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          WhatsApp Chat
        </span>
      </a>
    </div>
  );
}
