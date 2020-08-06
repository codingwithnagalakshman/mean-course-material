import { Injectable } from '@angular/core';
import { Payment } from '../models/payment.model';
import { CartItemsService } from '../cart/cart-items.service';
import { ShippingAddressService } from './shipping-address.service';
import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private cartItemsService: CartItemsService,
              private shippingAddressService: ShippingAddressService,
              private http: HttpClient) { }

  public savePayment(payment: string) {
    const order = new Order(this.cartItemsService.getCartItems(),
                  this.shippingAddressService.getShippingAddress(),
                  payment,
                  this.cartItemsService.getTotalAmount()
            );
     return this.http.post('http://localhost:3000/api/order', order);
  }         
}
