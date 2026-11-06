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
    <div className="space-y-8 sm:space-y-14 pb-14">
      
      {/* 1. Clean Page Header */}
      <section className="bg-gradient-to-b from-blue-50/60 to-white py-8 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          
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
                <strong className="text-slate-900 block">Secunderabad Supply Hub</strong>
                Strategically positioned in Telangana's electrical trading zone with quick road transport access across Telangana and Andhra Pradesh.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white p-2">
              <img
                src="/images/products/psc-pole-installation.jpg"
                alt="Overhead Power Distribution PSC Pole Installation with Cross Arms and Insulators"
                className="w-full h-56 sm:h-72 object-cover rounded-lg"
              />
              <div className="p-2 sm:p-2.5 bg-white text-[11px] sm:text-xs text-slate-600 flex items-center justify-between">
                <span className="font-semibold text-slate-900">PSPL Distribution Hardware</span>
                <span className="text-blue-600 font-medium">Secunderabad</span>
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
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Zap size={18} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">HT/LT Overhead Line Materials</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pin insulators, disc insulators, PG clamps, stay sets, hardware fittings, and hot-dip galvanized cross arms.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Cpu size={18} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Transformer Spares</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                HT/LT bushings, silica gel breathers, cork & nitrile gaskets (RC70C), explosion vents, and oil level indicators.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ToggleRight size={18} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">AB Switches</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                11kV & 33kV outdoor gang-operated triple pole Air Break switches, Horn Gap fuse units, and replacement contacts.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Activity size={18} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">AAAC & ACSR Conductors</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weasel, Rabbit, Dog, Panther ACSR conductors and high tensile AAAC conductors conforming to IS 398.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Earthing Materials</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Copper bonded electrodes, perforated GI earthing pipes, galvanized earth flats, and earth enhancement compounds.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Sliders size={18} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Industrial Electricals & Towers</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                LT distribution feeder boxes, cable glands, lugs, HRC fuses, and hot-dip galvanized transmission lattice towers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Mission & Vision (Clean Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Target size={22} />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To supply electrical contractors, power utilities, and industrial clients with tested, durable, and standard-compliant transmission and distribution materials that ensure electrical safety and long service life.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Eye size={22} />
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
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            Have an Inquiry or Need Stock Availability?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Contact our commercial sales desk in Secunderabad directly for price estimates and product information.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-xs transition"
            >
              Request Quote
            </button>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition"
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

    </div>
  );
}
