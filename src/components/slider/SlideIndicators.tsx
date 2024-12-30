import React from 'react';

interface SlideIndicatorsProps {
  total: number;
  current: number;
}

export default function SlideIndicators({ total, current }: SlideIndicatorsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            current === index ? 'bg-white' : 'bg-white/50'
          }`}
        />
      ))}
    </div>
  );
}