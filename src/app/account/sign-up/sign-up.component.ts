import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import User from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  confirmPassword = new FormControl('',[Validators.required]);
  error = false;
  errorMessage: string;

  constructor(private signupService: SignupService,
              private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    })
  }

  getErrorMessage() {
    if (this.firstName.hasError('required') || 
        this.lastName.hasError('required') || 
        this.email.hasError('required') || 
        this.password.hasError('required') || 
        this.confirmPassword.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  } 

  onSubmit() {

    if(this.signUpForm.valid) {
      if (this.password.value !== this.confirmPassword.value) {
        return ;
      }
      const user = new User(this.firstName.value, 
                            this.lastName.value, 
                            this.email.value,
                            this.password.value);
      this.signupService.signup(user).subscribe( (res) => {
        this.router.navigate(['/sign-up-success']);
      }, (err) => {
        this.error = true;
        this.errorMessage = err.error.message;
        console.log(err);
        return;
      })
    } else {
      return;
    }
    
  }


}
