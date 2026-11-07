import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Layers, 
  PhoneCall, 
  Sliders, 
  Building2, 
  Cpu, 
  Maximize, 
  Activity, 
  ToggleRight, 
  ChevronRight,
  ExternalLink,
  MessageSquare,
  FileCheck,
  CheckCircle,
  Clock,
  Sparkles,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import EnquiryModal from '../components/EnquiryModal';

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

  const categoryTheme = {
    'overhead-lines': {
      border: 'border-blue-200/90 hover:border-blue-500 hover:shadow-blue-500/20',
      bg: 'bg-gradient-to-b from-blue-50/70 via-white to-white',
      accentBar: 'bg-gradient-to-r from-blue-600 to-sky-500',
      iconBg: 'bg-blue-600 text-white shadow-sm shadow-blue-500/30',
      badge: 'bg-blue-100/90 text-blue-800 border-blue-200',
      linkText: 'text-blue-600 group-hover:text-blue-700',
    },
    'transformer-spares': {
      border: 'border-purple-200/90 hover:border-purple-500 hover:shadow-purple-500/20',
      bg: 'bg-gradient-to-b from-purple-50/70 via-white to-white',
      accentBar: 'bg-gradient-to-r from-purple-600 to-indigo-500',
      iconBg: 'bg-purple-600 text-white shadow-sm shadow-purple-500/30',
      badge: 'bg-purple-100/90 text-purple-800 border-purple-200',
      linkText: 'text-purple-600 group-hover:text-purple-700',
    },
    'ab-switches': {
      border: 'border-amber-200/90 hover:border-amber-500 hover:shadow-amber-500/20',
      bg: 'bg-gradient-to-b from-amber-50/70 via-white to-white',
      accentBar: 'bg-gradient-to-r from-amber-500 to-orange-500',
      iconBg: 'bg-amber-500 text-white shadow-sm shadow-amber-500/30',
      badge: 'bg-amber-100/90 text-amber-900 border-amber-200',
      linkText: 'text-amber-700 group-hover:text-amber-800',
    },
    'conductors': {
      border: 'border-sky-200/90 hover:border-sky-500 hover:shadow-sky-500/20',
      bg: 'bg-gradient-to-b from-sky-50/70 via-white to-white',
      accentBar: 'bg-gradient-to-r from-sky-500 to-blue-500',
      iconBg: 'bg-sky-500 text-white shadow-sm shadow-sky-500/30',
      badge: 'bg-sky-100/90 text-sky-800 border-sky-200',
      linkText: 'text-sky-600 group-hover:text-sky-700',
    },
    'earthing': {
      border: 'border-emerald-200/90 hover:border-emerald-500 hover:shadow-emerald-500/20',
      bg: 'bg-gradient-to-b from-emerald-50/70 via-white to-white',
      accentBar: 'bg-gradient-to-r from-emerald-600 to-teal-500',
      iconBg: 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/30',
      badge: 'bg-emerald-100/90 text-emerald-800 border-emerald-200',
      linkText: 'text-emerald-600 group-hover:text-emerald-700',
    },
    'industrial-electricals': {
      border: 'border-rose-200/90 hover:border-rose-500 hover:shadow-rose-500/20',
      bg: 'bg-gradient-to-b from-rose-50/70 via-white to-white',
      accentBar: 'bg-gradient-to-r from-rose-500 to-red-500',
      iconBg: 'bg-rose-500 text-white shadow-sm shadow-rose-500/30',
      badge: 'bg-rose-100/90 text-rose-800 border-rose-200',
      linkText: 'text-rose-600 group-hover:text-rose-700',
    },
    'towers': {
      border: 'border-slate-300 hover:border-slate-700 hover:shadow-slate-500/20',
      bg: 'bg-gradient-to-b from-slate-100/80 via-white to-white',
      accentBar: 'bg-gradient-to-r from-slate-700 to-slate-900',
      iconBg: 'bg-slate-700 text-white shadow-sm shadow-slate-600/30',
      badge: 'bg-slate-200 text-slate-800 border-slate-300',
      linkText: 'text-slate-800 group-hover:text-slate-900',
    },
  };

  const categoryIcons = {
    'overhead-lines': <Zap className="w-4 h-4 text-white fill-white" />,
    'transformer-spares': <Cpu className="w-4 h-4 text-white" />,
    'ab-switches': <ToggleRight className="w-4 h-4 text-white" />,
    'conductors': <Activity className="w-4 h-4 text-white" />,
    'earthing': <ShieldCheck className="w-4 h-4 text-white" />,
    'industrial-electricals': <Sliders className="w-4 h-4 text-white" />,
    'towers': <Maximize className="w-4 h-4 text-white" />,
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      
      {/* 1. ENTERPRISE HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white border-b border-slate-200/80 pt-8 pb-14 sm:pt-14 sm:pb-20 lg:py-24">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              
              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-blue-200 shadow-xs text-xs font-semibold text-slate-800">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Secunderabad, Telangana</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-blue-700 font-bold">IS / IEC Certified Supplier</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
                Reliable Power Transmission & Distribution <span className="text-blue-600 inline-block">Materials</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                <strong>Pavan Sai Power Lines (PSPL)</strong> is an established supplier and stockist of overhead line hardware, polymer & porcelain insulators, gang-operated AB switches, ACSR conductors, earthing equipment, and GI transmission towers headquartered in Secunderabad, Telangana.
              </p>

              {/* Action Buttons with High-Impact Professional Colors */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 active:scale-98 text-white font-black text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md shadow-blue-600/30 hover:shadow-lg transition-all text-center"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight size={15} />
                </Link>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 active:scale-98 text-slate-950 font-black text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md shadow-amber-500/25 ring-2 ring-amber-300/40 transition-all text-center"
                >
                  <MessageSquare size={15} className="text-slate-950 font-black" />
                  <span>Request BOQ Quotation</span>
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-extrabold text-xs sm:text-sm px-4.5 py-3 rounded-xl border-2 border-slate-300 hover:border-blue-500 shadow-xs transition-all text-center"
                >
                  <PhoneCall size={14} className="text-blue-600" />
                  <span>Contact Sales Desk</span>
                </Link>
              </div>

              {/* Metrics Highlights Bar - Rich Industrial Colors & Guaranteed Zero Overflow */}
              <div className="pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                
                {/* 1. Voltage Scope - Vibrant Electric Blue */}
                <div className="group relative bg-gradient-to-br from-blue-50/95 via-sky-50/40 to-white hover:from-blue-100/90 hover:to-white p-3.5 rounded-2xl border-2 border-blue-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-sky-500"></div>
                  
                  <div className="flex items-center justify-between gap-1 mb-2 pt-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 truncate">
                      Voltage Scope
                    </span>
                    <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center shadow-xs shadow-blue-500/30 shrink-0 group-hover:scale-110 transition-transform">
                      <Zap size={12} className="fill-white" />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm sm:text-base lg:text-[15px] xl:text-[17px] font-black text-slate-900 font-heading tracking-tight whitespace-nowrap">
                      11kV &ndash; 400kV
                    </p>
                    <p className="text-[11px] font-bold text-blue-900/80 truncate mt-0.5">
                      HT / LT Grid Class
                    </p>
                  </div>
                </div>

                {/* 2. Product Scope - Industrial Indigo */}
                <div className="group relative bg-gradient-to-br from-indigo-50/95 via-purple-50/30 to-white hover:from-indigo-100/90 hover:to-white p-3.5 rounded-2xl border-2 border-indigo-200 hover:border-indigo-500 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-600 to-blue-600"></div>
                  
                  <div className="flex items-center justify-between gap-1 mb-2 pt-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 truncate">
                      Product Scope
                    </span>
                    <div className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center shadow-xs shadow-indigo-500/30 shrink-0 group-hover:scale-110 transition-transform">
                      <Layers size={12} />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm sm:text-base lg:text-[15px] xl:text-[17px] font-black text-slate-900 font-heading tracking-tight whitespace-nowrap">
                      7 Divisions
                    </p>
                    <p className="text-[11px] font-bold text-indigo-900/80 truncate mt-0.5">
                      Complete Hardware
                    </p>
                  </div>
                </div>

                {/* 3. Quality Code - Verified Emerald Green */}
                <div className="group relative bg-gradient-to-br from-emerald-50/95 via-teal-50/30 to-white hover:from-emerald-100/90 hover:to-white p-3.5 rounded-2xl border-2 border-emerald-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
                  
                  <div className="flex items-center justify-between gap-1 mb-2 pt-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 truncate">
                      Quality Code
                    </span>
                    <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center shadow-xs shadow-emerald-500/30 shrink-0 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={12} />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm sm:text-base lg:text-[15px] xl:text-[17px] font-black text-slate-900 font-heading tracking-tight whitespace-nowrap">
                      IS &bull; IEC &bull; REC
                    </p>
                    <p className="text-[11px] font-bold text-emerald-900/80 truncate mt-0.5">
                      Utility Standards
                    </p>
                  </div>
                </div>

                {/* 4. Supply Hub - Industrial Amber Gold */}
                <div className="group relative bg-gradient-to-br from-amber-50/95 via-orange-50/30 to-white hover:from-amber-100/90 hover:to-white p-3.5 rounded-2xl border-2 border-amber-200 hover:border-amber-500 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between min-w-0 overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                  
                  <div className="flex items-center justify-between gap-1 mb-2 pt-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 truncate">
                      Supply Hub
                    </span>
                    <div className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center shadow-xs shadow-amber-500/30 shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin size={12} />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm sm:text-base lg:text-[15px] xl:text-[17px] font-black text-slate-900 font-heading tracking-tight whitespace-nowrap">
                      Secunderabad
                    </p>
                    <p className="text-[11px] font-bold text-amber-900/80 truncate mt-0.5">
                      Logistics Dispatch Hub
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Image Showcase Column (High-Res Transmission Photo Card) */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Ambient Soft Glow Ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500"></div>

                <div className="relative rounded-2xl overflow-hidden border-2 border-blue-200/90 shadow-2xl bg-white p-2.5">
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 relative">
                    <img
                      src="/images/hero-transmission-sunset.jpg"
                      alt="High Voltage Electrical Power Transmission Infrastructure Tower at Sunset"
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Glassmorphic Overlay Pill Top */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md shadow-sm border border-white/20">
                        <Zap size={13} className="text-amber-400 fill-amber-400" />
                        <span>High Tension Grid Corridor</span>
                      </span>
                    </div>

                    {/* Glassmorphic Footer Overlay */}
                    <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-white/60 shadow-lg flex items-center justify-between text-xs gap-2">
                      <div className="min-w-0 flex-1">
                        <strong className="text-slate-900 block font-bold text-xs truncate">Pavan Sai Power Lines</strong>
                        <span className="text-[11px] text-slate-600 truncate block">Secunderabad Supply Base</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shrink-0">
                        <ShieldCheck size={13} className="text-emerald-600 shrink-0" />
                        <span>Verified Quality</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. PRODUCT CATEGORY HIGHLIGHTS (All 7 Divisions with Authentic Previews) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            <Layers size={13} className="text-blue-600" />
            <span>Product Divisions</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
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
            const theme = categoryTheme[cat.id] || categoryTheme['overhead-lines'];

            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className={`group relative bg-white rounded-2xl border-2 ${theme.border} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Top Division Color Accent Stripe */}
                <div className={`h-1.5 w-full ${theme.accentBar}`}></div>

                <div>
                  {/* Category Image Header */}
                  {preview && (
                    <div className="relative w-full aspect-[16/10] bg-slate-50/80 border-b border-slate-100 flex items-center justify-center p-3.5 overflow-hidden">
                      <img
                        src={preview.image}
                        alt={cat.name}
                        className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 drop-shadow-2xs"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span className={`inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs border ${theme.badge}`}>
                          {productCount} {productCount === 1 ? 'Product' : 'Products'}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`w-8 h-8 rounded-xl ${theme.iconBg} flex items-center justify-center shrink-0`}>
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

                <div className={`px-4 sm:px-5 pb-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold ${theme.linkText}`}>
                  <span>Browse Division</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* Quick BOQ Quote Card */}
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-5 sm:p-6 rounded-2xl shadow-lg border-2 border-blue-400 flex flex-col justify-between overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center mb-3 shadow-md ring-2 ring-white/30">
                <FileCheck size={20} className="text-white" />
              </div>
              <h3 className="font-extrabold text-base text-white">
                Have a Bill of Quantities (BOQ)?
              </h3>
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                Submit your project specifications or material schedule directly for formal commercial rate quotations.
              </p>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="mt-5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 py-3 px-4 rounded-xl text-xs font-black transition-all shadow-lg shadow-amber-500/25 ring-2 ring-amber-300/40 active:scale-98 flex items-center justify-center gap-1.5"
            >
              <span>Submit Material Schedule</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

      </section>


      {/* 3. FEATURED PRODUCTS (Pure Authentic Photos) */}
      <section className="bg-slate-50/80 py-14 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
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
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold text-xs sm:text-sm bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs hover:shadow transition"
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


      {/* 4. WHY UTILITIES & CONTRACTORS CHOOSE PSPL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Advantage 1: Emerald Theme */}
          <div className="group relative bg-gradient-to-br from-emerald-50/95 via-teal-50/40 to-white p-6 rounded-2xl border-2 border-emerald-200 hover:border-emerald-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-500/30 group-hover:scale-108 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 mb-2">
              DISCOM & REC Standards
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every item strictly conforms to Indian Standard (IS), REC specifications, and state power utility requirements for reliable field acceptance.
            </p>
          </div>

          {/* Advantage 2: Electric Blue Theme */}
          <div className="group relative bg-gradient-to-br from-blue-50/95 via-sky-50/40 to-white p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-sky-500"></div>
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/30 group-hover:scale-108 transition-transform">
              <Truck size={24} />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 mb-2">
              Secunderabad Supply Hub
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strategically based at Bansilalpet Road, Secunderabad (T.G.), offering swift dispatch across Telangana, Andhra Pradesh, and South India.
            </p>
          </div>

          {/* Advantage 3: Indigo Theme */}
          <div className="group relative bg-gradient-to-br from-indigo-50/95 via-purple-50/40 to-white p-6 rounded-2xl border-2 border-indigo-200 hover:border-indigo-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-md shadow-indigo-500/30 group-hover:scale-108 transition-transform">
              <Layers size={24} />
            </div>
            <h3 className="font-extrabold text-base text-slate-900 mb-2">
              Complete BOQ Consolidation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consolidated single-source supply covering cross arms, conductor drums, insulators, stay wire, clamps, and earthing in unified shipments.
            </p>
          </div>

          {/* Advantage 4: Amber Theme */}
          <div className="group relative bg-gradient-to-br from-amber-50/95 via-orange-50/40 to-white p-6 rounded-2xl border-2 border-amber-200 hover:border-amber-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-4 shadow-md shadow-amber-500/30 group-hover:scale-108 transition-transform">
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


      {/* 5. WHERE OUR PRODUCTS ARE USED (High-Impact Authentic Photo Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Field Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
            Where Our Materials Are Installed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Overhead Power Corridors */}
          <div className="group relative bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-500 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-sky-500"></div>
            
            {/* Fixed Height Uniform Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-900 shrink-0 border-b border-slate-100">
              <img
                src="/images/products/transmission-tower.jpg"
                alt="Overhead Power Transmission Towers"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-blue-900/85 text-white backdrop-blur-md shadow-md border border-blue-400/40">
                  <Zap size={12} className="text-amber-400 fill-amber-400" />
                  <span>11kV &ndash; 400kV Grid</span>
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-white/95 text-slate-800 shadow-xs">
                  IS Standard
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
                  to="/products?category=overhead-lines" 
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-extrabold text-xs sm:text-sm transition-all duration-200 group/btn shadow-2xs"
                >
                  <span>View Overhead Hardware</span>
                  <ChevronRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Substations & Switchgear */}
          <div className="group relative bg-white rounded-2xl border-2 border-amber-200 hover:border-amber-500 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
            
            {/* Fixed Height Uniform Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-900 shrink-0 border-b border-slate-100">
              <img
                src="/images/products/ab-switch-gang-operated.png"
                alt="11kV 3-Phase Gang-Operated Air Break Switch"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-950/85 text-amber-200 backdrop-blur-md shadow-md border border-amber-400/40">
                  <ToggleRight size={12} className="text-amber-400" />
                  <span>Substation Control</span>
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-white/95 text-slate-800 shadow-xs">
                  IS Standard
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
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
                  to="/products?category=ab-switches" 
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-500 text-amber-900 hover:text-slate-950 font-extrabold text-xs sm:text-sm transition-all duration-200 group/btn shadow-2xs"
                >
                  <span>View Switchgear Supplies</span>
                  <ChevronRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Substation & Plant Earthing */}
          <div className="group relative bg-white rounded-2xl border-2 border-emerald-200 hover:border-emerald-500 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-600 to-teal-500"></div>
            
            {/* Fixed Height Uniform Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-900 shrink-0 border-b border-slate-100">
              <img
                src="/images/products/copper-bonded-earth-rods.jpg"
                alt="Copper-Bonded Chemical Earth Electrodes"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-950/85 text-emerald-200 backdrop-blur-md shadow-md border border-emerald-400/40">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>Surge Protection</span>
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-white/95 text-slate-800 shadow-xs">
                  IS Standard
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
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
                  to="/products?category=earthing" 
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white font-extrabold text-xs sm:text-sm transition-all duration-200 group/btn shadow-2xs"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/30 ring-2 ring-amber-300/40 transition-all text-center"
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
