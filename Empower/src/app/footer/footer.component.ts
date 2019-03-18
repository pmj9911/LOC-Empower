///  <reference types="@types/googlemaps" />

import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  
  constructor() { }

  ngOnInit() {
    
    var mapProp = {
      center: new google.maps.LatLng(19.123246, 72.835997),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var marker = new google.maps.Marker({position: {lat: 19.123246, lng:72.835997}, map: this.map});
    
  }

}
