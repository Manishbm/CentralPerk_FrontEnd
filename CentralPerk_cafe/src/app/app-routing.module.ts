import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodServiceComponent } from './food-service/food-service.component';
import { DrinkServiceComponent } from './drink-service/drink-service.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'fetch-food',component:FoodServiceComponent},
  {path:'fetch-drink',component:DrinkServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
