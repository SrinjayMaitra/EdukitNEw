export const products = [
  {
    id: 1,
    name: 'Acer Aspire 3 A315',
    category: 'budget',
    price: 229,
    originalPrice: 269,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
    rating: 4.7,
    reviewCount: 312,
    badge: 'Bestseller',
    description: 'Intel N-series processor, 8GB RAM, 256GB SSD. Perfect for web browsing, documents, and online courses. Lightweight at 1.7kg.',
    specs: { cpu: 'Intel N100', ram: '8GB', storage: '256GB SSD', display: '15.6" FHD', battery: '10 hrs', weight: '1.7kg' },
    inStock: true
  },
  {
    id: 2,
    name: 'Lenovo IdeaPad 1',
    category: 'budget',
    price: 209,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600',
    rating: 4.5,
    reviewCount: 198,
    description: 'AMD Ryzen 3, 8GB RAM, 256GB SSD. Reliable everyday laptop with excellent battery life and a clean, professional build.',
    specs: { cpu: 'AMD Ryzen 3 7320U', ram: '8GB', storage: '256GB SSD', display: '14" FHD', battery: '9 hrs', weight: '1.5kg' },
    inStock: true
  },
  {
    id: 3,
    name: 'HP 14s-dq Laptop',
    category: 'mid-range',
    price: 289,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600',
    rating: 4.8,
    reviewCount: 445,
    badge: 'Top Rated',
    description: 'Intel Core i3, 8GB RAM, 512GB SSD. HP build quality with a slim chassis. Handles multitasking, video calls, and productivity tools smoothly.',
    specs: { cpu: 'Intel Core i3-1215U', ram: '8GB', storage: '512GB SSD', display: '14" FHD IPS', battery: '11 hrs', weight: '1.46kg' },
    inStock: true
  },
  {
    id: 4,
    name: 'ASUS VivoBook 15',
    category: 'mid-range',
    price: 319,
    originalPrice: 369,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
    rating: 4.7,
    reviewCount: 289,
    badge: 'Sale',
    description: 'Intel Core i5, 16GB RAM, 512GB SSD. Excellent display and keyboard. Built for students who need speed and a large screen for productivity.',
    specs: { cpu: 'Intel Core i5-1235U', ram: '16GB', storage: '512GB SSD', display: '15.6" FHD', battery: '8 hrs', weight: '1.8kg' },
    inStock: true
  },
  {
    id: 5,
    name: 'Dell Inspiron 14',
    category: 'mid-range',
    price: 339,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600',
    rating: 4.8,
    reviewCount: 367,
    description: 'Intel Core i5, 8GB RAM, 512GB SSD. Dell reliability with a premium aluminum chassis. Great for IT work, remote teams, and self-study.',
    specs: { cpu: 'Intel Core i5-1335U', ram: '8GB', storage: '512GB SSD', display: '14" FHD', battery: '12 hrs', weight: '1.57kg' },
    inStock: true
  },
  {
    id: 6,
    name: 'Lenovo ThinkPad E14 (Refurb)',
    category: 'refurbished',
    price: 279,
    originalPrice: 420,
    image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600',
    rating: 4.6,
    reviewCount: 156,
    badge: 'Best Value',
    description: 'Certified refurbished. Intel Core i5, 8GB RAM, 256GB SSD. ThinkPad build quality at half the price — spill-resistant keyboard, MIL-SPEC tested.',
    specs: { cpu: 'Intel Core i5-10210U', ram: '8GB', storage: '256GB SSD', display: '14" FHD IPS', battery: '9 hrs', weight: '1.65kg' },
    inStock: true
  },
  {
    id: 7,
    name: 'HP EliteBook 840 (Refurb)',
    category: 'refurbished',
    price: 299,
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600',
    rating: 4.7,
    reviewCount: 134,
    badge: 'New',
    description: 'Certified refurbished business laptop. Core i5, 8GB RAM, 256GB SSD. Built for professionals — fingerprint reader, backlit keyboard, enterprise durability.',
    specs: { cpu: 'Intel Core i5-8365U', ram: '8GB', storage: '256GB SSD', display: '14" FHD', battery: '10 hrs', weight: '1.48kg' },
    inStock: true
  },
  {
    id: 8,
    name: 'Acer Chromebook Spin 314',
    category: 'budget',
    price: 189,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600',
    rating: 4.4,
    reviewCount: 223,
    description: 'MediaTek processor, 4GB RAM, 64GB eMMC. ChromeOS is lightweight, secure, and ideal for online learning, email, and Google Workspace tools.',
    specs: { cpu: 'MediaTek MT8183', ram: '4GB', storage: '64GB eMMC', display: '14" HD', battery: '12 hrs', weight: '1.56kg' },
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'All Laptops' },
  { id: 'budget', name: 'Budget (Under $250)' },
  { id: 'mid-range', name: 'Mid-Range ($250–$370)' },
  { id: 'refurbished', name: 'Refurbished' }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getProductsByCategory = (category) =>
  category === 'all' ? products : products.filter(p => p.category === category);
export const getFeaturedProducts = () => products.filter(p => p.badge);
