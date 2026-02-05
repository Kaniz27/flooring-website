
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  subCategory: string;
  description: string;
  image: string;
  usage: 'Indoor' | 'Outdoor' | 'Both';
  features: string[];
}

export enum ProductCategory {
  FLOORING = 'Flooring',
  WALL_PANELS = 'Wall Panels',
  ACCESSORIES = 'Accessories',
  CARPET = 'Carpet',
  CABINET_FURNITURE = 'Cabinet & Furniture'
}

export interface NavItem {
  label: string;
  path: string;
}
