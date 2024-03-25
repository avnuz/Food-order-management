import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../shared/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';


@Component({
  selector: 'app-user-food-detail',
  templateUrl: './user-food-detail.component.html',
  styleUrls: ['./user-food-detail.component.scss'],
})
export class UserFoodDetailComponent implements OnInit {
  foodDetail: any;
  foodId: any;
  inputValue: any = 1;
  foodPrice: any;
  cartData: any;
  constructor(
    private foodservices: FoodService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private cartServices: CartService
  ) {}
  ngOnInit(): void {
    this.foodId = this.activatedRoute.snapshot.paramMap.get('foodId');
    this.getFoodDetailById(this.foodId);
  }
  getFoodDetailById(foodId: any) {
    this.foodservices.getFoodDetailsById(foodId).subscribe({
      next: (response: any) => {
        this.foodDetail = response;
        this.foodPrice = response.price;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  addProduct(data: any) {
    if (data === 'inc') {
      this.inputValue += 1;
      this.foodPrice = this.foodDetail.price * this.inputValue;
    } else if (data === 'dec') {
      if (this.inputValue <= 1) {
        return;
      }
      this.inputValue -= 1;
      this.foodPrice = this.foodDetail.price * this.inputValue;
    }
  }
  goToBack() {
    this.route.navigate(['/public/foodList']);
  }
  goToCartPage(data: any) {
    let userData: any = localStorage.getItem('user');

    let userStore = JSON.parse(userData);

    let userId = userStore[0].id;
    this.cartServices.getCartDetailsbyUserid(userId).subscribe({
      next:(Response:any)=>{
        const responseArray = Object.values(Response);

        // Filter the response array based on foodid
        const filteredResponse = responseArray.filter(
          (item: any) => item.foodid === data.id
        );
        if (filteredResponse) {
          console.log("food is already present!")

        }
      }
    });

    console.log('data:::', data?.name);

      // Initialize cartData if it's undefined
      this.cartData = this.cartData ?? {};

    // Assigning data properties to cartData
    this.cartData['name'] = data?.name;
    this.cartData['foodid'] = data?.id;

    // Retrieving user ID from local storage
console.log(localStorage.getItem('user') !== null);
    if (localStorage.getItem('user') !== null) {
       let userDataString : any = localStorage.getItem('user') ;
      const userData = JSON.parse(userDataString);
      if (userData ) {
        console.log(userData);
        this.cartData['userid'] = userData[0].id;
      }
    }

    // Assigning food price to cartData
    this.cartData['totalprice'] = this.foodPrice; // Assuming foodPrice is a property of data
    this.cartData['quantity'] = this.inputValue;
    this.cartData['actualprice']=data.price;

    console.log('cartPage::', this.cartData);

    this.cartServices.addCart(this.cartData).subscribe({
      next:(Response: any)=>{
        console.log(Response);
      },
      error:(err: any)=>{
        console.log(err);
      }
    })
  }
}
