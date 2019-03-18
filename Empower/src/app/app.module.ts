import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberregComponent } from './register/memberreg/memberreg.component';
import { environment } from '../environments/environment'; 


import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { VolregComponent } from './register/volreg/volreg.component';
import { DonorregComponent } from './register/donorreg/donorreg.component';
import { SignupComponent } from './signup/signup.component';
import { PeploginComponent } from './peplogin/peplogin.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { MemdataComponent } from './userdata/memdata/memdata.component';
import { VoldataComponent } from './userdata/voldata/voldata.component';
import { DonordataComponent } from './userdata/donordata/donordata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import { CompomemdataComponent } from './userdata/compomemdata/compomemdata.component';
import { CompodonordataComponent } from './userdata/compodonordata/compodonordata.component';
import { CompovoldataComponent } from './userdata/compovoldata/compovoldata.component';
import { DonationMemberComponent } from './donation-member/donation-member.component';
import { DonateToComponent } from './userdata/compodonordata/donate-to/donate-to.component';
import { MembersDataComponent } from './userdata/compovoldata/members-data/members-data.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberregComponent,
    VolregComponent,
    DonorregComponent,
    SignupComponent,
    PeploginComponent,
    UserloginComponent,
    MemdataComponent,
    VoldataComponent,
    DonordataComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CompomemdataComponent,
    CompodonordataComponent,
    CompovoldataComponent,
    DonationMemberComponent,
    DonateToComponent,
    MembersDataComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fireconfig), 
    FormsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot([

      {path:'home',component: HomeComponent },
      {path:'signup',component:SignupComponent },
      {path:'login', component:UserloginComponent},

      {path:'donorreg',component:DonorregComponent },      
      {path:'memreg',component:MemberregComponent },
      {path:'volreg',component:VolregComponent },

      {path:'memberProfile',component:CompomemdataComponent},
      {path:'donorProfile',component:CompodonordataComponent},
      {path:'volunteerProfile',component:CompovoldataComponent},

// for the compomem componnet- member profile
      {path:'donordata',component:DonordataComponent},
      {path:'memberdata',component:MemdataComponent },
      {path:'volunteerdata',component:VoldataComponent },

      // for the compodonor component
      
        { path:'donateToMembers', component: DonateToComponent},

      // for the compovoldata componneont
      { path:'volunteer', component: CompovoldataComponent ,children:[
        { path:'Donormemberdata', component: MembersDataComponent}
     ]},
      {path:'Volnteermemberdata',component:MemdataComponent },

      {path:'donationRequest', component:DonationMemberComponent},

      { path:'', redirectTo: 'home', pathMatch: 'full'},]),
      // { path:'**' , component: HomeComponent }
  ],
  providers: [AngularFireAuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
