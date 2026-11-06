import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Building2, 
  ExternalLink,
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
    msg += `*Category:* ${formData.category}\n`;
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
    <div className="space-y-8 sm:space-y-12 pb-16">
      
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-blue-50/60 to-white py-8 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          
          <div className="max-w-3xl space-y-2 mt-2">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-md border border-blue-200">
              Commercial Desk
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Contact Pavan Sai Power Lines
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Reach out directly to our Secunderabad office for electrical material pricing, stock availability, and dispatch logistics.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1: Office Address */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <MapPin size={20} />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Office Location</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>{COMPANY_INFO.name}</strong><br />
                {COMPANY_INFO.location.fullAddress}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100">
              <a
                href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-semibold"
              >
                <span>Directions</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Card 2: Phone Numbers */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Phone size={20} />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Phone Contacts</h3>
              <div className="space-y-1 text-xs text-slate-600">
                <p>
                  <strong className="text-slate-900">Primary:</strong>{' '}
                  <a href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="text-blue-600 hover:underline">
                    {COMPANY_INFO.contact.primaryPhone}
                  </a>
                </p>
                <p>
                  <strong className="text-slate-900">Secondary:</strong>{' '}
                  <a href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`} className="text-blue-600 hover:underline">
                    {COMPANY_INFO.contact.secondaryPhone}
                  </a>
                </p>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
              >
                Click to Call
              </a>
              <button
                onClick={copyPhoneNumber}
                className="text-xs text-slate-400 hover:text-slate-600 p-1"
                title="Copy phone"
              >
                {copiedPhone ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Card 3: WhatsApp Inquiry */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <MessageCircle size={20} />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly for price estimates and quick stock questions.
              </p>
              <p className="text-xs font-semibold text-emerald-700 mt-1.5">
                {COMPANY_INFO.contact.whatsappDisplay}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                <span>Open WhatsApp</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Card 4: Business Hours */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Clock size={20} />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Business Hours</h3>
              <div className="space-y-1 text-xs text-slate-600 leading-relaxed">
                <p><strong>Mon - Sat:</strong> 9:30 AM - 7:30 PM</p>
                <p><strong>Sunday:</strong> Emergency via WhatsApp</p>
                <p className="text-[11px] text-slate-500 pt-0.5 break-all">
                  <strong>Email:</strong> {COMPANY_INFO.contact.primaryEmail}
                </p>
              </div>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100">
              <a
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
              >
                Send Email &rarr;
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
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
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
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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

            {/* Note Box */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <Building2 size={15} className="text-blue-600" />
                <span>Visiting Card & Commercial Details</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contact information, GSTIN number, and registered address can be referenced directly from the company visiting card. Editable entries in <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 text-[11px]">src/data/company.js</code> allow easy updates.
              </p>
              <div className="text-[11px] text-slate-500 pt-0.5">
                <strong>GSTIN:</strong> {COMPANY_INFO.commercial.gstin}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
