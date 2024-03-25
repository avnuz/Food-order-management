import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserFoodListComponent } from './components/user-food-list/user-food-list.component';
import { FoodDetailsComponent } from '../../../../back-office/src/app/components/food-details/food-details.component';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { UserFoodDetailComponent } from './components/user-food-detail/user-food-detail.component';


const routes: Routes = [
  { path: 'foodList', component: UserFoodListComponent },
  { path: 'foodDetail/:foodId', component: UserFoodDetailComponent },
  { path: 'home', component: UserHomePageComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PublicRoutingModule {}
