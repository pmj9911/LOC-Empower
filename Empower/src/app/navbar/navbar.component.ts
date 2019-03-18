import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthoService} from '../services/autho.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Oppex';
  user: firebase.User;
  userPresent: Boolean ;

  constructor(
      private router: Router,
      private serv: AuthoService
  ) { }

  loadLogin() {
    this.router.navigate(['/login']);
  }
  goToSignup() {
    this.router.navigate(['/signup']);
  }

  logoutUser(){
    this.serv.doLogout();
    this.userPresent=false;
    this.router.navigate(['/home']);

  }
  ngOnInit() {
    this.serv.getLoggedInUser().subscribe(usr => {
      if (usr) {
        this.user = usr;
        this.userPresent = true;
        console.log(this.userPresent,this.user);
      } else {
        this.userPresent = false;
      }
    });
  }
}
