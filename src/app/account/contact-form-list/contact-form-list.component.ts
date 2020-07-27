import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import Contactus from '../../models/contactus.model';
import { ContactusService } from '../contactus.service';


@Component({
  selector: 'app-contact-form-list',
  templateUrl: './contact-form-list.component.html',
  styleUrls: ['./contact-form-list.component.css']
})
export class ContactFormListComponent implements OnInit {

  ELEMENT_DATA: Contactus[];
  constructor(private contactUsService: ContactusService) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'subject', 'description'];
  dataSource = new MatTableDataSource<Contactus>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.contactUsService.getContactUsList()
        .subscribe( ( response ) => {
          this.dataSource.data = [...response];
          console.log(this.ELEMENT_DATA);
        })
  }

}