import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    loadChildren: () =>
      import('./public/public.module').then((x) => x.PublicModule),
  },
  {
    path: 'public',
    component: PublicComponent,
    loadChildren: () =>
      import('./public/public.module').then((x) => x.PublicModule),
  },
  {
    path: 'cart',
    component: CartComponent,
    loadChildren: () => import('./cart/cart.module').then((x) => x.CartModule),
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
