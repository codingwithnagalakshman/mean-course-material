import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ComponentService } from '../component.service';
import { Country } from 'src/app/models/country.model';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor(private componentService: ComponentService) {}

  myControl = new FormControl();
  options: Country[] = [
    {name: 'India'}
  ];
  filteredOptions: Observable<Country[]>;

  ngOnInit() {
    this.componentService.getCountryList().subscribe( (countries) => {
      this.options = countries;
    })
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }

  private _filter(name: string): Country[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
