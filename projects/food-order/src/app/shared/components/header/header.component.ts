import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  adminName: string = '';
  userName: string = '';
  isLoggedIn: boolean = false;
  cartItemsCount: any;


  constructor(private route: Router, private authServices: AuthService, private cartServices: CartService) {

  }
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.getCartitemCount();
      this.authServices.setLoggedIn(true);
    }else{
       this.authServices.setLoggedIn(false);
    }
    this.authServices.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.menuType = isLoggedIn ? 'user' : 'default';
    });
    // console.log(this.isLoggedIn);

    // console.log('header init entred');
    // if (localStorage.getItem('user')) {
    //   let userStore = localStorage.getItem('user');
    //   let userData = userStore && JSON.parse(userStore)[0];

    //   this.menuType = 'user';
    //   console.log(this.menuType);
    // } else {
    //   this.menuType = 'default';
    // }

    // this.route.events.subscribe((result: any) => {
    //   if (result.url) {
    //     if (localStorage.getItem('admin') && result.url.includes('admin')) {
    //       let adminStore = localStorage.getItem('admin');
    //       let adminData = adminStore && JSON.parse(adminStore)[0];
    //       this.adminName = adminData.email;
    //       this.menuType = 'admin';
    //     } else if (localStorage.getItem('user')) {
    //       let userStore = localStorage.getItem('user');
    //       let userData = userStore && JSON.parse(userStore);
    //       this.userName = userData.email;
    //       this.menuType = 'user';
    //     } else {
    //       this.menuType = 'default';
    //     }
    //   }
    // });
  }

  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['/auth/login']);
    this.menuType = 'default';
    this.authServices.setLoggedIn(false);
  }
  getCartitemCount(){
    let userData : any = localStorage.getItem('user');

    let userStore = JSON.parse(userData);

    let userId = userStore[0].id;

    this.cartServices.getCartDetailsbyUserid(userId).subscribe({
      next:(Response: any)=>{
        console.log("cart count:::", Response.length)
        this.cartItemsCount=Response.length;
      },
      error: (err: any)=>{
        console.log(err);
      }
    })

  }

}
