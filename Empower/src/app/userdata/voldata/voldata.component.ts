import { Component, OnInit } from '@angular/core';
import {RegserviceService }  from'src/app/services/regservice.service';
@Component({
  selector: 'app-voldata',
  templateUrl: './voldata.component.html',
  styleUrls: ['./voldata.component.css']
})
export class VoldataComponent implements OnInit {
  VolArray=[];
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
    
  this.RegserviceService.getvol().subscribe(
    list => {
        this.VolArray= list.map(item => {
            return {
                $key: item.key,
                ...item.payload.val()
            };
        });
    });
  }

}
