import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';
import { productCategories } from '@/data';

export default async function ProductPage({ params }) {
  const { id } = await params;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProductDetail productId={id} productCategories={productCategories} />
      </main>
      <Footer />
    </div>
  );
}