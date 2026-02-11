'use client';

import { useState } from 'react';
import { productCategories } from '@/data';
import { useParams } from 'next/navigation';

const ProductDetail = () => {
  const params = useParams();
  const allProducts = Object.values(productCategories).flatMap(category => category.products);
  const product = allProducts.find(p => p.id === parseInt(params.id));
  const [isExpanded, setIsExpanded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <a href="/products" className="inline-block bg-[#ff8c42] text-white px-6 py-3 rounded-lg hover:bg-[#e07535] transition-colors">
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Card with Full-Width Image */}
      <div className="relative h-screen overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Product Info Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                {product.description}
              </p>
              
              {/* Expand Button */}
              <button
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-3 bg-[#ff8c42] text-white px-8 py-4 rounded-lg hover:bg-[#e07535] transition-all duration-300 text-lg font-semibold"
              >
                View Full Details
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Expanded Details Section */}
      {isExpanded && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="relative min-h-screen">
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-8 right-8 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Expanded Content */}
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left Column - Product Details */}
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      About {product.name}
                    </h2>
                    
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Grown in the fertile soils of Cyprus under the Mediterranean sun, 
                        our {product.name.toLowerCase()} represent the pinnacle of quality and taste. 
                        Each fruit is carefully hand-picked at the peak of ripeness to ensure 
                        maximum flavor and nutritional value.
                      </p>
                      
                      <p>
                        With over 300 days of sunshine annually and perfect growing conditions, 
                        our orchards produce fruits that are naturally sweet, juicy, and packed 
                        with vitamins. We combine traditional farming methods with modern quality 
                        standards to bring you the best that Cyprus has to offer.
                      </p>
                      
                      <div className="bg-gray-50 rounded-xl p-8 mt-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h3>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Origin</dt>
                            <dd className="text-lg font-semibold text-gray-900">Cyprus</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Harvest Season</dt>
                            <dd className="text-lg font-semibold text-gray-900">Year-round</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Storage</dt>
                            <dd className="text-lg font-semibold text-gray-900">Room temperature</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Shelf Life</dt>
                            <dd className="text-lg font-semibold text-gray-900">7-10 days</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Features Cards */}
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-[#ff8c42]/10 to-[#ffd300]/10 rounded-2xl p-8 border border-[#ff8c42]/20">
                      <div className="text-4xl mb-4">🌞</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Sun-Ripened Quality</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Each fruit receives optimal sunshine exposure, developing natural sweetness 
                        and vibrant colors that indicate peak ripeness and nutritional content.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#4a7c2e]/10 to-[#ffd300]/10 rounded-2xl p-8 border border-[#4a7c2e]/20">
                      <div className="text-4xl mb-4">👨‍🌾</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Expertly Grown</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our family's three generations of farming expertise ensure that each fruit 
                        meets our strict quality standards for taste, texture, and appearance.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#ffd300]/10 to-[#ff8c42]/10 rounded-2xl p-8 border border-[#ffd300]/30">
                      <div className="text-4xl mb-4">🚚</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Fresh Delivery</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Direct from our orchards to your table, ensuring maximum freshness and 
                        preserving the natural flavors that make Cyprus fruits exceptional.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <a
                        href="/contact"
                        className="inline-block w-full text-center bg-[#ff8c42] text-white px-8 py-4 rounded-lg hover:bg-[#e07535] transition-colors text-lg font-semibold"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <div className="mt-24">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allProducts
                      .filter(p => p.id !== product.id)
                      .slice(0, 4)
                      .map((relatedProduct) => (
                        <a
                          key={relatedProduct.id}
                          href={`/products/${relatedProduct.id}`}
                          className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={relatedProduct.image}
                              alt={relatedProduct.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="p-5">
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#ff8c42] transition-colors">
                              {relatedProduct.name}
                            </h4>
                            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                              {relatedProduct.description}
                            </p>
                          </div>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;