import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  Zap, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  FileText,
  ChevronRight,
  Layers,
  Send,
  Cpu,
  ToggleRight,
  Activity,
  Sliders,
  Maximize
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import { getCategoryData } from '../data/categoriesData';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryModal from '../components/EnquiryModal';
import SEO from '../components/SEO';
import { getBreadcrumbSchema, getItemListSchema, getLocalBusinessSchema } from '../utils/schemaGenerator';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const category = getCategoryData(categoryId);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <SEO
          title="Division Not Found | Pavan Sai Power Lines"
          description="The requested electrical product division could not be found."
          noindex={true}
        />
        <h2 className="text-2xl font-bold text-slate-900">Division Not Found</h2>
        <p className="text-slate-600 text-sm">
          The requested product division could not be located in our catalogue.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
        >
          <ArrowLeft size={14} />
          <span>Browse All Divisions</span>
        </Link>
      </div>
    );
  }

  // Filter products for this category
  const categoryProducts = PRODUCTS.filter(p => p.categoryId === category.id);

  // Map category icons
  const categoryIcons = {
    'overhead-lines': <Zap size={16} />,
    'transformer-spares': <Cpu size={16} />,
    'ab-switches': <ToggleRight size={16} />,
    'conductors': <Activity size={16} />,
    'earthing': <ShieldCheck size={16} />,
    'industrial-electricals': <Sliders size={16} />,
    'towers': <Maximize size={16} />,
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products & Materials', url: '/products' },
    { name: category.name, url: `/category/${category.id}` }
  ];

  return (
    <div className="space-y-10 sm:space-y-14 lg:space-y-16 pb-24 md:pb-16">
      <SEO
        title={category.seoTitle}
        description={category.seoDescription}
        keywords={category.keywords}
        canonical={`/category/${category.id}`}
        structuredData={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema(breadcrumbs),
          getItemListSchema(categoryProducts)
        ]}
      />

      {/* 1. Header with Breadcrumb & Unified Symmetrical Back Button */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2fc] via-[#f1f6fd] to-white pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12 border-b border-blue-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-3 pb-3 mb-4 sm:mb-6 border-b border-blue-200/60">
            <div className="hidden sm:block">
              <Breadcrumb 
                items={[
                  { label: 'Products', href: '/products' },
                  { label: category.name }
                ]} 
              />
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
              <Link
                to="/products"
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white hover:bg-blue-50/80 active:bg-blue-100 text-slate-800 hover:text-blue-700 text-xs sm:text-[13px] font-bold border border-slate-200/90 hover:border-blue-400 shadow-2xs hover:shadow-xs transition-all duration-200 shrink-0"
                title="Return to Product Catalogue"
              >
                <ArrowLeft size={13} className="text-blue-600 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>All Products</span>
              </Link>

              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-700 bg-white px-2 sm:px-2.5 py-1.5 rounded-xl border border-blue-200 shadow-2xs shrink-0 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Secunderabad Stockist</span>
              </span>
            </div>
          </div>

          {/* Division Hero Title & Intro */}
          <div className="max-w-4xl space-y-3.5 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 shadow-2xs text-[10px] sm:text-[11px] font-bold text-slate-800">
              <span className="text-blue-600">{categoryIcons[category.id] || <Zap size={14} />}</span>
              <span className="text-blue-700 uppercase tracking-wider">{category.heroTag}</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-emerald-700 whitespace-nowrap">IS / IEC Verified</span>
            </div>

            {/* Clear, Targeted H1 Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-slate-900 font-heading leading-tight">
              {category.h1}
            </h1>

            {/* Helpful Introductory Narrative */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal">
              {category.intro}
            </p>

            {/* Key Division Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {category.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 bg-white/80 p-2 sm:p-2.5 rounded-xl border border-blue-100 shadow-2xs">
                  <ShieldCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Action Buttons - Clean Mobile Stack & Desktop Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-97 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs transition"
              >
                <Send size={14} />
                <span>Request Material Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-700 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition"
              >
                <Phone size={14} className="text-blue-600" />
                <span>Call: {COMPANY_INFO.contact.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(`Hello PSPL, I am inquiring about ${category.name} from your website.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs transition"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Desk</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Materials & Products Grid in this Division */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
              Verified Stock Inventory
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
              {category.name} Materials ({categoryProducts.length} Items)
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Conforming to IS &bull; IEC &bull; REC Specifications
          </span>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-3">
            <Layers size={32} className="mx-auto text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">Custom Division Procurement Available</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Please contact our Secunderabad commercial sales desk directly for customized BOQ specifications and bulk project supply.
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg"
            >
              <span>Submit Requirement</span>
            </button>
          </div>
        )}

      </section>

      {/* 3. Technical Scope & Standards Compliance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50/60 via-white to-slate-50 p-6 sm:p-8 rounded-2xl border border-blue-200 shadow-2xs space-y-3 text-left">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-blue-600" />
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading">
              Technical Scope &amp; Utility Standards Compliance
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {category.technicalScope}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
            <span className="bg-white px-2.5 py-1 rounded-md border border-blue-200 shadow-2xs">Bansilalpet Warehouse</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-blue-200 shadow-2xs">Secunderabad / Hyderabad Logistics</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-blue-200 shadow-2xs">Telangana &amp; Pan-India Dispatch</span>
          </div>
        </div>
      </section>

      {/* 4. Related Business Divisions (Internal Linking Strategy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
              Complete Electrical Supply Scope
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading">
              Related Business Divisions &amp; Materials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {COMPANY_INFO.categories
              .filter(c => c.id !== category.id)
              .map((relCat) => (
                <Link
                  key={relCat.id}
                  to={`/category/${relCat.id}`}
                  className="group p-3.5 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between gap-3 text-left"
                >
                  <div className="min-w-0">
                    <span className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-blue-700 block transition-colors leading-snug">
                      {relCat.name}
                    </span>
                    <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {relCat.shortDesc}
                    </span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Desk & Material Quotation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a192f] text-white p-6 sm:p-8 rounded-2xl border border-blue-500/40 shadow-xl space-y-5">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Commercial Procurement Desk
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-heading">
              Looking for {category.name} in Hyderabad or Secunderabad?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Reach out directly to our Bansilalpet Road sales desk for project BOQ pricing, dispatch logistics, and material availability across Telangana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700">
              <strong className="block text-slate-200 font-bold mb-0.5">Proprietor</strong>
              <span className="text-slate-400">{COMPANY_INFO.contact.representativeName}</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700">
              <strong className="block text-slate-200 font-bold mb-0.5">Phone (Click to Call)</strong>
              <a href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="text-blue-400 hover:underline font-semibold">
                {COMPANY_INFO.contact.primaryPhone}
              </a>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700">
              <strong className="block text-slate-200 font-bold mb-0.5">Address</strong>
              <span className="text-slate-400 line-clamp-2">{COMPANY_INFO.location.shortAddress}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs transition"
            >
              <Send size={14} />
              <span>Submit BOQ for Quotation</span>
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-white px-3 py-2 rounded-xl hover:bg-slate-800 transition"
            >
              <span>Visit Contact Page</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialCategory={category.id}
      />
    </div>
  );
}

