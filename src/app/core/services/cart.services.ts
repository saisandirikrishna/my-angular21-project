import {
  Injectable,
  signal,
  computed
} from '@angular/core';

import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<CartItem[]>([]);

  couponDiscount = signal(0);

  shippingCharge = signal(99);

  gstPercentage = signal(18);

  readonly totalItems = computed(() =>
    this.cartItems()
      .reduce(
        (sum, item) =>
        sum + item.quantity,
        0
      )
  );

  readonly subTotal = computed(() =>
    this.cartItems()
      .reduce(
        (sum, item) =>
          sum +
          item.product.price *
          item.quantity,
        0
      )
  );

  readonly gstAmount = computed(() =>
    this.subTotal() *
    this.gstPercentage() /
    100
  );

  readonly grandTotal = computed(() =>

    this.subTotal() +

    this.gstAmount() +

    this.shippingCharge() -

    this.couponDiscount()

  );

  addToCart(product: Product) {

    const existing =
      this.cartItems()
      .find(
        item =>
        item.product.id === product.id
      );

    if (existing) {

      existing.quantity++;

      this.cartItems.set([
        ...this.cartItems()
      ]);

      return;
    }

    this.cartItems.update(items => [

      ...items,

      {
        product,
        quantity: 1
      }

    ]);
  }

  increaseQuantity(
    productId: number
  ) {

    this.cartItems.update(items =>
      items.map(item =>

        item.product.id === productId
          ? {
              ...item,
              quantity:
                item.quantity + 1
            }
          : item

      )
    );

  }

  decreaseQuantity(
    productId: number
  ) {

    this.cartItems.update(items =>
      items
      .map(item =>

        item.product.id === productId
          ? {
              ...item,
              quantity:
                item.quantity - 1
            }
          : item

      )
      .filter(item =>
        item.quantity > 0
      )
    );

  }

  removeItem(
    productId: number
  ) {

    this.cartItems.update(items =>

      items.filter(item =>

        item.product.id !== productId

      )

    );

  }

  clearCart() {

    this.cartItems.set([]);

  }

}