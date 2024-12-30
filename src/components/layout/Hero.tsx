import React from 'react';
import Slider from '../slider/Slider';
import { slides } from '../../utils/constants';

export default function Hero() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div className="aspect-[16/6,5] rounded-xl overflow-hidden shadow-xl">
        <Slider slides={slides} />
      </div>
    </div>
  );
}
