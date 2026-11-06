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
    `text-sm font-semibold transition-colors duration-200 py-2 px-3.5 rounded-lg flex items-center gap-1 ${
      isActive 
        ? 'text-blue-700 bg-blue-50 font-bold' 
        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
    }`;

  const mobileNavLinkClass = ({ isActive }) => 
    `flex items-center justify-between text-sm font-semibold py-3 px-4 rounded-xl transition ${
      isActive 
        ? 'bg-blue-600 text-white font-bold' 
        : 'text-slate-800 hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white">
        
        {/* Desktop Top Contact Bar */}
        <div className="bg-slate-100 text-slate-600 text-xs py-2 px-4 border-b border-slate-200 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-600">
                <MapPin size={14} className="text-blue-600" />
                <span>{COMPANY_INFO.location.city}, {COMPANY_INFO.location.state}, India</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <Clock size={14} className="text-blue-600" />
                <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} 
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-medium transition"
              >
                <Phone size={14} className="text-blue-600" />
                <span>{COMPANY_INFO.contact.primaryPhone}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} 
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition"
              >
                <Mail size={14} className="text-blue-600" />
                <span>{COMPANY_INFO.contact.primaryEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className={`w-full transition-all duration-200 bg-white border-b ${
          scrolled 
            ? 'shadow-sm border-slate-200 py-2 sm:py-2.5' 
            : 'border-slate-200 py-2.5 sm:py-3.5'
        }`}>
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo & Company Name */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition shrink-0">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base sm:text-xl text-slate-900 tracking-tight font-heading truncate">
                    PAVAN SAI
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 shrink-0">
                    PSPL
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wide uppercase truncate">
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
                  <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-xl shadow-xl py-2 mt-1 z-50 animate-fade-in">
                    <div className="px-4 py-2 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Product Categories
                    </div>
                    {COMPANY_INFO.categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/products?category=${cat.id}`}
                        className="block px-4 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition font-medium"
                      >
                        {cat.name}
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50 transition"
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
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs md:text-sm px-4 py-2.5 rounded-lg shadow-sm transition active:scale-95 focus:outline-none"
              >
                <Send size={14} />
                <span>Get a Quote</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none active:bg-slate-200"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>

          {/* Full Mobile Drawer Overlay */}
          {isOpen && (
            <div className="md:hidden fixed inset-x-0 top-[53px] bottom-0 bg-slate-900/40 backdrop-blur-xs z-50 flex flex-col justify-between">
              <div className="bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-xl max-h-[85vh] overflow-y-auto">
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
                <div className="pl-3 py-1 space-y-1 border-l-2 border-blue-200 my-1 ml-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                    Quick Categories:
                  </div>
                  {COMPANY_INFO.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products?category=${cat.id}`}
                      className="block text-xs text-slate-600 hover:text-blue-600 py-1.5 px-2 font-medium rounded hover:bg-blue-50"
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
                <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsQuoteModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold text-sm shadow-sm hover:bg-blue-700 active:scale-98 transition"
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
