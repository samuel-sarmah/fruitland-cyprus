'use client';

import { useEffect, useCallback } from 'react';
import { X, MapPin, Calendar, Leaf } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row max-h-[90vh]">
          {/* Image Section */}
          <div className="relative md:w-1/2 h-64 md:h-auto min-h-[280px] flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
            <div className="mb-1">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Premium Quality
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {product.name}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              {product.description}
            </p>

            {/* Characteristics */}
            {product.characteristics && product.characteristics.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Leaf size={16} className="text-green-600" />
                  Characteristics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.characteristics.map((char, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Season & Origin */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {product.season && (
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={14} className="text-orange-500" />
                    <span className="text-xs font-semibold text-orange-800 uppercase tracking-wide">Season</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800">{product.season}</p>
                </div>
              )}
              {product.origin && (
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-blue-500" />
                    <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Origin</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800">{product.origin}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center w-full bg-[#ff8c42] hover:bg-[#e07535] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-sm"
            >
              Inquire About This Product
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-in {
          animation: modal-in 0.25s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductModal;
