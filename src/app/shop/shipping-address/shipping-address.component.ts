import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import ShippingAddress from 'src/app/models/shipping-address.model';
import { ShippingAddressService } from '../shipping-address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email])
  address = new FormControl('', [Validators.required]);
  address2 = new FormControl('');
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  postalCode = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.required]);
  shippingAddress: ShippingAddress;

  shippingAddressForm: FormGroup;
  constructor(private fb: FormBuilder,
              private shippingAddressService: ShippingAddressService,
              private router: Router) { }

  ngOnInit(): void {
    this.shippingAddress = this.shippingAddressService.getShippingAddress();
    this.shippingAddressForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      address: this.address,
      address2: this.address2,
      city: this.city,
      state: this.state,
      postalCode: this.postalCode,
      telephone: this.telephone
    })

    if( this.shippingAddress != null ) {
      this.shippingAddressForm.patchValue(this.shippingAddress);
    }
  }

  getErrorMessage() {
    if( this.firstName.hasError('required') ||
        this.lastName.hasError('required') ||
        this.email.hasError('required') ||
        this.address.hasError('required') ||
        this.city.hasError('required') ||
        this.state.hasError('required') ||
        this.postalCode.hasError('required') ||
        this.telephone.hasError('required') ) {
          return 'You must enter a value';
        }
    
    return this.email.hasError('email') ? 'Not a valid email' : '';

  }

  onSubmit() {

    if(this.shippingAddressForm.valid) {
      const shippingAddress = new ShippingAddress(
          this.firstName.value,
          this.lastName.value,
          this.email.value,
          this.address.value,
          this.address2.value,
          this.city.value,
          this.state.value,
          this.postalCode.value,
          this.telephone.value
      );
      this.shippingAddressService.saveShippingAddress(shippingAddress);
      this.router.navigate(['/payment']);
    }
  }

  backToCart() {
    this.router.navigate(['/cart']);
  }

}
