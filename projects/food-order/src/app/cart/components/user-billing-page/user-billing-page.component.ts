import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../shared/services/food.service';
import { CartService } from '../../../shared/services/cart.service';


@Component({
  selector: 'app-user-billing-page',
  templateUrl: './user-billing-page.component.html',
  styleUrls: ['./user-billing-page.component.scss'],
})
export class UserBillingPageComponent implements OnInit {
  orderData: any;
  foodData: any;
  cartid: any;
  foodid: any;
  dataArray: any;
  isDinein: boolean = false;
  isTakeaway: boolean = false;
  isCash: boolean=false;
  constructor(
    private orderServices: OrderService,
    private route: Router,
    private foodServices: FoodService,
    private activatedRoute: ActivatedRoute,
    private cartservices: CartService
  ) {}

  ngOnInit(): void {
    this.cartid = this.activatedRoute.snapshot.paramMap.get('cartid');
    this.foodid = this.activatedRoute.snapshot.paramMap.get('foodid');
    console.log(this.cartid, this.foodid);
    this.getCartitemsbyCartid();
    this.getFoodDatabyFoodId();
  }
  toggleFoodType(e: any){
      if (this.isDinein && this.isTakeaway) {
        // If both are selected, deselect the one that was clicked
        if (e.target.id === 'dinein') {
          this.isTakeaway = false;
        } else if (e.target.id === 'takeaway') {
          this.isDinein = false;
        }
      }
  }

  buy(data: any) {
    const randomNumber: number = Math.floor(Math.random() * 900) + 100;
    console.log(data);
    data['actualprice']=this.orderData.actualprice;
    data['totalprice'] = this.orderData.totalprice;
    data['cartid'] = this.orderData.id;
    data['status'] = 'ordered';
    data['name'] = this.orderData.name;
   data['orderno'] = 'O'+randomNumber;
   data['quantity'] = this.orderData.quantity;
   data['userid'] = this.orderData.userid;
   console.log(data);

    this.orderServices.addOrder(data).subscribe({
      next: (Response: any) => {
        console.log(Response);
        console.log(Response.cartid)
        this.cartservices.removeCartItems(Response.cartid).subscribe({
          next:(response: any)=>{
            console.log(response);
          },
          error:(err: any)=>{
            console.log(err);
          }
        });
        this.route.navigate(['/public/foodList'])
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getFoodDatabyFoodId() {
    this.foodServices.getFoodDetailsById(this.foodid).subscribe({
      next: (Response: any) => {
        console.log('food data::', Response);
        this.foodData = Response;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getCartitemsbyCartid() {
    this.cartservices.getCartDetailsbyCartid(this.cartid).subscribe({
      next: (response: any) => {
        this.orderData = response;
        console.log('order data::', this.orderData);
        this.orderData['status'] = 'ordered';
        // Generate a random three-digit number
        const randomNumber: number = Math.floor(Math.random() * 900) + 100;

        this.orderData['orderno'] = 'O' + randomNumber;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  // Add a listener to 'option' changes to toggle the validation for 'paymentMethod'
}
