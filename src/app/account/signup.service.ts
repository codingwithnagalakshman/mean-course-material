import { Injectable } from '@angular/core';

import User from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  public signup(user: User) {
    return this.http.post<User>('http://localhost:3000/api/signup', user);
  }
}
