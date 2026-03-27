'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';
import ChatWidget from '@/components/chatbot/ChatWidget';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Toaster } from 'react-hot-toast';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useScrollProgress();

  return (
    <>
      <CustomCursor />
      <Navbar onMenuToggle={() => setMobileMenuOpen(true)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <ChatWidget />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1B1B1B',
            color: '#fff',
            border: '1px solid #CDB87C',
          },
        }}
      />
    </>
  );
}
