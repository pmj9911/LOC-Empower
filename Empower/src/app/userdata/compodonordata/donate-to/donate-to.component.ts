import { Component, OnInit } from '@angular/core';
import {RegserviceService }  from'src/app/services/regservice.service';

import {AuthoService} from '../../../services/autho.service';
import * as firebase from 'firebase';
declare var Email: any;
import 'src/email.js';
@Component({
  selector: 'app-donate-to',
  templateUrl: './donate-to.component.html',
  styleUrls: ['./donate-to.component.css']
})
export class DonateToComponent implements OnInit {

    
  user: firebase.User;
  MemArray=[];
  DonorArray=[];
  Email;
  PhoneNo;
  Name;
  constructor(public RegserviceService:RegserviceService, private serv: AuthoService) { }
  openNav() {
    document.getElementById("mySidebar").style.width = "210px";
    document.getElementById("main").style.marginLeft = "210px";
}

closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
  ngOnInit() {
    

  this.RegserviceService.getmem().subscribe(
      list => {
          this.MemArray= list.map(item => {
              return {
                  $key: item.key,
                  ...item.payload.val()
              };
          });console.log("MEM ARRAY");
          console.log(this.MemArray);
      });
  
      
  }
  SendEmail(emailId, name, Contact){
    console.log("hi")
    this.serv.getLoggedInUser().subscribe(usr => {
      if (usr) {
        this.user = usr;

       this.Email=this.user.email;
       console.log("this")
       console.log(this.Email)
      } else {
      }
    });
    console.log("ukyutrtyguiouyg"+this.Email);

this.RegserviceService.getdonor().subscribe(
  list => {
      this.DonorArray= list.map(item => {
          return {
              $key: item.key,
              ...item.payload.val()
          };
      });console.log(this.DonorArray);
  });

  for (var _i = 0; _i < this.DonorArray.length; _i++) {
    if(this.DonorArray[_i].email==this.Email){
      this.PhoneNo=this.DonorArray[_i].Contact;
      this.Name=this.DonorArray[_i].name;
      console.log("ejgwgedbv"+this.PhoneNo+"dv"+this.Name)
    }
    
}
    console.log(emailId, name, Contact)

    Email.send({
      Host : "smtp.elasticemail.com",
       Username : "anishdixit99@gmail.com",
      Password : "5f839004-a7ef-484e-8e4a-cd88b57ad857",
         To :emailId,
            From : "anishdixit99@gmail.com",
         Subject : "someone wants to donate to your cause!",
      Body : name + " is intrested in donating to your cause. get in touch with him/her via email:  " +this.Email +" phone no is : "+ Contact   ,
     
  }).then(
   message => alert(message)
   );
  
   console.log("email sent");

  }
}
