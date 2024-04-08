import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food.model';
import { TooltipComponent } from '@angular/material';

@Component({
  selector: 'app-food-service',
  templateUrl: './food-service.component.html',
  styleUrls: ['./food-service.component.css']
})
export class FoodServiceComponent implements OnInit {
foods : Food[]=[]
addPrice : number =0;
  constructor( private foodService : FoodService) { }

  ngOnInit(): void {
    this.fetchFoods();
  }
  fetchFoods():void{
    this.foodService.getAllFoods().subscribe(
      (foods : Food[]) => {
        this.foods = foods;
      },
      (error) => {
        console.error('error fetching foods : ',error);
      }
    )
  }
  addCart(price:number):number{
    this.addPrice += price;
    return this.addPrice;
   }
   removeCart(price:number):number{
    this.addPrice -= price;
    return this.addPrice;
   }
  

}
