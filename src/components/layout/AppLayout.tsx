import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fff4cc]">
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
}
