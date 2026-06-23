import {
  Component,
  inject
} from '@angular/core';

import {
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import { CartService } from '../../core/services/cart.services';

import {
  OrderService
}
  from '../../core/services/order.service';

import {
  InvoiceService
}
  from '../../core/services/invoice.service';

@Component({

  selector: 'app-billing',

  standalone: true,

  imports: [
    ReactiveFormsModule
  ],

  templateUrl:
    './billing.html',

  styleUrl:
    './billing.css'

})
export class BillingComponent {

  private fb =
    inject(FormBuilder);

  private router =
    inject(Router);

   cartService =
    inject(CartService);

  private orderService =
    inject(OrderService);

  private invoiceService =
    inject(InvoiceService);

  billingForm =
    this.fb.group({

      customerName: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '',
        Validators.required
      ],

      address: [
        '',
        Validators.required
      ],

      city: [
        '',
        Validators.required
      ],

      state: [
        '',
        Validators.required
      ],

      postalCode: [
        '',
        Validators.required
      ]

    });

  placeOrder() {

    if (
      this.billingForm.invalid
    ) return;

    const order:any = {

      orderId:
        this.invoiceService
          .generateOrderNumber(),

      invoiceNumber:
        this.invoiceService
          .generateInvoiceNumber(),

      ...this.billingForm.value,

      items:
        this.cartService
          .cartItems(),

      subtotal:
        this.cartService
          .subTotal(),

      gst:
        this.cartService
          .gstAmount(),

      shipping:
        this.cartService
          .shippingCharge(),

      total:
        this.cartService
          .grandTotal(),

      orderDate:
        new Date(),

      paymentStatus:
        'SUCCESS'
    };

    this.orderService
      .createOrder(order);

    this.cartService
      .clearCart();

    this.router.navigate([
      '/order-success'
    ]);

  }

}