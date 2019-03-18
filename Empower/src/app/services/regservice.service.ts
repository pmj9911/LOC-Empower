import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class RegserviceService {
  
  constructor(private firebase: AngularFireDatabase) { }
  memList: AngularFireList<any>;

  mem = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    Contact: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    PocName: new FormControl('', Validators.required),
    PocNo: new FormControl('', Validators.required),
    Long: new FormControl('', Validators.required),
    Lat: new FormControl('', Validators.required),
    q1:new FormControl('',Validators.required),
  });

  getmem() {
    this.memList = this.firebase.list('/mem');
    return this.memList.snapshotChanges();
  }

  insertmem(mem) {
    console.log("inside survey");
    console.log(mem);


    this.memList.push({
      name: mem.name ,
      Contact: mem.Contact,
      email: mem.email,
     address: mem.address,
     PocName:mem.PocName,
     PocNo:mem.PocNo,
     Lat:mem.Lat,
     Long: mem.Long,
     q1: mem.q1
    });
    // this.formList.push("reached data");
  }



  

  /////////////////////////donor
  donorList: AngularFireList<any>;

  donor = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    Contact: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
    
  });

  getdonor() {
    this.donorList = this.firebase.list('/donor');
    return this.donorList.snapshotChanges();
  }
  
  insertdonor(donor) {
    console.log("inside survey");
    console.log(donor);

    this.donorList.push({
      name: donor.name ,
      Contact: donor.Contact,
      email: donor.email,
    });
    // this.formList.push("reached data");
}


////////////////volunteers



volList: AngularFireList<any>;

  vol = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    Contact: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
    
  });

  getvol() {
    this.volList = this.firebase.list('/vol');
    return this.volList.snapshotChanges();
  }
  
  insertvol(vol) {
    console.log("inside survey");
    console.log(vol);

    this.volList.push({
      name: vol.name ,
      Contact: vol.Contact,
      email: vol.email,
    });
    // this.formList.push("reached data");
}

}