import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ExternalLink,
  ShieldAlert,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import Breadcrumb from '../components/Breadcrumb';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    category: COMPANY_INFO.categories[0].name,
    message: ''
  });

  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const buildMessageContent = () => {
    let msg = `*COMMERCIAL MATERIAL INQUIRY - PSPL*\n`;
    msg += `------------------------------------\n`;
    msg += `*Name:* ${formData.name || 'Not specified'}\n`;
    if (formData.company) msg += `*Company:* ${formData.company}\n`;
    msg += `*Phone:* ${formData.phone || 'Not specified'}\n`;
    if (formData.email) msg += `*Email:* ${formData.email}\n`;
    msg += `*Category of Interest:* ${formData.category}\n`;
    if (formData.message) msg += `*Requirement Details:* ${formData.message}\n`;
    msg += `------------------------------------\n`;
    msg += `Sent via Pavan Sai Power Lines Website (Secunderabad)`;
    return msg;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(buildMessageContent());
    const phone = COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Material Inquiry: ${formData.category} - PSPL`);
    const body = encodeURIComponent(buildMessageContent());
    window.location.href = `mailto:${COMPANY_INFO.contact.primaryEmail}?cc=${COMPANY_INFO.contact.salesEmail}&subject=${subject}&body=${body}`;
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(COMPANY_INFO.contact.primaryPhoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      
      {/* 1. Page Header */}
      <section className="bg-navy-950 text-white py-12 md:py-16 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          
          <div className="max-w-3xl space-y-3 mt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              Sales & Commercial Desk
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Contact Pavan Sai Power Lines
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Reach out directly to our Secunderabad office for electrical material availability, proforma invoices, and site delivery arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Office Address */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-base text-navy-950 mb-1">Office Location</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>{COMPANY_INFO.name}</strong><br />
                {COMPANY_INFO.location.fullAddress}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-700 font-semibold"
              >
                <span>Get Driving Directions</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Card 2: Phone Numbers */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-base text-navy-950 mb-1">Telephone Contacts</h3>
              <div className="space-y-1 text-xs text-slate-600">
                <p>
                  <strong className="text-navy-950">Primary:</strong>{' '}
                  <a href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="text-sky-600 hover:underline">
                    {COMPANY_INFO.contact.primaryPhone}
                  </a>
                </p>
                <p>
                  <strong className="text-navy-950">Alternate:</strong>{' '}
                  <a href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`} className="text-sky-600 hover:underline">
                    {COMPANY_INFO.contact.secondaryPhone}
                  </a>
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="text-xs text-sky-600 hover:text-sky-700 font-semibold"
              >
                Click to Call Now
              </a>
              <button
                onClick={copyPhoneNumber}
                className="text-xs text-slate-400 hover:text-slate-600 p-1"
                title="Copy primary phone number"
              >
                {copiedPhone ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Card 3: WhatsApp Inquiry */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-bold text-base text-navy-950 mb-1">WhatsApp Fast Desk</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly for stock inquiries, spec sheets, and instant pricing estimates.
              </p>
              <p className="text-xs font-semibold text-emerald-700 mt-2">
                {COMPANY_INFO.contact.whatsappDisplay}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                <span>Open WhatsApp Chat</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Card 4: Email & Working Hours */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-base text-navy-950 mb-1">Business Hours</h3>
              <div className="space-y-1 text-xs text-slate-600 leading-relaxed">
                <p><strong>Mon - Sat:</strong> 9:30 AM - 7:30 PM</p>
                <p><strong>Sunday:</strong> Closed (Emergency via WhatsApp)</p>
                <p className="pt-1 text-[11px] text-slate-500 break-all">
                  <strong>Email:</strong> {COMPANY_INFO.contact.primaryEmail}
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                className="text-xs text-sky-600 hover:text-sky-700 font-semibold"
              >
                Write an Email &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Enquiry Form & Google Maps Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Functional Enquiry Generator (Zero Fake Backend) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
                Instant Dispatch Form
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 font-heading">
                Send Material Requirement
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Enter your project requirement below. Select WhatsApp or Email to immediately transmit your request directly to our Secunderabad sales staff.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    placeholder="e.g. S. K. Sharma"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Firm Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Telangana Power Projects"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98490 XXXXX"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
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
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Product Category of Interest
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                >
                  {COMPANY_INFO.categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                  <option value="General BOQ / Multiple Items">General BOQ / Multiple Items</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Quantity & Requirement Details
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe ratings (e.g. 11kV AB Switches, Dog Conductor 10km, Pin Insulators 1000 Nos), site location, and delivery schedule..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-5 rounded-xl font-semibold text-sm shadow-md transition active:scale-98"
                >
                  <MessageCircle size={18} className="fill-current" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white py-3.5 px-5 rounded-xl font-semibold text-sm shadow-md transition active:scale-98"
                >
                  <Mail size={18} />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center pt-1">
                Directly transmits formatted details without registering or saving data to external databases.
              </p>
            </form>
          </div>

          {/* Right Column: Google Maps & Commercial Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md">
              <div className="p-4 bg-navy-900 text-white flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm">Secunderabad Map Location</h3>
                  <p className="text-xs text-slate-300">Pavan Sai Power Lines &bull; Telangana</p>
                </div>
                <a
                  href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-400 hover:text-white flex items-center gap-1 font-medium"
                >
                  <span>Open Full Map</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="aspect-[16/11] w-full bg-slate-200">
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

            {/* Visiting Card Reference Note Box */}
            <div className="p-5 bg-slate-100 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-950 uppercase tracking-wide">
                <Building2 size={16} className="text-sky-600" />
                <span>Commercial Verification Data</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contact information, GSTIN number, and registered address can be referenced directly from the company's official visiting card. Editable entries in <code className="bg-slate-200 px-1 py-0.5 rounded text-navy-900">src/data/company.js</code> allow immediate updates with complete fidelity.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                <strong>GSTIN:</strong> {COMPANY_INFO.commercial.gstin}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
