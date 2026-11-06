import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Zap, ShieldCheck } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "/images/products/pin-insulator-polymer-11kv.png";

  const categoryBadgeColors = {
    'overhead-lines': 'bg-blue-600 text-white shadow-sm shadow-blue-500/25',
    'transformer-spares': 'bg-purple-600 text-white shadow-sm shadow-purple-500/25',
    'ab-switches': 'bg-amber-500 text-white shadow-sm shadow-amber-500/25',
    'conductors': 'bg-sky-600 text-white shadow-sm shadow-sky-500/25',
    'earthing': 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/25',
    'industrial-electricals': 'bg-rose-600 text-white shadow-sm shadow-rose-500/25',
    'towers': 'bg-slate-700 text-white shadow-sm shadow-slate-600/25',
  };

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 hover:border-blue-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
        
        {/* Crisp Image Container with Subtle Ambient Background */}
        <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-b from-slate-50/80 to-white border-b border-slate-100 flex items-center justify-center p-3.5 sm:p-4">
          <img
            src={imageError ? fallbackImage : product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-106 drop-shadow-sm"
          />
          
          {/* Vibrant Category Badge */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold shadow-xs max-w-[200px] truncate ${categoryBadgeColors[product.categoryId] || 'bg-blue-600 text-white'}`}>
              <Zap size={11} className="fill-white text-white shrink-0" />
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
            <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[44px] flex items-center leading-snug">
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
                    className="inline-flex items-center text-[10px] sm:text-[11px] bg-blue-50/70 border border-blue-200/80 text-blue-900 px-2.5 py-0.5 rounded-md font-medium max-w-full"
                  >
                    <strong className="text-blue-950 mr-1 shrink-0">{key}:</strong>
                    <span className="truncate">{val}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Touch-Friendly Action Buttons */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center justify-center gap-1 px-2.5 py-2.5 text-[11px] sm:text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 hover:border-slate-300 rounded-xl transition-all whitespace-nowrap text-center"
            >
              <span>Specs & Photos</span>
              <ArrowRight size={12} className="text-blue-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-1 px-2.5 py-2.5 text-[11px] sm:text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-97 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap text-center"
            >
              <MessageSquare size={12} className="shrink-0" />
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
