import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loginResultSubject = new BehaviorSubject<any>(null);
  loginResult$ = this.loginResultSubject.asObservable();

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  private adminSubject = new BehaviorSubject<any>(null);
  admin$ = this.adminSubject.asObservable();

  setLoginResult(result: any) {
    this.loginResultSubject.next(result);
  }

  setUser(user: any) {
    this.userSubject.next(user);
  }
  setAdmin(admin : any){
    this.adminSubject.next(admin);
  }
}
