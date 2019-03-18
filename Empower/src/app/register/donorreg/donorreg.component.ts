import { Component, OnInit } from '@angular/core';
import { RegserviceService } from 'src/app/services/regservice.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


import {AuthoService} from '../../services/autho.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-donorreg',
  templateUrl: './donorreg.component.html',
  styleUrls: ['./donorreg.component.css']
})
export class DonorregComponent implements OnInit {
  model: any = {};
  submitted: boolean;
  showSuccessMessage: boolean;
  namedonor:null;
  constructor(private RegistermemService: RegserviceService,
    private router: Router,private serv: AuthoService
    ) { }

  ngOnInit() {
    this.RegistermemService.getdonor().subscribe(res => {
      console.log(res)
    });
   
}

onSubmit() {
  console.log('Function called');
  console.log(JSON.stringify((this.model)));
  
  alert('Your details are successfully saved!');
  this.submitted= true;
  this. RegistermemService.insertdonor(this.model);
  this.showSuccessMessage = true;
  // setTimeout(handler: () => this.showSuccessMessage= false, timeout: 3000 );
  this.submitted = false;
  this.RegistermemService.donor.reset();
  this.RegistermemService.donor.setValue({
    $key: null,
    name: null,
    Contact:null,
    email:null,
    
  });
  
  this.serv.doLogout();
  console.log("user logged out automatically");
   this.router.navigate(['/login']);

}
}
