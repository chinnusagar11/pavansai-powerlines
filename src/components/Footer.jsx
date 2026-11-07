import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  ExternalLink,
  Code
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a192f] text-slate-300 pt-10 sm:pt-14 pb-24 md:pb-10 border-t-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 sm:pb-10 border-b border-blue-900/60">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/25 ring-1 ring-blue-400/30">
                <Zap size={18} className="fill-amber-400 text-amber-400" />
              </div>
              <span className="font-extrabold text-lg text-white font-heading tracking-tight whitespace-nowrap">
                PAVAN SAI <span className="text-sky-400 font-extrabold">POWER LINES</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Electrical power transmission and distribution materials supplier based in Secunderabad, Telangana. Supplying HT/LT lines, conductors, transformer spares, and towers.
            </p>

            <div className="pt-1 text-xs text-slate-400">
              <span className="inline-block px-2.5 py-1 bg-slate-800 text-blue-300 rounded-md font-medium border border-slate-700">
                Secunderabad &bull; Telangana &bull; India
              </span>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-blue-500 pl-2">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {COMPANY_INFO.categories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.id}`}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 py-0.5"
                  >
                    <ChevronRight size={12} className="text-blue-500 shrink-0" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-blue-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={12} className="text-blue-500 shrink-0" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={12} className="text-blue-500 shrink-0" />
                  <span>About PSPL</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={12} className="text-blue-500 shrink-0" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={12} className="text-blue-500 shrink-0" />
                  <span>Contact Sales Desk</span>
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-300">Hours:</strong> Mon - Sat: 9:30 AM - 7:30 PM</p>
              <p><strong className="text-slate-300">Sunday:</strong> Emergency via WhatsApp</p>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-blue-500 pl-2">
              Secunderabad Office
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">Pavan Sai Power Lines</strong>
                  <span className="text-sky-300 block font-semibold text-[11px]">Prop: {COMPANY_INFO.contact.representativeName}</span>
                  {COMPANY_INFO.location.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="hover:text-white transition py-0.5">
                  {COMPANY_INFO.contact.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="hover:text-white transition break-all py-0.5">
                  {COMPANY_INFO.contact.primaryEmail}
                </a>
              </div>

              <div className="pt-1">
                <a 
                  href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium py-1"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Developer Watermark */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center md:text-left">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} <strong className="text-white font-bold">Pavan Sai Power Lines (PSPL)</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              6-6-269/159, Bansilalpet Road, Secunderabad - 500003, Telangana (T.G.), India
            </p>
          </div>

          {/* Developer Watermark Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border-2 border-blue-500/40 text-xs shadow-lg shadow-blue-950/50 backdrop-blur-sm group hover:border-sky-400 transition-all">
            <Code size={14} className="text-sky-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-400 font-medium">Developed by</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300 font-black tracking-wider uppercase">
              PUSALA SIDDHARTHA
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
