import { Component, OnInit } from '@angular/core';
import {AuthoService} from '../services/autho.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AngularFireAuth]

})
export class SignupComponent implements OnInit {
  SignupForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  constructor(public authoService: AuthoService,
    public router:Router,
    private fb: FormBuilder) {

      this.createSignupForm();
     }
     model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  createSignupForm() {
    this.SignupForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required],
      q1: ['', Validators.required]
      
    });
  }

  trySignup(value) {
    this.authoService.doSignup(value)
        .then(res => {
          console.log(res);
          this.errorMessage = '';
          this.successMessage = 'Your account has been created';
          console.log(this.model.q1);
          /////router
          if(this.model.q1=="Volunteer")
          {
            this.router.navigate(['/volreg']);
          }
          if(this.model.q1=="Donor")
          {
            this.router.navigate(['/donorreg']);
          }
          if(this.model.q1=="Member")
          {
            this.router.navigate(['/memreg']);
          }
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = '';
        });
  }

  tryGoogleLogin() {
    this.authoService.doGoogleLogin()
        .then(res => {

           this.router.navigate(['/login']);
            }, err => console.log(err)
        );

        this.successMessage = 'Your account has been created';
        console.log(this.model.q1);
        /////router
        if(this.model.q1=="Volunteer")
        {
          this.router.navigate(['/volreg']);
        }
        if(this.model.q1=="Donor")
        {
          this.router.navigate(['/donorreg']);
        }
        if(this.model.q1=="Member")
        {
          this.router.navigate(['/memreg']);
        }
      

  }

  ngOnInit() {
  }

}
