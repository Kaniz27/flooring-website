
import { ProductCategory, Product } from './types';

export const COMPANY_NAME = "ASM Shahin Flooring LLC";
export const TAGLINE = "Professional Supplier, Retailer & Wholesaler of Flooring & Interior Solutions";
export const CONTACT_PHONE = "+971502522762";
export const CONTACT_EMAIL = "asmshahinflooring@gmail.com";
export const CONTACT_ADDRESS = "AAE-14, Dragon Mart-1, Dubai, UAE";
export const WHATSAPP_LINK = "https://wa.me/971502522762";

export const PRODUCT_CATEGORIES = [
  ProductCategory.FLOORING,
  ProductCategory.WALL_PANELS,
  ProductCategory.ACCESSORIES,
  ProductCategory.CARPET,
  ProductCategory.CABINET_FURNITURE
];

export const PRODUCTS: Product[] = [
  // --- FLOORING ---
  {
    id: 'f1',
    slug: 'solid-wood-flooring',
    name: 'Solid Wood Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Wood',
    description: 'Premium natural timber flooring providing unmatched warmth and character to any interior space.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800',
    usage: 'Indoor',
    features: ['100% Natural', 'Luxury Finish', 'Long-lasting']
  },
  {
    id: 'f2',
    slug: 'semi-solid-flooring',
    name: 'Semi Solid Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Wood',
    description: 'Engineered wood flooring offering the beauty of solid wood with enhanced stability.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800',
    usage: 'Indoor',
    features: ['Stable Construction', 'Real Wood Top', 'Easy Install']
  },
  {
    id: 'f3',
    slug: 'laminate-flooring',
    name: 'Laminate Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Laminate',
    description: 'Durable and cost-effective flooring with a wide variety of realistic wood and stone patterns.',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800',
    usage: 'Indoor',
    features: ['Scratch Resistant', 'Affordable', 'Low Maintenance']
  },
  {
    id: 'f4',
    slug: 'bamboo-flooring',
    name: 'Bamboo Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Eco',
    description: 'Sustainable and incredibly tough flooring solution made from rapidly renewable bamboo.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800',
    usage: 'Indoor',
    features: ['Eco-friendly', 'High Hardness', 'Unique Texture']
  },
  {
    id: 'f5',
    slug: 'pvc-flooring',
    name: 'PVC Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Vinyl',
    description: 'Waterproof and versatile vinyl flooring perfect for moisture-prone areas.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800',
    usage: 'Indoor',
    features: ['100% Waterproof', 'Quiet', 'Durable']
  },
  {
    id: 'f6',
    slug: 'medical-flooring',
    name: 'Medical Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Specialty',
    description: 'Anti-bacterial and seamless flooring designed for hospitals and healthcare facilities.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800',
    usage: 'Indoor',
    features: ['Hygienic', 'Chemical Resistant', 'Heavy Duty']
  },
  {
    id: 'f7',
    slug: 'sports-flooring',
    name: 'Sports Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Specialty',
    description: 'Shock-absorbent flooring for gyms, courts, and indoor sports arenas.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
    usage: 'Indoor',
    features: ['Impact Absorption', 'High Grip', 'Durable']
  },
  {
    id: 'f8',
    slug: 'raise-flooring',
    name: 'Raise Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Commercial',
    description: 'Elevated flooring systems for data centers and modern offices to manage cabling.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800',
    usage: 'Indoor',
    features: ['Cable Management', 'Flexible Layout', 'Load Bearing']
  },
  {
    id: 'f9',
    slug: 'decking-flooring',
    name: 'Decking Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Outdoor',
    description: 'Weather-resistant outdoor decking for pools, patios, and balconies.',
    image: 'https://images.unsplash.com/photo-1590059345003-87428669e4d5?q=80&w=800',
    usage: 'Outdoor',
    features: ['Weather Proof', 'UV Resistant', 'Anti-Slip']
  },
  {
    id: 'f10',
    slug: 'artificial-grass',
    name: 'Artificial Grass Flooring',
    category: ProductCategory.FLOORING,
    subCategory: 'Outdoor',
    description: 'High-quality synthetic turf that stays green all year round without water.',
    image: 'https://images.unsplash.com/photo-1533460004989-cef01064af7c?q=80&w=800',
    usage: 'Outdoor',
    features: ['Low Maintenance', 'Pet Friendly', 'Natural Look']
  },

  // --- WALL & INTERIOR ---
  {
    id: 'w1',
    slug: 'wpc-wall-panel',
    name: 'WPC Wall Panel',
    category: ProductCategory.WALL_PANELS,
    subCategory: 'Panels',
    description: 'Wood Plastic Composite panels designed for stunning outdoor wall cladding.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800',
    usage: 'Outdoor',
    features: ['Termite Proof', 'Water Proof', 'Eco-Friendly']
  },
  {
    id: 'w2',
    slug: 'fiber-wall-panel',
    name: 'Fiber Wall Panel',
    category: ProductCategory.WALL_PANELS,
    subCategory: 'Panels',
    description: 'Decorative fiber-based panels for creating unique textures on interior walls.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
    usage: 'Indoor',
    features: ['Lightweight', 'Sound Proofing', 'Paintable']
  },
  {
    id: 'w3',
    slug: 'pvc-wall-panel',
    name: 'PVC Wall Panel',
    category: ProductCategory.WALL_PANELS,
    subCategory: 'Panels',
    description: 'Versatile and easy-to-install PVC panels for modern wall decoration.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629275?q=80&w=800',
    usage: 'Indoor',
    features: ['Moisture Proof', 'Fast Install', 'Washable']
  },
  {
    id: 'w4',
    slug: 'uv-sheet',
    name: 'UV Sheet',
    category: ProductCategory.WALL_PANELS,
    subCategory: 'Decorative',
    description: 'High-gloss decorative sheets with marble finish, perfect for accent walls.',
    image: 'https://images.unsplash.com/photo-1628592102751-ba83b035645c?q=80&w=800',
    usage: 'Indoor',
    features: ['High Gloss', 'Scratch Resistant', 'Marble Effect']
  },
  {
    id: 'w5',
    slug: 'uv-sheet-book-match',
    name: 'UV Sheet (Book Match)',
    category: ProductCategory.WALL_PANELS,
    subCategory: 'Decorative',
    description: 'Symmetrical marble patterns for a grand and luxurious seamless wall design.',
    image: 'https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&w=800',
    usage: 'Indoor',
    features: ['Symmetrical Design', 'Luxury Look', 'Large Format']
  },
  {
    id: 'w6',
    slug: 'she-board',
    name: 'She-board',
    category: ProductCategory.WALL_PANELS,
    subCategory: 'Panels',
    description: 'Specialty boards for interior partitions and decorative ceiling elements.',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=800',
    usage: 'Indoor',
    features: ['Structural', 'Versatile', 'Quality Finish']
  },
  {
    id: 'w7',
    slug: 'wallpaper',
    name: 'Wallpaper',
    category: ProductCategory.WALL_PANELS,
    subCategory: 'Panels',
    description: 'Exquisite wallpaper collection with textures and designs ranging from classic to contemporary.',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800',
    usage: 'Indoor',
    features: ['Multiple Designs', 'Non-Toxic', 'Textured']
  },

  // --- ACCESSORIES ---
  {
    id: 'a1',
    slug: 'aluminium-profile',
    name: 'Aluminium Profile & Accessories',
    category: ProductCategory.ACCESSORIES,
    subCategory: 'Finishing',
    description: 'Durable aluminium edges and profiles for professional flooring transitions.',
    image: 'https://images.unsplash.com/photo-1503602642458-2321159b556a?q=80&w=800',
    usage: 'Indoor',
    features: ['Rust Proof', 'Clean Edges', 'Strong']
  },
  {
    id: 'a2',
    slug: 'skirting',
    name: 'Skirting',
    category: ProductCategory.ACCESSORIES,
    subCategory: 'Finishing',
    description: 'Elegant baseboards to cover the gap between the floor and the wall beautifully.',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?q=80&w=800',
    usage: 'Indoor',
    features: ['Moisture Proof', 'Impact Resistant', 'Decorative']
  },

  // --- CARPET ---
  {
    id: 'c1',
    slug: 'carpet',
    name: 'Carpet',
    category: ProductCategory.CARPET,
    subCategory: 'Floor Cover',
    description: 'Soft wall-to-wall carpets providing ultimate comfort and sound insulation.',
    image: 'https://images.unsplash.com/photo-1582234052329-a1b6932a3962?q=80&w=800',
    usage: 'Indoor',
    features: ['Soft Touch', 'Sound Proof', 'Warm']
  },
  {
    id: 'c2',
    slug: 'carpet-tiles',
    name: 'Carpet Tiles',
    category: ProductCategory.CARPET,
    subCategory: 'Commercial',
    description: 'Modular carpet tiles that are easy to replace and ideal for office environments.',
    image: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=800',
    usage: 'Indoor',
    features: ['Modular', 'Durable', 'Office Ideal']
  },

  // --- CABINET & FURNITURE ---
  {
    id: 'k1',
    slug: 'tv-design',
    name: 'TV Design',
    category: ProductCategory.CABINET_FURNITURE,
    subCategory: 'Living',
    description: 'Modern and functional TV console designs that serve as a focal point for your living room.',
    image: 'https://images.unsplash.com/photo-1593073843550-50c23aa45798?q=80&w=800',
    usage: 'Indoor',
    features: ['Modern Style', 'Cable Storage', 'Customizable']
  },
  {
    id: 'k2',
    slug: 'cabinet',
    name: 'Cabinet',
    category: ProductCategory.CABINET_FURNITURE,
    subCategory: 'Storage',
    description: 'High-quality bespoke storage cabinets for bedrooms, offices, and hallways.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800',
    usage: 'Indoor',
    features: ['Premium Wood', 'Spacious', 'Sleek Design']
  },
  {
    id: 'k3',
    slug: 'kitchen-cabinet',
    name: 'Kitchen Cabinet',
    category: ProductCategory.CABINET_FURNITURE,
    subCategory: 'Kitchen',
    description: 'Customized modular kitchen cabinets with soft-close mechanisms and elegant finishes.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800',
    usage: 'Indoor',
    features: ['Soft Close', 'Water Resistant', 'Efficient Layout']
  }
];
