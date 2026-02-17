import { client } from './client';
import { sanityEnabled } from './env';
import { urlFor } from './image';

// --- GROQ queries ---

const homeQuery = `{
  "heroSlides": *[_type == "heroSlide"] | order(order asc) {
    _id, title, subtitle, ctaText, ctaLink, backgroundImage
  },
  "features": *[_type == "feature"] | order(order asc) {
    _id, icon, title, description
  },
  "partners": *[_type == "partner"] | order(order asc) {
    _id, name, logo
  },
  "productCategories": *[_type == "productCategory"] | order(order asc) {
    _id, key, name, description,
    products[] { productId, name, image, description, characteristics, season, origin }
  }
}`;

const categoriesQuery = `*[_type == "productCategory"] | order(order asc) {
  _id, key, name, description,
  products[] { productId, name, image, description, characteristics, season, origin }
}`;

// --- Normalizers (Sanity shape → app shape) ---

const normalizeCategories = (raw) => {
  if (!raw?.length) return null;
  return raw.reduce((acc, cat) => {
    acc[cat.key] = {
      name: cat.name,
      description: cat.description,
      products: (cat.products || []).map((p) => ({
        id: p.productId,
        name: p.name,
        image: urlFor(p.image) || '',
        description: p.description,
        characteristics: p.characteristics || [],
        season: p.season || '',
        origin: p.origin || '',
      })),
    };
    return acc;
  }, {});
};

const normalizeSlides = (raw) =>
  (raw || []).map((s, i) => ({
    id: i + 1,
    title: s.title,
    subtitle: s.subtitle,
    backgroundImage: urlFor(s.backgroundImage) || '',
    ctaText: s.ctaText,
    ctaLink: s.ctaLink,
  }));

const normalizePartners = (raw) =>
  (raw || []).map((p, i) => ({
    id: i + 1,
    name: p.name,
    logo: urlFor(p.logo) || '',
  }));

// --- Public fetchers ---

export async function getHomeContent() {
  if (!sanityEnabled || !client) return null;
  try {
    const data = await client.fetch(homeQuery);
    return {
      heroSlides: normalizeSlides(data.heroSlides),
      features: (data.features || []).map((f, i) => ({
        id: i + 1,
        icon: f.icon,
        title: f.title,
        description: f.description,
      })),
      partners: normalizePartners(data.partners),
      productCategories: normalizeCategories(data.productCategories),
    };
  } catch (err) {
    console.error('Sanity fetch (home):', err.message);
    return null;
  }
}

export async function getProductCategories() {
  if (!sanityEnabled || !client) return null;
  try {
    const raw = await client.fetch(categoriesQuery);
    return normalizeCategories(raw);
  } catch (err) {
    console.error('Sanity fetch (categories):', err.message);
    return null;
  }
}
