import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodServiceComponent } from './food-service/food-service.component';
import { Food } from './food.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { DrinkServiceComponent } from './drink-service/drink-service.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { AddDrinkComponent } from './add-drink/add-drink.component';
import { ModifyFoodComponent } from './modify-food/modify-food.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodServiceComponent,
    DrinkServiceComponent,
    LoginComponent,
    SignUpComponent,
    AddFoodComponent,
    AddDrinkComponent,
    ModifyFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  DrinkServiceComponent]
})
export class AppModule { }
