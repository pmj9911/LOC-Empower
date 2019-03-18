import { Component, OnInit } from '@angular/core';
import { RegserviceService } from 'src/app/services/regservice.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

import {AuthoService} from '../../services/autho.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-memberreg',
  templateUrl: './memberreg.component.html',
  styleUrls: ['./memberreg.component.css']
})
export class MemberregComponent implements OnInit {
  model: any = {};
  submitted: boolean;
  showSuccessMessage: boolean;
  constructor(private RegistermemService: RegserviceService,public router:Router,private serv: AuthoService) { }

  

  ngOnInit() {
    this.RegistermemService.getmem().subscribe(res => {
      console.log(res)
    });
      }

      onSubmit() {
        console.log('Function called');
        console.log(JSON.stringify((this.model)));
        alert('Your details are successfully saved!');
        this.submitted= true;
        this. RegistermemService.insertmem(this.model);
        this.showSuccessMessage = true;
        // setTimeout(handler: () => this.showSuccessMessage= false, timeout: 3000 );
        this.submitted = false;
        this.RegistermemService.mem.reset();
        this.RegistermemService.mem.setValue({
          $key: null,
          name: null,
          Contact:null,
          email:null,
          address: null,
          PocNo: null,
          PocName: null,
          Long: null,
          Lat: null,
          q1:null
        });
        this.serv.doLogout();
        console.log("user logged out automatically");
         this.router.navigate(['/login']);
        }
}
