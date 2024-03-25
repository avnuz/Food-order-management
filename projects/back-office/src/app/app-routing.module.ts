import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ListFoodComponent } from './components/list-food/list-food.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { UpdateFoodComponent } from './components/update-food/update-food.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListFoodComponent,
  },
  {
    path: 'add-food',
    component: AddFoodComponent,
  },
  {
    path: 'update-food/:foodId',
    component: UpdateFoodComponent,
  },
  {
    path: 'food-details/:foodId',
    component: FoodDetailsComponent,
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'side',
    component: SideNavBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
