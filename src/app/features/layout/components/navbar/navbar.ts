import { Component, inject } from '@angular/core';
import { CartService } from '../../../../core/services/cart.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  private cartService = inject(CartService);

  cartCount = this.cartService.totalItems;
}