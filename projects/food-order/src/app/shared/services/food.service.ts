import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foodUrl = 'http://localhost:3007/food';
  constructor(private http: HttpClient) {}
  getFoodDetails() {
    return this.http.get(this.foodUrl);
  }
  getFoodDetailsById(foodId: any) {
    return this.http.get(this.foodUrl+`/${foodId}`);
  }
}
