import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodServiceComponent } from './food-service/food-service.component';
import { DrinkServiceComponent } from './drink-service/drink-service.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddFoodComponent } from './add-food/add-food.component';

const routes: Routes = [
  {path:'fetch-food',component:FoodServiceComponent},
  {path:'fetch-drink',component:DrinkServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'addFood',component:AddFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
