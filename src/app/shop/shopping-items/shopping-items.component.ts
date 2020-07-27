import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {

  list: Product[] = [];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.list = this.shoppingListService.getItems();
    this.shoppingListService.productsListChanged.subscribe( (products) => {
      this.list = products;
    })
  }

}
