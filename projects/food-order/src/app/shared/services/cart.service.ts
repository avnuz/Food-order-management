import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartUrl = "http://localhost:3007/cart";
  constructor(private http: HttpClient) {}
  addCart(data: any) {
    return this.http.post(this.cartUrl, data);
  }
  getCartDetailsbyUserid(data: any){
    console.log("userid::",data)
    return this.http.get(this.cartUrl+`?userid=${data}`);
  }
  removeCartItems(itemId: any){
    return this.http.delete(this.cartUrl+`/${itemId}`);

  }
  getCartDetailsbyCartid(data: any){
    return this.http.get(this.cartUrl+`/${data}`)
  }

}
