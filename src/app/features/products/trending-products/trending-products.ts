import {
  Component,
  inject
} from '@angular/core';

import { ProductService }
from '../../../core/services/product.service';

import { ProductCardComponent } from '../../../shared/components/product-card/product-card';

@Component({
  selector:'app-trending-products',
  standalone:true,

  imports:[
    ProductCardComponent
  ],

  templateUrl:
    './trending-products.html',

  styleUrl:
    './trending-products.css'
})
export class TrendingProductsComponent {

  productService =
    inject(ProductService);

  products =
    this.productService.getProducts();

}