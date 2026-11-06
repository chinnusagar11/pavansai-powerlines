import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Zap, ShieldCheck } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "/images/products/pin-insulator-polymer-11kv.png";

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
        
        {/* Crisp Image Container with Subtle Ambient Background */}
        <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-b from-slate-50/80 to-white border-b border-slate-100 flex items-center justify-center p-3.5 sm:p-4">
          <img
            src={imageError ? fallbackImage : product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-106 drop-shadow-sm"
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold bg-white/95 text-blue-900 shadow-xs border border-slate-200/80 backdrop-blur-xs max-w-[200px] truncate">
              <Zap size={11} className="text-blue-600 shrink-0" />
              <span className="truncate">{product.category}</span>
            </span>
          </div>

          {/* Genuine Verified Quality Tag */}
          <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
              <ShieldCheck size={11} className="text-emerald-600" />
              <span>IS Standard</span>
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug">
              {product.name}
            </h3>

            <p className="text-slate-600 text-xs mt-1.5 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Specifications Chips */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                {Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
                  <span 
                    key={key} 
                    className="inline-block text-[10px] sm:text-[11px] bg-slate-50 border border-slate-200/70 text-slate-700 px-2.5 py-1 rounded-md font-medium truncate max-w-full"
                  >
                    <strong className="text-slate-900">{key}:</strong> {val}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Touch-Friendly Action Buttons */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 rounded-xl transition-all duration-200"
            >
              <span>Specs & Photos</span>
              <ArrowRight size={13} className="text-blue-600 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-97 rounded-xl shadow-xs hover:shadow transition-all duration-200"
            >
              <MessageSquare size={13} />
              <span>Instant Quote</span>
            </button>
          </div>

        </div>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
}
