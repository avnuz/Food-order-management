import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  isSignUp: boolean = false;
  loginError: string = '';
  @Output() isLoggedin: EventEmitter<boolean> = new EventEmitter();

  constructor(private authServices: AuthService, private route : Router){

  }
  ngOnInit(): void {

  }
  Login(data: any) {
    this.authServices.loginUser(data).subscribe({
      next:(Response: any)=>{
        console.log(Response);
        if(Response){
          this.authServices.setLoggedIn(true);
          localStorage.setItem('user', JSON.stringify(Response));
          this.route.navigate(['/public/foodList']);

        }
      }
    })
  }
  signUp(data: any) {
    this.authServices.signupUser(data).subscribe({
      next:(response: any)=>{
        console.log(response);
        if(response){
          this.authServices.setLoggedIn(true);
          localStorage.setItem('user', JSON.stringify(response));
          this.route.navigate(['/public/foodList']);

        }


      }
    })
  }
  loggedin() {
    this.isSignUp=false;
  }
  signedin(){
    this.isSignUp = true;
  }
}
function output(): (target: UserLoginComponent, propertyKey: "loggedIn") => void {
  throw new Error('Function not implemented.');
}

