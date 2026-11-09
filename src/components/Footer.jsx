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
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 sm:pb-10 border-b border-blue-900/60">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/25 ring-1 ring-blue-400/30">
                <Zap size={18} className="fill-amber-400 text-amber-400" />
              </div>
              <span className="font-extrabold text-lg text-white font-heading tracking-tight whitespace-nowrap">
                PAVAN SAI POWER LINES
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
                    to={`/category/${cat.id}`}
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
              <p><strong className="text-slate-300">Desk:</strong> +91 97004 49684</p>
              <p><strong className="text-slate-300">Email:</strong> pavansaipowerlines@gmail.com</p>
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

          {/* Developer Credit - Professional, Sleek, Compact & LinkedIn Linked */}
          <a
            href="https://www.linkedin.com/in/pusala-siddhartha-a5b042394/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-400/80 text-[10px] sm:text-[11px] text-slate-400 transition-all duration-200 group shadow-2xs"
            title="Connect with Pusala Siddhartha on LinkedIn (opens in new tab)"
          >
            <svg 
              className="w-3 h-3 text-[#0a66c2] fill-current group-hover:scale-110 transition-transform shrink-0" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span className="text-slate-400 font-normal">Developed by</span>
            <span className="font-semibold text-sky-400 group-hover:text-sky-300 transition-colors">
              Pusala Siddhartha
            </span>
            <ExternalLink size={10} className="text-slate-500 group-hover:text-sky-300 transition-colors shrink-0 ml-0.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
