import React from 'react';
import { useSlider } from '../../hooks/useSlider';
import SlideControls from './SlideControls';
import SlideIndicators from './SlideIndicators';
import { Slide } from '../../types';

interface SliderProps {
  slides: Slide[];
}

export default function Slider({ slides }: SliderProps) {
  const { currentSlide, nextSlide, prevSlide } = useSlider(slides.length);

  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-xl">
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <SlideControls onPrevious={prevSlide} onNext={nextSlide} />
      <SlideIndicators total={slides.length} current={currentSlide} />
    </div>
  );
}