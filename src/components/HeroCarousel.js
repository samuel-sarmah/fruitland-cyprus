'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data';
import useCarousel from '@/hooks/useCarousel';
import { useAppStore } from '@/lib/store';

const HeroCarousel = () => {
  const { setCurrentSlide: setGlobalSlide } = useAppStore();
  const { currentIndex: currentSlide, next: nextSlide, prev: prevSlide, goTo: goToSlide } = useCarousel(heroSlides, 6000);

  const handleSlideChange = (index) => {
    goToSlide(index);
    setGlobalSlide(index);
  };

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
            
            <div className="relative z-10 h-full flex items-center justify-center px-4">
              <div className="text-center text-white max-w-4xl drop-shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-xl">
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
            onClick={() => handleSlideChange(slide.id - 1)}
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