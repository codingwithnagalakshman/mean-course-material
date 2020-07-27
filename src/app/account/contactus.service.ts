import { Injectable } from '@angular/core';
import Contactus from '../models/contactus.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }

  public save(contactus: Contactus) {
    return this.http.post('http://localhost:3000/api/contactus', contactus);
  }

  public getContactUsList() {
    return this.http.get<Contactus[]>('http://localhost:3000/api/contactus');
  }
}
