import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink.model';

@Component({
  selector: 'app-drink-service',
  templateUrl: './drink-service.component.html',
  styleUrls: ['./drink-service.component.css']
})
export class DrinkServiceComponent implements OnInit {
  drinks: Drink[] =[];
  addPrice : number=0;
  count : number=0;

  constructor(private drinkService : DrinkService) { }

  ngOnInit(): void {
    this.fetchDrinks();
  }
 fetchDrinks(): void {
  this.drinkService.getAllDrinks().subscribe(
    (drinks:Drink[])=>{
      this.drinks=drinks;
    },
    (error)=>{
      console.error('error fetching drinks :',error);
    }
  )
 }
 addCart(price:number):number{
  this.addPrice += price;
  this.count++;
  return this.addPrice;
 }
 removeCart(price:number):number{
  this.addPrice -= price;
  this.count--;
  return this.addPrice;
 }
 
}
