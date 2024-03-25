import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBillingPageComponent } from './components/user-billing-page/user-billing-page.component';
import { UserCartPageComponent } from './components/user-cart-page/user-cart-page.component';
import { MatCardModule } from '@angular/material/card';
import { CartRoutingModule } from './cart-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserBillingPageComponent, UserCartPageComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule

  ],
})
export class CartModule {}
