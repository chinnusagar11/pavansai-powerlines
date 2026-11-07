import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Target, 
  Eye, 
  CheckCircle2, 
  PhoneCall, 
  Zap, 
  ArrowRight,
  ArrowLeft,
  Cpu,
  Sliders,
  Maximize,
  Maximize2,
  Activity,
  ToggleRight,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryModal from '../components/EnquiryModal';

export default function About() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCardZoomOpen, setIsCardZoomOpen] = useState(false);

  return (
    <div className="space-y-8 sm:space-y-14 pb-14">
      
      {/* 1. Clean Page Header */}
      <section className="bg-gradient-to-b from-blue-50/60 to-white py-8 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <Breadcrumb items={[{ label: 'About Us' }]} />

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 transition shadow-2xs shrink-0"
              title="Return to Home Page"
            >
              <ArrowLeft size={14} className="text-blue-600" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="max-w-3xl space-y-2 mt-2">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-md border border-blue-200">
              Company Profile
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              About Pavan Sai Power Lines
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Electrical power transmission and distribution materials supplier established in Secunderabad, Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Business Overview */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Overview
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              A Dedicated Supply Partner for Electrical Contractors & Utilities
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>Pavan Sai Power Lines (PSPL)</strong> operates from Secunderabad, Telangana. The business focuses on the sourcing, stocking, and supply of certified electrical materials used in power transmission corridors, distribution networks, and industrial substations.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We stock and supply verified overhead line materials, insulators, conductors, gang-operated AB switches, earthing electrodes, and galvanized steel towers conforming to Indian Standard (IS) specifications.
            </p>

            <div className="p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
              <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Registered Office & Supply Hub</strong>
                {COMPANY_INFO.location.fullAddress}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {/* Official Visiting Card & Verification */}
            <div className="rounded-2xl overflow-hidden border-2 border-blue-200 shadow-md bg-white p-3.5 space-y-2.5">
              <div className="flex items-center justify-between text-xs pb-1.5 border-b border-slate-100">
                <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-blue-600" />
                  <span>Official Business Credentials</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Verified Stockist
                </span>
              </div>
              <div 
                onClick={() => setIsCardZoomOpen(true)}
                className="rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-900 shadow-sm group relative cursor-pointer"
                title="Click to zoom and view visiting card in high resolution"
              >
                <img
                  src="/images/pspl-visiting-card.jpg"
                  alt="Pavan Sai Power Lines Official Visiting Card - V. Nagamalleswara Rao"
                  className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute bottom-2.5 right-2.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-slate-900/85 text-white backdrop-blur-xs shadow-md border border-white/20">
                    <Maximize2 size={12} />
                    <span>Click to Zoom</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-0.5">
                <span>Proprietor: <strong className="text-slate-900">{COMPANY_INFO.contact.representativeName}</strong></span>
                <a href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="text-blue-600 font-black hover:underline">
                  {COMPANY_INFO.contact.primaryPhone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Products and Supply Capabilities */}
      <section className="bg-slate-50 py-10 sm:py-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-0.5">
              Our 7 Core Product Divisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Division 1: Electric Blue */}
            <div className="group relative bg-gradient-to-br from-blue-50/90 via-sky-50/30 to-white p-5 rounded-2xl border-2 border-blue-200 hover:border-blue-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-sky-500"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-108 transition-transform">
                  <Zap size={18} className="fill-white" />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">HT/LT Overhead Line Materials</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pin insulators, disc insulators, PG clamps, stay sets, hardware fittings, and hot-dip galvanized cross arms.
              </p>
            </div>

            {/* Division 2: Purple */}
            <div className="group relative bg-gradient-to-br from-purple-50/90 via-indigo-50/30 to-white p-5 rounded-2xl border-2 border-purple-200 hover:border-purple-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-500/25 group-hover:scale-108 transition-transform">
                  <Cpu size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">Transformer Spares</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                HT/LT bushings, silica gel breathers, cork & nitrile gaskets (RC70C), explosion vents, and oil level indicators.
              </p>
            </div>

            {/* Division 3: Amber */}
            <div className="group relative bg-gradient-to-br from-amber-50/90 via-orange-50/30 to-white p-5 rounded-2xl border-2 border-amber-200 hover:border-amber-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/25 group-hover:scale-108 transition-transform">
                  <ToggleRight size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">AB Switches</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                11kV & 33kV outdoor gang-operated triple pole Air Break switches, Horn Gap fuse units, and replacement contacts.
              </p>
            </div>

            {/* Division 4: Sky Blue */}
            <div className="group relative bg-gradient-to-br from-sky-50/90 via-blue-50/30 to-white p-5 rounded-2xl border-2 border-sky-200 hover:border-sky-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/25 group-hover:scale-108 transition-transform">
                  <Activity size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">AAAC & ACSR Conductors</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weasel, Rabbit, Dog, Panther ACSR conductors and high tensile AAAC conductors conforming to IS 398.
              </p>
            </div>

            {/* Division 5: Emerald */}
            <div className="group relative bg-gradient-to-br from-emerald-50/90 via-teal-50/30 to-white p-5 rounded-2xl border-2 border-emerald-200 hover:border-emerald-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-108 transition-transform">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">Earthing Materials</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Copper bonded electrodes, perforated GI earthing pipes, galvanized earth flats, and earth enhancement compounds.
              </p>
            </div>

            {/* Division 6: Rose / Red */}
            <div className="group relative bg-gradient-to-br from-rose-50/90 via-pink-50/30 to-white p-5 rounded-2xl border-2 border-rose-200 hover:border-rose-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 to-red-500"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-500/25 group-hover:scale-108 transition-transform">
                  <Sliders size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">Industrial Electricals & Towers</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                LT distribution feeder boxes, cable glands, lugs, HRC fuses, and hot-dip galvanized transmission lattice towers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Mission & Vision (High-Impact Enterprise Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="group relative bg-gradient-to-br from-blue-50/90 via-sky-50/30 to-white p-6 sm:p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-sky-500"></div>
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/25 group-hover:scale-108 transition-transform">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To supply electrical contractors, power utilities, and industrial clients with tested, durable, and standard-compliant transmission and distribution materials that ensure electrical safety and long service life.
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-emerald-50/90 via-teal-50/30 to-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-200 hover:border-emerald-500 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-500/25 group-hover:scale-108 transition-transform">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be recognized as a dependable and responsive material supply partner for power infrastructure projects in Telangana, distinguished by verified product quality, straightforward commercial dealings, and timely order fulfillment.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
            Have an Inquiry or Need Stock Availability?
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
            Contact our commercial sales desk in Secunderabad directly for price estimates and product information.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-amber-500/30 ring-2 ring-amber-300/40 transition-all active:scale-97"
            >
              Request Quote
            </button>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/20 shadow-md transition-all active:scale-97"
            >
              Contact Sales Desk
            </Link>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* Official Visiting Card Full-Screen Zoom Lightbox */}
      {isCardZoomOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsCardZoomOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 border-2 border-blue-400/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-slate-100">
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 font-heading">
                  Pavan Sai Power Lines &bull; Official Visiting Card
                </h3>
                <p className="text-xs text-slate-500">
                  Proprietor: {COMPANY_INFO.contact.representativeName} &bull; Secunderabad
                </p>
              </div>
              <button
                onClick={() => setIsCardZoomOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                aria-label="Close visiting card preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-2 bg-slate-900 rounded-xl overflow-hidden mt-1 shadow-inner">
              <img
                src="/images/pspl-visiting-card.jpg"
                alt="Pavan Sai Power Lines Official Visiting Card High Resolution"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-3 bg-slate-50 rounded-xl mt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <span className="text-slate-700">
                <strong>Registered Office:</strong> {COMPANY_INFO.location.shortAddress}
              </span>
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-3.5 py-1.5 rounded-lg shadow-xs transition"
              >
                <PhoneCall size={13} />
                <span>Call: {COMPANY_INFO.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
