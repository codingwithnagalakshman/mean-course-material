import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openAlert() {
    alert('Welcome to techbrothers shopping alert!!!');
  }

  openConfirm(){
    confirm('Are you happy with website performance?');
  }

}
