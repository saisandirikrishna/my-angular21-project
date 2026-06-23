import {
 Injectable,
 signal
} from '@angular/core';

import { Order }
from '../models/order.model';

@Injectable({
 providedIn:'root'
})
export class OrderService {

 private orders =
 signal<Order[]>([]);

 currentOrder =
 signal<Order | null>(null);

 createOrder(
 order:Order
 ){

   this.orders.update(
   existing =>

   [
    ...existing,
    order
   ]

   );

   this.currentOrder.set(
   order
   );

 }

 getOrders(){

   return this.orders;

 }

}