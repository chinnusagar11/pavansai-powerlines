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
        ? 'text-blue-700 bg-blue-50/90 font-bold border border-blue-200/80 shadow-2xs' 
        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
    }`;

  const mobileNavLinkClass = ({ isActive }) => 
    `flex items-center justify-between text-sm font-semibold py-3 px-4 rounded-xl transition ${
      isActive 
        ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200 shadow-2xs' 
        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white transition-all duration-200">
        
        {/* Subtle Top Corporate Blue Brand Line */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700"></div>

        {/* 1. Desktop Top Information & Contact Bar - Crisp Executive Styling */}
        <div className="bg-slate-50 border-b border-slate-200/80 text-slate-600 text-[11px] sm:text-xs py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Left Location & Credentials */}
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <MapPin size={13} className="text-blue-600 shrink-0" />
                <span>{COMPANY_INFO.location.city}, {COMPANY_INFO.location.state}, India</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1 ring-2 ring-emerald-200"></span>
              </span>

              <span className="text-slate-300">|</span>

              <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                <ShieldCheck size={13} className="text-emerald-600 shrink-0" />
                <span>IS / IEC / REC Standard Stockist</span>
              </span>

              <span className="text-slate-300">|</span>

              <span className="flex items-center gap-1.5 text-slate-500 font-normal">
                <Clock size={13} className="text-blue-600 shrink-0" />
                <span>Mon - Sat: 9:30 AM - 7:30 PM IST</span>
              </span>
            </div>

            {/* Right Contact Details */}
            <div className="flex items-center gap-5">
              <a 
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} 
                className="inline-flex items-center gap-1.5 text-slate-800 hover:text-blue-600 font-bold transition-colors py-0.5"
                title="Call PSPL Sales Desk"
              >
                <Phone size={12} className="text-blue-600 fill-blue-600" />
                <span>{COMPANY_INFO.contact.primaryPhone}</span>
              </a>

              <span className="text-slate-300">|</span>

              <a 
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} 
                className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors font-medium py-0.5"
                title="Email PSPL Commercial Desk"
              >
                <Mail size={13} className="text-blue-600" />
                <span>{COMPANY_INFO.contact.primaryEmail}</span>
              </a>
            </div>

          </div>
        </div>

        {/* 2. Main Navigation Bar - Crisp White Enterprise Header */}
        <nav className={`w-full transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-slate-200/90 ${
          scrolled 
            ? 'py-2 sm:py-2.5 shadow-md bg-white/98' 
            : 'py-2.5 sm:py-3.5 shadow-2xs'
        }`}>
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo & Full Company Name - Strictly One Line */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-sm border border-blue-600/30 group-hover:scale-105 transition-all shrink-0">
                <Zap className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap min-w-0">
                <span className="font-black text-sm sm:text-lg md:text-xl lg:text-[21px] xl:text-[23px] tracking-tight text-slate-900 font-heading whitespace-nowrap uppercase">
                  PAVAN SAI <span className="text-blue-600 font-black">POWER LINES</span>
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200/90 shrink-0">
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
                  <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 mt-1 z-50 animate-fade-in">
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
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md active:scale-97 transition-all shrink-0"
              >
                <Send size={14} className="text-white" />
                <span className="whitespace-nowrap">Request Quote</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none active:bg-slate-200 transition"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>

          {/* Mobile Drawer Overlay */}
          {isOpen && (
            <div className="md:hidden fixed inset-x-0 top-[57px] bottom-0 bg-slate-900/40 backdrop-blur-xs z-50 flex flex-col justify-between animate-fade-in">
              <div className="bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl max-h-[85vh] overflow-y-auto">
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
                      className="block text-xs text-slate-700 hover:text-blue-600 py-1.5 px-2 font-medium rounded hover:bg-slate-50"
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
                <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsQuoteModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3 rounded-xl font-bold text-sm shadow-sm transition"
                  >
                    <Send size={15} />
                    <span>Request Material Quotation</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl text-xs font-bold border border-slate-200 transition"
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
