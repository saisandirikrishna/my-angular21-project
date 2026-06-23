export interface Product {

  id: number;

  name: string;

  description: string;

  category: string;

  brand: string;

  price: number;

  stock: number;

  rating: number;

  imageUrl: string;

  discountPercentage?: number;

  featured?: boolean;

}