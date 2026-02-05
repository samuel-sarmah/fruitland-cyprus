import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import FeatureGrid from '@/components/FeatureGrid';
import ProductShowcase from '@/components/ProductShowcase';
import PartnersCarousel from '@/components/PartnersCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel />
        <FeatureGrid />
        <ProductShowcase />
        <PartnersCarousel />
      </main>
      <Footer />
    </div>
  );
}
