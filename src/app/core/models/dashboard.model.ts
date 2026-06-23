export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface DashboardMetrics {
  totalProducts: number;
  totalCategories: number;
  cartItems: number;
  activeOffers: number;
}