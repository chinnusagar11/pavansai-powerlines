import React from 'react';
import { Link } from 'react-router-dom';
import { ZapOff, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        
        <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
          <ZapOff size={28} />
        </div>

        <div className="space-y-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Error 404 &bull; Page Not Found
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 font-heading">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or category you are looking for does not exist or may have been moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition"
          >
            <Home size={14} />
            <span>Return Home</span>
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-lg transition"
          >
            <span>Browse Products</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
