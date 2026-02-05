import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Products() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-orange to-orange-600 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
                Our Premium Citrus Collection
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95 max-w-3xl mx-auto">
                Hand-picked, sun-ripened perfection from the heart of Cyprus
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Oranges Section */}
              <div className="mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-orange-100 text-primary-orange px-4 py-2 rounded-full mb-6">
                      <span className="w-3 h-3 bg-primary-orange rounded-full"></span>
                      <span className="font-semibold">Premium Citrus</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      Cyprus Premium Oranges
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      Our flagship variety, renowned for their exceptional sweetness and juicy texture. 
                      Each orange is carefully hand-picked at peak ripeness, ensuring maximum flavor 
                      and vitamin content. Perfect for fresh juicing or eating straight from the tree.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary-orange mb-2">150%</div>
                        <div className="text-sm text-gray-600">Daily Vitamin C</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary-orange mb-2">Zero</div>
                        <div className="text-sm text-gray-600">Artificial Additives</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-primary-orange rounded-full mr-3"></span>
                        <span className="text-gray-700">300+ days of Mediterranean sunshine</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-primary-orange rounded-full mr-3"></span>
                        <span className="text-gray-700">Hand-picked at optimal ripeness</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-primary-orange rounded-full mr-3"></span>
                        <span className="text-gray-700">Tree-ripened, not greenhouse</span>
                      </div>
                    </div>

                    <button className="mt-8 bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                      Order Premium Oranges
                    </button>
                  </div>
                  
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1547514701-42782101795e?w=600&h=500&fit=crop"
                      alt="Premium Cyprus Oranges"
                      className="rounded-3xl shadow-2xl w-full h-auto"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-primary-orange text-white px-6 py-3 rounded-full font-bold shadow-lg">
                      Fresh Daily
                    </div>
                  </div>
                </div>
              </div>

              {/* Mangoes Section */}
              <div className="mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-6">
                      <span className="w-3 h-3 bg-yellow-700 rounded-full"></span>
                      <span className="font-semibold">Tropical Delight</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      Sweet Cyprus Mangoes
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      Our Mediterranean-grown mangoes offer the perfect balance of sweetness and 
                      tropical aroma. Grown in Cyprus's unique climate that produces exceptional 
                      flavor profiles not found elsewhere. Each mango is a taste of sunshine.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-700 mb-2">A-Grade</div>
                        <div className="text-sm text-gray-600">Quality Certified</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-700 mb-2">Fiber Rich</div>
                        <div className="text-sm text-gray-600">Natural Source</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-yellow-700 rounded-full mr-3"></span>
                        <span className="text-gray-700">Unique Cyprus terroir flavor</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-yellow-700 rounded-full mr-3"></span>
                        <span className="text-gray-700">Perfect ripeness guaranteed</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-yellow-700 rounded-full mr-3"></span>
                        <span className="text-gray-700">No artificial ripening</span>
                      </div>
                    </div>

                    <button className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                      Order Sweet Mangoes
                    </button>
                  </div>
                  
                  <div className="lg:order-1">
                    <img
                      src="https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&h=500&fit=crop"
                      alt="Sweet Cyprus Mangoes"
                      className="rounded-3xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Avocados Section */}
              <div className="mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-green-100 text-secondary-green px-4 py-2 rounded-full mb-6">
                      <span className="w-3 h-3 bg-secondary-green rounded-full"></span>
                      <span className="font-semibold">Superfood</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      Premium Cyprus Avocados
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      Rich, creamy avocados with perfect texture and nutrition. Our Cyprus climate 
                      produces avocados with superior creaminess and flavor, ideal for Mediterranean 
                      cuisine or healthy eating enthusiasts.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-secondary-green mb-2">20+</div>
                        <div className="text-sm text-gray-600">Vitamins & Minerals</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-secondary-green mb-2">Heart</div>
                        <div className="text-sm text-gray-600">Healthy Fats</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-secondary-green rounded-full mr-3"></span>
                        <span className="text-gray-700">Perfect creamy texture</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-secondary-green rounded-full mr-3"></span>
                        <span className="text-gray-700">Peak ripeness delivery</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-secondary-green rounded-full mr-3"></span>
                        <span className="text-gray-700">Sustainably grown</span>
                      </div>
                    </div>

                    <button className="mt-8 bg-secondary-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Order Creamy Avocados
                    </button>
                  </div>
                  
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=500&fit=crop"
                      alt="Premium Cyprus Avocados"
                      className="rounded-3xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Mandarins Section */}
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
                      <span className="w-3 h-3 bg-orange-700 rounded-full"></span>
                      <span className="font-semibold">Family Favorite</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      Sweet Cyprus Mandarins
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      Easy-to-peel, seedless mandarins that are perfect for families. 
                      Naturally sweet with balanced acidity, these make healthy snacking 
                      effortless and delicious for all ages.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-700 mb-2">Seedless</div>
                        <div className="text-sm text-gray-600">Easy Eating</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-700 mb-2">Kid</div>
                        <div className="text-sm text-gray-600">Friendly</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-orange-700 rounded-full mr-3"></span>
                        <span className="text-gray-700">Easy to peel</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-orange-700 rounded-full mr-3"></span>
                        <span className="text-gray-700">No mess, no fuss</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-orange-700 rounded-full mr-3"></span>
                        <span className="text-gray-700">Perfect lunchbox size</span>
                      </div>
                    </div>

                    <button className="mt-8 bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-colors">
                      Order Sweet Mandarins
                    </button>
                  </div>
                  
                  <div className="lg:order-1">
                    <img
                      src="https://images.unsplash.com/photo-1546548970-71785318a17b?w=600&h=500&fit=crop"
                      alt="Sweet Cyprus Mandarins"
                      className="rounded-3xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="py-24 bg-gradient-to-r from-primary-orange to-secondary-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Quality Promise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Every fruit inspected to meet our exacting standards for flavor, texture, and appearance.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">🚚</div>
                  <h3 className="text-2xl font-bold mb-4">Farm Direct</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Shipped directly from our orchard to you, ensuring maximum freshness and peak flavor.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">💯</div>
                  <h3 className="text-2xl font-bold mb-4">Satisfaction Guaranteed</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    If you're not completely satisfied, we'll replace or refund your order - no questions.
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