import { Component, OnInit, Input } from '@angular/core';
import { CartItemsComponent } from 'src/app/cart/cart-items/cart-items.component';
import { CartItemsService } from 'src/app/cart/cart-items.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() item;

  productsList: Product[] = [];

  constructor(private cartItemsService: CartItemsService) { }

  ngOnInit(): void {
  }

  addToCart(productId: number) {
    this.cartItemsService.addToCart(productId);
  }

}
