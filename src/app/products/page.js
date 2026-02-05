import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { products } from '@/data';

export default function Products() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-orange to-orange-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                Our Premium Products
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                From our sunny Cyprus orchards directly to your table
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative min-h-[500px] md:min-h-[600px] flex items-end p-8 md:p-12"
                  style={{ backgroundColor: product.backgroundColor }}
                >
                  <div className="relative z-10 text-white max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {product.name}
                    </h3>
                    <p className="text-lg mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="text-sm opacity-90">
                        ✓ Sun-ripened for maximum sweetness
                      </div>
                      <div className="text-sm opacity-90">
                        ✓ Hand-picked at peak freshness
                      </div>
                      <div className="text-sm opacity-90">
                        ✓ No artificial preservatives
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">
                        <span className="font-semibold">Available:</span> Year-round
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Origin:</span> Cyprus
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className={`inline-block font-semibold py-3 px-6 rounded-lg transition-colors ${
                        product.backgroundColor === '#ffd300' || product.backgroundColor === '#ff8c42'
                          ? 'bg-white text-gray-900 hover:bg-gray-100'
                          : 'bg-white text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      Order Now
                    </a>
                  </div>
                  
                  {/* Product Image */}
                  <div className="absolute inset-0 flex items-start justify-center opacity-40">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-2/3 object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ordering Information */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                How to Order
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Choose Your Products</h3>
                  <p className="text-gray-600">
                    Browse our selection and select the perfect citrus fruits for your needs.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-secondary-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Place Your Order</h3>
                  <p className="text-gray-600">
                    Add to cart and checkout with our secure payment system.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary-yellow text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Fresh Delivery</h3>
                  <p className="text-gray-600">
                    Receive your order fresh from our orchard within 2-3 days.
                  </p>
                </div>
              </div>

              <button className="bg-primary-orange text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors">
                Start Shopping
              </button>
            </div>
          </div>
        </section>

        {/* Quality Guarantee */}
        <section className="py-20 bg-secondary-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Quality Promise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary-yellow">100% Fresh Guarantee</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    If you're not completely satisfied with the freshness of our fruits, 
                    we'll replace them or refund your purchase - no questions asked.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary-yellow">Farm-Direct Quality</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Every piece of fruit is hand-picked, inspected, and shipped directly 
                    from our Cyprus farm to ensure peak freshness and flavor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}