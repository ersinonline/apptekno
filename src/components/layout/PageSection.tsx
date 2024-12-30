import React from 'react';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function PageSection({ children, className = '', variant = 'primary' }: PageSectionProps) {
  const bgColor = variant === 'primary' 
    ? 'bg-[#fff4cc]'
    : 'bg-gray-50';

  return (
    <section className={`w-full py-12 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}