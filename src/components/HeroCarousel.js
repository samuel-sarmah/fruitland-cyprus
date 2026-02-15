'use client';

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
    <div className="relative h-screen overflow-hidden bg-black">
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
                <h1 className="text-6xl md:text-6xl font-bold mb-6 font-display drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-xl font-bold">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      
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