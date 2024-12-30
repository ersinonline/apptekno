import { useState, useCallback, useEffect } from 'react';

export function useSlider(slideCount: number, autoPlayInterval = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    setCurrentSlide
  };
}