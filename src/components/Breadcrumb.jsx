import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center text-xs text-slate-500 py-2 sm:py-3 overflow-x-auto scrollbar-none" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 whitespace-nowrap">
        <li className="inline-flex items-center shrink-0">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-600 transition"
          >
            <Home size={13} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center shrink-0">
              <ChevronRight size={13} className="text-slate-400 mx-1 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-slate-900 max-w-[200px] sm:max-w-none truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.href} 
                  className="text-slate-500 hover:text-blue-600 transition max-w-[150px] sm:max-w-none truncate"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
