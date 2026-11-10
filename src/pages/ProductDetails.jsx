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
  Info,
  Maximize2,
  X
} from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryModal from '../components/EnquiryModal';
import SEO from '../components/SEO';
import { getProductSchema, getBreadcrumbSchema } from '../utils/schemaGenerator';

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  const product = getProductById(productId);
  const [selectedImage, setSelectedImage] = useState(product ? product.image : '');

  // Reset selected image when productId changes
  React.useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setImageError(false);
    }
  }, [productId, product]);

  const fallbackImage = "/images/products/pin-insulator-polymer-11kv.png";

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <SEO
          title="Product Not Found | Pavan Sai Power Lines"
          description="The requested electrical power transmission product could not be found."
          noindex={true}
        />
        <h2 className="text-2xl font-bold text-slate-900">Product Not Found</h2>
        <p className="text-slate-600 text-sm">
          The requested product could not be found.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
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

  const productDescription = product.shortDescription || product.fullDescription.slice(0, 155);
  const seoTitle = `${product.name} Supplier in Hyderabad | Pavan Sai Power Lines`;
  const seoDescription = `${productDescription} Verified IS/IEC standard electrical hardware supplied by Pavan Sai Power Lines, Secunderabad, Telangana. Call +91 97004 49684.`;

  return (
    <div className="space-y-8 sm:space-y-12 lg:space-y-14 pb-24 md:pb-16">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={`${product.name}, ${product.name} supplier in Hyderabad, ${product.name} price Hyderabad, ${product.category} Secunderabad, electrical materials Telangana, ${product.id}`}
        canonical={`/products/${product.id}`}
        ogImage={product.image}
        ogType="product"
        structuredData={[
          getProductSchema(product),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products & Materials', url: '/products' },
            { name: product.category, url: `/category/${product.categoryId}` },
            { name: product.name, url: `/products/${product.id}` }
          ])
        ]}
      />
      
      {/* 1. Header & Breadcrumb with Prominent Symmetrical Back Button */}
      <section className="bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1 hidden sm:block">
              <Breadcrumb 
                items={[
                  { label: 'Products', href: '/products' },
                  { label: product.category, href: `/category/${product.categoryId}` },
                  { label: product.name }
                ]} 
              />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
              <button
                onClick={() => navigate('/products')}
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white hover:bg-blue-50/80 active:bg-blue-100 text-slate-800 hover:text-blue-700 text-xs sm:text-[13px] font-bold border border-slate-200/90 hover:border-blue-400 shadow-2xs hover:shadow-xs transition-all duration-200 shrink-0"
                title="Return to Product Catalogue"
              >
                <ArrowLeft size={13} className="text-blue-600 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back to Products</span>
              </button>

              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-700 bg-white px-2 sm:px-2.5 py-1.5 rounded-xl border border-blue-200 shadow-2xs shrink-0 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>In Stock</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Product Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Product Image & Gallery */}
          <div className="lg:col-span-6 space-y-3">
            <div 
              className="bg-white rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] relative flex items-center justify-center p-3 sm:p-4 shadow-xs group cursor-pointer"
              onClick={() => setIsZoomOpen(true)}
              title="Click to view full image in high resolution"
            >
              <img
                src={imageError ? fallbackImage : (selectedImage || product.image)}
                alt={`${product.name} - Electrical Materials Supplier Hyderabad`}
                onError={() => setImageError(true)}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold bg-white/95 text-blue-800 shadow-xs border border-slate-200">
                  <Zap size={12} className="text-blue-600" />
                  {product.category}
                </span>
              </div>

              {/* Click to Zoom Pill */}
              <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-xs shadow-xs">
                  <Maximize2 size={12} />
                  <span>Zoom Photo</span>
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails (if available) */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-medium text-slate-500">Available Views & Technical Photos:</span>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5">
                  {product.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedImage(imgUrl);
                        setImageError(false);
                      }}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden border transition-all ${
                        (selectedImage || product.image) === imgUrl
                          ? 'border-blue-600 ring-2 ring-blue-500/40 shadow-xs bg-white'
                          : 'border-slate-200 hover:border-slate-400 bg-white'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.name} technical view ${idx + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Share / Verification Bar */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-200">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                <span className="truncate">Verified Utility Grade</span>
              </span>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold shrink-0"
              >
                <Share2 size={12} />
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Title, Description, and Actions */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            
            <div>
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
                {product.category}
              </div>
              <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                {product.name}
              </h1>
            </div>

            {/* In-depth Description */}
            <div className="space-y-1.5">
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

            {/* Mobile Touch-Friendly Action Buttons */}
            <div className="pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs transition"
              >
                <MessageSquare size={16} />
                <span>Request Material Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-98 text-slate-800 border border-slate-300 font-bold text-sm py-3 px-4 rounded-xl shadow-2xs transition"
              >
                <Phone size={16} className="text-blue-600" />
                <span>Call Sales Desk</span>
              </a>
            </div>

            {/* Supply Note Box */}
            <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-slate-700 space-y-1">
              <p className="font-bold text-slate-900 flex items-center gap-1">
                <Info size={13} className="text-blue-600 shrink-0" />
                Supply & Quotation Terms
              </p>
              <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
                Prices depend on quantity and delivery location in Telangana, AP, or PAN-India. Contact us for formal proforma invoices and dispatch schedules.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Verified Technical Specifications Section */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">Technical Specifications</h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Standard compliance and engineering ratings
                </p>
              </div>
              <span className="text-[10px] sm:text-[11px] bg-slate-900 text-white font-semibold px-2.5 py-1 rounded-md shrink-0">
                IS Verified
              </span>
            </div>

            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div 
                    key={key} 
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50/60 border border-slate-200/80 hover:border-slate-300 gap-2.5 text-xs min-w-0 transition-colors"
                  >
                    <span className="font-semibold text-slate-600 text-[11px] sm:text-xs shrink-0">
                      {key}
                    </span>
                    <span className="font-bold text-slate-900 text-[11px] sm:text-xs text-right break-words min-w-0">
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
        <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
            <h3 className="font-bold text-xs sm:text-sm text-slate-900">Typical Field Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
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
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base sm:text-xl font-bold text-slate-900 font-heading">
                Related in {product.category}
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

          <div className="w-full flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-5">
            {relatedProducts.map((rel, idx) => (
              <ProductCard key={rel.id} product={rel} priority={idx < 2} />
            ))}
          </div>
        </section>
      )}

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />

      {/* Product image lightbox */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setIsZoomOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden p-4 sm:p-5 shadow-2xl flex flex-col border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between gap-3 pb-3 mb-3 border-b border-slate-100">
              <span className="font-bold text-slate-900 truncate text-xs sm:text-sm">
                {product.name}
              </span>

              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition shrink-0"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-auto max-h-[75vh] flex items-center justify-center w-full py-2 bg-slate-50/50 rounded-xl">
              <img
                src={imageError ? fallbackImage : (selectedImage || product.image)}
                alt={product.name}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            <p className="text-[11px] text-slate-500 text-center pt-3 mt-2 border-t border-slate-100">
              Pavan Sai Power Lines &bull; Secunderabad, Telangana
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
