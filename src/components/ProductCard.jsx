import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Zap, ExternalLink } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback high quality electrical graphic if external image fails
  const fallbackImage = "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80";

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-sky-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
        
        {/* Image Container with Category Badge */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <img
            src={imageError ? fallbackImage : product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-navy-950/80 backdrop-blur-md text-sky-300 border border-sky-400/30">
              <Zap size={12} className="text-sky-400" />
              {product.category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg text-navy-950 group-hover:text-sky-600 transition-colors line-clamp-1">
              {product.name}
            </h3>

            <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Quick spec indicators if available */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
                  <span 
                    key={key} 
                    className="inline-block text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium"
                  >
                    <strong className="text-navy-900">{key}:</strong> {val}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 hover:text-navy-950 rounded-xl transition"
            >
              <span>View Details</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-sm hover:shadow transition active:scale-95"
            >
              <MessageSquare size={14} />
              <span>Enquire</span>
            </button>
          </div>

        </div>
      </div>

      {/* Reusable Inquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
}
