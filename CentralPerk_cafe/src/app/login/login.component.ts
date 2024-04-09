import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm!: FormGroup;
 loginResult : any ;
 user : any;
  constructor(private formBuilder: FormBuilder , private loginService : LoginServiceService , private httpClient : HttpClient) { }
 
  ngOnInit(): void {
this.loginForm = this.formBuilder.group({
  userName : ['',Validators.required],
  password : ['',Validators.required]
})
  }
  submit(){
    this.login();
    this.isAdmin();
  }
  login() : boolean{
    if(this.loginForm.valid){
      const userName = this.loginForm.value.userName;
      const password = this.loginForm.value.password;
      this.user = userName;
      console.log(userName);
      console.log(password);
      const apiUrl = `http://localhost:8080/user/signIn?userName=${userName}&password=${password}`;
      console.log(apiUrl);
    this.httpClient.get(apiUrl).subscribe(
      (response : any) =>{
        console.log(response);
        this.loginResult = true;
        this.loginService.setLoginResult(response);
        this.loginService.setUser(userName);
        return response;
      },
      (error) =>{
        return false;
      }
    )
    }
    return false;
  }
isAdmin(){
  if(this.loginForm.valid){
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
  const apiUrl = `http://localhost:8080/user/isAdmin?userName=${userName}&password=${password}`;
  this.httpClient.get<any>(apiUrl).subscribe(
    result =>{
      console.log('admin results :' + result);
      this.loginService.setAdmin(result);
    },error =>{
      console.log(error);
    }
  )
  }
}
}
