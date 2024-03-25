import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userUrl = 'http://localhost:3007/user';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor(private http: HttpClient) {}
  signupUser(userData: any) {
    return this.http.post(this.userUrl, userData);
  }
  loginUser(userData: any) {
    return this.http.get(
      this.userUrl + `?email=${userData.email}&password=${userData.password}`
    );
  }
  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }
}
