import { productCategories } from '@/data';

const ProductShowcase = () => {
const categories = Object.values(productCategories).map(category => ({
    name: category.name,
    image: category.products[0]?.image || '/images/products/default.jpeg',
    description: category.description,
    link: `/products?category=${Object.keys(productCategories).find(key => productCategories[key] === category)?.replace('s', '') || 'all'}`
  }));

  return (
    <section className="py-6 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Our Premium Categories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer block"
            >
              {/* Full-Width Category Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100" />
                
                {/* Category Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold">
                  <h3 className="text-lg font-bold mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed mb-2 line-clamp-2">
                    {category.description}
                  </p>
                   <div className="flex items-center gap-2 text-yellow-300 font-semibold text-xs">
                    Explore Category
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* View All Products Button */}
        <div className="text-center mt-8">
          <a
            href="/products"
            className="inline-flex items-center gap-3 bg-[#ff8c42] text-white px-6 py-3 rounded-lg hover:bg-[#e07535] transition-all duration-300 text-base font-semibold"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;