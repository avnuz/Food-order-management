import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foodUrl = 'http://localhost:3007/food';
  constructor(private http: HttpClient) {}

  addFoodDetails(data: any) {
    return this.http.post(this.foodUrl, data, { observe: 'response' });
  }
  getFoodDetails() {
    return this.http.get(this.foodUrl);
  }
  getFoodDetailsById(foodId: any){console.log(foodId)
    return this.http.get(this.foodUrl+`?id=${foodId}`);
  }
  updateFoodDetails(data:any){
    console.log(data)
    return this.http.put(this.foodUrl+`/${data.id}`, data);
  }
  deleteFoodDetails(dataId: any){
    return this.http.delete(this.foodUrl + `/${dataId}`);
  }
}
