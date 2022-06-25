import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { CompanyRoutingModule } from './company-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { CompanyComponent } from './company.component';


@NgModule({
  declarations: [
    CompanyComponent,
    ContactUsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
   

  ]
})
export class CompanyModule { 
  constructor(){
    console.log('company  module  loaded')
  }
}
