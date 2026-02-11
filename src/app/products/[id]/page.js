import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';

export default function ProductPage({ params }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProductDetail productId={params.id} />
      </main>
      <Footer />
    </div>
  );
}