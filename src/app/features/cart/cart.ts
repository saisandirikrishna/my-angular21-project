
@Component({

 selector:'app-empty-cart',

 standalone:true,

 imports:[
 ],

 templateUrl:
 './empty-cart.html',

 styleUrl:
 './cart.css'
})
export class EmptyCartComponent {}


import {
 Component,
 inject
} from '@angular/core';

import { CartService } from '../../core/services/cart.services';
import { CartItemComponent } from './cart-item/cart-item';
import { CartSummaryComponent } from './cart-summary/cart-summary';

@Component({

 selector:'app-cart',

 standalone:true,

 imports:[
  CartItemComponent,
  CartSummaryComponent,
  EmptyCartComponent
 ],

 templateUrl:
 './cart.html',

 styleUrl:
 './cart.css'
})
export class CartComponent {

 cartService =
 inject(CartService);

}
