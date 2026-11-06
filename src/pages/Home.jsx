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
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import EnquiryModal from '../components/EnquiryModal';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const featuredProducts = PRODUCTS.slice(0, 6);

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
    <div className="space-y-14 md:space-y-20 pb-12">
      
      {/* 1. CLEAN & BRIGHT HERO SECTION (White & Blue) */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white border-b border-slate-200/80 pt-10 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Clean Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-semibold text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Secunderabad, Telangana &bull; Electrical Material Supplier</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading">
                Reliable Power Transmission & Distribution <span className="text-blue-600">Materials</span>
              </h1>

              {/* Simple Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                <strong>Pavan Sai Power Lines (PSPL)</strong> is a trusted supplier of HT/LT overhead line hardware, transformer spares, AB switches, conductors, earthing materials, and GI towers based in Secunderabad, Telangana.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition active:scale-95"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-sm px-5 py-3 rounded-lg shadow-xs transition"
                >
                  <PhoneCall size={16} className="text-blue-600" />
                  <span>Contact Us</span>
                </Link>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center justify-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold text-sm px-3 py-2"
                >
                  <span>Quick Quote</span>
                  <ExternalLink size={13} />
                </button>
              </div>

              {/* Clean Key Highlights */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">7 Core</p>
                  <p className="text-xs text-slate-500">Product Divisions</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">Secunderabad</p>
                  <p className="text-xs text-slate-500">Central Supply Hub</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">IS Compliant</p>
                  <p className="text-xs text-slate-500">Utility Standard</p>
                </div>
              </div>

            </div>

            {/* Right Image Showcase Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-2">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
                    alt="High Voltage Power Transmission Infrastructure"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-3 bg-white text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Pavan Sai Power Lines</span>
                  <span className="text-blue-600 font-medium">Secunderabad, Telangana</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. PRODUCT CATEGORY HIGHLIGHTS (All 7 Categories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-100">
            Product Supply Divisions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Our Business Categories
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            Supplying standard-compliant electrical transmission and distribution components.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPANY_INFO.categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition flex items-center justify-center mb-3">
                  {categoryIcons[cat.id] || <Zap size={20} />}
                </div>

                <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {cat.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Browse Products</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* Quick BOQ Quote Card */}
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-3">
                <MessageSquare size={18} />
              </div>
              <h3 className="font-bold text-base text-blue-900">
                Have a Bill of Quantities (BOQ)?
              </h3>
              <p className="text-xs text-blue-700 mt-2 leading-relaxed">
                Send your material list directly to our Secunderabad sales desk for fast price quotations.
              </p>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-xs font-semibold transition"
            >
              Request Quote &rarr;
            </button>
          </div>
        </div>

      </section>


      {/* 3. FEATURED PRODUCTS (Clean White Grid) */}
      <section className="bg-slate-50 py-12 md:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Featured Materials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-0.5">
                Popular Transmission Products
              </h2>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold text-xs sm:text-sm"
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


      {/* 4. COMPANY OVERVIEW (Clean Two-Column Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              Company Overview
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Dedicated Supplier for Electrical Infrastructure in Telangana
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Based in Secunderabad, <strong>Pavan Sai Power Lines (PSPL)</strong> provides reliable supply of high-voltage transmission and distribution hardware. We support state electricity projects, turnkey EPC contractors, transformer repair units, and industrial facilities.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every item supplied conforms to verified Indian Standard (IS) specifications, ensuring maximum safety, mechanical strength, and electrical performance.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                <span>IS Compliant: Pin/disc insulators, conductors, switches, and towers</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                <span>Consolidated Supply: Complete BOM sourcing from a single vendor</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                <span>Responsive Logistics: Fast dispatch across Telangana & AP</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition"
              >
                <span>Learn More About PSPL</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80"
                alt="Pavan Sai Power Lines Materials Warehouse"
                className="w-full h-72 sm:h-80 object-cover rounded-lg"
              />
              <div className="p-3 text-xs text-slate-600 flex items-center justify-between">
                <span className="font-semibold text-slate-900">Commercial Distribution Base</span>
                <span className="text-blue-600 font-medium">Secunderabad, Telangana</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 5. WHY CHOOSE US (Clean White Cards) */}
      <section className="bg-slate-50 py-12 md:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Why Choose PSPL
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-0.5">
              Built on Quality & Clear Service
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Standard Quality</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Components manufactured to meet tested electrical and mechanical specifications.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Layers size={22} />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Full Product Range</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Source insulators, conductors, switches, earthing, and towers under one roof.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Truck size={22} />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Secunderabad Hub</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Central Telangana location enables quick dispatch to regional project sites.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <PhoneCall size={22} />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Direct Assistance</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Speak directly with commercial representatives on phone or WhatsApp without delays.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* 6. BUSINESS APPLICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-0.5">
            Where Our Products Are Used
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-sm transition">
            <div className="aspect-[16/9] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=600&q=80"
                alt="Transmission Lines"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-slate-900">Overhead Power Lines (HT/LT)</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                11kV, 33kV distribution lines, ACSR conductors, insulators, and line hardware.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-sm transition">
            <div className="aspect-[16/9] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
                alt="Substation Transformers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-slate-900">Substations & Transformers</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Transformer bushings, silica gel breathers, AB switches, and horn gap fuses.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-sm transition">
            <div className="aspect-[16/9] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                alt="Industrial Earthing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-slate-900">Industrial Plants & Earthing</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Copper-bonded electrodes, GI flats, distribution boxes, cable glands, and lugs.
              </p>
            </div>
          </div>
        </div>

      </section>


      {/* 7. CLEAN BLUE CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 text-white rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Need Material Pricing or Availability?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Contact our sales desk in Secunderabad for quotations on conductors, switches, insulators, or custom requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white hover:bg-slate-100 text-blue-700 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition active:scale-95"
            >
              Request Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition"
            >
              Call {COMPANY_INFO.contact.primaryPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

    </div>
  );
}
