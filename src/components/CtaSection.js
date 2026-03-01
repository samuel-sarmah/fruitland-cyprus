import { ArrowRight } from 'lucide-react';

const CtaSection = ({ cta }) => {
  const heading = cta?.heading || 'Ready to Taste the Best Fruits from Cyprus?';
  const description = cta?.description || 'Join our family of satisfied customers who enjoy premium quality fruits delivered fresh from our Cyprus orchards.';
  const primaryText = cta?.primaryButtonText || 'Browse Our Products';
  const primaryLink = cta?.primaryButtonLink || '/products';
  const secondaryText = cta?.secondaryButtonText || 'Contact Us';
  const secondaryLink = cta?.secondaryButtonLink || '/contact';

  return (
    <section className="py-20  bg-yellow-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {heading}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryLink}
            className="inline-flex items-center justify-center bg-yellow text-primary-orange font-semibold py-4 px-8 rounded-lg  transition-colors text-lg"
          >
            {primaryText}
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href={secondaryLink}
            className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg  hover:text-primary-orange transition-colors text-lg"
          >
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;