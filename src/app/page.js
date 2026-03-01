import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import FeatureGrid from '@/components/FeatureGrid';
import ProductShowcase from '@/components/ProductShowcase';
import PartnersCarousel from '@/components/PartnersCarousel';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { heroSlides, features, productCategories, partners } from '@/data';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel slides={heroSlides} />
        <FeatureGrid features={features} />
        <ProductShowcase categories={productCategories} />
        <PartnersCarousel partners={partners} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
