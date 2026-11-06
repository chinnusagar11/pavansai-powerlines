import React, { useState } from 'react';
import { X, MessageCircle, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function EnquiryModal({ isOpen, onClose, product = null }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    quantity: '',
    message: ''
  });

  if (!isOpen) return null;

  const productName = product ? product.name : 'General Transmission & Distribution Materials';
  const productCategory = product ? product.category : 'General Products';

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const generateEnquiryText = () => {
    let text = `*NEW PRODUCT ENQUIRY - PSPL SECUNDERABAD*\n`;
    text += `------------------------------------\n`;
    text += `*Product:* ${productName}\n`;
    if (product) {
      text += `*Category:* ${productCategory}\n`;
    }
    if (formData.name) text += `*Name:* ${formData.name}\n`;
    if (formData.company) text += `*Company/Firm:* ${formData.company}\n`;
    if (formData.phone) text += `*Phone:* ${formData.phone}\n`;
    if (formData.email) text += `*Email:* ${formData.email}\n`;
    if (formData.quantity) text += `*Required Quantity/Scope:* ${formData.quantity}\n`;
    if (formData.message) text += `*Additional Notes:* ${formData.message}\n`;
    text += `------------------------------------\n`;
    text += `Sent from Pavan Sai Power Lines Website (Secunderabad)`;
    return text;
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(generateEnquiryText());
    const phone = COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    onClose();
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Product Inquiry: ${productName} - PSPL`);
    const body = encodeURIComponent(generateEnquiryText());
    window.location.href = `mailto:${COMPANY_INFO.contact.primaryEmail}?cc=${COMPANY_INFO.contact.salesEmail}&subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-5 rounded-t-2xl flex items-start justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Commercial Enquiry Desk
            </span>
            <h3 className="text-lg md:text-xl font-bold mt-0.5">
              Request Price Quote & Availability
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Pavan Sai Power Lines &bull; Secunderabad, Telangana
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Selected Product Banner */}
        {product && (
          <div className="bg-sky-50 border-b border-sky-100 p-3.5 px-6 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0"></span>
            <div>
              <p className="text-xs font-semibold uppercase text-sky-800 tracking-wide">Selected Product:</p>
              <p className="text-sm font-bold text-navy-950">{product.name}</p>
            </div>
          </div>
        )}

        {/* Content Form */}
        <form className="p-6 space-y-4">
          <p className="text-xs text-slate-500 leading-relaxed">
            Fill in your project or material requirement details below. Your enquiry will be directly transmitted via WhatsApp or Email to our Secunderabad commercial sales desk with zero delay.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Your Name / Representative *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ramesh Reddy"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                placeholder="e.g. Electrical EPC Ltd"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                placeholder="e.g. +91 98490 XXXXX"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Required Quantity / Length
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 500 Nos / 5 km Drum"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Specifications or Specific Requirement
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              placeholder="Mention voltage rating, IS standard, or site delivery location in Telangana / AP..."
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md transition hover:shadow-lg active:scale-98"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>Send via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSend}
              className="flex-1 flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md transition hover:shadow-lg active:scale-98"
            >
              <Mail size={18} />
              <span>Send via Email</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
            <CheckCircle2 size={14} className="text-emerald-500" />
            <span>Direct commercial channel. No registration required.</span>
          </div>
        </form>

      </div>
    </div>
  );
}
