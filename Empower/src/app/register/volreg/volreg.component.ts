import { Component, OnInit } from '@angular/core';
import { RegserviceService } from 'src/app/services/regservice.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

import 'src/email.js';

import {AuthoService} from '../../services/autho.service';
import * as firebase from 'firebase';
declare var Email: any;

@Component({
  selector: 'app-volreg',
  templateUrl: './volreg.component.html',
  styleUrls: ['./volreg.component.css']
})
export class VolregComponent implements OnInit {
  model: any = {};
  submitted: boolean;
  showSuccessMessage: boolean;
  constructor(private RegistermemService: RegserviceService, private router: Router, private serv: AuthoService) { }

  
  MemArray=[];
  MemArray1=[];

  ngOnInit() {
    this.RegistermemService.getvol().subscribe(res => {
      console.log(res)
    });
    this.RegistermemService.getmem().subscribe(
      list => {
          this.MemArray= list.map(item => {
              return {
                  $key: item.key,
                  ...item.payload.val()
              };
          });
          console.log("fjhdsgyfs");
          console.log(this.MemArray);
          console.log("qwertyuio")
      

      
      for (var _i = 0; _i < this.MemArray.length; _i++) {
          this.MemArray1[_i]=this.MemArray[_i].email;
          console.log(this.MemArray1[_i])
      }
      console.log("2345678")
      console.log(this.MemArray1)
    });

      }

      onSubmit() {
        console.log('Function called');
        console.log(JSON.stringify((this.model)));
        alert('Your details are successfully saved!');
        this.submitted= true;
        this. RegistermemService.insertvol(this.model);
        this.showSuccessMessage = true;
        // setTimeout(handler: () => this.showSuccessMessage= false, timeout: 3000 );
        this.submitted = false;
        this.RegistermemService.vol.reset();
        this.RegistermemService.vol.setValue({
          $key: null,
          name: null,
          Contact:null,
          email:null,
         
        });
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
        console.log(this.model);
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
        Email.send({
          Host : "smtp.elasticemail.com",
           Username : "anishdixit99@gmail.com",
          Password : "5f839004-a7ef-484e-8e4a-cd88b57ad857",
             To :this.MemArray1,
                From : "anishdixit99@gmail.com",
             Subject : "New Volunteer registered!",
          Body : this.model.name+ " has been added to the database. the poc name is ",
      }).then(
       message => alert(message)
       );
      
       console.log("email sent");
      this.serv.doLogout();
      console.log("user logged out automatically");
       this.router.navigate(['/login']);
      
      

      this.serv.doLogout();
      console.log("user logged out automatically");
       this.router.navigate(['/login']);
  
      }

}