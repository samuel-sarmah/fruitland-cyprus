import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment');
}

if (!token) {
  throw new Error('Missing SANITY_API_WRITE_TOKEN in environment');
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
});

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const uploadCache = new Map();

const heroSlides = [
  {
    order: 1,
    title: 'Sun-Ripened Fruits',
    subtitle:
      'Premium quality avocados, mangoes, oranges, tangerines and other citrus varieties grown in the fertile soils of Cyprus',
    backgroundImage: '/images/products/haden.jpg',
    ctaText: 'Explore Our Fruits',
    ctaLink: '/products',
  },
  {
    order: 2,
    title: 'Family Farm Since 2000',
    subtitle: 'Three generations of fruit farming expertise delivered directly to your table',
    backgroundImage: '/images/products/reedavoc.webp',
    ctaText: 'Our Story',
    ctaLink: '/about',
  },
  {
    order: 3,
    title: 'Cyprus Sunshine in Every Bite',
    subtitle: 'Traditional farming methods combined with modern quality standards',
    backgroundImage: '/images/products/products8.jpeg',
    ctaText: 'Contact Us',
    ctaLink: '/contact',
  },
];

const features = [
  {
    order: 1,
    icon: '🌞',
    title: 'Sun-Ripened in Cyprus',
    description:
      'Our fruits are nurtured by over 300 days of Mediterranean sunshine annually, creating the perfect growing conditions for sweet, juicy fruits.',
  },
  {
    order: 2,
    icon: '👨‍🌾',
    title: 'Family-Owned Since 2000',
    description:
      'Three generations of farming expertise with a commitment to quality, tradition, and sustainable agricultural practices.',
  },
  {
    order: 3,
    icon: '🚚',
    title: 'Direct from Orchard to Table',
    description:
      'Skip the middleman. Our fruits go straight from our Cyprus orchards to you, ensuring maximum freshness and flavor.',
  },
];

const partners = [
  {
    order: 1,
    name: 'Cyprus Export Board',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Cyprus&backgroundColor=ff8c42&color=fff',
  },
  {
    order: 2,
    name: 'EU Organic',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=EU&backgroundColor=4a7c2e&color=fff',
  },
  {
    order: 3,
    name: 'Cyprus Tourism',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Tourism&backgroundColor=ffd300&color=000',
  },
];

const productCategories = [
  { key: 'mangoes', name: 'Mangoes', description: 'Premium tropical mangoes from Cyprus sunshine' },
  { key: 'oranges', name: 'Oranges', description: 'Premium Cyprus oranges with rich vitamin C content' },
  { key: 'tangerines', name: 'Tangerines', description: 'Sweet and easy-to-peel Cyprus tangerines' },
  { key: 'grapefruits', name: 'Grapefruits', description: 'Refreshing and healthy Cyprus grapefruits' },
  { key: 'avocados', name: 'Avocados', description: 'Creamy and nutritious Cyprus avocados' },
];

