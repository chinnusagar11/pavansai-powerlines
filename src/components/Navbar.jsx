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

  // Handle sticky navbar elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) => 
    `text-sm font-semibold transition-colors duration-200 py-1.5 px-3 rounded-lg flex items-center gap-1 ${
      isActive 
        ? 'text-sky-500 bg-navy-950/40 font-bold' 
        : 'text-slate-200 hover:text-white hover:bg-white/10'
    }`;

  const mobileNavLinkClass = ({ isActive }) => 
    `block text-base font-medium py-3 px-4 rounded-xl transition ${
      isActive 
        ? 'bg-sky-500 text-white font-bold' 
        : 'text-slate-200 hover:bg-navy-800 hover:text-white'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full">
        
        {/* Top Information Bar */}
        <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800/80 hidden lg:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin size={14} className="text-sky-400" />
                <span>{COMPANY_INFO.location.city}, {COMPANY_INFO.location.state}, India</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock size={14} className="text-sky-400" />
                <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} 
                className="flex items-center gap-1.5 hover:text-sky-400 transition"
              >
                <Phone size={14} className="text-sky-400" />
                <span className="font-medium">{COMPANY_INFO.contact.primaryPhone}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} 
                className="flex items-center gap-1.5 hover:text-sky-400 transition"
              >
                <Mail size={14} className="text-sky-400" />
                <span>{COMPANY_INFO.contact.primaryEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Header / Navigation */}
        <nav className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-navy-900/95 backdrop-blur-md shadow-xl py-2.5 border-b border-slate-700/50' 
            : 'bg-navy-900 py-3.5 border-b border-navy-800'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo & Company Name */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-navy-950 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-navy-900 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-sky-400 fill-sky-400/20 group-hover:text-yellow-400 transition-colors" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl md:text-2xl text-white tracking-tight font-heading">
                    PAVAN SAI
                  </span>
                  <span className="text-xs px-1.5 py-0.5 rounded font-bold bg-sky-500/20 text-sky-400 border border-sky-400/30">
                    PSPL
                  </span>
                </div>
                <div className="text-[11px] font-medium text-slate-300 tracking-wider uppercase">
                  Power Lines &bull; Secunderabad
                </div>
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

              {/* Products dropdown menu */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsDropdown(true)}
                onMouseLeave={() => setProductsDropdown(false)}
              >
                <NavLink to="/products" className={navLinkClass}>
                  <span>Products</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${productsDropdown ? 'rotate-180 text-sky-400' : ''}`} />
                </NavLink>

                {productsDropdown && (
                  <div className="absolute top-full left-0 w-72 bg-navy-950 border border-slate-700/80 rounded-xl shadow-2xl py-2 mt-1 z-50 animate-fade-in">
                    <div className="px-3 py-1.5 border-b border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Product Categories
                    </div>
                    {COMPANY_INFO.categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/products?category=${cat.id}`}
                        className="block px-4 py-2 text-xs text-slate-200 hover:bg-navy-800 hover:text-sky-400 transition"
                      >
                        {cat.name}
                      </Link>
                    ))}
                    <div className="border-t border-slate-800 mt-1 pt-1">
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-xs font-semibold text-sky-400 hover:bg-navy-800 transition"
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
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs md:text-sm px-4 py-2.5 rounded-xl shadow-md shadow-sky-950/40 transition hover:shadow-lg active:scale-95 focus:outline-none"
              >
                <Send size={15} />
                <span>Get a Quote</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl text-slate-200 hover:text-white hover:bg-navy-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="md:hidden bg-navy-950 border-t border-navy-800 px-4 pt-3 pb-6 space-y-2 animate-fade-in">
              <NavLink to="/" className={mobileNavLinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={mobileNavLinkClass}>
                About Us
              </NavLink>
              <NavLink to="/products" className={mobileNavLinkClass}>
                Products & Supplies
              </NavLink>
              
              {/* Mobile Category Sublinks */}
              <div className="pl-4 py-1 space-y-1 border-l-2 border-slate-800 my-1">
                {COMPANY_INFO.categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products?category=${cat.id}`}
                    className="block text-xs text-slate-400 hover:text-sky-400 py-1"
                  >
                    &bull; {cat.name}
                  </Link>
                ))}
              </div>

              <NavLink to="/contact" className={mobileNavLinkClass}>
                Contact Us
              </NavLink>

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white py-3 rounded-xl font-semibold text-sm shadow"
                >
                  <Send size={16} />
                  <span>Request Material Quote</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 bg-navy-800 text-slate-200 py-2.5 rounded-xl text-xs font-semibold"
                >
                  <Phone size={14} className="text-sky-400" />
                  <span>Call {COMPANY_INFO.contact.primaryPhone}</span>
                </a>
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
