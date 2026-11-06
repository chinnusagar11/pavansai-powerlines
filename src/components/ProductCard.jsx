import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Zap } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "/images/products/pin-insulator.svg";

  return (
    <>
      <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col h-full">
        
        {/* Clean Image Area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-2">
          <img
            src={imageError ? fallbackImage : product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Crisp Category Badge */}
          <div className="absolute top-2.5 left-2.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-white/95 text-blue-800 shadow-xs border border-slate-200 max-w-[220px] truncate">
              <Zap size={10} className="text-blue-600 shrink-0" />
              <span className="truncate">{product.category}</span>
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
              {product.name}
            </h3>

            <p className="text-slate-600 text-xs sm:text-xs mt-1.5 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Clean Specifications Preview */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                {Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
                  <span 
                    key={key} 
                    className="inline-block text-[10px] sm:text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium truncate max-w-full"
                  >
                    <strong className="text-slate-900">{key}:</strong> {val}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Clean Touch-Friendly Action Buttons */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center justify-center gap-1 px-3 py-2.5 sm:py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-lg transition"
            >
              <span>Details</span>
              <ArrowRight size={13} />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-1 px-3 py-2.5 sm:py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg transition shadow-xs"
            >
              <MessageSquare size={13} />
              <span>Enquiry</span>
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
