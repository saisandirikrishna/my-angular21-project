import {
 Component,
 inject
} from '@angular/core';

import {
 Router
} from '@angular/router';

import { CartService } from '../../../core/services/cart.services';
@Component({

 selector:'app-cart-summary',

 standalone:true,

 templateUrl:
 './cart-summary.html',

 styleUrl:
 './cart-summary.css'

})
export class CartSummaryComponent {

 cartService =
 inject(CartService);

 router =
 inject(Router);

 proceedCheckout() {

   this.router.navigate(
   ['/billing']
   );

 }

}