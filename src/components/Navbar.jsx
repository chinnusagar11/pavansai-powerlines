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
  Clock, 
  Send,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import EnquiryModal from './EnquiryModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setProductsDropdown(false);
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
    `flex items-center justify-between text-sm font-semibold py-3 px-4 rounded-xl transition ${
      isActive 
        ? 'bg-white text-blue-700 font-bold border border-blue-200 shadow-2xs' 
        : 'text-slate-700 hover:bg-white/60 hover:text-blue-700'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#edf4fc] transition-all duration-200">
        
        {/* Top Corporate Line */}
        <div className="h-1 w-full bg-blue-600"></div>

        {/* 1. Desktop Top Information Bar - Plain & Neat Light Blue Tone */}
        <div className="bg-[#e2eefa] border-b border-blue-200/70 text-slate-700 text-[11px] sm:text-xs py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Left Location & Credentials with Clean White Cards */}
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
                <Clock size={12} className="text-blue-600 shrink-0" />
                <span>Mon - Sat: 9:30 AM - 7:30 PM IST</span>
              </span>
            </div>

            {/* Right Contact Details with Clean White Cards */}
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

        {/* 2. Main Navigation Bar - Plain & Neat Light Corporate Header */}
        <nav className={`w-full transition-all duration-200 bg-[#edf4fc] border-b border-blue-200/80 ${
          scrolled 
            ? 'py-2 sm:py-2.5 shadow-md bg-[#edf4fc]/98' 
            : 'py-2.5 sm:py-3.5 shadow-2xs'
        }`}>
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo & Full Company Name - Strictly One Line */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs border border-blue-500/40 group-hover:scale-105 transition-all shrink-0">
                <Zap className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap min-w-0">
                <span className="font-black text-sm sm:text-lg md:text-xl lg:text-[21px] xl:text-[23px] tracking-tight text-slate-900 font-heading whitespace-nowrap uppercase">
                  PAVAN SAI <span className="text-blue-600 font-black">POWER LINES</span>
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
                        to={`/products?category=${cat.id}`}
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
                className="md:hidden p-2 rounded-xl text-slate-700 hover:text-blue-700 bg-white/80 hover:bg-white active:bg-blue-100/60 border border-blue-200/90 shadow-2xs focus:outline-none transition-all flex items-center justify-center shrink-0"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={22} className="text-slate-800" /> : <Menu size={22} className="text-slate-800" />}
              </button>
            </div>

          </div>

          {/* Mobile Drawer Overlay */}
          {isOpen && (
            <div className="md:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-slate-900/40 backdrop-blur-xs z-50 flex flex-col justify-between animate-fade-in">
              <div className="bg-[#edf4fc] border-b border-blue-200 px-4 pt-3 pb-8 space-y-1.5 shadow-2xl max-h-[82vh] overflow-y-auto pb-safe">
                <NavLink to="/" className={mobileNavLinkClass}>
                  <span>Home</span>
                  <span className="text-xs text-blue-600">&rarr;</span>
                </NavLink>
                <NavLink to="/about" className={mobileNavLinkClass}>
                  <span>About Us</span>
                  <span className="text-xs text-blue-600">&rarr;</span>
                </NavLink>
                <NavLink to="/products" className={mobileNavLinkClass}>
                  <span>All Products & Materials</span>
                  <span className="text-xs text-blue-600">&rarr;</span>
                </NavLink>
                
                {/* Mobile Category Sublinks */}
                <div className="pl-3 py-1 space-y-1 border-l-2 border-blue-200 my-1 ml-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                    Product Divisions:
                  </div>
                  {COMPANY_INFO.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products?category=${cat.id}`}
                      className="block text-xs text-slate-700 hover:text-blue-600 py-1.5 px-2 font-medium rounded hover:bg-white/60"
                    >
                      &bull; {cat.name}
                    </Link>
                  ))}
                </div>

                <NavLink to="/contact" className={mobileNavLinkClass}>
                  <span>Contact Sales Desk</span>
                  <span className="text-xs text-blue-600">&rarr;</span>
                </NavLink>

                {/* Mobile Quick Action Buttons */}
                <div className="pt-4 border-t border-blue-200 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsQuoteModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-sm shadow-xs transition"
                  >
                    <Send size={15} />
                    <span>Request Material Quotation</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 bg-white hover:bg-blue-600 text-slate-800 hover:text-white py-2.5 rounded-xl text-xs font-bold border border-blue-200 transition"
                  >
                    <Phone size={14} className="text-blue-600 fill-blue-600" />
                    <span>Call Sales Desk: {COMPANY_INFO.contact.primaryPhone}</span>
                  </a>
                </div>
              </div>

              {/* Click outside to close */}
              <div 
                className="flex-1"
                onClick={() => setIsOpen(false)}
              ></div>
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
