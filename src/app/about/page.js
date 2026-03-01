import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  const heroTitle = 'Generations of Excellence';
  const heroSubtitle = "From a small family orchard to Cyprus's premier fruit destination since 2003";
  const founder = {
    sectionLabel: 'Our Heritage',
    heading: 'Where Tradition Meets Innovation',
    paragraph1: 'In 2003, <strong class="text-gray-900"> Erol Hasin Baycan </strong> returned to Cyprus after time spent in England, taking over the family farm that had been nurtured by his parents for years. What began as a traditional farm has transformed into something special\u2014a place where passion for quality meets innovation in agriculture.',
    paragraph2: 'With guidance from expert agronomists and insights from Israeli farming pioneers, <strong>Erol</strong> invested in cultivating premium tropical and subtropical fruits. Today, Fruitlandcyprus specializes in avocados, mangoes, and fruit varieties that thrive in Cyprus\u2019s unique Mediterranean climate.',
    founderName: 'Erol Hasin Baycan',
    founderRole: 'Founder & Visionary',
    founderBio: 'The patriarch who started it all. His dedication to quality over quantity established our reputation for excellence that continues to this day.',
    founderEmoji: '\u2019\ud83d\udc68\u200d\ud83c\udf3e',
  };
  const differentiators = {
    heading: 'What makes us different',
    subtitle: 'Key milestones that shaped our farm into what it is today',
    items: [
      { title: 'Modern Techniques', description: "Fruitlandcyprus embraces the latest advances in irrigation and cultivation. We combine traditional care with cutting-edge agricultural methods to produce fruit that's both exceptional in quality and responsibly grown." },
      { title: 'Pesticide-Free', description: "Your health matters to us. That's why we're committed to pesticide-free cultivation practices, ensuring every piece of fruit meets the highest standards of quality and safety." },
      { title: 'Freshness You Can Taste', description: 'We harvest daily for the local market, which means the fruit you enjoy was likely growing on our trees just hours before. This commitment to freshness ensures peak flavor and nutrition in every bite.' },
      { title: 'Our Farm', description: 'Every tree receives individual attention, and every harvest is handled with care. This is farming the way it should be\u2014personal, purposeful, and rooted in respect for the land.' },
    ],
  };
  const stats = [
    { value: '50+', label: 'Acres of Orchards' },
    { value: '4,000+', label: 'Fruit Trees' },
    { value: '2+', label: 'Countries Served' },
    { value: '25+', label: 'Years of Excellence' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-yellow-400 text-white py-12">
          <div className="container mx-auto pt-10 px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display">
                {heroTitle}
              </h1>
              <p className="text-base md:text-lg leading-relaxed opacity-95 max-w-3xl mx-auto">
                {heroSubtitle}
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
                      <span className="font-semibold">{founder.sectionLabel}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {founder.heading}
                    </h2>
                    <p className="text-sm text-black-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: founder.paragraph1 }} />
                    <p className="text-sm text-black-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: founder.paragraph2 }} />
                  </div>
                </div>
                <div className="grid">
                  <div className="text-center group cursor-pointer">
                    <div className="relative mb-3 overflow-hidden rounded-xl">
                      <div className="bg-orange-600 flex items-center justify-center transform transition-transform group-hover:scale-105">
                        <div className="mb-6 flex justify-center">
                          <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                            {founder.founderEmoji}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-base font-bold mb-1 text-gray-900">{founder.founderName}</h4>
                    <p className="text-primary-orange font-semibold mb-2 text-sm">{founder.founderRole}</p>
                    <p className="text-black-600 leading-relaxed text-sm">
                      {founder.founderBio}
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
                {differentiators.heading}
              </h2>
              <p className="text-sm text-black-600 leading-relaxed">
                {differentiators.subtitle}
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {differentiators.items.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-base font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-black-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 text-green">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-center">
              {stats.map((stat, index) => (
              <div key={index} className="p-3">
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
