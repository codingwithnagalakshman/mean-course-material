import { Injectable } from '@angular/core';
import ShippingAddress from '../models/shipping-address.model';

@Injectable({
  providedIn: 'root'
})
export class ShippingAddressService {

  shippingAddress: ShippingAddress;
  constructor() { }

  public saveShippingAddress(shippingAddress: ShippingAddress) {
    this.shippingAddress = shippingAddress;
  }

  public getShippingAddress() {
    return this.shippingAddress;
  }
}
