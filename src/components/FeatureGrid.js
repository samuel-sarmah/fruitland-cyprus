import { features } from '@/data';

const FeatureGrid = () => {
  return (
    <section className="py-10 md:py-15 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary-green">
          Why Choose Fruitlandcyprus?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center group cursor-pointer"
            >
              <div className="mb-6 flex justify-center">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-green mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;