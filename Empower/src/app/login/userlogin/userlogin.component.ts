import { Component, OnInit } from '@angular/core';
import { AuthoService} from 'src/app/services/autho.service';
import {RegserviceService } from 'src/app/services/regservice.service'
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  LoginForm: FormGroup;
  errorMessage = '';
  successMessage = '';
    MemArray =[];
    DonorArray=[];
    VolunteerArray=[];
    model: any = {};
  constructor(public authoService: AuthoService,
    private router: Router,
    private fb: FormBuilder,
    public RegserviceService: RegserviceService
    ) {this.createLoginForm();}


     createLoginForm() {
      this.LoginForm = this.fb.group({
        email: ['', Validators.required ],
        password: ['', Validators.required],
        q1:['',Validators.required]
      });
    }


  ngOnInit() {
    this.RegserviceService.getdonor().subscribe(
      list => {
          this.DonorArray = list.map(item => {
              return {
                  $key: item.key,
                  ...item.payload.val()
              };
          });
      });
  this.RegserviceService.getmem().subscribe(
      list => {
          this.MemArray= list.map(item => {
              return {
                  $key: item.key,
                  ...item.payload.val()
              };
          });
      });
  this.RegserviceService.getvol().subscribe(
      list => {
          this.VolunteerArray = list.map(item => {
              return {
                  $key: item.key,
                  ...item.payload.val()
              };
          });
      });
  
}

  
tryLogin(value) {
  this.authoService.doLogin(value)
      .then(res => {
          this.successMessage="Logged in Successfully!";
        alert(this.successMessage);
        console.log("logined",);
        alert(value.email);

        if(this.model.q1=="Donor")
          {
            for(let donor of this.DonorArray)
            {
                console.log(donor.email);
                if(donor.email==this.model.email){
                    alert("Inside Donor");
                    this.router.navigate(['/donorProfile']);
                }
            }
          }

        if(this.model.q1=="Member")
        {
          // for(let donor of this.MemArray)
          // {
          //   console.log("member");
          //     if (donor.email==this.model.email)
          //     {
                console.log("memberwow");
                  alert("Inside Member");
                  this.router.navigate(['/memberProfile']);
          //     }
          // }
        }
        if(this.model.q1=="Volunteer")
        {
          for(let donor of this.VolunteerArray)
          {
              if (donor.email==this.model.email)
              {
                  alert("Inside Volunteer");
                  this.router.navigate(['/volunteerProfile']);
              }
          }
        }
        //this.whereTo();
        // loginVerified=true;

      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
}
}