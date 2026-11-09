import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Zap, ShieldCheck } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "/images/products/pin-insulator-polymer-11kv.png";

  return (
    <div className="group w-full h-auto sm:h-full min-h-[440px] flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500/80 shadow-sm hover:shadow-[0_16px_35px_-8px_rgba(29,78,216,0.14)] hover:-translate-y-1 transition-all duration-300 relative isolate">
      
      {/* Subtle Corporate Blue Top Accent Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 shrink-0"></div>

      {/* Uniform Fixed-Height Image Container */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gradient-to-b from-slate-50/60 to-white border-b border-slate-100 flex items-center justify-center p-3.5 sm:p-4 shrink-0">
        <img
          src={imageError ? fallbackImage : product.image}
          alt={`${product.name} - Electrical Materials Supplier Hyderabad | PSPL`}
          onError={() => setImageError(true)}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-sm"
        />
        
        {/* Refined Enterprise Category Badge */}
        <div className="absolute top-3 left-3 max-w-[62%]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold shadow-xs truncate bg-slate-900/85 text-white backdrop-blur-xs border border-white/20">
            <Zap size={11} className="fill-amber-400 text-amber-400 shrink-0" />
            <span className="truncate">{product.category}</span>
          </span>
        </div>

        {/* Genuine Verified Quality Tag */}
        <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-emerald-800 border border-emerald-200 shadow-2xs whitespace-nowrap">
            <ShieldCheck size={11} className="text-emerald-600 shrink-0" />
            <span>IS Standard</span>
          </span>
        </div>
      </div>

      {/* Content Area - Symmetrically Padded & Strictly Sized for Straight Baselines */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          
          {/* Title - Min Height so 1-line and 2-line Titles Align Horizontally */}
          <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[40px] sm:min-h-[44px] flex items-start leading-snug">
            {product.name}
          </h3>

          {/* Description - Min Height for Symmetrical Vertical Rhythms */}
          <p className="text-slate-600 text-xs line-clamp-2 min-h-[32px] sm:min-h-[34px] leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Specifications Chips - Clean Slate Styling */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 min-h-[28px] sm:min-h-[32px] overflow-hidden">
            {product.specifications && Object.keys(product.specifications).length > 0 ? (
              Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
                <span 
                  key={key} 
                  className="inline-flex items-center text-[10px] sm:text-[11px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-semibold max-w-full"
                >
                  <strong className="text-slate-900 mr-1 shrink-0">{key}:</strong>
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

        {/* Touch-Friendly Action Buttons */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 shrink-0">
          <Link
            to={`/products/${product.id}`}
            className="h-10 inline-flex items-center justify-center gap-1 px-2 text-[11px] sm:text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 hover:border-slate-300 rounded-xl transition-all whitespace-nowrap text-center"
          >
            <span>Specs & Photos</span>
            <ArrowRight size={13} className="text-blue-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="h-10 inline-flex items-center justify-center gap-1 px-2 text-[11px] sm:text-xs font-black text-white bg-blue-600 hover:bg-blue-700 active:scale-97 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap text-center"
          >
            <MessageSquare size={13} className="shrink-0" />
            <span>Instant Quote</span>
          </button>
        </div>

      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </div>
  );
}
