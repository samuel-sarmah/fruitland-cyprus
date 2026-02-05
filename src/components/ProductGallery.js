'use client';

import { useState } from 'react';
import { products } from '@/data';

const ProductGallery = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
              
              {/* Product Information */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-orange transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-4xl font-bold text-primary-orange mb-2">16+</div>
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
    </section>
  );
};

export default ProductGallery;