import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';
import {AuthoService} from '../../services/autho.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-compodonordata',
  templateUrl: './compodonordata.component.html',
  styleUrls: ['./compodonordata.component.css']
})
export class CompodonordataComponent implements OnInit {

  openNav() {
    document.getElementById("mySidebar").style.width = "210px";
    document.getElementById("main").style.marginLeft = "210px";
}

closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

logoutUser(){
  this.serv.doLogout();
 
  this.router.navigate(['/home']);

}
name;
  constructor( public afAuth: AngularFireAuth,private router: Router,
    private serv: AuthoService) { }
    user: firebase.User;
    data;
  ngOnInit() {
   
    this.serv.getLoggedInUser().subscribe(usr => {
      if (usr) {
        this.user = usr;
        
        console.log(usr);
        console.log("hello")
        //console.log(usr.name);
        console.log(usr.email);
        this.name=usr.email;
      } else {
        
      }
    });

  }
  getLoggedInUser() {
    return this.afAuth.authState;
  } 

}
