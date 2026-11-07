import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Layers, 
  PhoneCall, 
  Sliders, 
  Maximize, 
  Activity, 
  ToggleRight, 
  ChevronRight,
  MessageSquare,
  FileCheck,
  Sparkles,
  MapPin,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import EnquiryModal from '../components/EnquiryModal';
import SEO from '../components/SEO';
import { getLocalBusinessSchema, getWebSiteSchema } from '../utils/schemaGenerator';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Top 6 featured products
  const featuredProducts = PRODUCTS.slice(0, 6);

  // Category authentic preview images matching each division
  const categoryPreviews = {
    'overhead-lines': {
      image: '/images/products/pin-insulator-polymer-11kv.png',
      badge: '13 Items'
    },
    'transformer-spares': {
      image: '/images/products/pin-insulator-polymer-33kv.png',
      badge: 'Bushing Spares'
    },
    'ab-switches': {
      image: '/images/products/ab-switch-gang-operated.png',
      badge: 'Gang Operated'
    },
    'conductors': {
      image: '/images/products/acsr-conductor-drums.jpg',
      badge: 'ACSR / AAAC'
    },
    'earthing': {
      image: '/images/products/copper-bonded-earth-rods.jpg',
      badge: 'Copper & GI'
    },
    'industrial-electricals': {
      image: '/images/products/ht-xlpe-power-cable.png',
      badge: 'HT XLPE'
    },
    'towers': {
      image: '/images/products/transmission-tower.jpg',
      badge: 'Lattice Towers'
    },
  };

  const categoryIconStyles = {
    'overhead-lines': { bg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border-blue-200' },
    'transformer-spares': { bg: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white border-indigo-200' },
    'ab-switches': { bg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white border-amber-200' },
    'conductors': { bg: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white border-sky-200' },
    'earthing': { bg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white border-emerald-200' },
    'industrial-electricals': { bg: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white border-rose-200' },
    'towers': { bg: 'bg-slate-100 text-slate-700 group-hover:bg-slate-800 group-hover:text-white border-slate-300' },
  };

  const categoryIcons = {
    'overhead-lines': <Zap className="w-4 h-4 fill-current" />,
    'transformer-spares': <Cpu className="w-4 h-4" />,
    'ab-switches': <ToggleRight className="w-4 h-4" />,
    'conductors': <Activity className="w-4 h-4" />,
    'earthing': <ShieldCheck className="w-4 h-4" />,
    'industrial-electricals': <Sliders className="w-4 h-4" />,
    'towers': <Maximize className="w-4 h-4" />,
  };

  return (
    <div className="space-y-10 sm:space-y-14 md:space-y-16 pb-24 md:pb-16">
      <SEO
        title="Pavan Sai Power Lines | Power Transmission & Electrical Materials, Secunderabad"
        description="Pavan Sai Power Lines (PSPL), located on Bansilalpet Road, Secunderabad, supplies HT/LT overhead line materials, transformer spares, AB switches, AAAC & ACSR conductors, earthing materials, industrial electricals and MS & GI towers."
        keywords="Pavan Sai Power Lines, PSPL Secunderabad, Electrical materials suppliers in Hyderabad, Electrical equipment suppliers in Hyderabad, Power transmission materials suppliers in Hyderabad, Power line materials suppliers in Hyderabad, Electrical suppliers in Secunderabad, Industrial materials suppliers in Hyderabad, Overhead line materials suppliers in Telangana, Electrical materials in Bansilalpet, Power line materials near Bansilalpet Road"
        canonical="/"
        ogImage="/images/hero-transmission-sunset.jpg"
        structuredData={[getLocalBusinessSchema(), getWebSiteSchema()]}
      />
      
      {/* 1. ENTERPRISE HERO SECTION - VIEWPORT & WINDOW OPTIMIZED */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50/30 to-white border-b border-slate-200/80 pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-9 lg:pb-11">
        
        {/* Subtle Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Symmetrical Split Grid: Content + Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-blue-200/80 shadow-2xs text-xs font-semibold text-slate-800">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-bold text-slate-900">Secunderabad, Telangana</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-blue-700 font-bold">IS / IEC Certified Supplier</span>
              </div>

              {/* Main Heading - Perfectly Spaced, Balanced & Collision-Free */}
              <h1 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold tracking-tight text-slate-900 leading-[1.24] sm:leading-[1.2] font-heading">
                <span className="block">High-Tension Power Transmission</span>
                <span className="block text-slate-900 mt-0.5 sm:mt-1">
                  &amp; Distribution Hardware
                </span>
              </h1>

              {/* Lead Paragraph - High Contrast & Optimal Line Reading */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 sm:text-slate-700 leading-relaxed max-w-2xl font-normal">
                <strong className="font-bold text-slate-900">Pavan Sai Power Lines (PSPL)</strong> is an established supplier and wholesale stockist of overhead line hardware, polymer &amp; porcelain insulators, gang-operated AB switches, ACSR conductors, earthing equipment, and GI transmission towers headquartered in Secunderabad, Telangana.
              </p>

              {/* Action Buttons - Perfectly Padded, Symmetrical & Unified */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full sm:w-auto h-11 sm:h-12 px-6 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 active:scale-98 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-amber-500/20 border border-amber-400/80 transition-all text-center whitespace-nowrap shrink-0"
                >
                  <MessageSquare size={16} className="text-slate-950 shrink-0" />
                  <span>Request BOQ Quotation</span>
                </button>

                <Link
                  to="/products"
                  className="w-full sm:w-auto h-11 sm:h-12 px-6 inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm hover:shadow-md border border-blue-600 transition-all text-center whitespace-nowrap shrink-0"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight size={15} className="shrink-0" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto h-11 sm:h-12 px-6 inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 hover:border-slate-400 shadow-2xs transition-all text-center whitespace-nowrap shrink-0"
                >
                  <PhoneCall size={15} className="text-blue-600 shrink-0" />
                  <span>Contact Sales Desk</span>
                </Link>
              </div>

            </div>

            {/* Right Image Showcase Column (High-Res Transmission Photo Card) */}
            <div className="lg:col-span-5">
              <div className="relative group max-w-md mx-auto lg:max-w-none">
                {/* Ambient Soft Glow Ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500"></div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2 sm:p-2.5">
                  <div className="rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-slate-900 relative">
                    <img
                      src="/images/hero-transmission-sunset.jpg"
                      alt="High Voltage Electrical Power Transmission Infrastructure Tower at Sunset - Pavan Sai Power Lines Hyderabad"
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                      fetchPriority="high"
                      decoding="async"
                    />
                    
                    {/* Glassmorphic Overlay Pill Top */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md shadow-sm border border-white/20">
                        <Zap size={12} className="text-amber-400 fill-amber-400" />
                        <span>High Tension Grid Corridor</span>
                      </span>
                    </div>

                    {/* Glassmorphic Footer Overlay */}
                    <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/60 shadow-lg flex items-center justify-between text-xs gap-2">
                      <div className="min-w-0 flex-1">
                        <strong className="text-slate-900 block font-bold text-[11px] sm:text-xs truncate">Pavan Sai Power Lines</strong>
                        <span className="text-[10px] sm:text-[11px] text-slate-600 truncate block">Secunderabad Supply Base</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-emerald-200 shrink-0">
                        <ShieldCheck size={12} className="text-emerald-600 shrink-0" />
                        <span>Verified Quality</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Full-Width Metrics Highlights Bar - Seamless Window Viewport Fit */}
          <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/90 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* 1. Voltage Scope - Electric Blue */}
            <div className="group relative bg-white hover:bg-blue-50/30 p-3 sm:p-3.5 lg:p-4 rounded-xl sm:rounded-2xl border border-blue-200/90 hover:border-blue-500 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-sky-500"></div>
              
              <div className="flex items-center justify-between gap-1 mb-1.5 pt-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 whitespace-nowrap">
                  Voltage Scope
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border border-blue-200 flex items-center justify-center shrink-0 transition-all">
                  <Zap size={11} className="fill-current" />
                </div>
              </div>
              
              <div>
                <p className="text-sm sm:text-base lg:text-[17px] font-black text-slate-900 font-heading tracking-tight whitespace-nowrap">
                  11kV &ndash; 400kV
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold text-blue-900/80 mt-0.5 leading-tight whitespace-nowrap">
                  HT / LT Grid Class
                </p>
              </div>
            </div>

            {/* 2. Product Scope - Industrial Indigo */}
            <div className="group relative bg-white hover:bg-indigo-50/30 p-3 sm:p-3.5 lg:p-4 rounded-xl sm:rounded-2xl border border-indigo-200/90 hover:border-indigo-500 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-600 to-blue-600"></div>
              
              <div className="flex items-center justify-between gap-1 mb-1.5 pt-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 whitespace-nowrap">
                  Product Scope
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white border border-indigo-200 flex items-center justify-center shrink-0 transition-all">
                  <Layers size={11} />
                </div>
              </div>
              
              <div>
                <p className="text-sm sm:text-base lg:text-[17px] font-black text-slate-900 font-heading tracking-tight whitespace-nowrap">
                  7 Divisions
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold text-indigo-900/80 mt-0.5 leading-tight whitespace-nowrap">
                  Complete Hardware
                </p>
              </div>
            </div>

            {/* 3. Quality Code - Verified Emerald Green */}
            <div className="group relative bg-white hover:bg-emerald-50/30 p-3 sm:p-3.5 lg:p-4 rounded-xl sm:rounded-2xl border border-emerald-200/90 hover:border-emerald-500 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
              
              <div className="flex items-center justify-between gap-1 mb-1.5 pt-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 whitespace-nowrap">
                  Quality Code
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white border border-emerald-200 flex items-center justify-center shrink-0 transition-all">
                  <ShieldCheck size={11} />
                </div>
              </div>
              
              <div>
                <p className="text-sm sm:text-base lg:text-[17px] font-black text-slate-900 font-heading tracking-tight whitespace-nowrap">
                  IS &bull; IEC &bull; REC
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold text-emerald-900/80 mt-0.5 leading-tight whitespace-nowrap">
                  Utility Standards
                </p>
              </div>
            </div>

            {/* 4. Supply Hub - Warm Amber Gold */}
            <div className="group relative bg-white hover:bg-amber-50/30 p-3 sm:p-3.5 lg:p-4 rounded-xl sm:rounded-2xl border border-amber-200/90 hover:border-amber-500 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              
              <div className="flex items-center justify-between gap-1 mb-1.5 pt-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 whitespace-nowrap">
                  Supply Hub
                </span>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-amber-50 text-amber-700 group-hover:bg-amber-500 group-hover:text-white border border-amber-200 flex items-center justify-center shrink-0 transition-all">
                  <MapPin size={11} />
                </div>
              </div>
              
              <div>
                <p className="text-sm sm:text-base lg:text-[17px] font-black text-slate-900 font-heading tracking-tight whitespace-nowrap">
                  Secunderabad
                </p>
                <p className="text-[10px] sm:text-[11px] font-bold text-amber-900/80 mt-0.5 leading-tight whitespace-nowrap">
                  Logistics Dispatch Hub
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 2. PRODUCT CATEGORY HIGHLIGHTS (All 7 Divisions with Micro-Color Badges) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            <Layers size={13} className="text-blue-600" />
            <span>Product Divisions</span>
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 font-heading mt-2">
            Explore Our 7 Core Business Divisions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            Supplying standard-compliant electrical transmission and distribution components.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPANY_INFO.categories.map((cat) => {
            const preview = categoryPreviews[cat.id];
            const productCount = PRODUCTS.filter(p => p.categoryId === cat.id).length;
            const iconStyle = categoryIconStyles[cat.id] || categoryIconStyles['overhead-lines'];

            return (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-[0_16px_35px_-8px_rgba(29,78,216,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Unified Corporate Blue Top Accent Stripe */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600"></div>

                <div>
                  {/* Category Image Header */}
                  {preview && (
                    <div className="relative w-full aspect-[16/10] bg-slate-50/70 border-b border-slate-100 flex items-center justify-center p-3.5 overflow-hidden">
                      <img
                        src={preview.image}
                        alt={`${cat.name} - Electrical Equipment Supplier in Hyderabad, PSPL`}
                        className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 drop-shadow-2xs"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-2xs border bg-blue-50/90 text-blue-700 border-blue-200/80 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                          {productCount} {productCount === 1 ? 'Product' : 'Products'}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`w-8 h-8 rounded-xl ${iconStyle.bg} border flex items-center justify-center shrink-0 transition-all`}>
                        {categoryIcons[cat.id] || <Zap size={16} />}
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[42px] flex items-center leading-snug">
                        {cat.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                      {cat.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-5 pb-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Browse Division</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* Quick BOQ Quote Card (High-Impact Enterprise Navy & Gold) */}
          <div className="relative bg-[#0a192f] text-white p-5 sm:p-6 rounded-2xl shadow-lg border border-blue-500/60 flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-600/40 backdrop-blur-xs flex items-center justify-center mb-3 shadow-md ring-1 ring-blue-400/40">
                <FileCheck size={20} className="text-white" />
              </div>
              <h3 className="font-extrabold text-base text-white">
                Have a Bill of Quantities (BOQ)?
              </h3>
              <p className="text-xs text-blue-200/90 mt-2 leading-relaxed">
                Submit your project specifications or material schedule directly for formal commercial rate quotations.
              </p>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="mt-5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 py-3 px-4 rounded-xl text-xs font-black transition-all shadow-md shadow-amber-500/20 ring-1 ring-amber-300/40 active:scale-98 flex items-center justify-center gap-1.5"
            >
              <span>Submit Material Schedule</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

      </section>


      {/* 3. FEATURED PRODUCTS (Pure Authentic Photos) */}
      <section className="bg-slate-50/80 py-12 sm:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-md border border-blue-200">
                <Sparkles size={12} className="text-blue-600" />
                <span>Featured Materials</span>
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 font-heading mt-2">
                Popular Transmission & Distribution Products
              </h2>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold text-xs sm:text-sm bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs hover:shadow transition"
            >
              <span>View All Products ({PRODUCTS.length})</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>


      {/* 4. WHY UTILITIES & CONTRACTORS CHOOSE PSPL (Purposeful Color Accent Coding) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Enterprise Advantage
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 font-heading mt-2">
            Why Contractors & Utilities Rely On PSPL
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            Precision sourcing, utility standard compliance, and rapid supply logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Advantage 1: Verified Green for Standards */}
          <div className="group relative bg-white hover:bg-emerald-50/20 p-6 rounded-2xl border border-slate-200/90 hover:border-emerald-500 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white border border-emerald-200 flex items-center justify-center mb-4 shadow-2xs transition-all">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 mb-2">
              DISCOM & REC Standards
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every item strictly conforms to Indian Standard (IS), REC specifications, and state power utility requirements for reliable field acceptance.
            </p>
          </div>

          {/* Advantage 2: Electric Blue for Supply Dispatch */}
          <div className="group relative bg-white hover:bg-blue-50/20 p-6 rounded-2xl border border-slate-200/90 hover:border-blue-500 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-sky-500"></div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border border-blue-200 flex items-center justify-center mb-4 shadow-2xs transition-all">
              <Truck size={24} />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 mb-2">
              Secunderabad Supply Hub
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strategically based at Bansilalpet Road, Secunderabad (T.G.), offering swift dispatch across Telangana, Andhra Pradesh, and South India.
            </p>
          </div>

          {/* Advantage 3: Indigo for Complete Consolidation */}
          <div className="group relative bg-white hover:bg-indigo-50/20 p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-500 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white border border-indigo-200 flex items-center justify-center mb-4 shadow-2xs transition-all">
              <Layers size={24} />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 mb-2">
              Complete BOQ Consolidation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consolidated single-source supply covering cross arms, conductor drums, insulators, stay wire, clamps, and earthing in unified shipments.
            </p>
          </div>

          {/* Advantage 4: Amber Gold for MTC Test Certificates */}
          <div className="group relative bg-white hover:bg-amber-50/20 p-6 rounded-2xl border border-slate-200/90 hover:border-amber-500 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-500 group-hover:text-white border border-amber-200 flex items-center justify-center mb-4 shadow-2xs transition-all">
              <FileCheck size={24} />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 mb-2">
              Routine Test Certificates
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Material Test Certificates (MTC) and routine factory inspection test sheets supplied with every lot for smooth client sign-off.
            </p>
          </div>
        </div>

      </section>


      {/* 5. WHERE OUR PRODUCTS ARE USED (Field Applications) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Field Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
            Where Our Materials Are Installed
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            Engineered for high mechanical strength and reliable continuous power flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Overhead Power Corridors */}
          <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-500"></div>
            
            {/* Fixed Height Uniform Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-900 shrink-0 border-b border-slate-100">
              <img
                src="/images/products/transmission-tower.jpg"
                alt="Overhead Power Transmission Towers & Substation GI Structures - PSPL Hyderabad"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900/85 text-white backdrop-blur-md shadow-md border border-white/20">
                  <Zap size={12} className="text-amber-400 fill-amber-400" />
                  <span>11kV &ndash; 400kV Grid</span>
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-emerald-800 border border-emerald-200 shadow-2xs">
                  <ShieldCheck size={11} className="text-emerald-600" />
                  <span>IS Standard</span>
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  Overhead Power Corridors (HT/LT)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  11kV and 33kV distribution lines, ACSR/AAAC conductors, polymer pin insulators, V-cross arms, and guy wire stay sets.
                </p>

                {/* Material Specification Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    ACSR / AAAC
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    Polymer Pin Insulators
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    GI Cross Arms
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    Stay Wire Sets
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link 
                  to="/category/overhead-lines" 
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-extrabold text-xs sm:text-sm transition-all duration-200 group/btn shadow-2xs"
                >
                  <span>View Overhead Hardware</span>
                  <ChevronRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Substations & Switchgear */}
          <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-amber-500/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
            
            {/* Fixed Height Uniform Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-900 shrink-0 border-b border-slate-100">
              <img
                src="/images/products/ab-switch-gang-operated.png"
                alt="11kV 3-Phase Gang-Operated Air Break Switch Supplier in Hyderabad"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900/85 text-white backdrop-blur-md shadow-md border border-white/20">
                  <ToggleRight size={12} className="text-amber-400" />
                  <span>Substation Control</span>
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-emerald-800 border border-emerald-200 shadow-2xs">
                  <ShieldCheck size={11} className="text-emerald-600" />
                  <span>IS Standard</span>
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                  Substations & Switchgear
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  3-phase gang operated AB switches, 33kV line disconnector isolators, horn gap fuse units, and transformer spare parts.
                </p>

                {/* Material Specification Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                    Gang AB Switches
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                    33kV Isolators
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                    HG Fuse Units
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                    Bushing Spares
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link 
                  to="/category/ab-switches" 
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-500 text-amber-900 hover:text-white font-extrabold text-xs sm:text-sm transition-all duration-200 group/btn shadow-2xs border border-amber-200/60"
                >
                  <span>View Switchgear Supplies</span>
                  <ChevronRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Substation & Plant Earthing */}
          <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-500/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-600 to-teal-500"></div>
            
            {/* Fixed Height Uniform Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-900 shrink-0 border-b border-slate-100">
              <img
                src="/images/products/copper-bonded-earth-rods.jpg"
                alt="Copper-Bonded Chemical Earth Electrodes & Earthing Materials Hyderabad"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900/85 text-white backdrop-blur-md shadow-md border border-white/20">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>Surge Protection</span>
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-emerald-800 border border-emerald-200 shadow-2xs">
                  <ShieldCheck size={11} className="text-emerald-600" />
                  <span>IS Standard</span>
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                  Substation & Plant Earthing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Molecular copper-bonded rods, perforated GI earthing pipes, flanged cast iron pipes, and pure bare copper wire coils.
                </p>

                {/* Material Specification Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                    Copper Bonded Rods
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                    GI Pipe Electrodes
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                    Cast Iron Pipes
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                    Bare Copper Wire
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link 
                  to="/category/earthing" 
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-extrabold text-xs sm:text-sm transition-all duration-200 group/btn shadow-2xs border border-emerald-200/80"
                >
                  <span>View Earthing Systems</span>
                  <ChevronRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </section>


      {/* 6. HIGH-CONVERTING CORPORATE CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          
          {/* Subtle Decorative Circle Overlay */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wider uppercase text-blue-100">
                Procurement & Supply Desk
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-extrabold font-heading leading-tight">
                Need Bulk Pricing or an Official Material Quote?
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                Connect with our commercial desk in Secunderabad for product rates, stock availability, and delivery schedules across Telangana and Andhra Pradesh.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all text-center"
              >
                <PhoneCall size={16} className="text-blue-600" />
                <span>Call Sales Desk</span>
              </a>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 ring-1 ring-amber-300/40 transition-all text-center"
              >
                <MessageSquare size={16} className="text-slate-950 font-black" />
                <span>Submit BOQ Enquiry</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

    </div>
  );
}
