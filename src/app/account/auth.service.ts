import { Injectable } from '@angular/core';
import { CartItemsService } from '../cart/cart-items.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cartItemsServce: CartItemsService) { }

  public isUserLoggedIn() {
    return !!localStorage.getItem('token');
  }

  public signout() {
    this.cartItemsServce.emptyCartItems();
    localStorage.removeItem('token');
  }

  public getAuthorizationToken() {
    return localStorage.getItem('token');
  }
}
