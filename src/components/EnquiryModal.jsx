import React, { useState } from 'react';
import { X, MessageCircle, Mail, CheckCircle2, ArrowLeft } from 'lucide-react';
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
        
        {/* Clean Header with Back Button */}
        <div className="bg-blue-600 text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white px-2.5 py-1.5 rounded-xl text-xs font-bold transition shadow-2xs"
            aria-label="Back / Close"
          >
            <ArrowLeft size={15} />
            <span>&larr; Back</span>
          </button>

          <div className="text-center flex-1 px-2 min-w-0">
            <h3 className="text-sm sm:text-base font-bold leading-tight truncate">
              Request Price Quote
            </h3>
            <p className="text-[10px] text-blue-200 truncate">
              Pavan Sai Power Lines &bull; Secunderabad
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition shrink-0"
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
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition"
              >
                <MessageCircle size={16} className="fill-current" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSend}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition"
              >
                <Mail size={16} />
                <span>Send via Email</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 text-xs font-semibold transition"
            >
              <ArrowLeft size={13} />
              <span>Back / Close</span>
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
