import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
import User from 'src/app/models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private profileService: ProfileService,
              private router: Router) { }

  user: User = <User>{};

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe( user => {
      this.user = user;
    }, (err) => {
      this.router.navigate(['/unauth']);
    });
  }
}
