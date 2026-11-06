import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileQuickBar from '../components/MobileQuickBar';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      <Navbar />
      
      {/* Main content with mobile bottom padding to clear the sticky mobile bar */}
      <main className="flex-grow pb-16 md:pb-0">
        <Outlet />
      </main>

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:block">
        <WhatsAppButton />
      </div>

      {/* Mobile Bottom Sticky Quick Action Bar */}
      <MobileQuickBar />

      <Footer />
    </div>
  );
}
