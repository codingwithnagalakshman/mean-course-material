import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartItemsService } from '../cart-items.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartItems: CartItem[] = [];
  constructor(private cartItemsService: CartItemsService) { }

  ngOnInit(): void {
    this.cartItems = this.cartItemsService.getCartItems();
  }

}
