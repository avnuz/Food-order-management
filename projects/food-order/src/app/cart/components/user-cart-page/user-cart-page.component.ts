import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cart-page',
  templateUrl: './user-cart-page.component.html',
  styleUrls: ['./user-cart-page.component.scss'],
})
export class UserCartPageComponent implements OnInit {
  cartItems: any;
  constructor(private cartServices: CartService, private route: Router) {}
  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    let userData: any = localStorage.getItem('user');

    if (!userData) {
      console.error('User data not found in local storage.');
      return;
    }

    let userStore = JSON.parse(userData);

    if (userStore[0].id === null) {
      console.error('Invalid user data format.');
      return;
    }

    let userid = userStore[0].id;

    this.cartServices.getCartDetailsbyUserid(userid).subscribe({
      next: (Response: any) => {
        console.log(Response);
        this.cartItems = Response;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  removeCartItem(cartItemId: any) {
    console.log(cartItemId);
    this.cartServices.removeCartItems(cartItemId).subscribe({
      next: (Response: any) => {
        console.log(Response);
        this.getCartItems();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  buyCartItems(cartdata: any) {
    console.log('crtdt::', cartdata);

    // Ensure cartdata is correctly populated

    // Navigate to the billing page and pass the cartItems data as state
    this.route.navigate(['/cart/billingpage', cartdata.id, cartdata.foodid]);
  }
}
