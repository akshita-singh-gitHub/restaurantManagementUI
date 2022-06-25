import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {TrialComponent} from './trial/trial.component'


const routes: Routes = [
{
  component: AddRestoComponent,
  path: 'add'
  // , outlet:'addLet'
},

{
  component: UpdateRestoComponent,
  path: 'update/:id'
  // , outlet:'update'
},

{
  component: RegisterComponent,
  path: 'register'
  // , outlet:'registerLet'
},
{
  component: SignupComponent,
  path: 'signup'
 
},
{
  component: OrdersComponent,
  path: 'orders'
 
},
{
  component: OrderListComponent,
  path: 'OrderList'
 
},
{
  component: CheckoutComponent,
  path: 'checkout/:id'
 
},
{
  component: TrialComponent,
  path: 'trial'
 
},
{
  component: ListRestoComponent,
  path: ''
  // ,outlet:'listLet'
},

{
  path: 'company',
  loadChildren : ()=>import('./company/company.module').then(m=>m.CompanyModule)
 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('app routing  module loaded')
  }
}
