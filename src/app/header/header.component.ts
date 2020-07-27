import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../cart/cart-items.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  noOfItems: Number = 0;
  constructor(private cartitemsService: CartItemsService,
              private _snackBar: MatSnackBar) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBar() {
    this._snackBar.open('Items changed in cart!!!','', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit(): void {
    this.noOfItems = this.cartitemsService.noOfItems();
    this.cartitemsService.productCountChanged.subscribe( (count) => {
      this.noOfItems = count;
      this.openSnackBar();
    })
  }

}
