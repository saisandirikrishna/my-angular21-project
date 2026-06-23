import {
 Component,
 Input,
 inject
} from '@angular/core';

import {
 Router
} from '@angular/router';

import {
 Product
} from '../../../core/models/product.model';

@Component({
 selector:'app-product-card',
 standalone:true,
 templateUrl:'./product-card.html',
 styleUrls:['./product-card.css']
})
export class ProductCardComponent {

 @Input()
 product!: Product;

 private router =
 inject(Router);

 viewProduct() {

   this.router.navigate([
     '/products',
     this.product.id
   ]);

 }

}