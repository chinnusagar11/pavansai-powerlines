import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, MessageCircle, Mail, CheckCircle2, AlertCircle, Phone, User } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function EnquiryModal({ isOpen, onClose, product = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const productName = product ? product.name : 'General Transmission & Distribution Materials';
  const productCategory = product ? product.category : 'General Products';

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
      return { isValid: false, message: 'Phone number is required' };
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
    // Restrict input to digits, spaces, plus, and hyphens only
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

  const generateEnquiryText = () => {
    let text = `*NEW PRODUCT ENQUIRY - PSPL SECUNDERABAD*\n`;
    text += `------------------------------------\n`;
    text += `*Product:* ${productName}\n`;
    if (product) {
      text += `*Category:* ${productCategory}\n`;
    }
    text += `*Customer Name:* ${formData.name.trim()}\n`;
    text += `*Contact Number:* ${formData.phone.trim()}\n`;
    text += `------------------------------------\n`;
    text += `Sent from Pavan Sai Power Lines Website (Secunderabad)`;
    return text;
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const text = encodeURIComponent(generateEnquiryText());
    const phone = COMPANY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    onClose();
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Price Quote Request: ${productName} - PSPL`);
    const body = encodeURIComponent(generateEnquiryText());
    window.location.href = `mailto:${COMPANY_INFO.contact.primaryEmail}?cc=${COMPANY_INFO.contact.salesEmail}&subject=${subject}&body=${body}`;
    onClose();
  };

  const phoneStatus = validatePhoneNumber(formData.phone);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full flex flex-col border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="bg-blue-600 text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex-1 pr-3 min-w-0">
            <h3 className="text-base sm:text-lg font-bold leading-tight truncate">
              Request Price Quote
            </h3>
            <p className="text-[11px] text-blue-200 truncate">
              Pavan Sai Power Lines &bull; Secunderabad
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-white/90 hover:text-white bg-white/15 hover:bg-white/25 active:bg-white/35 p-2 rounded-xl transition shrink-0"
            aria-label="Close modal"
          >
            <X size={20} />
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

        {/* Streamlined Form Body: ONLY Name & Phone Number */}
        <form className="p-4 sm:p-6 space-y-4">
          
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
              autoFocus
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Reddy"
              className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border transition-all ${
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
                  <span>Valid 10-Digit</span>
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
              className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-xl border transition-all ${
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
              <p className="text-[10px] text-slate-400 mt-1">Direct callback &amp; pricing quote on this number</p>
            )}
          </div>

          {/* Action buttons */}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition"
              >
                <MessageCircle size={16} className="fill-current" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSend}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition"
              >
                <Mail size={16} />
                <span>Send via Email</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-0.5">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            <span>Connects directly to Secunderabad sales desk</span>
          </div>
        </form>

      </div>
    </div>,
    document.body
  );
}
