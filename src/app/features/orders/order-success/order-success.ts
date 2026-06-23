import {
 Component,
 inject
} from '@angular/core';

import {
 RouterLink
} from '@angular/router';

import {
 OrderService
}
from '../../../core/services/order.service';

@Component({

 selector:'app-order-success',

 standalone:true,

 imports:[
  RouterLink
 ],

 templateUrl:
 './order-success.html',

 styleUrl:
 './order-success.css'

})
export class OrderSuccessComponent {

 order =
 inject(
 OrderService
 ).currentOrder;

}