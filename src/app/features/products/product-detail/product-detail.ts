import {
 Component,
 inject
} from '@angular/core';

import {
 ActivatedRoute
} from '@angular/router';

import {
 ProductService
}
from '../../../core/services/product.service';

import { CartService } from '../../../core/services/cart.services';
@Component({

 selector:'app-product-detail',

 standalone:true,

 templateUrl:
 './product-detail.html',

 styleUrl:
 './product-detail.css'
})
export class ProductDetailComponent {

 private route =
 inject(ActivatedRoute);

 private productService =
 inject(ProductService);

 private cartService =
 inject(CartService);

 product =
 this.productService.getProductById(
 Number(
 this.route.snapshot.paramMap.get('id')
 )
 );

 addToCart(){

   if(this.product){

      this.cartService
      .addToCart(
      this.product
      );

   }

 }

}