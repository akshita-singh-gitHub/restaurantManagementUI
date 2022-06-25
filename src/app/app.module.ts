import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { RegisterComponent } from './register/register.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
// import { CustomPipe } from './appPipes/custom.pipes';
import { FilterPipe } from './appPipes/filter.pipe';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TrialComponent } from './trial/trial.component';
import { EditTrialComponent } from './edit-trial/edit-trial.component';


// import { RatingModule } from 'ng-starrating';

export const firebaseConfig = {
  apiKey: "AIzaSyDoXsIfgzOtUueno6qnlwdRM5Vi7dcee2k",
  authDomain: "restaurant-authen12.firebaseapp.com",
  projectId: "restaurant-authen12",
  storageBucket: "restaurant-authen12.appspot.com",
  messagingSenderId: "71740041038",
  appId: "1:71740041038:web:6859cb83f79bfd8f61601f"
};


@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
   
    RegisterComponent,
    ListRestoComponent,
    SignupComponent,
    // CustomPipe,
    FilterPipe,
    OrdersComponent,
    OrderListComponent,
    CheckoutComponent,
    TrialComponent,
    EditTrialComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // RatingModule,
    AngularFireModule.initializeApp(environment.firebase)
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module  loaded')
  }
 }
  

 

