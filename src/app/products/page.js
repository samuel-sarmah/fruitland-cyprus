import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';

export default function Products() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-yellow-400 text-white pt-18 p-5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display">
                Our Premium Collection
              </h1>
              <p className="text-base md:text-lg leading-relaxed opacity-95 max-w-3xl mx-auto">
                Hand-picked, sun-ripened perfection from the heart of Cyprus
              </p>
            </div>
          </div>
        </section>

        {/* Product Gallery with Categories */}
        <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
          <ProductGallery />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}