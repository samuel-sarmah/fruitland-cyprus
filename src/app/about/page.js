import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-orange to-orange-600 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
                Three Generations of Excellence
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95 max-w-3xl mx-auto">
                From a small family orchard to Cyprus's premier citrus destination since 1985
              </p>
            </div>
          </div>
        </section>

        {/* Family Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center space-x-2 bg-primary-orange text-white px-4 py-2 rounded-full mb-4">
                      <span className="w-3 h-3 bg-white rounded-full"></span>
                      <span className="font-semibold">Our Heritage</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      Where Tradition Meets Innovation
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      In 1985, Andreas Papadopoulos planted his first 50 orange trees in the fertile 
                      soil of Cyprus's Limassol district. What began as a modest family operation 
                      has blossomed into a 200-acre agricultural enterprise, serving customers across 
                      Europe and beyond.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Today, three generations of the Papadopoulos family work together - combining 
                      time-honored Cypriot farming traditions with modern sustainable practices 
                      to deliver the finest citrus fruits the Mediterranean has to offer.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-orange to-secondary-green rounded-3xl p-1">
                    <div className="bg-white rounded-3xl p-8">
                      <div className="aspect-square bg-gradient-to-br from-primary-orange/10 to-secondary-green/10 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🌳</div>
                          <div className="text-3xl font-bold text-gray-900">39 Years</div>
                          <div className="text-lg text-gray-600">of Excellence</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Family Members */}
              <div className="mb-20">
                <h3 className="text-3xl font-bold text-center mb-16 text-gray-900">
                  Meet the Family Behind the Farm
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group cursor-pointer">
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <div className="aspect-square bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center transform transition-transform group-hover:scale-105">
                        <div className="text-white text-center">
                          <div className="text-5xl mb-2">👨‍🌾</div>
                          <div className="text-xl font-bold">Andreas</div>
                          <div className="text-sm opacity-80">Founder</div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Andreas Papadopoulos</h4>
                    <p className="text-primary-orange font-semibold mb-3">Founder & Visionary</p>
                    <p className="text-gray-600 leading-relaxed">
                      The patriarch who started it all. His dedication to quality over quantity 
                      established our reputation for excellence that continues to this day.
                    </p>
                  </div>
                  
                  <div className="text-center group cursor-pointer">
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <div className="aspect-square bg-gradient-to-br from-secondary-green to-green-600 flex items-center justify-center transform transition-transform group-hover:scale-105">
                        <div className="text-white text-center">
                          <div className="text-5xl mb-2">👩‍🌾</div>
                          <div className="text-xl font-bold">Elena</div>
                          <div className="text-sm opacity-80">Director</div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Elena Papadopoulou</h4>
                    <p className="text-primary-orange font-semibold mb-3">Farm Director</p>
                    <p className="text-gray-600 leading-relaxed">
                      Second-generation leader who expanded to 200 acres and introduced 
                      sustainable farming practices while building our direct-to-customer model.
                    </p>
                  </div>
                  
                  <div className="text-center group cursor-pointer">
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <div className="aspect-square bg-gradient-to-br from-primary-yellow to-yellow-500 flex items-center justify-center transform transition-transform group-hover:scale-105">
                        <div className="text-black text-center">
                          <div className="text-5xl mb-2">👨‍💼</div>
                          <div className="text-xl font-bold">Nikos</div>
                          <div className="text-sm opacity-80">Operations</div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Nikos Papadopoulos</h4>
                    <p className="text-primary-orange font-semibold mb-3">Operations Manager</p>
                    <p className="text-gray-600 leading-relaxed">
                      Third-generation innovator bringing modern technology while maintaining 
                      traditional values and expanding our international reach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Journey Through Time
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Key milestones that shaped our family farm into what it is today
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-primary-orange mb-4">1985</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">The Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Andreas plants first 50 orange trees, establishing our commitment to quality over quantity.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-secondary-green mb-4">1995</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Expansion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Elena introduces organic practices and expands to 100 acres. First exports to Europe begin.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-primary-yellow mb-4">2010</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nikos joins, bringing quality systems and online sales. Farm reaches 200 acres.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-purple-600 mb-4">Today</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Global Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Serving 15+ countries with premium citrus fruits, sustainable practices, and family values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-r from-secondary-green to-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              <div className="p-6">
                <div className="text-5xl md:text-6xl font-bold mb-3">200+</div>
                <div className="text-lg opacity-90">Acres of Orchards</div>
              </div>
              <div className="p-6">
                <div className="text-5xl md:text-6xl font-bold mb-3">4,000+</div>
                <div className="text-lg opacity-90">Citrus Trees</div>
              </div>
              <div className="p-6">
                <div className="text-5xl md:text-6xl font-bold mb-3">15</div>
                <div className="text-lg opacity-90">Countries Served</div>
              </div>
              <div className="p-6">
                <div className="text-5xl md:text-6xl font-bold mb-3">39</div>
                <div className="text-lg opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}