import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-orange to-orange-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                Our Family Story
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                Three generations of citrus farming excellence in Cyprus since 1985
              </p>
            </div>
          </div>
        </section>

        {/* Family Owners Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Meet Our Family
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Founder */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/images/family/founder.jpg"
                    alt="Andreas Papadopoulos - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Andreas Papadopoulos</h3>
                <p className="text-lg text-primary-orange font-semibold mb-4">Founder & Patriarch</p>
                <p className="text-gray-600 leading-relaxed">
                  Started our family farm in 1985 with just 50 orange trees and a dream. 
                  His dedication to quality and traditional farming methods laid the foundation 
                  for everything we do today.
                </p>
              </div>

              {/* Current Generation */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/images/family/current-generation.jpg"
                    alt="Elena Papadopoulou - Current Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Elena Papadopoulou</h3>
                <p className="text-lg text-primary-orange font-semibold mb-4">Farm Director</p>
                <p className="text-gray-600 leading-relaxed">
                  Second-generation farmer who expanded our orchards to 200 acres. 
                  Elena introduced sustainable farming practices and built our direct-to-customer model.
                </p>
              </div>

              {/* Next Generation */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/images/family/next-generation.jpg"
                    alt="Nikos Papadopoulos - Operations Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Nikos Papadopoulos</h3>
                <p className="text-lg text-primary-orange font-semibold mb-4">Operations Manager</p>
                <p className="text-gray-600 leading-relaxed">
                  Third-generation farmer bringing modern technology while maintaining 
                  traditional values. Nikos manages our quality control and international expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Farm History */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Our Journey Through Time
              </h2>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1985
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">The Beginning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Andreas Papadopoulos plants the first 50 orange trees in Limassol district. 
                      Focus on quality over quantity establishes our reputation in local markets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-secondary-green text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1995
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Expansion & Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Farm expands to 100 acres. Elena introduces drip irrigation and organic farming practices. 
                      First exports to European markets begin.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary-yellow text-black rounded-full flex items-center justify-center font-bold text-xl">
                    2010
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Modern Technology</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nikos joins the family business, introducing quality control systems and online sales. 
                      Farm reaches 200 acres with 4,000+ trees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                    Today
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Global Reach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Three-generation farm serving customers across Europe and beyond. 
                      Commitment to sustainable farming and premium quality stronger than ever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Farm Stats */}
        <section className="py-20 bg-secondary-green text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-3">39</div>
                <div className="text-lg opacity-90">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-3">200+</div>
                <div className="text-lg opacity-90">Acres of Orchards</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-3">4,000+</div>
                <div className="text-lg opacity-90">Citrus Trees</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-3">15</div>
                <div className="text-lg opacity-90">Countries Served</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}