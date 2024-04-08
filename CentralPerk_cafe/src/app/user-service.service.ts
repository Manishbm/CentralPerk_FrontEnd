import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
url : any ='http://localhost:8080/user/addUser';
  constructor(private http : HttpClient) { }
  userService (userData : any):any{
    return this.http.post<any>(this.url,userData);
  }
}
