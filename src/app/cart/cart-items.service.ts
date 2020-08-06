import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { ShoppingListService } from '../shop/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  cartItemsList: CartItem[] = [];
  productsList: Product[] = [];
  productCountChanged = new Subject<Number>();
  cartItemsChanged = new Subject<CartItem[]>();
  totalAmountChanged = new Subject<number>();
  product: Product;
  cartItem: CartItem;
  totalItems: number = 0;

  constructor(private shoppingListService: ShoppingListService) { }

  public addToCart(productId: number) {

    if(this.productsList.length == 0) {
      this.productsList = this.shoppingListService.getItems();
    }
    this.product = this.getProductById(productId);
    this.cartItem = this.getCartItemById(productId);

    if(this.cartItem === null || this.cartItem === undefined ) {
      this.cartItemsList.push(
        new CartItem(this.product.productId, this.product.title, 
                     this.product.price, 1, this.product.price));
        this.totalItems++;
    } else {
      this.cartItem.noOfItems++;
      this.cartItem.totalPrice = this.cartItem.totalPrice + this.product.price;
      this.totalItems++;
    }
    this.productCountChanged.next(this.totalItems);
  }

  public noOfItems() {
    return this.totalItems;
  }

  public getCartItems() {
    return this.cartItemsList;
  }

  public addItemToCart(productId: number) {

    this.product = this.getProductById(productId);
    this.cartItem = this.getCartItemById(productId);
    this.cartItem.noOfItems++;
    this.cartItem.totalPrice = this.cartItem.totalPrice + this.product.price;
    this.totalItems++;
    this.productCountChanged.next(this.totalItems);
    this.totalAmountChanged.next(this.getTotalAmount());

  }

  public removeItemFromCart(productId: number) {
   
    this.product = this.getProductById(productId);
    this.cartItem = this.getCartItemById(productId);
    this.cartItem.noOfItems--;
    this.cartItem.totalPrice = this.cartItem.totalPrice - this.product.price;
    this.totalItems--;
    this.productCountChanged.next(this.totalItems);
    this.totalAmountChanged.next(this.getTotalAmount());

  }

  public deleteItemFromCart(productId: number) {

    this.cartItem = this.getCartItemById(productId);
    this.totalItems = this.totalItems - this.cartItem.noOfItems;
    this.productCountChanged.next(this.totalItems);
    this.cartItemsList = this.cartItemsList.filter( (item) => {
      return item.id != productId;
    });

    this.cartItemsChanged.next(this.cartItemsList);
    this.totalAmountChanged.next(this.getTotalAmount());
  }

  getTotalAmount() {
    if (this.cartItemsList.length > 0) {
      return this.cartItemsList.reduce(function (accumulator, item) {
        return accumulator + item.totalPrice;
      }, 0);
    } else {
      return 0;
    }
  }

  private getProductById(productId: number): Product {
     return this.productsList.find( product => {
      if(product.productId === productId) {
        return product;
      }
    });
  }

  private getCartItemById(productId: number): CartItem {
    return this.cartItemsList.find( cart => {
      if(cart.id === productId) {
        return cart;
      }
    });
  }

  public emptyCartItems() {
    this.cartItemsList.length = 0;
    this.cartItemsChanged.next(this.cartItemsList);
    this.productCountChanged.next(this.cartItemsList.length);
  }
}
