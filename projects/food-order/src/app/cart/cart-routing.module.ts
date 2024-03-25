import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserCartPageComponent } from './components/user-cart-page/user-cart-page.component';
import { UserBillingPageComponent } from './components/user-billing-page/user-billing-page.component';


const routes: Routes = [
  { path: 'cartpage', component: UserCartPageComponent },
  { path: 'billingpage/:cartid/:foodid', component: UserBillingPageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),],
})
export class CartRoutingModule {}
