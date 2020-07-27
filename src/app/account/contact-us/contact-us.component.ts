import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ContactusService } from '../contactus.service';
import Contactus from 'src/app/models/contactus.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactusForm: FormGroup;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  subject = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  contactus: Contactus;
  success: boolean = false;
  error: boolean =  false;


  constructor(private fb: FormBuilder, 
              private contactusService: ContactusService) { }

  getErrorMessage() {
    if (this.firstName.hasError('required') || 
        this.lastName.hasError('required') || 
        this.email.hasError('required') || 
        this.subject.hasError('required') || 
        this.description.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  } 

  onSubmit() {

    if(this.contactusForm.valid) {
      console.log('form sumbitted', this.contactusForm.value);
      this.contactus = new Contactus(
        this.contactusForm.value.firstName,
        this.contactusForm.value.lastName,
        this.contactusForm.value.email,
        this.contactusForm.value.subject,
        this.contactusForm.value.description
      );
      this.contactusService.save(this.contactus).subscribe( (response) => {
        console.log('contact us data', response);
        this.success = true;
        setTimeout( () => {
          this.success = false;
        }, 5000);
      },(err) => {
        this.error = true;
        setTimeout( () => {
          this.error = false;
        }, 5000);
      });
    }
    return;
  }

  ngOnInit(): void {
    this.contactusForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      subject: this.subject,
      description: this.description
    })
  }

}
