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

  const categoryAccentBar = {
    'overhead-lines': 'bg-gradient-to-r from-blue-600 to-sky-500',
    'transformer-spares': 'bg-gradient-to-r from-purple-600 to-indigo-600',
    'ab-switches': 'bg-gradient-to-r from-amber-500 to-orange-500',
    'conductors': 'bg-gradient-to-r from-sky-500 to-blue-600',
    'earthing': 'bg-gradient-to-r from-emerald-600 to-teal-500',
    'industrial-electricals': 'bg-gradient-to-r from-rose-500 to-red-500',
    'towers': 'bg-gradient-to-r from-slate-700 to-slate-900',
  };

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
        
        {/* Top Division Color Accent Bar */}
        <div className={`h-1.5 w-full ${categoryAccentBar[product.categoryId] || 'bg-blue-600'}`}></div>

        {/* Uniform Fixed-Height Image Container (Laser-Aligned Across Rows) */}
        <div className="relative w-full h-52 overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 flex items-center justify-center p-3.5 sm:p-4 shrink-0">
          <img
            src={imageError ? fallbackImage : product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-106 drop-shadow-sm"
          />
          
          {/* Vibrant Category Badge */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold shadow-xs max-w-[190px] truncate ${categoryBadgeColors[product.categoryId] || 'bg-blue-600 text-white'}`}>
              <Zap size={11} className="fill-white text-white shrink-0" />
              <span className="truncate">{product.category}</span>
            </span>
          </div>

          {/* Genuine Verified Quality Tag */}
          <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-emerald-800 border border-emerald-200 shadow-2xs">
              <ShieldCheck size={11} className="text-emerald-600" />
              <span>IS Standard</span>
            </span>
          </div>
        </div>

        {/* Content Area - Symmetrically Padded & Strictly Sized for Straight Baselines */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            
            {/* Title - Fixed Height so 1-line and 2-line Titles Align Horizontally */}
            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 h-[44px] flex items-start leading-snug">
              {product.name}
            </h3>

            {/* Description - Fixed Height for Symmetrical Vertical Rhythms */}
            <p className="text-slate-600 text-xs line-clamp-2 h-[34px] leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Specifications Chips - Fixed Height Container with Fallbacks for Symmetrical Alignment */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 h-[32px] overflow-hidden">
              {product.specifications && Object.keys(product.specifications).length > 0 ? (
                Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
                  <span 
                    key={key} 
                    className="inline-flex items-center text-[10px] sm:text-[11px] bg-blue-50/80 border border-blue-200/90 text-blue-900 px-2 py-0.5 rounded-md font-semibold max-w-full"
                  >
                    <strong className="text-blue-950 mr-1 shrink-0">{key}:</strong>
                    <span className="truncate">{val}</span>
                  </span>
                ))
              ) : (
                <>
                  <span className="inline-flex items-center text-[10px] sm:text-[11px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                    DISCOM &bull; REC Spec
                  </span>
                  <span className="inline-flex items-center text-[10px] sm:text-[11px] bg-emerald-50 border border-emerald-200 text-emerald-800 px-2 py-0.5 rounded-md font-semibold">
                    Ready Stock
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Touch-Friendly Action Buttons - Identical Sizing Across Entire Grid */}
          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <Link
              to={`/products/${product.id}`}
              className="h-10 inline-flex items-center justify-center gap-1 px-2.5 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border-2 border-slate-200 hover:border-slate-300 rounded-xl transition-all whitespace-nowrap text-center"
            >
              <span>Specs & Photos</span>
              <ArrowRight size={13} className="text-blue-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="h-10 inline-flex items-center justify-center gap-1 px-2.5 text-xs font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-97 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap text-center"
            >
              <MessageSquare size={13} className="shrink-0" />
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
