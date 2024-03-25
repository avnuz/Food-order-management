import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFoodListComponent } from './components/user-food-list/user-food-list.component';
import { UserFoodDetailComponent } from './components/user-food-detail/user-food-detail.component';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { PublicRoutingModule } from './public-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    UserFoodListComponent,
    UserFoodDetailComponent,
    UserHomePageComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    FormsModule,
  ],
})
export class PublicModule {}
