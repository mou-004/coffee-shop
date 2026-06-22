export const categories = [
  {
    name: 'Single Origin',
    count: '8 roasts',
    tone: 'from-bean-700 to-copper',
    description: 'Traceable beans with region-specific tasting notes.'
  },
  {
    name: 'Cold Brew',
    count: '5 bottles',
    tone: 'from-moss to-bean-600',
    description: 'Slow-steeped concentrate for smooth café-style drinks.'
  },
  {
    name: 'Espresso',
    count: '7 blends',
    tone: 'from-bean-900 to-bean-500',
    description: 'Bold, crema-rich profiles for milk and straight shots.'
  },
  {
    name: 'Brew Gear',
    count: '9 tools',
    tone: 'from-copper to-bean-500',
    description: 'Minimal equipment for precise daily brewing.'
  }
]

export const products = [
  {
    id: 'highland-ritual',
    name: 'Highland Ritual',
    category: 'Single Origin',
    badge: 'New Harvest',
    price: 1450,
    oldPrice: 1650,
    rating: 4.9,
    reviews: 128,
    roast: 'Medium',
    origin: 'Bandarban Highlands',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1100&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'A balanced single-origin coffee with notes of brown sugar, roasted almond and soft citrus. Designed for slow mornings and clean pour-over cups.',
    features: ['250g whole bean', 'Washed process', 'Best for V60, Chemex and AeroPress', 'Roasted within 72 hours before dispatch'],
    bestSeller: true,
    offer: 'Save Tk. 200'
  },
  {
    id: 'midnight-crema',
    name: 'Midnight Crema',
    category: 'Espresso',
    badge: 'Best Seller',
    price: 1290,
    oldPrice: 1490,
    rating: 4.8,
    reviews: 214,
    roast: 'Dark',
    origin: 'Brazil + Indonesia Blend',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1100&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'A syrupy espresso blend with dark chocolate, toasted hazelnut and a long caramel finish. Built to cut through milk without tasting burnt.',
    features: ['250g whole bean', 'Natural + pulped natural process', 'Excellent for espresso and moka pot', 'Dense crema and low acidity'],
    bestSeller: true,
    offer: 'Free shipping'
  },
  {
    id: 'velvet-cold-brew',
    name: 'Velvet Cold Brew',
    category: 'Cold Brew',
    badge: 'Ready to Pour',
    price: 890,
    oldPrice: 1040,
    rating: 4.7,
    reviews: 96,
    roast: 'Medium-Dark',
    origin: 'Signature House Blend',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1100&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'A smooth cold brew concentrate with cocoa, molasses and a rounded finish. Mix with water, milk or tonic for a clean café drink at home.',
    features: ['500ml concentrate', 'Makes 8–10 cups', 'No added sugar', 'Keeps refrigerated for 14 days'],
    bestSeller: false,
    offer: '15% off'
  },
  {
    id: 'copper-dripper',
    name: 'Copper Dripper Set',
    category: 'Brew Gear',
    badge: 'Gift Pick',
    price: 2190,
    oldPrice: 2490,
    rating: 4.8,
    reviews: 73,
    roast: 'Gear',
    origin: 'Reusable Brewing Tool',
    image: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?auto=format&fit=crop&w=1100&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'A compact pour-over set made for precise extraction and a striking kitchen counter presence. Includes dripper, filters and a measuring spoon.',
    features: ['Reusable stainless filter', 'Heat-safe handle', 'Includes 40 paper filters', 'Perfect for 1–2 cups'],
    bestSeller: false,
    offer: 'Bundle deal'
  },
  {
    id: 'monsoon-decaf',
    name: 'Monsoon Decaf',
    category: 'Single Origin',
    badge: 'Low Caffeine',
    price: 1180,
    oldPrice: 1350,
    rating: 4.6,
    reviews: 61,
    roast: 'Medium',
    origin: 'Swiss Water Process',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=1100&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1525088553748-01d6e210e00b?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'A mellow decaf with milk chocolate, dried fig and gentle spice. Suitable for evening cups without sacrificing aroma.',
    features: ['250g whole bean', 'Chemical-free decaffeination', 'Best for French press and filter', 'Soft acidity'],
    bestSeller: false,
    offer: 'Evening roast'
  },
  {
    id: 'golden-hour-latte',
    name: 'Golden Hour Latte Kit',
    category: 'Brew Gear',
    badge: 'Starter Kit',
    price: 2650,
    oldPrice: 2990,
    rating: 4.9,
    reviews: 182,
    roast: 'Kit',
    origin: 'Home Café Bundle',
    image: 'https://images.unsplash.com/photo-1522992319-0365e5f11656?auto=format&fit=crop&w=1100&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522992319-0365e5f11656?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1100&q=80',
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1100&q=80'
    ],
    description: 'A home latte bundle with espresso beans, hand frother, syrup sample and recipe cards. Designed for first-time home baristas.',
    features: ['250g espresso beans', 'USB rechargeable frother', 'Two syrup samples', 'Five café recipe cards'],
    bestSeller: true,
    offer: 'Starter bundle'
  }
]

export const getProductById = (id) => products.find((product) => product.id === id)

export const formatPrice = (price) => `৳${price.toLocaleString('en-BD')}`
