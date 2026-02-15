// Hero slide data for Fruitlandcyprus
export const heroSlides = [
  {
    id: 1,
    title: 'Sun-Ripened Fruits',
    subtitle: 'Premium quality avocados, mangoes, oranges, tangerines and other citrus varieties grown in the fertile soils of Cyprus',
    backgroundImage: '/images/products/haden.jpg',
    ctaText: 'Explore Our Fruits',
    ctaLink: '/products',
  },
  {
    id: 2,
    title: 'Family Farm Since 2000',
    subtitle: 'Three generations of fruit farming expertise delivered directly to your table',
    backgroundImage: '/images/products/reedavoc.webp',
    ctaText: 'Our Story',
    ctaLink: '/about',
  },
  {
    id: 3,
    title: 'Cyprus Sunshine in Every Bite',
    subtitle: 'Traditional farming methods combined with modern quality standards',
    backgroundImage: '/images/products/products8.jpeg',
    ctaText: 'Contact Us',
    ctaLink: '/contact',
  },
];

// Features for agricultural values
export const features = [
  {
    id: 1,
    icon: '🌞',
    title: 'Sun-Ripened in Cyprus',
    description: 'Our fruits are nurtured by over 300 days of Mediterranean sunshine annually, creating the perfect growing conditions for sweet, juicy fruits.',
  },
  {
    id: 2,
    icon: '👨‍🌾',
    title: 'Family-Owned Since 2000',
    description: 'Three generations of farming expertise with a commitment to quality, tradition, and sustainable agricultural practices.',
  },
  {
    id: 3,
    icon: '🚚',
    title: 'Direct from Orchard to Table',
    description: 'Skip the middleman. Our fruits go straight from our Cyprus orchards to you, ensuring maximum freshness and flavor.',
  },
];

