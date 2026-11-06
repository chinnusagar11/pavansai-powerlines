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
  Send 
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
    `text-xs sm:text-sm font-bold transition-all duration-200 py-2 px-3.5 rounded-xl flex items-center gap-1.5 ${
      isActive 
        ? 'text-white bg-blue-600 shadow-md shadow-blue-500/30' 
        : 'text-slate-200 hover:text-white hover:bg-white/10'
    }`;

  const mobileNavLinkClass = ({ isActive }) => 
    `flex items-center justify-between text-sm font-semibold py-3 px-4 rounded-xl transition ${
      isActive 
        ? 'bg-blue-600 text-white font-bold' 
        : 'text-slate-200 hover:bg-slate-800 hover:text-white'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-lg">
        
        {/* Top Electric Power Gradient Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-amber-400"></div>

        {/* Desktop Top Contact Bar (High-End Corporate Dark Accent Strip) */}
        <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin size={13} className="text-amber-400" />
                <span>{COMPANY_INFO.location.city}, {COMPANY_INFO.location.state}, India</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1"></span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock size={13} className="text-sky-400" />
                <span>Mon - Sat: 9:30 AM - 7:30 PM IST</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} 
                className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-300 font-bold transition"
              >
                <Phone size={13} className="text-emerald-400" />
                <span>{COMPANY_INFO.contact.primaryPhone}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} 
                className="flex items-center gap-1.5 text-slate-200 hover:text-sky-300 transition"
              >
                <Mail size={13} className="text-sky-400" />
                <span>{COMPANY_INFO.contact.primaryEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar - Deep Industrial Executive Navy */}
        <nav className={`w-full transition-all duration-200 bg-slate-900 border-b border-slate-800 ${
          scrolled 
            ? 'py-2 sm:py-2.5 bg-slate-950/95 backdrop-blur-md shadow-xl' 
            : 'py-2.5 sm:py-3.5'
        }`}>
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo & Full Company Name in Big Text - Strictly One Line */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/20 group-hover:from-blue-600 group-hover:to-blue-800 transition-all shrink-0">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white" />
              </div>

              <div className="flex items-center whitespace-nowrap min-w-0">
                <span className="font-black text-sm sm:text-lg md:text-xl lg:text-[23px] xl:text-[25px] tracking-tight text-white font-heading whitespace-nowrap uppercase">
                  PAVAN SAI <span className="text-sky-400">POWER LINES</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
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
                  <ChevronDown size={14} className={`transition-transform duration-200 ${productsDropdown ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
                </NavLink>

                {productsDropdown && (
                  <div className="absolute top-full left-0 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl py-2 mt-1 z-50 animate-fade-in backdrop-blur-md">
                    <div className="px-4 py-2 border-b border-slate-800 text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                      Product Categories
                    </div>
                    {COMPANY_INFO.categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/products?category=${cat.id}`}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-slate-800 hover:text-white transition font-medium"
                      >
                        {cat.name}
                      </Link>
                    ))}
                    <div className="border-t border-slate-800 mt-1 pt-1">
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-xs font-bold text-sky-400 hover:bg-slate-800 transition"
                      >
                        View All Categories &rarr;
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
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-extrabold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all active:scale-97 shrink-0 border border-sky-300/30"
              >
                <Send size={14} className="text-white" />
                <span className="whitespace-nowrap">Get a Quote</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none active:bg-white/15"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>

          {/* Full Mobile Drawer Overlay */}
          {isOpen && (
            <div className="md:hidden fixed inset-x-0 top-[57px] bottom-0 bg-slate-950/80 backdrop-blur-md z-50 flex flex-col justify-between">
              <div className="bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl max-h-[85vh] overflow-y-auto text-white">
                <NavLink to="/" className={mobileNavLinkClass}>
                  <span>Home</span>
                  <span className="text-xs text-slate-400">&rarr;</span>
                </NavLink>
                <NavLink to="/about" className={mobileNavLinkClass}>
                  <span>About Us</span>
                  <span className="text-xs text-slate-400">&rarr;</span>
                </NavLink>
                <NavLink to="/products" className={mobileNavLinkClass}>
                  <span>All Products & Materials</span>
                  <span className="text-xs text-slate-400">&rarr;</span>
                </NavLink>
                
                {/* Mobile Category Sublinks */}
                <div className="pl-3 py-1 space-y-1 border-l-2 border-blue-500 my-1 ml-2">
                  <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider px-2 py-1">
                    Quick Categories:
                  </div>
                  {COMPANY_INFO.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products?category=${cat.id}`}
                      className="block text-xs text-slate-300 hover:text-white py-1.5 px-2 font-medium rounded hover:bg-slate-800"
                    >
                      &bull; {cat.name}
                    </Link>
                  ))}
                </div>

                <NavLink to="/contact" className={mobileNavLinkClass}>
                  <span>Contact Sales Desk</span>
                  <span className="text-xs text-slate-400">&rarr;</span>
                </NavLink>

                {/* Mobile Quick Action Buttons */}
                <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsQuoteModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white py-3 rounded-xl font-bold text-sm shadow-md"
                  >
                    <Send size={15} />
                    <span>Request Material Quotation</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-200 active:scale-98 transition"
                  >
                    <Phone size={14} className="text-blue-600" />
                    <span>Call Sales: {COMPANY_INFO.contact.primaryPhone}</span>
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
