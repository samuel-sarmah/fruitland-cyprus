import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-yellow-400 text-white py-12">
          <div className="container mx-auto pt-10 px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display">
                Generations of Excellence
              </h1>
              <p className="text-base md:text-lg leading-relaxed opacity-95 max-w-3xl mx-auto">
                From a small family orchard to Cyprus's premier citrus destination since 1985
              </p>
            </div>
          </div>
        </section>

        {/* Family Story Section */}
        <section className="pt-4 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-5">
                <div>
                  <div className="mb-4">
                    <div className="inline-flex items-center space-x-2 bg-primary-orange text-white px-3 py-1.5 rounded-full mb-3 text-sm">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="font-semibold">Our Heritage</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Where Tradition Meets Innovation
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      In 1985, Andreas Papadopoulos planted his first 50 orange trees in the fertile
                      soil of Cyprus's Limassol district. What began as a modest family operation
                      has blossomed into a 200-acre agricultural enterprise, serving customers across
                      Europe and beyond.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Today, three generations of the Papadopoulos family work together - combining
                      time-honored Cypriot farming traditions with modern sustainable practices
                      to deliver the finest citrus fruits the Mediterranean has to offer.
                    </p>
                  </div>
                </div>
                <div className="grid ">
                  <div className="text-center group cursor-pointer">
                    <div className="relative mb-3 overflow-hidden rounded-xl">
                      <div className=" aspect-square bg-orange-600 flex items-center justify-center transform transition-transform group-hover:scale-105">
                        <div className="text-white text-center">
                          <div className="text-3xl mb-1">👨‍🌾</div>
                          <div className="text-base font-bold">Andreas</div>
                          <div className="text-xs opacity-80">Founder</div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-base font-bold mb-1 text-gray-900">Andreas Papadopoulos</h4>
                    <p className="text-primary-orange font-semibold mb-2 text-sm">Founder & Visionary</p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      The patriarch who started it all. His dedication to quality over quantity
                      established our reputation for excellence that continues to this day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                Our Journey Through Time
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Key milestones that shaped our family farm into what it is today
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary-orange mb-2">2000</div>
                  <h3 className="text-base font-bold mb-2 text-gray-900">The Beginning</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Andreas plants first 50 orange trees, establishing our commitment to quality over quantity.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-secondary-green mb-2">2010</div>
                  <h3 className="text-base font-bold mb-2 text-gray-900">Expansion</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Elena introduces organic practices and expands to 100 acres. First exports to Europe begin.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary-yellow mb-2">2015</div>
                  <h3 className="text-base font-bold mb-2 text-gray-900">Innovation</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Nikos joins, bringing quality systems and online sales. Farm reaches 200 acres.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-green-600 mb-2">Today</div>
                  <h3 className="text-base font-bold mb-2 text-gray-900">Global Impact</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Serving 15+ countries with premium citrus fruits, sustainable practices, and family values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 text-green">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-center">
              <div className="p-3">
                <div className="text-3xl md:text-4xl font-bold mb-1">200+</div>
                <div className="text-sm opacity-90">Acres of Orchards</div>
              </div>
              <div className="p-3">
                <div className="text-3xl md:text-4xl font-bold mb-1">4,000+</div>
                <div className="text-sm opacity-90">Citrus Trees</div>
              </div>
              <div className="p-3">
                <div className="text-3xl md:text-4xl font-bold mb-1">15</div>
                <div className="text-sm opacity-90">Countries Served</div>
              </div>
              <div className="p-3">
                <div className="text-3xl md:text-4xl font-bold mb-1">39</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}