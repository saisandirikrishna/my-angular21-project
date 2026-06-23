import {
 Component,
 Input,
 inject
} from '@angular/core';

import {
 CartItem
}
from '../../../core/models/cart-item.model';

import { CartService } from '../../../core/services/cart.services';

@Component({

 selector:'app-cart-item',

 standalone:true,

 templateUrl:
 './cart-item.html',

 styleUrl:
 './cart-item.css'

})
export class CartItemComponent {

 @Input()
 item!: CartItem;

 cartService =
 inject(CartService);

}