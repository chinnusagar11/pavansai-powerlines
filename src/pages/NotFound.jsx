import React from 'react';
import { Link } from 'react-router-dom';
import { ZapOff, Home, ArrowLeft, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 mx-auto flex items-center justify-center">
          <ZapOff size={32} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Error 404 &bull; Page Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading">
            Line Disconnected
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or product category you are looking for does not exist or may have been re-routed.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-900 text-white text-xs font-semibold px-5 py-3 rounded-xl transition"
          >
            <Home size={15} />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-5 py-3 rounded-xl transition"
          >
            <span>Browse Products</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
