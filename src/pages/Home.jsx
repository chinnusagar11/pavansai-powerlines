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
  Sparkles
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

  const categoryIcons = {
    'overhead-lines': <Zap className="w-5 h-5 text-blue-600" />,
    'transformer-spares': <Cpu className="w-5 h-5 text-blue-600" />,
    'ab-switches': <ToggleRight className="w-5 h-5 text-blue-600" />,
    'conductors': <Activity className="w-5 h-5 text-blue-600" />,
    'earthing': <ShieldCheck className="w-5 h-5 text-blue-600" />,
    'industrial-electricals': <Sliders className="w-5 h-5 text-blue-600" />,
    'towers': <Maximize className="w-5 h-5 text-blue-600" />,
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

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight size={16} />
                </Link>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-98 text-slate-800 border border-slate-300 font-semibold text-sm px-5 py-3.5 rounded-xl shadow-xs hover:border-slate-400 transition-all duration-200 text-center"
                >
                  <MessageSquare size={16} className="text-blue-600" />
                  <span>Request BOQ Quotation</span>
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1.5 text-slate-600 hover:text-blue-600 font-semibold text-xs sm:text-sm py-2 px-2 text-center transition"
                >
                  <PhoneCall size={14} className="text-blue-600" />
                  <span>Contact Sales Desk</span>
                </Link>
              </div>

              {/* Metrics Highlights Bar */}
              <div className="pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <p className="text-lg sm:text-2xl font-black text-slate-900 font-heading">11kV - 400kV</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Voltage Scope</p>
                </div>
                <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <p className="text-lg sm:text-2xl font-black text-slate-900 font-heading">7 Core</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Supply Divisions</p>
                </div>
                <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <p className="text-lg sm:text-2xl font-black text-slate-900 font-heading">IS & IEC</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Utility Standards</p>
                </div>
                <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <p className="text-lg sm:text-2xl font-black text-slate-900 font-heading">Secunderabad</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">Supply & Logistics Hub</p>
                </div>
              </div>

            </div>

            {/* Right Image Showcase Column (High-Res Transmission Photo Card) */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Ambient Soft Glow Ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500"></div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-white p-2.5">
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
                    <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/40 shadow-lg flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-900 block font-bold text-xs">Pavan Sai Power Lines</strong>
                        <span className="text-[11px] text-slate-600">Secunderabad Supply Base</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <ShieldCheck size={12} className="text-emerald-600" />
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

            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Category Image Header */}
                  {preview && (
                    <div className="relative aspect-[16/10] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3 overflow-hidden">
                      <img
                        src={preview.image}
                        alt={cat.name}
                        className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 drop-shadow-2xs"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="inline-block text-[10px] font-bold bg-white/95 text-blue-700 px-2 py-0.5 rounded-md shadow-xs border border-slate-200">
                          {productCount} {productCount === 1 ? 'Product' : 'Products'}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        {categoryIcons[cat.id] || <Zap size={16} />}
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {cat.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                      {cat.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>Browse Category</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* Quick BOQ Quote Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-5 sm:p-6 rounded-2xl shadow-md flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center mb-3">
                <FileCheck size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-base text-white">
                Have a Bill of Quantities (BOQ)?
              </h3>
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                Submit your project specifications or material schedule directly for formal commercial rate quotations.
              </p>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="mt-5 w-full bg-white hover:bg-blue-50 text-blue-700 py-2.5 px-3 rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              Submit Material Schedule &rarr;
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
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              DISCOM & REC Standards
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every item strictly conforms to Indian Standard (IS), REC specifications, and state power utility requirements for reliable field acceptance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Truck size={24} />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Secunderabad Supply Hub
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strategically based in Secunderabad's prime industrial corridor, offering swift dispatch across Telangana, Andhra Pradesh, and South India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Layers size={24} />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Complete BOQ Consolidation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consolidated single-source supply covering cross arms, conductor drums, insulators, stay wire, clamps, and earthing in unified shipments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <FileCheck size={24} />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
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
          
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="aspect-[16/10] bg-slate-900 overflow-hidden">
              <img
                src="/images/products/transmission-tower.jpg"
                alt="Overhead Power Transmission Towers"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900">Overhead Power Corridors (HT/LT)</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  11kV and 33kV distribution lines, ACSR/AAAC conductors, polymer pin insulators, V-cross arms, and guy wire stay sets.
                </p>
              </div>
              <Link to="/products?category=overhead-lines" className="mt-4 text-xs font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-700">
                <span>View Overhead Hardware</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="aspect-[16/10] bg-slate-50 flex items-center justify-center p-3 border-b border-slate-100">
              <img
                src="/images/products/ab-switch-gang-operated.png"
                alt="11kV 3-Phase Gang-Operated Air Break Switch"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900">Substations & Switchgear</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  3-phase gang operated AB switches, 33kV line disconnector isolators, horn gap fuse units, and transformer spare parts.
                </p>
              </div>
              <Link to="/products?category=ab-switches" className="mt-4 text-xs font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-700">
                <span>View Switchgear Supplies</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="aspect-[16/10] bg-slate-50 flex items-center justify-center p-3 border-b border-slate-100">
              <img
                src="/images/products/copper-bonded-earth-rods.jpg"
                alt="Copper-Bonded Chemical Earth Electrodes"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900">Substation & Plant Earthing</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Molecular copper-bonded rods, perforated GI earthing pipes, flanged cast iron pipes, and pure bare copper wire coils.
                </p>
              </div>
              <Link to="/products?category=earthing" className="mt-4 text-xs font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-700">
                <span>View Earthing Systems</span>
                <ChevronRight size={14} />
              </Link>
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-900/60 hover:bg-blue-900/80 border border-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all text-center"
              >
                <MessageSquare size={16} />
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
