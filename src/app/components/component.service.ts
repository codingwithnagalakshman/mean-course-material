import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private http: HttpClient) { }

  public getCountryList() {
    return this.http.get<Country[]>('http://localhost:3000/api/components/country');
  }
}
