import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';
import {AuthoService} from '../services/autho.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-donation-member',
  templateUrl: './donation-member.component.html',
  styleUrls: ['./donation-member.component.css']
})
export class DonationMemberComponent implements OnInit {

  constructor( private router: Router,
    private serv: AuthoService) { }
    email;
    user: firebase.User;
  ngOnInit() {
    this.serv.getLoggedInUser().subscribe(usr => {
      if (usr) {
        this.user = usr;
        this.email=usr.email;
        console.log(this.user);
      } else {
        
      }
    });
  }

}
