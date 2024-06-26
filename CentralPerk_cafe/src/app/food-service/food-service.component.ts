import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food.model';
import { MatDialog, TooltipComponent } from '@angular/material';
import { LoginServiceService } from '../login-service.service';
import { HttpClient } from '@angular/common/http';
import { ModifyFoodService } from '../modify-food.service';
import { AlertService } from '../alert.service';


@Component({
  selector: 'app-food-service',
  templateUrl: './food-service.component.html',
  styleUrls: ['./food-service.component.css']
})
export class FoodServiceComponent implements OnInit {
foods : Food[]=[]
addPrice : number =0;
admin : any =false;
fetchFood : any;
isDeleted=false;
  constructor( private foodService : FoodService , 
    private loginService : LoginServiceService,
    private http : HttpClient ,
     private modifyService : ModifyFoodService,
     private alert : AlertService
    ) { }

  ngOnInit(): void {
    this.fetchFoods();
    this.loginService.admin$.subscribe(
      result => {
        this.admin = result;
      }
    )
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
   modify(id:any):any{
   const url='http://localhost:8080/food/findById/'+id;
   console.log(url);
this.http.get(url).subscribe(
  result =>{
    console.log('fetch result :'+JSON.stringify(result));
    this.fetchFood= JSON.stringify(result);
    this.modifyService.setFetchFoodResult(this.fetchFood);
  },error =>{
    console.log(error);
  }
)
   }
   cancel(id:any):void{
   if(this.alert.confirm('are you sure ?')){
    const url = 'http://localhost:8080/food/deleteById/'+id;
    console.log('cancel'+url);
    this.http.delete(url).subscribe(
      result =>{
        console.log('deleted successfully'+result);
        this.isDeleted=true;
      },error =>{
        console.log('unable to delete it');
      }
    )
    this.foods = this.foods.filter(food => food.id !== id);
   }else{
    console.log('request terminated');
   }
   }
 

}
