import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Building2, 
  ExternalLink,
  Copy,
  Check,
  ArrowLeft,
  Maximize2,
  X,
  PhoneCall,
  AlertCircle,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../utils/schemaGenerator';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    category: COMPANY_INFO.categories[0].name,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isCardZoomOpen, setIsCardZoomOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validatePhoneNumber = (phoneStr) => {
    if (!phoneStr || !phoneStr.trim()) {
      return { isValid: false, message: 'Phone number is required to submit requirement' };
    }
    const clean = phoneStr.replace(/[^0-9]/g, '');
    let digits = clean;
    if (clean.startsWith('91') && clean.length === 12) {
      digits = clean.slice(2);
    } else if (clean.startsWith('0') && clean.length === 11) {
      digits = clean.slice(1);
    }

    if (digits.length !== 10) {
      return { 
        isValid: false, 
        message: `Please enter a valid 10-digit mobile number (${digits.length}/10 digits)` 
      };
    }

    if (!/^[6-9]\d{9}$/.test(digits)) {
      return { 
        isValid: false, 
        message: 'Indian mobile numbers must start with 6, 7, 8, or 9' 
      };
    }

    return { isValid: true, message: '' };
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d\s+-]/g, '');
    if (value.length <= 16) {
      setFormData(prev => ({ ...prev, phone: value }));
      if (errors.phone) {
        const check = validatePhoneNumber(value);
        if (check.isValid) {
          setErrors(prev => ({ ...prev, phone: null }));
        }
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const phoneValidation = validatePhoneNumber(formData.phone);
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildMessageContent = () => {
    let msg = `*COMMERCIAL MATERIAL INQUIRY - PSPL*\n`;
    msg += `------------------------------------\n`;
    msg += `*Name:* ${formData.name.trim() || 'Not specified'}\n`;
    if (formData.company) msg += `*Company:* ${formData.company.trim()}\n`;
    msg += `*Phone:* ${formData.phone.trim() || 'Not specified'}\n`;
    if (formData.email) msg += `*Email:* ${formData.email.trim()}\n`;
    msg += `*Category:* ${formData.category}\n`;
    if (formData.message) msg += `*Requirement Details:* ${formData.message.trim()}\n`;
    msg += `------------------------------------\n`;
    msg += `Sent via Pavan Sai Power Lines Website (Secunderabad)`;
    return msg;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const text = encodeURIComponent(buildMessageContent());
    const phone = COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const subject = encodeURIComponent(`Material Inquiry: ${formData.category} - PSPL`);
    const body = encodeURIComponent(buildMessageContent());
    window.location.href = `mailto:${COMPANY_INFO.contact.primaryEmail}?cc=${COMPANY_INFO.contact.salesEmail}&subject=${subject}&body=${body}`;
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(COMPANY_INFO.contact.primaryPhoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const phoneStatus = validatePhoneNumber(formData.phone);

  return (
    <div className="space-y-8 sm:space-y-12 pb-16">
      <SEO
        title="Contact Pavan Sai Power Lines | Secunderabad & Hyderabad Sales Desk"
        description="Contact Pavan Sai Power Lines in Bansilalpet Road, Secunderabad. Call +91 97004 49684 or visit our supply base for electrical materials quotes in Hyderabad & Telangana."
        keywords="Pavan Sai Power Lines contact, Electrical suppliers in Secunderabad, Electrical materials suppliers in Hyderabad, Bansilalpet Road electrical shop, PSPL phone number, electrical materials Telangana"
        canonical="/contact"
        ogImage={COMPANY_INFO.contact.visitingCardImage}
        structuredData={[
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact Us', url: '/contact' }
          ]),
          getLocalBusinessSchema()
        ]}
      />
      
      {/* 1. Page Header with Architectural Micro-Pattern */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2fc] via-[#f1f6fd] to-white py-6 sm:py-8 border-b border-blue-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between gap-3">
            <div className="hidden sm:block">
              <Breadcrumb items={[{ label: 'Contact Us' }]} />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-2.5 w-full sm:w-auto">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 hover:border-slate-400 transition shadow-2xs shrink-0"
                title="Return to Home Page"
              >
                <ArrowLeft size={13} className="text-blue-600" />
                <span>Back to Home</span>
              </Link>

              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-blue-200 shadow-2xs shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Secunderabad Commercial Desk</span>
              </span>
            </div>
          </div>
          
          <div className="max-w-3xl space-y-2 mt-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 shadow-2xs text-[11px] font-bold text-slate-800">
              <span className="text-blue-700 uppercase tracking-wider">Commercial Desk</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-emerald-700 font-bold">Fast Response Guarantee</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Contact Pavan Sai Power Lines
            </h1>

            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal">
              Reach out directly to our Secunderabad office for electrical material pricing, stock availability, and dispatch logistics across Telangana, Andhra Pradesh, and PAN-India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1: Office Address */}
          <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-amber-500 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-500 group-hover:text-white border border-amber-200 flex items-center justify-center mb-3 shadow-xs group-hover:scale-108 transition-all">
                <MapPin size={20} />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">Office Location</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900">{COMPANY_INFO.name}</strong><br />
                {COMPANY_INFO.location.fullAddress}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100">
              <a
                href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-900 font-bold"
              >
                <span>Directions on Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Card 2: Phone Numbers */}
          <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border border-blue-200 flex items-center justify-center mb-3 shadow-xs group-hover:scale-108 transition-all">
                <Phone size={20} />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">Phone Contacts</h3>
              <div className="space-y-1 text-xs text-slate-600">
                <p>
                  <strong className="text-slate-900">Primary:</strong>{' '}
                  <a href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="text-blue-600 font-bold hover:underline">
                    {COMPANY_INFO.contact.primaryPhone}
                  </a>
                </p>
                <p>
                  <strong className="text-slate-900">Secondary:</strong>{' '}
                  <a href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`} className="text-blue-600 font-bold hover:underline">
                    {COMPANY_INFO.contact.secondaryPhone}
                  </a>
                </p>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="text-xs text-blue-600 hover:text-blue-800 font-bold"
              >
                Click to Call
              </a>
              <button
                onClick={copyPhoneNumber}
                className="text-xs text-slate-500 hover:text-blue-600 p-1 rounded-md hover:bg-blue-50 transition"
                title="Copy phone"
              >
                {copiedPhone ? <Check size={14} className="text-emerald-600 font-bold" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Card 3: WhatsApp Inquiry */}
          <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-emerald-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white border border-emerald-200 flex items-center justify-center mb-3 shadow-xs group-hover:scale-108 transition-all">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly for price estimates and quick stock questions.
              </p>
              <p className="text-xs font-extrabold text-emerald-800 mt-1.5">
                {COMPANY_INFO.contact.whatsappDisplay}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:text-emerald-900 font-bold"
              >
                <span>Open WhatsApp Chat &rarr;</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Card 4: Business Hours & Email */}
          <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border border-blue-200 flex items-center justify-center mb-3 shadow-xs group-hover:scale-108 transition-all">
                <Clock size={20} />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">Business Hours</h3>
              <div className="space-y-1 text-xs text-slate-600 leading-relaxed">
                <p><strong className="text-slate-900">Mon - Sat:</strong> 9:30 AM - 7:30 PM</p>
                <p><strong className="text-slate-900">Sunday:</strong> Emergency via WhatsApp</p>
                <p className="text-[11px] text-slate-600 font-semibold pt-0.5 break-all">
                  <strong className="text-slate-900">Email:</strong> {COMPANY_INFO.contact.primaryEmail}
                </p>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100">
              <a
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                className="text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1"
              >
                <span>Send Email Directly &rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Enquiry Form & Google Maps Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mobile-Friendly Form */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 shadow-xs p-4 sm:p-6 space-y-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                Send Material Requirement
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter your requirement below. Transmit directly to our sales staff via WhatsApp or Email.
              </p>
            </div>

            <form className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Reddy"
                    className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border transition-all ${
                      errors.name 
                        ? 'border-red-500 ring-2 ring-red-100 bg-red-50/20 text-slate-900' 
                        : 'border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] font-bold text-red-600 flex items-center gap-1 mt-1 animate-fade-in">
                      <AlertCircle size={12} className="shrink-0 text-red-500" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Firm / Contractor Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. EPC Electricals"
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    {phoneStatus.isValid && (
                      <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 size={11} className="text-emerald-500" />
                        <span>Valid 10-Digit Number</span>
                      </span>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="e.g. 97004 49684"
                    maxLength={16}
                    className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border transition-all ${
                      errors.phone 
                        ? 'border-red-500 ring-2 ring-red-100 bg-red-50/20 text-slate-900' 
                        : phoneStatus.isValid 
                          ? 'border-emerald-500 ring-1 ring-emerald-200 bg-emerald-50/10' 
                          : 'border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    }`}
                  />
                  {errors.phone ? (
                    <p className="text-[11px] font-bold text-red-600 flex items-center gap-1 mt-1 animate-fade-in">
                      <AlertCircle size={12} className="shrink-0 text-red-500" />
                      <span>{errors.phone}</span>
                    </p>
                  ) : (
                    <p className="text-[10px] text-slate-400 mt-1">10-digit mobile number</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="relative" ref={categoryRef}>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Product Category of Interest
                </label>
                
                {/* Custom Elegant Dropdown Trigger - Strictly Bound to Card Width */}
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border transition-all bg-white flex items-center justify-between text-left ${
                    isCategoryOpen 
                      ? 'border-blue-500 ring-2 ring-blue-500/20' 
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isCategoryOpen}
                >
                  <span className="font-semibold text-slate-900 truncate pr-2">
                    {formData.category}
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`text-slate-500 shrink-0 transition-transform duration-200 ${
                      isCategoryOpen ? 'rotate-180 text-blue-600' : ''
                    }`} 
                  />
                </button>

                {/* Custom Dropdown Menu - Never Overflows Mobile Viewport */}
                {isCategoryOpen && (
                  <div 
                    role="listbox"
                    className="absolute top-full left-0 right-0 w-full mt-1.5 z-40 bg-white rounded-xl border border-blue-200 shadow-xl py-1.5 max-h-64 overflow-y-auto animate-fade-in"
                  >
                    {COMPANY_INFO.categories.map((cat) => {
                      const isSelected = formData.category === cat.name;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, category: cat.name }));
                            setIsCategoryOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between gap-2 ${
                            isSelected 
                              ? 'bg-blue-50 text-blue-700 font-bold' 
                              : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                          }`}
                        >
                          <span className="truncate">{cat.name}</span>
                          {isSelected && <Check size={14} className="text-blue-600 shrink-0" />}
                        </button>
                      );
                    })}

                    <div className="border-t border-slate-100 my-1"></div>

                    <button
                      type="button"
                      role="option"
                      aria-selected={formData.category === 'General BOQ / Multiple Items'}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, category: 'General BOQ / Multiple Items' }));
                        setIsCategoryOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between gap-2 ${
                        formData.category === 'General BOQ / Multiple Items'
                          ? 'bg-blue-50 text-blue-700 font-bold' 
                          : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                      }`}
                    >
                      <span className="truncate">General BOQ / Multiple Items</span>
                      {formData.category === 'General BOQ / Multiple Items' && (
                        <Check size={14} className="text-blue-600 shrink-0" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Requirement Details / Quantities
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify ratings (e.g. 11kV AB Switches, Dog Conductor 5km, Pin Insulators 500 Nos), site location, and delivery schedule..."
                  className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-xs transition"
                >
                  <MessageCircle size={18} className="fill-current" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-xs transition"
                >
                  <Mail size={18} />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center pt-1">
                Transmits directly to sales staff without saving to external databases.
              </p>
            </form>
          </div>

          {/* Right Column: Google Maps & Commercial Details */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Google Maps Embed */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900">Secunderabad Map Location</h3>
                  <p className="text-[11px] text-slate-500">Pavan Sai Power Lines &bull; Telangana</p>
                </div>
                <a
                  href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium"
                >
                  <span>Open Map</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="aspect-[16/11] w-full bg-slate-100">
                <iframe
                  title="Pavan Sai Power Lines Secunderabad Location"
                  src={COMPANY_INFO.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Official Visiting Card Showcase */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden shadow-sm p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs">
                    PSPL
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">Official Business Visiting Card</h3>
                    <p className="text-[11px] text-slate-500">Proprietor: {COMPANY_INFO.contact.representativeName}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full">
                  <Check size={11} className="text-emerald-600" />
                  <span>Verified Credentials</span>
                </span>
              </div>

              {/* High-Resolution Authentic Visiting Card Photo */}
              <div 
                onClick={() => setIsCardZoomOpen(true)}
                className="rounded-xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-900 group relative cursor-pointer"
                title="Click to zoom visiting card in high resolution"
              >
                <img
                  src="/images/pspl-visiting-card.jpg"
                  alt="Pavan Sai Power Lines Official Visiting Card - V. Nagamalleswara Rao, Bansilalpet Road, Secunderabad"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute bottom-2.5 right-2.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-slate-900/85 text-white backdrop-blur-xs shadow-md border border-white/20">
                    <Maximize2 size={12} />
                    <span>Click to Zoom</span>
                  </span>
                </div>
              </div>

              {/* Quick Details List from Visiting Card */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-semibold">Proprietor:</span>
                  <strong className="text-slate-900 font-bold">{COMPANY_INFO.contact.representativeName}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-semibold">Direct Mobile:</span>
                  <a href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="text-blue-600 font-extrabold hover:underline">
                    {COMPANY_INFO.contact.primaryPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-semibold">Registered Office:</span>
                  <span className="text-slate-800 font-medium text-right max-w-[240px] truncate" title={COMPANY_INFO.location.fullAddress}>
                    {COMPANY_INFO.location.shortAddress}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-semibold">Official Email:</span>
                  <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="text-blue-600 font-bold hover:underline">
                    {COMPANY_INFO.contact.primaryEmail}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Official Visiting Card Full-Screen Zoom Lightbox */}
      {isCardZoomOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsCardZoomOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 border-2 border-blue-400/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-slate-100">
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 font-heading">
                  Pavan Sai Power Lines &bull; Official Visiting Card
                </h3>
                <p className="text-xs text-slate-500">
                  Proprietor: {COMPANY_INFO.contact.representativeName} &bull; Secunderabad
                </p>
              </div>
              <button
                onClick={() => setIsCardZoomOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                aria-label="Close visiting card preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-2 bg-slate-900 rounded-xl overflow-hidden mt-1 shadow-inner">
              <img
                src="/images/pspl-visiting-card.jpg"
                alt="Pavan Sai Power Lines Official Visiting Card High Resolution - Bansilalpet Road, Secunderabad"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-3 bg-slate-50 rounded-xl mt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <span className="text-slate-700">
                <strong>Registered Office:</strong> {COMPANY_INFO.location.shortAddress}
              </span>
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-3.5 py-1.5 rounded-lg shadow-xs transition"
              >
                <PhoneCall size={13} />
                <span>Call: {COMPANY_INFO.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
