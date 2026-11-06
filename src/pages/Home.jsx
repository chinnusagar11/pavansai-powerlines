import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  CheckCircle, 
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

  // Featured 6 products for homepage showcase
  const featuredProducts = PRODUCTS.slice(0, 6);

  // Icon mapping for 7 categories
  const categoryIcons = {
    'overhead-lines': <Zap className="w-6 h-6 text-sky-500" />,
    'transformer-spares': <Cpu className="w-6 h-6 text-sky-500" />,
    'ab-switches': <ToggleRight className="w-6 h-6 text-sky-500" />,
    'conductors': <Activity className="w-6 h-6 text-sky-500" />,
    'earthing': <ShieldCheck className="w-6 h-6 text-sky-500" />,
    'industrial-electricals': <Sliders className="w-6 h-6 text-sky-500" />,
    'towers': <Maximize className="w-6 h-6 text-sky-500" />,
  };

  return (
    <div className="space-y-16 md:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-navy-950 text-white min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden">
        
        {/* Background Image with Deep Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=85"
            alt="High Voltage Electrical Power Transmission Infrastructure"
            className="w-full h-full object-cover object-center scale-105 transform duration-1000"
          />
          {/* Multi-layered dark navy gradient for perfect readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
          {/* Subtle blueprint grid overlay */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            
            {/* Location & Commercial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-sky-400/40 backdrop-blur-md text-xs font-semibold text-sky-300">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>Secunderabad, Telangana &bull; Electrical Material Supplier</span>
            </div>

            {/* Strong Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Powering Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">
                Transmission & Distribution
              </span> Networks
            </h1>

            {/* Short Company Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <strong>Pavan Sai Power Lines (PSPL)</strong> is an established supplier of certified HT/LT overhead line hardware, transformer spares, gang-operated AB switches, AAAC/ACSR conductors, earthing materials, and GI lattice towers based in Secunderabad.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-sky-900/50 hover:shadow-sky-500/30 transition-all duration-200 active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200"
              >
                <PhoneCall size={18} className="text-sky-400" />
                <span>Contact Us</span>
              </Link>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 text-sky-300 hover:text-white text-sm font-semibold underline underline-offset-4 px-2 py-2"
              >
                <span>Quick Price Quote</span>
                <ExternalLink size={14} />
              </button>
            </div>

            {/* Quick trust metrics grounded in real supply categories */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-700/60">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white font-heading">7 Core</p>
                <p className="text-xs text-slate-400">Electrical Product Categories</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white font-heading">Secunderabad</p>
                <p className="text-xs text-slate-400">Telangana Distribution Base</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xl sm:text-2xl font-bold text-white font-heading">IS Standards</p>
                <p className="text-xs text-slate-400">Utility Grade Specification</p>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* 2. PRODUCT CATEGORY HIGHLIGHTS (All 7 Categories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
            Supply Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 font-heading">
            Comprehensive Electrical Materials
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Supplying electrical contractors, transformer manufacturers, and utility projects across Telangana and neighboring regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COMPANY_INFO.categories.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-sky-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-500 transition-colors flex items-center justify-center mb-4">
                  {categoryIcons[cat.id] || <Zap className="w-6 h-6 text-sky-500 group-hover:text-white" />}
                </div>

                <h3 className="font-bold text-lg text-navy-950 group-hover:text-sky-600 transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {cat.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                <span>View Products</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* 8th Card: Direct Commercial Inquiry */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between border border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-sky-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">
                Custom Bill of Quantities (BOQ)?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                Send your complete tender material list or urgent line repair requirement directly to our sales desk.
              </p>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold transition"
            >
              <span>Submit BOQ for Quote</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </section>


      {/* 3. FEATURED PRODUCTS SHOWCASE */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
                Product Showcase
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading">
                Industrial & Transmission Materials
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Explore popular transmission fittings, switches, and transformer components.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm group"
            >
              <span>Explore All {PRODUCTS.length} Products</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>


      {/* 4. COMPANY OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80"
                alt="Pavan Sai Power Lines Materials Supply Hub"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Info Card */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-navy-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Building2 size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Secunderabad Hub</h4>
                  <p className="text-xs text-slate-300">Central distribution in Telangana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              About Pavan Sai Power Lines
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 font-heading leading-tight">
              A Dedicated Supply Partner for Electrical Power Infrastructure
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Located in the commercial industrial trading center of Secunderabad, <strong>Pavan Sai Power Lines (PSPL)</strong> is focused on fulfilling the specialized material requirements of high-voltage transmission networks, distribution lines, and industrial substations.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We stock and supply verified overhead line hardware, insulators, copper/GI earthing systems, conductors, and transformer spares built to withstand demanding electrical field conditions and Indian Standard (IS) specifications.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Strict Standards:</strong> Materials conforming to IS, IEC, and State DISCOM specifications.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Comprehensive Inventory:</strong> Single-source supply from towers and conductors to minute transformer gaskets.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Transparent Commercial Support:</strong> Direct communication via phone and WhatsApp with immediate pricing assistance.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition shadow"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* 5. WHY CHOOSE US SECTION */}
      <section className="bg-navy-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
              Why Pavan Sai Power Lines?
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              Built on Technical Precision & Material Reliability
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Our core values prioritize material authenticity, verified dimensions, and responsive supply logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-navy-900/80 p-6 rounded-2xl border border-slate-700/70 hover:border-sky-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <ShieldCheck size={26} />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Utility-Grade Quality</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Hardware, conductors, and switches manufactured to meet rigorous mechanical and electrical test parameters.
              </p>
            </div>

            <div className="bg-navy-900/80 p-6 rounded-2xl border border-slate-700/70 hover:border-sky-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Layers size={26} />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">End-to-End Catalogue</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Eliminate multi-vendor friction by procuring complete HT/LT lines, earthing, towers, and transformer spares together.
              </p>
            </div>

            <div className="bg-navy-900/80 p-6 rounded-2xl border border-slate-700/70 hover:border-sky-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Truck size={26} />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Fast Hub Logistics</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Direct access to major Telangana and Andhra Pradesh transport corridors ensures timely dispatch to your project site.
              </p>
            </div>

            <div className="bg-navy-900/80 p-6 rounded-2xl border border-slate-700/70 hover:border-sky-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <PhoneCall size={26} />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Direct Contact</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                No middle agents or confusing automated loops. Speak directly with experienced material supply coordinators.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* 6. BUSINESS APPLICATIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
            Field Applications
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 font-heading">
            Where Our Materials Are Deployed
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Engineered to support critical power infrastructure across multiple electrical sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=600&q=80"
                alt="Overhead Transmission Lines"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-navy-950">Overhead HT/LT Transmission Lines</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Materials for 11kV, 33kV, and high tension line stringing: insulators, ACSR/AAAC conductors, cross arms, and stay sets.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
                alt="Substation Transformer Maintenance"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-navy-950">Distribution Substations & Transformers</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Transformer bushings, silica gel breathers, MOG indicators, AB gang-operated switches, and horn gap fuse protection.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                alt="Industrial Heavy Electrical Installations"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-navy-950">Industrial Plants & Earthing Grids</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Copper-bonded earth electrodes, GI flats, feeder pillars, cable glands, lugs, and structural gantry towers for industrial plants.
            </p>
          </div>

        </div>

      </section>


      {/* 7. CONTACT CALL-TO-ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-sky-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Ready to Order or Enquire?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              Connect with Pavan Sai Power Lines Today
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need urgent line maintenance materials in Secunderabad or a bulk quotation for state EPC projects, our sales desk is ready to assist.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg transition active:scale-95"
              >
                <span>Request Material Quotation</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition"
              >
                <PhoneCall size={16} className="text-sky-400" />
                <span>Call {COMPANY_INFO.contact.primaryPhone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Global Quote Modal */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

    </div>
  );
}