const products = [
  { productId: 1, name: 'Haden Mango', categoryKey: 'mangoes', image: '/images/products/haden.jpg', description: 'The original Florida mango with striking crimson blush over yellow background. Bold, full-bodied flavor perfectly balancing sweetness with subtle acidity. Golden-yellow, smooth flesh that\'s mostly fiber-free near the center.', characteristics: ['Medium to Large', 'Red Blush', 'Sweet & Juicy', 'Classic Mango Flavor'], season: 'August to September', origin: 'Florida, USA' },
  { productId: 2, name: 'Maya Mango', categoryKey: 'mangoes', image: '/images/products/products5.jpeg', description: 'Beautiful mango with orange-red blush on much of the surface. Thin peel and small stone with plump, fulsome flesh. Easy to monitor for ripeness as fruit becomes soft and tender.', characteristics: ['Medium Size', 'Silky Smooth', 'Fiberless', 'Sweet & Aromatic'], season: 'August to September', origin: 'Israel' },
  { productId: 3, name: 'Tommy Atkins Mango', categoryKey: 'mangoes', image: '/images/products/taktins.jpeg', description: 'Most widely grown commercial mango with vibrant green, dark red, and orange-yellow coloring. Oblong shape with thick skin that\'s excellent for shipping. Mild, subtly sweet flavor with tropical fruit notes.', characteristics: ['Medium to Large', 'Dark Red Blush', 'Firm Flesh', 'Commercial Grade'], season: 'August to September', origin: 'Florida, USA' },
  { productId: 4, name: 'Keitt Mango', categoryKey: 'mangoes', image: '/images/products/keitt.webp', description: 'Large late-season mango that stays green even when ripe. Firm, juicy flesh with limited fibers and high citrus notes. Sweet and fruity flavor with excellent storage capability.', characteristics: ['Large to Extra-Large', 'Green When Ripe', 'Firm & Juicy', 'Late Season'], season: 'September to November', origin: 'Florida, USA' },
  { productId: 5, name: 'Omer/Katsuri Mango', categoryKey: 'mangoes', image: '/images/products/omer.jpg', description: 'Premium Asian variety known for exceptional sweetness and aromatic qualities. Smooth, fiberless flesh with rich tropical flavor. Medium-sized fruits perfect for fresh consumption.', characteristics: ['Medium Size', 'Fiberless', 'Highly Aromatic', 'Exceptionally Sweet'], season: 'August to September', origin: 'Israel' },
  { productId: 6, name: 'Early autumn Washington Navel Orange', categoryKey: 'oranges', image: '/images/products/washington.webp', description: 'The classic seedless orange that launched California\'s citrus industry. Medium size with smooth, pebbled skin that\'s easy to peel. Sweet, juicy flesh with excellent flavor for eating fresh.', characteristics: ['Seedless', 'Easy Peel', 'Sweet & Juicy', 'Autumn Season'], season: 'October to November', origin: 'Bahia, Brazil' },
  { productId: 7, name: 'Bahia Orange', categoryKey: 'oranges', image: '/images/products/washington.webp', description: 'Original navel orange from Brazil, parent to Washington Navel. Large, round fruits with slightly pebbled orange rind that\'s easily peeled. Exceptional quality and sweet flavor.', characteristics: ['Large Size', 'Easy Peel', 'Seedless', 'High Quality'], season: 'November to December', origin: 'Bahia, Brazil' },
  { productId: 8, name: 'Cara Cara Navel Orange', categoryKey: 'oranges', image: '/images/products/caracara.jpg', description: 'Special pink-fleshed navel orange with vivid salmon-colored interior. Low-acid, sweet flavor with hints of raspberry. Rich in lycopene antioxidants and vitamin A.', characteristics: ['Pink Flesh', 'Low Acid', 'High in Lycopene', 'Sweet & Berry-like'], season: 'December to January', origin: 'Venezuela' },
  { productId: 9, name: 'Lane Late Navel Orange', categoryKey: 'oranges', image: '/images/products/lanelate.jpg', description: 'A late-maturing bud sport of Washington navel orange discovered in Australia in 1950. Similar size and shape to Washington navel with smoother peel and slightly smaller navel. Seedless, easy to peel with sweet flavor.', characteristics: ['Late Season', 'Seedless', 'Easy Peel', 'Long Storage on Tree'], season: 'January to May', origin: 'Australia' },
  { productId: 10, name: 'Okitsu Tangerine', categoryKey: 'tangerines', image: '/images/products/products8.jpeg', description: 'Early harvest Satsuma tangerine popular for sweet, juicy taste and easy peeling. Medium-sized with smooth pale yellow to orange skin and plump, juicy flesh.', characteristics: ['Early Season', 'Seedless', 'Easy Peel', 'Sweet & Juicy'], season: 'September to November', origin: 'Japan' },
  { productId: 11, name: 'Orri Tangerine', categoryKey: 'tangerines', image: '/images/products/products11.jpeg', description: 'Premium Israeli hybrid with exceptional sweetness and fine, well-balanced flavor. Mostly seedless with thin, easy-to-remove skin. Deep orange color and gorgeous appearance.', characteristics: ['Late Season', 'Seedless', 'Very Sweet', 'Easy Peel'], season: 'January to March', origin: 'Israel' },
  { productId: 12, name: 'Eden Tree Tangerine', categoryKey: 'tangerines', image: '/images/products/products12.jpeg', description: 'Traditional variety with vibrant orange skin and superior fruit quality. Rich, sweet flavor with perfect balance of sweetness and acidity. Easy-to-peel with tender flesh.', characteristics: ['Traditional', 'Rich Flavor', 'Easy Peel', 'Sweet & Balanced'], season: 'February to May', origin: 'Israel' },
  { productId: 13, name: 'Pink Grapefruit', categoryKey: 'grapefruits', image: '/images/products/pinkgrape.webp', description: 'Medium to large grapefruit with pink-blushed skin and pink flesh. Sweeter than white varieties with rich color and high lycopene content.', characteristics: ['Pink Flesh', 'Sweeter', 'Rich in Lycopene', 'Juicy'], season: 'Fall to Spring', origin: 'Texas, USA' },
  { productId: 14, name: 'Early autumn Galil Avocado', categoryKey: 'avocados', image: '/images/products/products4.jpeg', description: 'An Israeli-bred variety cultivated in Cyprus\'s Mediterranean climate with smooth, glossy green skin and a refined, mild-sweet flavor.', characteristics: ['Glossy Green', 'Lower Oil'], season: 'August to Sept', origin: 'Israel' },
  { productId: 15, name: 'Early Pinkerton Avocado', categoryKey: 'avocados', image: '/images/products/pinkerton.jpg', description: 'Distinguished by its elongated pear shape and deep green, slightly pebbled skin. High flesh-to-seed ratio.', characteristics: ['Elongated Shape', 'Small Seed', 'High Flesh Ratio', 'Herbal Notes'], season: 'November to April', origin: 'California, USA' },
  { productId: 16, name: 'Early autumn Zutano Avocado', categoryKey: 'avocados', image: '/images/products/zutano.png', description: 'A classic California variety known for cold tolerance and consistent yield, with mild flavor and fibrous texture.', characteristics: ['Pear-Shaped', 'Mild Flavor', 'High Cold Tolerance', 'Low Fat Content'], season: 'October to December', origin: 'California, USA' },
  { productId: 17, name: 'Fuerte Avocado', categoryKey: 'avocados', image: '/images/products/fuerte.png', description: 'Large pear-shaped avocado with smooth, thin green skin and creamy mild flavor.', characteristics: ['Large Size', 'Smooth Skin', 'Mild Flavor', 'Lower Oil'], season: 'November to January', origin: 'California' },
  { productId: 18, name: 'Gwen Avocado', categoryKey: 'avocados', image: '/images/products/gwen.png', description: 'A grandchild of the Hass variety with plump oval fruits and rich, buttery taste.', characteristics: ['Plump & Oval', 'Thick Skin', 'Creamy Flesh', 'Heavy Yields'], season: 'November to December', origin: 'California, USA' },
  { productId: 19, name: 'Lamb Hass Avocado', categoryKey: 'avocados', image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=600&q=80', description: 'A premium summer hybrid of Hass and Gwen, prized for larger size and creamy texture.', characteristics: ['Medium Size', 'Buttery & Rich', 'Summer Season', 'High Oil Content'], season: 'February to May', origin: 'California, USA' },
  { productId: 20, name: 'Reed Avocado', categoryKey: 'avocados', image: '/images/products/reedavoc.webp', description: 'A standout summer variety with round shape, thick green skin and bold buttery flavor.', characteristics: ['Round Shape', 'Stays Green', 'Bold & Buttery', 'Summer Season'], season: 'April onwards', origin: 'California, USA' },
];

const aboutPage = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  heroTitle: 'Generations of Excellence',
  heroSubtitle: "From a small family orchard to Cyprus's premier fruit destination since 2003",
  founder: {
    _type: 'object',
    sectionLabel: 'Our Heritage',
    heading: 'Where Tradition Meets Innovation',
    paragraph1:
      'In 2003, Erol Hasin Baycan returned to Cyprus after time spent in England, taking over the family farm nurtured by his parents for years.',
    paragraph2:
      'Today, Fruitlandcyprus specializes in avocados, mangoes, and varieties that thrive in Cyprus\'s Mediterranean climate.',
    founderName: 'Erol Hasin Baycan',
    founderRole: 'Founder & Visionary',
    founderBio:
      'The patriarch who started it all. His dedication to quality over quantity established our reputation for excellence.',
    founderEmoji: '👨‍🌾',
  },
  differentiators: {
    _type: 'object',
    heading: 'What makes us different',
    subtitle: 'Key milestones that shaped our farm into what it is today',
    items: [
      { _type: 'object', title: 'Modern Techniques', description: 'We combine traditional care with modern irrigation and cultivation methods.' },
      { _type: 'object', title: 'Pesticide-Free', description: 'We are committed to pesticide-free cultivation practices for quality and safety.' },
      { _type: 'object', title: 'Freshness You Can Taste', description: 'Daily harvest for local markets to ensure peak flavor and nutrition.' },
      { _type: 'object', title: 'Our Farm', description: 'Every tree receives individual attention with personal, purposeful farming.' },
    ],
  },
  stats: [
    { _type: 'object', value: '50+', label: 'Acres of Orchards' },
    { _type: 'object', value: '4,000+', label: 'Fruit Trees' },
    { _type: 'object', value: '2+', label: 'Countries Served' },
    { _type: 'object', value: '25+', label: 'Years of Excellence' },
  ],
};

