import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../shared/services/food.service';


@Component({
  selector: 'app-user-food-list',
  templateUrl: './user-food-list.component.html',
  styleUrls: ['./user-food-list.component.scss']
})
export class UserFoodListComponent implements OnInit {
  foodData: any;
  constructor(private foodService: FoodService){


  }
  ngOnInit(): void {
    this.getFoodDetails();



  }
  getFoodDetails(){
    this.foodService.getFoodDetails().subscribe({
      next:(Response: any)=>{
        this.foodData=Response;
        console.log(this.foodData)
      },
      error: (err: any)=>{
        console.log(err);
      }
    })

  }


}
