import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  ShieldCheck, 
  Target, 
  Eye, 
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
import SEO from '../components/SEO';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../utils/schemaGenerator';

export default function About() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCardZoomOpen, setIsCardZoomOpen] = useState(false);

  return (
    <div className="space-y-10 sm:space-y-16 lg:space-y-20 pb-24 md:pb-16">
      <SEO
        title="About Pavan Sai Power Lines | Electrical Materials Supplier, Secunderabad"
        description="Learn about Pavan Sai Power Lines (PSPL), an established electrical materials and power line hardware stockist located on Bansilalpet Road, Secunderabad, Telangana."
        keywords="About Pavan Sai Power Lines, PSPL Secunderabad, Electrical materials suppliers in Hyderabad, Electrical suppliers in Secunderabad, Power transmission materials suppliers in Hyderabad, Bansilalpet Road Secunderabad, HT LT line materials Telangana"
        canonical="/about"
        ogImage={COMPANY_INFO.contact.visitingCardImage}
        structuredData={[
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' }
          ]),
          getLocalBusinessSchema()
        ]}
      />
      
      {/* Company profile hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2fc] via-[#f1f6fd] to-white pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12 border-b border-blue-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between gap-3 pb-3 mb-4 sm:mb-6 border-b border-blue-200/60">
            <div className="hidden sm:block">
              <Breadcrumb items={[{ label: 'About Us' }]} />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
              <Link
                to="/"
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white hover:bg-blue-50/80 active:bg-blue-100 text-slate-800 hover:text-blue-700 text-xs sm:text-[13px] font-bold border border-slate-200/90 hover:border-blue-400 shadow-2xs hover:shadow-xs transition-all duration-200 shrink-0"
                title="Return to Home Page"
              >
                <ArrowLeft size={13} className="text-blue-600 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back to Home</span>
              </Link>

              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-700 bg-white px-2 sm:px-2.5 py-1.5 rounded-xl border border-blue-200 shadow-2xs shrink-0 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Secunderabad Base</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-blue-200 shadow-2xs text-[10px] sm:text-xs font-bold text-slate-800 max-w-full overflow-hidden">
                <span className="text-blue-700 uppercase tracking-wider whitespace-nowrap">Enterprise Profile</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-emerald-700 font-bold whitespace-nowrap">IS / IEC Verified</span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-slate-900 font-heading leading-tight">
                  About Pavan Sai Power Lines
                </h1>
                <p className="text-xs sm:text-sm lg:text-[15px] font-bold text-blue-700 mt-1 sm:mt-1.5 leading-snug">
                  Dedicated Supply Partner for Electrical Contractors &amp; Utilities
                </p>
              </div>

              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal">
                Headquartered at Bansilalpet Road, Secunderabad (Telangana), <strong>Pavan Sai Power Lines (PSPL)</strong> is an established supplier and wholesale stockist of high-tension overhead line hardware, polymer &amp; porcelain insulators, gang-operated AB switches, ACSR conductors, earthing equipment, and galvanized transmission towers conforming to Indian Standard (IS) and state DISCOM specifications.
              </p>

              {/* Key metrics */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-1">
                
                <div className="p-2 sm:p-3 rounded-xl bg-white border border-blue-200 shadow-2xs flex flex-col justify-between text-center min-w-0">
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-700 block leading-tight">
                    Voltage
                  </span>
                  <strong className="text-xs sm:text-base font-black text-slate-900 block font-heading my-0.5 whitespace-nowrap">
                    11kV–400kV
                  </strong>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium block leading-tight">
                    HT / LT Grid
                  </span>
                </div>

                <div className="p-2 sm:p-3 rounded-xl bg-white border border-indigo-200 shadow-2xs flex flex-col justify-between text-center min-w-0">
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-indigo-700 block leading-tight">
                    Portfolio
                  </span>
                  <strong className="text-xs sm:text-base font-black text-slate-900 block font-heading my-0.5 whitespace-nowrap">
                    7 Divisions
                  </strong>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium block leading-tight">
                    BOQ Stock
                  </span>
                </div>

                <div className="p-2 sm:p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs flex flex-col justify-between text-center min-w-0">
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-emerald-700 block leading-tight">
                    Standards
                  </span>
                  <strong className="text-xs sm:text-base font-black text-slate-900 block font-heading my-0.5 whitespace-nowrap">
                    IS &bull; IEC
                  </strong>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium block leading-tight">
                    DISCOM Spec
                  </span>
                </div>

              </div>

              {/* Registered Supply Base Card - Full Address Display without Ellipsis */}
              <div className="p-2.5 sm:p-3.5 bg-gradient-to-r from-blue-50/80 via-white to-white rounded-xl border border-blue-200 text-xs sm:text-sm text-slate-700 flex items-center justify-between gap-2.5 shadow-2xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
                    <MapPin size={15} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-800 text-[11px] sm:text-xs leading-snug">
                      <strong className="text-slate-900">Office:</strong> 6-6-269/159, Bansilalpet Road, Secunderabad - 500003
                    </p>
                  </div>
                </div>

                <a
                  href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-blue-700 hover:text-blue-900 bg-white px-2.5 py-1.5 rounded-lg border border-blue-200 shadow-2xs hover:bg-blue-50 transition shrink-0 whitespace-nowrap"
                >
                  <span>Maps</span>
                  <ArrowRight size={12} />
                </a>
              </div>

            </div>

            {/* Right Column: Official Visiting Card Showcase (Enlarged & Prominent) */}
            <div className="lg:col-span-6">
              <div className="group rounded-2xl overflow-hidden border-2 border-blue-200/90 hover:border-blue-500/80 shadow-xl bg-white p-4 sm:p-5 space-y-3.5 transition-all duration-300">
                
                {/* Premium Top Bar */}
                <div className="flex items-center justify-between text-xs sm:text-sm pb-2.5 border-b border-blue-100">
                  <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck size={18} className="text-blue-600 shrink-0" />
                    <span className="text-xs sm:text-sm">Official Visiting Card</span>
                  </span>
                  <span className="text-[11px] sm:text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                    Verified Stockist
                  </span>
                </div>

                {/* Click-to-Zoom Visiting Card Container with Clean Card Surface (No Black Bars) */}
                <div 
                  onClick={() => setIsCardZoomOpen(true)}
                  className="rounded-xl overflow-hidden border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-2 sm:p-2.5 shadow-xs relative cursor-pointer group/card"
                  title="Click to zoom and view official visiting card in full resolution"
                >
                  <img
                    src="/images/pspl-visiting-card.jpg"
                    alt="Pavan Sai Power Lines Official Visiting Card - V. Nagamalleswara Rao, Secunderabad, Telangana"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto aspect-[1024/570] object-contain rounded-lg shadow-2xs group-hover/card:scale-102 transition-transform duration-300"
                  />

                  {/* Clean Hover Zoom Overlay */}
                  <div className="absolute inset-0 bg-slate-900/35 backdrop-blur-[2px] opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-900 shadow-lg border border-slate-200">
                      <Maximize2 size={15} className="text-blue-600" />
                      <span>Click to Enlarge Card</span>
                    </span>
                  </div>
                </div>

                {/* Contact Footer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-slate-600 pt-1.5 border-t border-slate-100">
                  <span className="text-xs sm:text-sm">
                    Proprietor: <strong className="text-slate-900 font-bold">{COMPANY_INFO.contact.representativeName}</strong>
                  </span>
                  <a 
                    href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} 
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold hover:underline text-xs sm:text-sm"
                  >
                    <PhoneCall size={14} className="text-blue-600 shrink-0" />
                    <span>{COMPANY_INFO.contact.primaryPhone}</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Products and Supply Capabilities */}
      <section className="bg-slate-50 py-10 sm:py-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-0.5">
              Our 7 Core Product Divisions
            </h2>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Division 1 */}
            <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border border-blue-200 flex items-center justify-center shadow-xs group-hover:scale-108 transition-all">
                  <Zap size={18} className="fill-current" />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">HT/LT Overhead Line Materials</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pin insulators, disc insulators, PG clamps, stay sets, hardware fittings, and hot-dip galvanized cross arms.
              </p>
            </div>

            {/* Division 2 */}
            <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white border border-indigo-200 flex items-center justify-center shadow-xs group-hover:scale-108 transition-all">
                  <Cpu size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">Transformer Spares</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                HT/LT bushings, silica gel breathers, cork & nitrile gaskets (RC70C), explosion vents, and oil level indicators.
              </p>
            </div>

            {/* Division 3 */}
            <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white border border-amber-200 flex items-center justify-center shadow-xs group-hover:scale-108 transition-all">
                  <ToggleRight size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">AB Switches</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                11kV & 33kV outdoor gang-operated triple pole Air Break switches, Horn Gap fuse units, and replacement contacts.
              </p>
            </div>

            {/* Division 4 */}
            <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white border border-sky-200 flex items-center justify-center shadow-xs group-hover:scale-108 transition-all">
                  <Activity size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">AAAC & ACSR Conductors</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weasel, Rabbit, Dog, Panther ACSR conductors and high tensile AAAC conductors conforming to IS 398.
              </p>
            </div>

            {/* Division 5 */}
            <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white border border-emerald-200 flex items-center justify-center shadow-xs group-hover:scale-108 transition-all">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">Earthing Materials</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Copper bonded electrodes, perforated GI earthing pipes, galvanized earth flats, and earth enhancement compounds.
              </p>
            </div>

            {/* Division 6 */}
            <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white border border-rose-200 flex items-center justify-center shadow-xs group-hover:scale-108 transition-all">
                  <Sliders size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">Industrial Electricals</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                LT distribution feeder boxes, heavy-duty brass cable glands, copper crimping lugs, HRC fuses, and busbar supports.
              </p>
            </div>

            {/* Division 7 */}
            <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="flex items-center gap-2.5 mb-2.5 pt-0.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-800 group-hover:text-white border border-slate-300 flex items-center justify-center shadow-xs group-hover:scale-108 transition-all">
                  <Maximize size={18} />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">All MS & GI Towers</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lattice transmission towers, substation gantry structures, foundation stubs, hot-dip galvanized cleat plates, and step bolts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Mission & Vision (Unified Enterprise Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          
          <div className="group relative bg-white hover:bg-slate-50/50 p-6 sm:p-8 rounded-2xl border-2 border-slate-200/90 hover:border-blue-600 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border border-blue-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-108 transition-all">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To supply electrical contractors, power utilities, and industrial clients with tested, durable, and standard-compliant transmission and distribution materials that ensure electrical safety and long service life.
            </p>
          </div>

          <div className="group relative bg-white hover:bg-slate-50/50 p-6 sm:p-8 rounded-2xl border-2 border-slate-200/90 hover:border-blue-600 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border border-blue-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-108 transition-all">
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