// Comprehensive product data by category with detailed variety information
export const productCategories = {
  mangoes: {
    name: 'Mangoes',
    description: 'Premium tropical mangoes from Cyprus sunshine',
    products: [
      {
        id: 1,
        name: 'Haden Mango',
        image: '/images/products/haden.jpg',
        description: 'The original Florida mango with striking crimson blush over yellow background. Bold, full-bodied flavor perfectly balancing sweetness with subtle acidity. Golden-yellow, smooth flesh that\'s mostly fiber-free near the center.',
        characteristics: ['Medium to Large', 'Red Blush', 'Sweet & Juicy', 'Classic Mango Flavor'],
        season: 'March to May',
        origin: 'Florida, USA'
      },
      {
        id: 2,
        name: 'Maya Mango',
        image: '/images/products/products5.jpeg',
        description: 'Beautiful mango with orange-red blush on much of the surface. Thin peel and small stone with plump, fulsome flesh. Easy to monitor for ripeness as fruit becomes soft and tender.',
        characteristics: ['Medium Size', 'Silky Smooth', 'Fiberless', 'Sweet & Aromatic'],
        season: 'January to June',
        origin: 'Israel'
      },
      {
        id: 3,
        name: 'Tommy Atkins Mango',
        image: '/images/products/taktins.jpeg',
        description: 'Most widely grown commercial mango with vibrant green, dark red, and orange-yellow coloring. Oblong shape with thick skin that\'s excellent for shipping. Mild, subtly sweet flavor with tropical fruit notes.',
        characteristics: ['Medium to Large', 'Dark Red Blush', 'Firm Flesh', 'Commercial Grade'],
        season: 'March to July',
        origin: 'Florida, USA'
      },
      {
        id: 4,
        name: 'Keitt Mango',
        image: '/images/products/keitt.webp',
        description: 'Large late-season mango that stays green even when ripe. Firm, juicy flesh with limited fibers and high citrus notes. Sweet and fruity flavor with excellent storage capability.',
        characteristics: ['Large to Extra-Large', 'Green When Ripe', 'Firm & Juicy', 'Late Season'],
        season: 'August to October',
        origin: 'Florida, USA'
      },
      {
        id: 5,
        name: 'Omer/Katsuri Mango',
        image: '/images/products/omer.jpg',
        description: 'Premium Asian variety known for exceptional sweetness and aromatic qualities. Smooth, fiberless flesh with rich tropical flavor. Medium-sized fruits perfect for fresh consumption.',
        characteristics: ['Medium Size', 'Fiberless', 'Highly Aromatic', 'Exceptionally Sweet'],
        season: 'June to August',
        origin: 'South Asia'
      }
    ]
  },
  oranges: {
    name: 'Oranges',
    description: 'Premium Cyprus oranges with rich vitamin C content',
    products: [
      {
        id: 6,
        name: 'Washington Navel Orange',
        image: '/images/products/washington.webp',
        description: 'The classic seedless orange that launched California\'s citrus industry. Medium size with smooth, pebbled skin that\'s easy to peel. Sweet, juicy flesh with excellent flavor for eating fresh.',
        characteristics: ['Seedless', 'Easy Peel', 'Sweet & Juicy', 'Winter Season'],
        season: 'November to January',
        origin: 'Bahia, Brazil'
      },
      {
        id: 7,
        name: 'Bahia Orange',
        image: '/images/products/washington.webp',
        description: 'Original navel orange from Brazil, parent to Washington Navel. Large, round fruits with slightly pebbled orange rind that\'s easily peeled. Exceptional quality and sweet flavor.',
        characteristics: ['Large Size', 'Easy Peel', 'Seedless', 'High Quality'],
        season: 'November to January',
        origin: 'Bahia, Brazil'
      },
      {
        id: 8,
        name: 'Cara Cara Navel Orange',
        image: '/images/products/caracara.jpg',
        description: 'Special pink-fleshed navel orange with vivid salmon-colored interior. Low-acid, sweet flavor with hints of raspberry. Rich in lycopene antioxidants and vitamin A.',
        characteristics: ['Pink Flesh', 'Low Acid', 'High in Lycopene', 'Sweet & Berry-like'],
        season: 'December to April',
        origin: 'Venezuela'
      }
    ]
  },
  tangerines: {
    name: 'Tangerines',
    description: 'Sweet and easy-to-peel Cyprus tangerines',
    products: [
      {
        id: 9,
        name: 'Okitsu Tangerine',
        image: '/images/products/products8.jpeg',
        description: 'Early harvest Satsuma tangerine popular for sweet, juicy taste and easy peeling. Medium-sized with smooth pale yellow to orange skin and plump, juicy flesh.',
        characteristics: ['Early Season', 'Seedless', 'Easy Peel', 'Sweet & Juicy'],
        season: 'October to November',
        origin: 'Japan'
      },
      {
        id: 10,
        name: 'Orri Tangerine',
        image: '/images/products/products11.jpeg',
        description: 'Premium Israeli hybrid with exceptional sweetness and fine, well-balanced flavor. Mostly seedless with thin, easy-to-remove skin. Deep orange color and gorgeous appearance.',
        characteristics: ['Late Season', 'Seedless', 'Very Sweet', 'Easy Peel'],
        season: 'January to May',
        origin: 'Israel'
      },
      {
        id: 11,
        name: 'Eden Tree Tangerine',
        image: '/images/products/products12.jpeg',
        description: 'Traditional variety with vibrant orange skin and superior fruit quality. Rich, sweet flavor with perfect balance of sweetness and acidity. Easy-to-peel with tender flesh.',
        characteristics: ['Traditional', 'Rich Flavor', 'Easy Peel', 'Sweet & Balanced'],
        season: 'December to February',
        origin: 'Mediterranean'
      }
    ]
  },
  grapefruits: {
    name: 'Grapefruits',
    description: 'Refreshing and healthy Cyprus grapefruits',
    products: [
      {
        id: 12,
        name: 'White Grapefruit',
        image: '/images/products/whitegrape.jpg',
        description: 'Large, round fruit with smooth yellow skin and no pink blush. Juicy yellow flesh with sweet-tart flavor and balanced acidity. The least sweet but classic grapefruit taste.',
        characteristics: ['Large Size', 'Yellow Flesh', 'Sweet-Tart', 'Classic Flavor'],
        season: 'Winter to Early Spring',
        origin: 'Caribbean'
      },
      {
        id: 13,
        name: 'Pink Grapefruit',
        image: '/images/products/pinkgrape.webp',
        description: 'Medium to large grapefruit with pink-blushed skin and pink flesh. Sweeter than white varieties with rich color and high lycopene content. Perfect for fresh eating and juicing.',
        characteristics: ['Pink Flesh', 'Sweeter', 'Rich in Lycopene', 'Juicy'],
        season: 'Fall to Spring',
        origin: 'Texas, USA'
      }
    ]
  },
  avocados: {
    name: 'Avocados',
    description: 'Creamy and nutritious Cyprus avocados',
    products: [
      {
        id: 14,
        name: 'Pinkerton Avocado',
        image: '/images/products/pinkerton.jpg',
        description: 'Distinguished by its elongated pear shape and deep green, slightly pebbled skin. Pinkerton offers an exceptionally high flesh-to-seed ratio with a small, tight seed that maximizes the creamy, pale-green interior. Its smooth, rich flavor has subtle herbal notes, making it a chef\'s favorite for refined dishes.',
        characteristics: ['Elongated Shape', 'Small Seed', 'High Flesh Ratio', 'Herbal Notes'],
        season: 'November to April',
        origin: 'California, USA'
      },
      {
        id: 15,
        name: 'Fuerte Avocado',
        image: '/images/products/products4.jpeg',
        description: 'Large pear-shaped avocado with smooth, thin green skin. Creamy, mild flavor with lower oil content. Excellent for slicing and fresh preparations.',
        characteristics: ['Large Size', 'Smooth Skin', 'Mild Flavor', 'Lower Oil'],
        season: 'Year-round',
        origin: 'California'
      },
      {
        id: 17,
        name: 'Gwen Avocado',
        image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=600&q=80',
        description: 'A grandchild of the Hass variety, Gwen produces plump, oval fruits with thick, pebbled green skin that peels easily. Its golden-green flesh is exceptionally creamy with a rich, buttery taste that rivals the Hass. Known for heavy yields and compact tree size, making it a favorite among growers.',
        characteristics: ['Plump & Oval', 'Thick Skin', 'Creamy Flesh', 'Heavy Yields'],
        season: 'February to October',
        origin: 'California, USA'
      },
      {
        id: 18,
        name: 'Lamb Hass Avocado',
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&q=80',
        description: 'A premium summer hybrid of Hass and Gwen, prized for its larger fruit size and rich, creamy texture. The skin darkens to purplish-black when ripe, with dense, buttery flesh that boasts a complex nutty flavor. Excellent oil content makes it ideal for both fresh eating and culinary applications.',
        characteristics: ['Large Size', 'Buttery & Rich', 'Summer Season', 'High Oil Content'],
        season: 'May to November',
        origin: 'California, USA'
      },
      {
        id: 19,
        name: 'Reed Avocado',
        image: '/images/products/reedavoc.webp',
        description: 'A standout summer variety with a distinctive round, softball-like shape and thick green skin that remains green when ripe. Reed\'s golden-yellow flesh is exceptionally creamy and bold in flavor—often described as the most buttery of all avocado varieties. Its large seed pops out cleanly, leaving generous portions of velvety fruit.',
        characteristics: ['Round Shape', 'Stays Green', 'Bold & Buttery', 'Summer Season'],
        season: 'June to October',
        origin: 'California, USA'
      },
      {
        id: 20,
        name: 'Galil Avocado',
        image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=600&q=80',
        description: 'An Israeli-bred variety cultivated in Cyprus\'s Mediterranean climate. Galil produces medium-large fruits with smooth, glossy green skin and a refined, mild-sweet flavor. Its silky flesh has a delicate, clean taste with lower oil content, making it perfect for health-conscious consumers. Known for excellent shelf life and consistent quality.',
        characteristics: ['Glossy Green', 'Mild & Sweet', 'Lower Oil', 'Long Shelf Life'],
        season: 'October to March',
        origin: 'Israel'
      }
    ]
  }
};

// Get all products flattened for backward compatibility
export const products = Object.values(productCategories).flatMap(category => category.products);

// Partners/Community data
export const partners = [
  {
    id: 1,
    name: 'Cyprus Export Board',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Cyprus&backgroundColor=ff8c42&color=fff',
  },
  {
    id: 2,
    name: 'EU Organic',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=EU&backgroundColor=4a7c2e&color=fff',
  },
  {
    id: 3,
    name: 'Cyprus Tourism',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Tourism&backgroundColor=ffd300&color=000',
  },
];