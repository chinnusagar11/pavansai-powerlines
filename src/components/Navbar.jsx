import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Zap, 
  ChevronDown, 
  Send,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Home,
  Building2,
  Layers,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import EnquiryModal from './EnquiryModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setProductsDropdown(false);
    setIsDivisionsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) => 
    `text-xs sm:text-sm font-semibold transition-all duration-200 py-2 px-3.5 rounded-xl flex items-center gap-1.5 ${
      isActive 
        ? 'text-blue-700 bg-white font-bold border border-blue-200 shadow-2xs' 
        : 'text-slate-700 hover:text-blue-700 hover:bg-white/60'
    }`;

  const mobileNavLinkClass = ({ isActive }) => 
    `flex items-center justify-between text-xs sm:text-sm font-semibold py-2 px-3 rounded-xl transition-all ${
      isActive 
        ? 'bg-blue-50/90 text-blue-700 font-bold border border-blue-200 shadow-2xs' 
        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700 active:bg-blue-50'
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#edf4fc] transition-all duration-200 shadow-2xs">
        <div className="h-1 w-full bg-blue-600"></div>

        {/* Desktop top info bar */}
        <div className="bg-[#e2eefa] border-b border-blue-200/70 text-slate-700 text-[11px] sm:text-xs py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800 bg-white px-2.5 py-0.5 rounded-md border border-blue-200/70 shadow-2xs">
                <MapPin size={12} className="text-blue-600 shrink-0" />
                <span>{COMPANY_INFO.location.city}, {COMPANY_INFO.location.state}</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5 ring-2 ring-emerald-200"></span>
              </span>

              <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 bg-white px-2.5 py-0.5 rounded-md border border-emerald-200 shadow-2xs">
                <ShieldCheck size={12} className="text-emerald-600 shrink-0" />
                <span>IS / IEC / REC Standard Stockist</span>
              </span>

              <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-blue-200/70 shadow-2xs">
                <MapPin size={12} className="text-blue-600 shrink-0" />
                <span>Bansilalpet Road, Secunderabad - 500003</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a 
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} 
                className="inline-flex items-center gap-1.5 bg-white hover:bg-blue-600 text-blue-700 hover:text-white px-2.5 py-1 rounded-lg text-xs font-bold transition-all border border-blue-200 shadow-2xs"
                title="Call PSPL Sales Desk"
              >
                <Phone size={11} className="fill-current" />
                <span>{COMPANY_INFO.contact.primaryPhone}</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} 
                className="inline-flex items-center gap-1.5 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 px-2.5 py-1 rounded-lg text-xs font-medium transition-all border border-blue-200/70 shadow-2xs"
                title="Email PSPL Commercial Desk"
              >
                <Mail size={12} className="text-blue-600" />
                <span>{COMPANY_INFO.contact.primaryEmail}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Main navigation */}
        <nav className={`w-full transition-all duration-200 bg-[#edf4fc] border-b border-blue-200/80 py-2.5 sm:py-3 ${
          scrolled ? 'shadow-md' : 'shadow-2xs'
        }`}>
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
            
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs border border-blue-500/40 group-hover:scale-105 transition-all shrink-0">
                <Zap className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap min-w-0">
                <span className="font-black text-sm sm:text-lg md:text-xl lg:text-[21px] xl:text-[23px] tracking-tight text-blue-700 group-hover:text-blue-800 transition-colors font-heading whitespace-nowrap uppercase">
                  PAVAN SAI POWER LINES
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] font-black uppercase tracking-wider bg-white text-blue-700 px-2.5 py-0.5 rounded-md border border-blue-200 shadow-2xs shrink-0">
                  PSPL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsDropdown(true)}
                onMouseLeave={() => setProductsDropdown(false)}
              >
                <NavLink to="/products" className={navLinkClass}>
                  <span>Products</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${productsDropdown ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </NavLink>

                {productsDropdown && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-blue-200 rounded-2xl shadow-xl py-2 mt-1 z-50 animate-fade-in">
                    <div className="px-4 py-2 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      7 Core Business Divisions
                    </div>
                    {COMPANY_INFO.categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/category/${cat.id}`}
                        className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {cat.name}
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 mt-1 pt-1.5 px-4 pb-1">
                      <Link
                        to="/products"
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 transition inline-flex items-center gap-1"
                      >
                        <span>View All Products & Specifications</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>
            </div>

            {/* Quote Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-97 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all shrink-0 border border-blue-500"
              >
                <Send size={14} className="text-white" />
                <span className="whitespace-nowrap">Request Quote</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-xl text-slate-800 hover:text-blue-700 bg-white hover:bg-slate-50 active:bg-blue-50 border border-blue-200/90 shadow-2xs focus:outline-none transition-all flex items-center justify-center shrink-0"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={22} className="text-slate-900" /> : <Menu size={22} className="text-slate-900" />}
              </button>
            </div>

          </div>

          {/* Mobile navigation drawer */}
          {isOpen && (
            <div className="md:hidden">
              <div 
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 transition-opacity animate-fade-in"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />

              <div className="fixed top-14 sm:top-16 right-3 left-3 sm:left-auto sm:w-[340px] max-w-sm ml-auto z-50 bg-white rounded-2xl border border-blue-200 shadow-2xl p-3.5 animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
                
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                      <Zap size={14} className="text-amber-500 fill-amber-500" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-black text-slate-900 uppercase tracking-wider leading-none truncate">
                        Quick Navigation
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1 mt-0.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                        Bansilalpet Rd &bull; Secunderabad
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-blue-100 text-slate-700 hover:text-slate-900 flex items-center justify-center transition border border-slate-200 shadow-2xs shrink-0 ml-2"
                    aria-label="Close navigation menu"
                    title="Close Navigation Menu"
                  >
                    <X size={17} className="text-slate-800 stroke-[2.5]" />
                  </button>
                </div>

                <div className="space-y-1">
                  <NavLink to="/" className={mobileNavLinkClass}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                        <Home size={14} />
                      </div>
                      <span className="font-bold text-xs">Home</span>
                    </div>
                    <ChevronRight size={14} className="text-slate-400" />
                  </NavLink>

                  <NavLink to="/about" className={mobileNavLinkClass}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                        <Building2 size={14} />
                      </div>
                      <span className="font-bold text-xs">About Us</span>
                    </div>
                    <ChevronRight size={14} className="text-slate-400" />
                  </NavLink>

                  <div className="rounded-xl border border-transparent hover:border-slate-100 transition">
                    <div className="flex items-center justify-between gap-1">
                      <NavLink to="/products" className={`flex-1 ${mobileNavLinkClass}`}>
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                            <Layers size={14} />
                          </div>
                          <div>
                            <span className="font-bold text-xs block leading-tight">Products & Materials</span>
                            <span className="text-[10px] text-slate-500 font-medium">{PRODUCTS.length} Certified Items</span>
                          </div>
                        </div>
                      </NavLink>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDivisionsOpen(!isDivisionsOpen);
                        }}
                        className="px-2 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 active:bg-blue-100 text-slate-700 hover:text-blue-700 border border-slate-200 transition text-[10px] font-bold flex items-center gap-1 shrink-0"
                        title={isDivisionsOpen ? "Hide product divisions" : "Show 7 product divisions"}
                      >
                        <span>7 Divisions</span>
                        <ChevronDown 
                          size={12} 
                          className={`transition-transform duration-200 ${isDivisionsOpen ? 'rotate-180 text-blue-600' : 'text-slate-500'}`} 
                        />
                      </button>
                    </div>

                    {isDivisionsOpen && (
                      <div className="bg-slate-50/90 rounded-xl p-2 border border-slate-200 mt-1 mb-1 space-y-0.5 animate-fade-in">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 flex items-center justify-between">
                          <span>Product Divisions</span>
                          <span className="text-[9px] text-blue-600 font-bold bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">Direct Stock</span>
                        </div>
                        {COMPANY_INFO.categories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/category/${cat.id}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between text-xs text-slate-700 hover:text-blue-700 py-1.5 px-2 font-medium rounded-md hover:bg-white transition"
                          >
                            <span className="truncate">&bull; {cat.name}</span>
                            <ChevronRight size={12} className="text-slate-300" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <NavLink to="/contact" className={mobileNavLinkClass}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                        <PhoneCall size={14} />
                      </div>
                      <span className="font-bold text-xs">Contact Sales Desk</span>
                    </div>
                    <ChevronRight size={14} className="text-slate-400" />
                  </NavLink>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-2 mt-2 border-t border-slate-100 flex flex-col gap-1.5">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsQuoteModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white py-2.5 rounded-xl font-bold text-xs shadow-xs transition"
                  >
                    <Send size={13} />
                    <span>Request Material Quotation</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                    className="w-full flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-800 py-1.5 rounded-xl text-[11px] font-bold border border-slate-200 transition"
                  >
                    <Phone size={12} className="text-blue-600 fill-blue-600" />
                    <span>Call Sales Desk: {COMPANY_INFO.contact.primaryPhone}</span>
                  </a>
                </div>

              </div>
            </div>
          )}
        </nav>

      </header>

      {/* Global Quote Modal */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
