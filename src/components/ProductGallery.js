'use client';

import { useState, useRef, useEffect } from 'react';
import { productCategories } from '@/data';
import ProductModal from '@/components/ProductModal';
import { ChevronDown } from 'lucide-react';

const ProductGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = ['all', ...Object.keys(productCategories)];

  const getCategoryLabel = (category) =>
    category === 'all' ? 'All Products' : productCategories[category]?.name || category;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const getFilteredProducts = () => {
    if (selectedCategory === 'all') {
      return Object.values(productCategories).flatMap(category => category.products);
    }
    return productCategories[selectedCategory]?.products || [];
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Filter Dropdown */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-[#ff8c42] text-white px-6 py-3 rounded-lg font-medium text-sm shadow-md hover:bg-[#e07535] transition-all duration-200"
            >
              {getCategoryLabel(selectedCategory)}
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 animate-dropdown">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-orange-50 text-[#ff8c42] font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {getCategoryLabel(category)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getFilteredProducts().map((product) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer block"
            >
              {/* Full-Width Product Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent opacity-100" />
                
                {/* Product Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-yellow-300 font-semibold text-sm">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-4xl font-bold text-primary-orange mb-2">20+</div>
            <div className="text-gray-600 font-medium">Premium Varieties</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-4xl font-bold text-secondary-green mb-2">300+</div>
            <div className="text-gray-600 font-medium">Days of Sunshine</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-4xl font-bold text-yellow-600 mb-2">24</div>
            <div className="text-gray-600 font-medium">Hours Fresh</div>
          </div>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProductGallery;