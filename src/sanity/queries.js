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
    "products": *[_type == "productItem" && category._ref == ^._id] | order(order asc) {
      productId, name, image, description, characteristics, season, origin
    }
  }
}`;

const categoriesQuery = `*[_type == "productCategory"] | order(order asc) {
  _id, key, name, description,
  "products": *[_type == "productItem" && category._ref == ^._id] | order(order asc) {
    productId, name, image, description, characteristics, season, origin
  }
}`;

const aboutQuery = `*[_type == "aboutPage"][0] {
  heroTitle, heroSubtitle, founder, differentiators, stats
}`;

const contactQuery = `*[_type == "contactPage"][0] {
  heroTitle, heroSubtitle, socialLinks, formSuccessMessage
}`;

const ctaQuery = `*[_type == "ctaSection"][0] {
  heading, description, primaryButtonText, primaryButtonLink, secondaryButtonText, secondaryButtonLink
}`;

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteName, logo, navItems, footer
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

export async function getAboutContent() {
  if (!sanityEnabled || !client) return null;
  try {
    return await client.fetch(aboutQuery);
  } catch (err) {
    console.error('Sanity fetch (about):', err.message);
    return null;
  }
}

export async function getContactContent() {
  if (!sanityEnabled || !client) return null;
  try {
    return await client.fetch(contactQuery);
  } catch (err) {
    console.error('Sanity fetch (contact):', err.message);
    return null;
  }
}

export async function getCtaContent() {
  if (!sanityEnabled || !client) return null;
  try {
    return await client.fetch(ctaQuery);
  } catch (err) {
    console.error('Sanity fetch (cta):', err.message);
    return null;
  }
}

export async function getSiteSettings() {
  if (!sanityEnabled || !client) return null;
  try {
    const data = await client.fetch(siteSettingsQuery);
    if (data?.logo) data.logo = urlFor(data.logo);
    return data;
  } catch (err) {
    console.error('Sanity fetch (settings):', err.message);
    return null;
  }
}
