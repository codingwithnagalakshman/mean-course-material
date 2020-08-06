import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment } from 'moment';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Payment } from 'src/app/models/payment.model';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  name = new FormControl('',[Validators.required]);
  cardnumber = new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]);
  date = new FormControl(moment());
  cvv = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder, 
              private router: Router,
              private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      name: this.name,
      cardnumber: this.cardnumber,
      date: this.date,
      cvv: this.cvv
    })
  }

  getErrorMessage() {

    if( this.name.hasError('required') || 
        this.cardnumber.hasError('required') || 
        this.date.hasError('required') || 
        this.cvv.hasError('required') ) {
          return 'You must enter a value';
        }
  }


  onSubmit() {

    if( this.paymentForm.valid ) {
      this.paymentService.savePayment(this.cardnumber.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/payment-success']);
      }, ( err => {
        this.router.navigate(['/unauth']);
      }));
    }

  }

  backToShippingAddress() {
    this.router.navigate(['/shipping-address']);
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
}
