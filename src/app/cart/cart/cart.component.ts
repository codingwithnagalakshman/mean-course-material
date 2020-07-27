import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartItemsService } from '../cart-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartItems;

  constructor(private cartItemsService: CartItemsService,
              private router: Router) { }

  displayedColumns: string[] = ['name', 'itemPrice', 'noOfItems', 'totalPrice', 'action'];
  dataSource = new MatTableDataSource();
  totalPrice: number = 0;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.cartItems;
    this.cartItemsService.cartItemsChanged.subscribe( items => {
      this.dataSource.data = items;
    });
    this.totalPrice = this.cartItemsService.getTotalAmount();
    this.cartItemsService.totalAmountChanged.subscribe( price => {
      this.totalPrice = price;
    })
  }

  removeProduct(productId) {
    this.cartItemsService.removeItemFromCart(productId);

  }

  addProduct(productId) {
    this.cartItemsService.addItemToCart(productId);
  }

  deleteItem(productId) {
    this.cartItemsService.deleteItemFromCart(productId);
  }

  backToShop() {
    this.router.navigate(['/shop']);
  }

  goToShippingPage() {
    this.router.navigate(['/shipping-address']);
  }

}


