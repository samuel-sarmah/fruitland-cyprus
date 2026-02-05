import { create } from 'zustand';

export const useAppStore = create((set) => ({
  isMenuOpen: false,
  currentSlide: 0,
  setIsMenuOpen: (open) => set({ isMenuOpen: open }),
  setCurrentSlide: (slide) => set({ currentSlide: slide }),
}));