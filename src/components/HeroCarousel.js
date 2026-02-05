'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data';
import { useAppStore } from '@/lib/store';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setCurrentSlide: setGlobalSlide } = useAppStore();

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % heroSlides.length;
    setCurrentSlide(newSlide);
    setGlobalSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    setGlobalSlide(newSlide);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setGlobalSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === slide.id - 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-10 h-full flex items-center justify-center px-4">
              <div className="text-center text-white max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-primary-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(slide.id - 1)}
            className={`hero-dot ${
              currentSlide === slide.id - 1 ? 'active' : ''
            }`}
            aria-label={`Go to slide ${slide.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;