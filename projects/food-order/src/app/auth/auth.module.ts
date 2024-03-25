import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { UserForgotPasswordComponent } from './components/user-forgot-password/user-forgot-password.component';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignupComponent,
    UserForgotPasswordComponent,
  ],
  imports: [CommonModule, FormsModule, AuthRoutingModule],
})
export class AuthModule {}
