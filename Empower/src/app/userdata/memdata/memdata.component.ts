import { Component, OnInit } from '@angular/core';
import {RegserviceService }  from'src/app/services/regservice.service';
@Component({
  selector: 'app-memdata',
  templateUrl: './memdata.component.html',
  styleUrls: ['./memdata.component.css']
})
export class MemdataComponent implements OnInit {
  
  MemArray=[];
 
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
    

  this.RegserviceService.getmem().subscribe(
      list => {
          this.MemArray= list.map(item => {
              return {
                  $key: item.key,
                  ...item.payload.val()
              };
          });console.log(this.MemArray);
      });
  

  
}


}
