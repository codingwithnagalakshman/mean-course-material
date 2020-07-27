import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  address2 = new FormControl('');
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  postalCode = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.required]);

  shippingAddressForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.shippingAddressForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      address2: this.address2,
      city: this.city,
      state: this.state,
      postalCode: this.postalCode,
      telephone: this.telephone
    })
  }

  onSubmit() {

  }

}
