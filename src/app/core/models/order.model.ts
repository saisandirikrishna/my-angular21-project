import { CartItem } from './cart-item.model';

export interface Order {

  orderId: string;

  invoiceNumber: string;

  customerName: string;

  email: string;

  phone: string;

  address: string;

  city: string;

  state: string;

  postalCode: string;

  items: CartItem[];

  subtotal: number;

  gst: number;

  shipping: number;

  total: number;

  orderDate: Date;

  paymentStatus: string;

}