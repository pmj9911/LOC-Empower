import { Component, OnInit } from '@angular/core';
import {RegserviceService }  from'src/app/services/regservice.service';
@Component({
  selector: 'app-donordata',
  templateUrl: './donordata.component.html',
  styleUrls: ['./donordata.component.css']
})
export class DonordataComponent implements OnInit {
  DonorArray = [];
  
  
  constructor(public RegserviceService:RegserviceService) { }
  openNav() {
    document.getElementById("mySidebar").style.width = "210px";
    document.getElementById("main").style.marginLeft = "210px";
}

closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
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
      console.log(this.DonorArray)

  
  

}

}
