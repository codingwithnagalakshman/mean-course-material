import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  email= new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('', [Validators.required]);

  error: boolean = false;

  constructor(private fb: FormBuilder, 
              private signinService: SigninService,
              private router: Router) { }

  ngOnInit(): void {

    this.signInForm = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  getErrorMessage() {

    if (this.email.hasError('required') || 
        this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    this.signinService.signin(this.email.value, this.password.value)
        .subscribe( res => {
          localStorage.setItem('token', res['token']);
          this.router.navigate(['/shop']);
        }, ( err) => {
          console.log(err);
          this.error = true;
        });
  }

}
