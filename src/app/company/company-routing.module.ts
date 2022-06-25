import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from '../order-list/order-list.component';
import { CompanyComponent } from './company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  {path: '', component: CompanyComponent,  children:[

  {path: 'contact-us', component: ContactUsComponent, },
  {path: 'services', component: ServicesComponent},
  {path: 'OrderList', component: OrderListComponent},
 ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
