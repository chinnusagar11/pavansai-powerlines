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
  Layers, 
  Zap, 
  FileCheck, 
  ArrowRight,
  Cpu,
  Sliders,
  Maximize,
  Activity,
  ToggleRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryModal from '../components/EnquiryModal';

export default function About() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      
      {/* 1. Page Header */}
      <section className="bg-navy-950 text-white py-14 md:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <Breadcrumb items={[{ label: 'About Us' }]} />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              Corporate Profile
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              About Pavan Sai Power Lines
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Electrical power transmission and distribution materials supplier established in Secunderabad, Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction & Business Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              Business Overview
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 font-heading leading-tight">
              A Dedicated Electrical Material Supplier Serving Power Sector Needs
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Pavan Sai Power Lines (PSPL)</strong> operates from the key commercial distribution hub of Secunderabad, Telangana. The enterprise specializes in the trade, stocking, and supply of certified electrical hardware and structural materials used across overhead transmission networks, electrical substations, and industrial installations.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In the electrical infrastructure sector, material failure is not an option. From high tension insulators that maintain line integrity during lightning strikes to high-conductivity ACSR and AAAC conductors that deliver uninterrupted power, PSPL focuses strictly on verified, IS-compliant materials that contractors and engineers can deploy with complete confidence.
            </p>

            <div className="p-4 bg-slate-100 rounded-xl border border-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-navy-950 block">Strategic Secunderabad Presence</strong>
                  Situated in Telangana's primary industrial trading belt with direct logistics access to state-wide electricity board projects, private turnkey EPC sites, and neighboring industrial corridors.
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80"
                alt="Power Transmission Grid Lines"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 p-4 bg-navy-900 text-white rounded-xl flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">Pavan Sai Power Lines (PSPL)</span>
              <span className="text-sky-400">Secunderabad, Telangana</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Products and Supply Capabilities */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
              Supply Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading">
              Our 7 Core Material Divisions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Directly aligned with company distribution specializations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Zap size={22} />
                </div>
                <h3 className="font-bold text-navy-950 text-base">HT/LT Overhead Line Materials</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pin insulators, disc insulators (70kN/120kN), PG clamps, stay wire sets, hardware fittings, and hot-dip galvanized cross arms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Cpu size={22} />
                </div>
                <h3 className="font-bold text-navy-950 text-base">Transformer Spares</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                HT/LT porcelain bushings, crystal silica gel breathers, cork & nitrile gaskets (RC70C), explosion vents, and oil level indicators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <ToggleRight size={22} />
                </div>
                <h3 className="font-bold text-navy-950 text-base">AB Switches</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                11kV & 33kV outdoor gang-operated triple pole Air Break switches, Horn Gap fuse units, replacement copper jaws, and operating linkage rods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Activity size={22} />
                </div>
                <h3 className="font-bold text-navy-950 text-base">AAAC & ACSR Conductors</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full drum supplies of Weasel, Rabbit, Dog, Panther ACSR conductors and high tensile AAAC conductors conforming to IS 398 standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="font-bold text-navy-950 text-base">Earthing Materials</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                UL-standard copper bonded earth electrodes, perforated GI earthing pipes, hot-dip galvanized earth flats, and earth enhancement compounds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Sliders size={22} />
                </div>
                <h3 className="font-bold text-navy-950 text-base">Industrial Electricals & Towers</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                LT distribution feeder boxes, cable glands, bimetallic crimping lugs, HRC fuses, and hot-dip galvanized lattice transmission towers & AIMS structures.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm group"
            >
              <span>Explore Full Technical Product Specifications</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-white">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              To supply electrical contractors, power utilities, and industrial clients with tested, durable, and standard-compliant transmission and distribution materials. We aim to ensure that every insulator, conductor, switch, and earthing component supplied from our Secunderabad facility upholds the highest degree of electrical safety and operational longevity.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-900 to-navy-900 text-white p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center mb-6">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-white">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              To be recognized as the most dependable and responsive supply partner for electrical infrastructure projects in Telangana and across South India, distinguished by straightforward commercial dealings, verified product quality, and uninterrupted inventory availability.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Why Choose Pavan Sai Power Lines? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
            The PSPL Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 font-heading">
            Why Choose Pavan Sai Power Lines?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            A reliable supply chain focused on technical integrity and transparent commercial dealings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 size={22} />
            </div>
            <h4 className="font-bold text-base text-navy-950 mb-2">Verified Specifications</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every item in our product line conforms to Indian Standard (IS) specifications, ensuring compatibility with state electrical boards and EPC contract requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 size={22} />
            </div>
            <h4 className="font-bold text-base text-navy-950 mb-2">Consolidated Bill of Materials</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Source all high-voltage fittings, earthing electrodes, transformer accessories, and conductors under a single consolidated purchase order.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 size={22} />
            </div>
            <h4 className="font-bold text-base text-navy-950 mb-2">Responsive Support</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Direct access to our commercial desk for immediate price inquiries, proforma invoices, and dispatch schedules without bureaucratic delays.
            </p>
          </div>

        </div>

      </section>

      {/* 6. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Looking for Material Supply in Secunderabad?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Contact our sales desk directly with your product requirements, conductor drum lengths, or switch ratings.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition"
            >
              Request Price Quote
            </button>
            <Link
              to="/contact"
              className="bg-navy-800 hover:bg-navy-700 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-slate-700 transition"
            >
              Contact Sales Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Global Quote Modal */}
      <EnquiryModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

    </div>
  );
}
