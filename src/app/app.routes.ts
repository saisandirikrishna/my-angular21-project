import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(c => c.DashboardComponent)
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/product-list/product-list')
        .then(c => c.ProductListComponent)
  },

  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/products/product-detail/product-detail')
        .then(c => c.ProductDetailComponent)
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart')
        .then(c => c.CartComponent)
  },

  {
    path: 'billing',
    loadComponent: () =>
      import('./features/billing/billing')
        .then(c => c.BillingComponent)
  }
];