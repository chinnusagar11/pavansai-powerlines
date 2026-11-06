import React, { useState } from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import EnquiryModal from './EnquiryModal';

export default function MobileQuickBar() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    `Hello ${COMPANY_INFO.name},\nI am looking for electrical power transmission and distribution materials. Please share product availability and pricing details.`
  );

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${defaultMessage}`;

  return (
    <>
      {/* Sticky Bottom Action Bar for Mobile Devices only */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-3 py-2 pb-safe">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          
          {/* 1. Direct Call */}
          <a
            href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-blue-100 text-slate-800 transition text-center"
            aria-label="Call Pavan Sai Power Lines"
          >
            <Phone size={18} className="text-blue-600 mb-0.5" />
            <span className="text-[10px] font-bold tracking-tight">Call Desk</span>
          </a>

          {/* 2. WhatsApp Direct Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#25D366] active:bg-[#20ba59] text-white shadow-xs transition text-center"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} className="fill-current mb-0.5" />
            <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
          </a>

          {/* 3. Instant Material Quote Modal */}
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-xs transition text-center"
            aria-label="Request Material Quote"
          >
            <Send size={18} className="mb-0.5" />
            <span className="text-[10px] font-bold tracking-tight">Get Quote</span>
          </button>

        </div>
      </div>

      <EnquiryModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}

