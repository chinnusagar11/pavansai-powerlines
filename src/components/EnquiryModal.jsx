import React, { useState } from 'react';
import { X, MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
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
    if (formData.quantity) text += `*Quantity/Requirement:* ${formData.quantity}\n`;
    if (formData.message) text += `*Specifications/Notes:* ${formData.message}\n`;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[92vh] flex flex-col border border-slate-200 overflow-hidden">
        
        {/* Clean Header */}
        <div className="bg-blue-600 text-white p-4 sm:p-5 flex items-start justify-between shrink-0">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-200">
              Commercial Enquiry
            </span>
            <h3 className="text-base sm:text-lg font-bold mt-0.5 leading-snug">
              Request Price Quote & Availability
            </h3>
            <p className="text-[11px] sm:text-xs text-blue-100 mt-0.5">
              Pavan Sai Power Lines &bull; Secunderabad, Telangana
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-lg transition"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Selected Product Banner */}
        {product && (
          <div className="bg-blue-50 border-b border-blue-100 p-3 px-4 sm:px-6 flex items-center gap-2.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase text-blue-800 tracking-wider">Product:</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">{product.name}</p>
            </div>
          </div>
        )}

        {/* Scrollable Form Body */}
        <form className="p-4 sm:p-6 space-y-3.5 overflow-y-auto flex-1">
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
                Phone Number *
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
                Quantity Needed
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 500 Nos / 5 km"
                className="w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Specifications / Location Notes
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              placeholder="State rating, IS standard, or delivery location in Telangana / AP..."
              className="w-full px-3.5 py-2 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-sm transition"
            >
              <MessageCircle size={18} className="fill-current" />
              <span>Send via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSend}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-sm transition"
            >
              <Mail size={18} />
              <span>Send via Email</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-0.5">
            <CheckCircle2 size={13} className="text-emerald-500" />
            <span>Connects directly to Secunderabad sales desk</span>
          </div>
        </form>

      </div>
    </div>
  );
}
