import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';
import { getProductCategories } from '@/sanity/queries';

export default async function ProductPage({ params }) {
  const categories = await getProductCategories();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProductDetail productId={params.id} productCategories={categories} />
      </main>
      <Footer />
    </div>
  );
}