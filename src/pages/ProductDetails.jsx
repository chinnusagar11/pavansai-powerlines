import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Phone, 
  Share2, 
  ChevronRight,
  Zap,
  Info
} from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryModal from '../components/EnquiryModal';

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  const product = getProductById(productId);

  const fallbackImage = "/images/products/pin-insulator.svg";

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Product Not Found</h2>
        <p className="text-slate-600 text-sm">
          The requested product could not be found.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
        >
          <ArrowLeft size={14} />
          <span>Return to Catalogue</span>
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-8 md:space-y-12 pb-16">
      
      {/* 1. Header & Breadcrumb */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <Breadcrumb 
              items={[
                { label: 'Products', href: '/products' },
                { label: product.category, href: `/products?category=${product.categoryId}` },
                { label: product.name }
              ]} 
            />

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-blue-600 font-medium transition"
            >
              <ArrowLeft size={13} />
              <span>Back</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Product Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Image */}
          <div className="lg:col-span-6 space-y-3">
            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] relative">
              <img
                src={imageError ? fallbackImage : product.image}
                alt={product.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white/95 text-blue-800 shadow-xs border border-slate-200">
                  <Zap size={12} className="text-blue-600" />
                  {product.category}
                </span>
              </div>
            </div>

            {/* Quick Share / Verification Bar */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-200">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck size={15} className="text-emerald-600" />
                <span>Verified Utility Grade Component</span>
              </span>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold"
              >
                <Share2 size={12} />
                <span>{copied ? 'Copied!' : 'Share Page'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Title, Description, and Actions */}
          <div className="lg:col-span-6 space-y-5">
            
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
                {product.category}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                {product.name}
              </h1>
            </div>

            {/* In-depth Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Product Description
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-2 pt-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Features
                </h3>
                <ul className="space-y-1.5">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={15} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-lg shadow-xs transition active:scale-95"
              >
                <MessageSquare size={16} />
                <span>Contact for Enquiry</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm py-3 px-4 rounded-lg transition"
              >
                <Phone size={16} className="text-blue-600" />
                <span>Direct Call</span>
              </a>
            </div>

            {/* Supply Note Box */}
            <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-slate-700 space-y-1">
              <p className="font-bold text-slate-900 flex items-center gap-1">
                <Info size={13} className="text-blue-600" />
                Supply & Quotation Terms
              </p>
              <p className="text-slate-600 leading-relaxed">
                Prices depend on quantity and delivery location in Telangana, AP, or PAN-India. Contact us for formal proforma invoices and dispatch schedules.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Verified Technical Specifications Section */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="bg-slate-50 border-b border-slate-200 p-4 sm:px-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-slate-900">Verified Technical Specifications</h3>
                <p className="text-xs text-slate-500">
                  Standard compliance and engineering ratings
                </p>
              </div>
              <span className="text-[11px] bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded border border-blue-200">
                IS Standard
              </span>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div 
                    key={key} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-slate-50/80 border border-slate-200 gap-1 text-xs"
                  >
                    <span className="font-semibold text-slate-600">
                      {key}
                    </span>
                    <span className="font-bold text-slate-900">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Common Applications */}
      {product.applications && product.applications.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
            <h3 className="font-bold text-sm text-slate-900">Typical Field Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {product.applications.map((app, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                  <span className="text-xs text-slate-700 font-medium">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                Related Products in {product.category}
              </h2>
            </div>
            <Link
              to={`/products?category=${product.categoryId}`}
              className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />

    </div>
  );
}