const contactPage = {
  _id: 'contactPage',
  _type: 'contactPage',
  heroTitle: 'Connect With Our Farm',
  heroSubtitle: 'From Cyprus orchard to your table - we are here to help with orders, questions, and farm tours',
  socialLinks: [
    { _type: 'object', platform: 'Facebook', url: 'https://m.facebook.com/fruitlandcyprus/' },
    { _type: 'object', platform: 'Instagram', url: 'https://www.instagram.com/fruitlandcyprus?igsh=MXBtejd5NGRjOWlncQ==' },
  ],
  formSuccessMessage: "Thank you for your message! We'll respond within 2 hours.",
};

const ctaSection = {
  _id: 'ctaSection',
  _type: 'ctaSection',
  heading: 'Ready to Taste the Best Fruits from Cyprus?',
  description:
    'Join our family of satisfied customers who enjoy premium quality fruits delivered fresh from our Cyprus orchards.',
  primaryButtonText: 'Browse Our Products',
  primaryButtonLink: '/products',
  secondaryButtonText: 'Contact Us',
  secondaryButtonLink: '/contact',
};

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteName: 'Fruitlandcyprus',
  navItems: [
    { _type: 'object', name: 'Home', href: '/' },
    { _type: 'object', name: 'Products', href: '/products' },
    { _type: 'object', name: 'About', href: '/about' },
    { _type: 'object', name: 'Contact', href: '/contact' },
  ],
  footer: {
    _type: 'object',
    companyName: 'Fruitlandcyprus',
    socialLinks: [
      { _type: 'object', platform: 'Facebook', url: 'https://m.facebook.com/fruitlandcyprus/' },
      { _type: 'object', platform: 'Instagram', url: 'https://www.instagram.com/fruitlandcyprus?igsh=MXBtejd5NGRjOWlncQ==' },
    ],
    quickLinks: [
      { _type: 'object', name: 'Home', href: '/' },
      { _type: 'object', name: 'Products', href: '/products' },
      { _type: 'object', name: 'About', href: '/about' },
      { _type: 'object', name: 'Contact', href: '/contact' },
    ],
    address: 'Cyprus',
    addressLine2: 'Mediterranean Region',
    phoneNumbers: ['+357 99 123456'],
    email: 'info@fruitlandcyprus.com',
  },
};

