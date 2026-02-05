import { products } from '@/data';

const ProductShowcase = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Our Premium Citrus Selection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative min-h-[500px] md:min-h-[600px] flex items-end p-8 md:p-12 ${
                index % 2 === 0 ? 'bg-orange-500' : 'bg-yellow-400'
              }`}
              style={{ backgroundColor: product.backgroundColor }}
            >
              <div className="relative z-10 text-white max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {product.name}
                </h3>
                <p className="text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="/products"
                  className={`inline-block font-semibold py-3 px-6 rounded-lg transition-colors ${
                    product.backgroundColor === '#ffd300' || product.backgroundColor === '#ff8c42'
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-primary-orange text-white hover:bg-orange-600'
                  }`}
                >
                  Learn More
                </a>
              </div>
              
              {/* Product Image */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;