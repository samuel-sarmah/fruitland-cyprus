'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { partners } from '@/data';

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-green">
          Trusted Partners & Community
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="w-full flex-shrink-0 flex items-center justify-center px-8"
                >
                  <div className="text-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-20 mx-auto mb-4 object-contain"
                    />
                    <p className="text-gray-600 font-medium">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-secondary-green p-3 rounded-full shadow-lg transition-all"
            aria-label="Previous partner"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-secondary-green p-3 rounded-full shadow-lg transition-all"
            aria-label="Next partner"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {partners.map((partner) => (
              <button
                key={partner.id}
                onClick={() => setCurrentIndex(partner.id - 1)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === partner.id - 1
                    ? 'bg-primary-orange w-8'
                    : 'bg-gray-300 hover:bg-primary-yellow'
                }`}
                aria-label={`Go to partner ${partner.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;