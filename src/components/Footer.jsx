import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <Zap size={20} />
              </div>
              <span className="font-extrabold text-xl text-white font-heading tracking-tight">
                PAVAN SAI <span className="text-sky-400 text-sm font-semibold">PSPL</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Electrical power transmission and distribution materials supplier based in Secunderabad, Telangana. Catering to state utilities, turnkey contractors, transformer manufacturers, and industrial substations.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-700/60 text-xs text-slate-300">
                <ShieldCheck size={15} className="text-sky-400" />
                <span>Verified Industrial Supplier Hub</span>
              </div>
            </div>
          </div>

          {/* Column 2: Business Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-sky-500 pl-2.5">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {COMPANY_INFO.categories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.id}`}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200"
                  >
                    <ChevronRight size={12} className="text-sky-500" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-sky-500 pl-2.5">
              Navigation & Info
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-sky-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-sky-500" />
                  <span>About PSPL</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-sky-500" />
                  <span>All Products & Specs</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={12} className="text-sky-500" />
                  <span>Contact Sales Desk</span>
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <h5 className="text-[11px] font-semibold uppercase text-slate-400 mb-2">
                Business Hours
              </h5>
              <div className="space-y-1 text-xs text-slate-400">
                <p><span className="text-slate-300 font-medium">Mon - Sat:</span> 9:30 AM - 7:30 PM</p>
                <p><span className="text-slate-300 font-medium">Sunday:</span> Emergency WhatsApp</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-sky-500 pl-2.5">
              Secunderabad Office
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">Pavan Sai Power Lines</strong>
                  {COMPANY_INFO.location.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-sky-400 shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                  className="hover:text-white transition"
                >
                  {COMPANY_INFO.contact.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-sky-400 shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                  className="hover:text-white transition break-all"
                >
                  {COMPANY_INFO.contact.primaryEmail}
                </a>
              </div>

              <div className="pt-2">
                <a 
                  href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} <strong className="text-slate-300">Pavan Sai Power Lines (PSPL)</strong>. All rights reserved. Secunderabad, Telangana.
          </p>
          <p className="text-[11px] text-slate-400 text-center md:text-right">
            Corporate Electrical Transmission & Distribution Materials Supplier &bull; Display-Only Showcase
          </p>
        </div>

      </div>
    </footer>
  );
}
