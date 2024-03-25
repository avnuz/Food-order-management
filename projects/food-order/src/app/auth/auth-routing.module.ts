import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserForgotPasswordComponent } from './components/user-forgot-password/user-forgot-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: '',
    component: UserLoginComponent,
  },
  {
    path: 'forgot-password',
    component: UserForgotPasswordComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
