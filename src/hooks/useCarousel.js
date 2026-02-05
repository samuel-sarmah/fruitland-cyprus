import { useState, useEffect } from 'react';

const useCarousel = (items, interval = 6000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  return { currentIndex, next, prev, goTo };
};

export default useCarousel;