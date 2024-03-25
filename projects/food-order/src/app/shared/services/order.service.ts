import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderUrl = 'http://localhost:3007/order';
  constructor(private http: HttpClient) {}
  addOrder(data:any){
    return this.http.post(this.orderUrl, data);

  }
}
