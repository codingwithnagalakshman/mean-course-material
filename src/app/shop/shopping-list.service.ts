import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  productsList: Product[] = [];
  productsListChanged = new Subject<Product[]>();

  constructor(private http: HttpClient) { }

  public getItems() {
      if(this.productsList.length > 0) {
        return this.productsList;
      } else {
        this.http.get<Product[]>('http://localhost:3000/api/products')
            .subscribe( (produts:Product[]) => {
              this.productsList = produts;
              this.productsListChanged.next(this.productsList);
          });
      }   
  }
}
