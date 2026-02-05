import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20  bg-yellow-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Taste the Best Citrus from Cyprus?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Join our family of satisfied customers who enjoy premium quality citrus fruits delivered fresh from our Cyprus orchards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="inline-flex items-center justify-center bg-white text-primary-orange font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Browse Our Products
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-orange transition-colors text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;