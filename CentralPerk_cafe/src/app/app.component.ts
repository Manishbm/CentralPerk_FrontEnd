import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CentralPerk_cafe';
  loginResult: any = false;
  user: any;
  admin :any=false;

  constructor(private loginDataService: LoginServiceService) { }

  ngOnInit(): void {
    this.loginDataService.loginResult$.subscribe(result => {
      this.loginResult = result;
    });

    this.loginDataService.user$.subscribe(user => {
      this.user = user;
    });

    this.loginDataService.admin$.subscribe(admin =>{
      this.admin = admin;
    })
  }
}
