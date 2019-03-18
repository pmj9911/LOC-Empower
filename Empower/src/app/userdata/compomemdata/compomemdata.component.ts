  import { Component, OnInit } from '@angular/core';
//LEFT TO DO 
  import {Router, ActivatedRoute} from '@angular/router';
  import {AuthoService} from '../../services/autho.service';
  import * as firebase from 'firebase';
  import { AngularFireAuth } from 'angularfire2/auth';
  import {RegserviceService }  from'src/app/services/regservice.service';
@Component({
  selector: 'app-compomemdata',
  templateUrl: './compomemdata.component.html',
  styleUrls: ['./compomemdata.component.css']
})
export class CompomemdataComponent implements OnInit {
  openNav() {
    document.getElementById("mySidebar").style.width = "210px";
    document.getElementById("main").style.marginLeft = "210px";
}

closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

logoutUser(){
  this.serv.doLogout();
 
  this.router.navigate(['/home']);

}
name;
contactNo;
emailId;
public MemArray=[];

  constructor( public afAuth: AngularFireAuth,private router: Router,
    private serv: AuthoService,private RegserviceService:RegserviceService) {

     }
    user: firebase.User;
    data;
    

    
  ngOnInit() {
   
    this.serv.getLoggedInUser().subscribe(usr => {
      if (usr) {
        this.user = usr;
        
        console.log(usr);
        console.log("hello")
        //console.log(usr.name);
        console.log(usr.email);
        this.emailId=usr.email;
        
      } else {
        
      }
    });

    this.RegserviceService.getmem().subscribe(
      list => {
          this.MemArray= list.map(item => {
              return {
                  $key: item.key,
                  ...item.payload.val()
              };
          });
          console.log(this.MemArray);

          for (var _i = 0; _i < this.MemArray.length; _i++) {
            console.log("hii2");
            console.log(this.MemArray[_i].Contact);
            console.log(this.MemArray[_i].Contact);
            if(this.MemArray[_i].email==this.emailId)
            {
              this.name=this.MemArray[_i].name;
              this.contactNo=this.MemArray[_i].Contact;
              console.log(this.name);
            }
          }
          console.log(this.MemArray);
          console.log(this.contactNo);

      });
     

     
    

  }
  getLoggedInUser() {
    return this.afAuth.authState;
  }

}
