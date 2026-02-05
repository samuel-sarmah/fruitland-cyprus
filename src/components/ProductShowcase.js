import { products } from '@/data';

const ProductShowcase = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Premium Citrus Selection
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image - Upper Half */}
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info - Bottom Half */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                <a
                  href="/products"
                  className="inline-block font-semibold py-2 px-4 rounded-lg transition-colors text-sm bg-[#ff8c42] text-white hover:bg-[#e07535]"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;