async function uploadImage(source) {
  if (!source) return null;
  if (uploadCache.has(source)) return uploadCache.get(source);

  let asset;
  if (source.startsWith('http://') || source.startsWith('https://')) {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Failed to fetch remote image: ${source}`);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = source.split('/').pop()?.split('?')[0] || `image-${Date.now()}.jpg`;
    asset = await client.assets.upload('image', buffer, { filename });
  } else {
    const clean = source.startsWith('/') ? source.slice(1) : source;
    const fullPath = path.join(publicDir, clean);
    if (!fs.existsSync(fullPath)) {
      console.warn(`Image file not found, skipping: ${source}`);
      uploadCache.set(source, null);
      return null;
    }
    asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
      filename: path.basename(fullPath),
    });
  }

  const imageField = {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id,
    },
  };

  uploadCache.set(source, imageField);
  return imageField;
}

async function seed() {
  console.log(`Seeding dataset '${dataset}' for project '${projectId}'...`);

  const tx = client.transaction();

  for (const category of productCategories) {
    tx.createOrReplace({
      _id: `productCategory-${category.key}`,
      _type: 'productCategory',
      order: productCategories.findIndex((item) => item.key === category.key) + 1,
      key: category.key,
      name: category.name,
      description: category.description,
    });
  }

  for (const feature of features) {
    tx.createOrReplace({
      _id: `feature-${feature.order}`,
      _type: 'feature',
      order: feature.order,
      icon: feature.icon,
      title: feature.title,
      description: feature.description,
    });
  }

  for (const partner of partners) {
    const logo = await uploadImage(partner.logo);
    tx.createOrReplace({
      _id: `partner-${partner.order}`,
      _type: 'partner',
      order: partner.order,
      name: partner.name,
      ...(logo ? { logo } : {}),
    });
  }

  for (const slide of heroSlides) {
    const backgroundImage = await uploadImage(slide.backgroundImage);
    if (!backgroundImage) continue;

    tx.createOrReplace({
      _id: `heroSlide-${slide.order}`,
      _type: 'heroSlide',
      order: slide.order,
      title: slide.title,
      subtitle: slide.subtitle,
      backgroundImage,
      ctaText: slide.ctaText,
      ctaLink: slide.ctaLink,
    });
  }

  for (const product of products) {
    const image = await uploadImage(product.image);
    tx.createOrReplace({
      _id: `productItem-${product.productId}`,
      _type: 'productItem',
      productId: product.productId,
      name: product.name,
      category: {
        _type: 'reference',
        _ref: `productCategory-${product.categoryKey}`,
      },
      order: product.productId,
      ...(image ? { image } : {}),
      description: product.description,
      characteristics: product.characteristics,
      season: product.season,
      origin: product.origin,
    });
  }

  tx.createOrReplace(aboutPage);
  tx.createOrReplace(contactPage);
  tx.createOrReplace(ctaSection);
  tx.createOrReplace(siteSettings);

  await tx.commit();

  console.log('Seed complete.');
  console.log(`Created/updated ${productCategories.length} categories and ${products.length} products.`);
  console.log(`Created/updated ${heroSlides.length} hero slides, ${features.length} features, ${partners.length} partners.`);
  console.log('Created/updated singleton docs: aboutPage, contactPage, ctaSection, siteSettings.');
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
