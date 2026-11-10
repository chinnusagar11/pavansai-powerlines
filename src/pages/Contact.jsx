import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ExternalLink,
  Copy,
  Check,
  ArrowLeft,
  Maximize2,
  X,
  PhoneCall,
  AlertCircle,
  CheckCircle2,
  User
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../utils/schemaGenerator';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isCardZoomOpen, setIsCardZoomOpen] = useState(false);

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
    let msg = `*COMMERCIAL MATERIAL INQUIRY - PSPL SECUNDERABAD*\n`;
    msg += `------------------------------------\n`;
    msg += `*Customer Name:* ${formData.name.trim()}\n`;
    msg += `*Contact Number:* ${formData.phone.trim()}\n`;
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
    const subject = encodeURIComponent(`Material Quote Request: ${formData.name.trim()} - PSPL`);
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
    <div className="space-y-10 sm:space-y-14 lg:space-y-16 pb-24 md:pb-16">
      <SEO
        title="Contact Pavan Sai Power Lines | Electrical Materials Supplier, Bansilalpet Secunderabad"
        description="Contact Pavan Sai Power Lines (PSPL) at Bansilalpet Road, Secunderabad for electrical power transmission materials. Call +91 97004 49684 or email pavansaipowerlines@gmail.com."
        keywords="Contact Pavan Sai Power Lines, Electrical suppliers in Secunderabad, Electrical materials suppliers in Hyderabad, Electrical materials in Bansilalpet, Power line materials near Bansilalpet Road, PSPL phone number, V Nagamalleswara Rao"
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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2fc] via-[#f1f6fd] to-white pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12 border-b border-blue-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between gap-3 pb-3 mb-4 sm:mb-6 border-b border-blue-200/60">
            <div className="hidden sm:block">
              <Breadcrumb items={[{ label: 'Contact Us' }]} />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
              <Link
                to="/"
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white hover:bg-blue-50/80 active:bg-blue-100 text-slate-800 hover:text-blue-700 text-xs sm:text-[13px] font-bold border border-slate-200/90 hover:border-blue-400 shadow-2xs hover:shadow-xs transition-all duration-200 shrink-0"
                title="Return to Home Page"
              >
                <ArrowLeft size={13} className="text-blue-600 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back to Home</span>
              </Link>

              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-700 bg-white px-2 sm:px-2.5 py-1.5 rounded-xl border border-blue-200 shadow-2xs shrink-0 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Secunderabad Desk</span>
              </span>
            </div>
          </div>
          
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-blue-200 shadow-2xs text-[10px] sm:text-xs font-bold text-slate-800">
              <span className="text-blue-700 uppercase tracking-wider whitespace-nowrap">Commercial Desk</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-emerald-700 font-bold whitespace-nowrap">Fast Response Guarantee</span>
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
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
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

          {/* Commercial email */}
          <div className="group relative bg-white hover:bg-slate-50/50 p-5 rounded-2xl border border-slate-200/90 hover:border-blue-500/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border border-blue-200 flex items-center justify-center mb-3 shadow-xs group-hover:scale-108 transition-all">
                <Mail size={20} />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">Email &amp; BOQ Desk</h3>
              <div className="space-y-1 text-xs text-slate-600 leading-relaxed">
                <p className="text-[11px] text-slate-600 font-semibold break-all">
                  <strong className="text-slate-900">Email:</strong> {COMPANY_INFO.contact.primaryEmail}
                </p>
                <p className="text-[11px] text-slate-500">
                  Direct inquiries accepted via Phone, WhatsApp, and Email.
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
                Enter your details below for instant pricing and stock availability from our sales desk.
              </p>
            </div>

            <form className="space-y-4">
              {/* 1. Name Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User size={13} className="text-blue-600" />
                  <span>Your Name *</span>
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
                      : 'border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] font-bold text-red-600 flex items-center gap-1 mt-1 animate-fade-in">
                    <AlertCircle size={12} className="shrink-0 text-red-500" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* 2. Phone Number Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone size={13} className="text-blue-600" />
                    <span>Mobile Number *</span>
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
                        : 'border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
                {errors.phone ? (
                  <p className="text-[11px] font-bold text-red-600 flex items-center gap-1 mt-1 animate-fade-in">
                    <AlertCircle size={12} className="shrink-0 text-red-500" />
                    <span>{errors.phone}</span>
                  </p>
                ) : (
                  <p className="text-[10px] text-slate-400 mt-1">10-digit mobile number for immediate callback &amp; quote dispatch</p>
                )}
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

              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1">
                <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                <span>Transmits directly to sales staff without saving to external databases.</span>
              </div>
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

      {/* Visiting card preview modal */}
      {isCardZoomOpen && createPortal(
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
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
        </div>,
        document.body
      )}

    </div>
  );
}
