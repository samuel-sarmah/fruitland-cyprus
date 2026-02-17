import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import FeatureGrid from '@/components/FeatureGrid';
import ProductShowcase from '@/components/ProductShowcase';
import PartnersCarousel from '@/components/PartnersCarousel';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { getHomeContent } from '@/sanity/queries';

export default async function Home() {
  const sanity = await getHomeContent();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel slides={sanity?.heroSlides} />
        <FeatureGrid features={sanity?.features} />
        <ProductShowcase categories={sanity?.productCategories} />
        <PartnersCarousel partners={sanity?.partners} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
