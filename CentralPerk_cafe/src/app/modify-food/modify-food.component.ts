import { Component, OnInit } from '@angular/core';
import { FoodServiceComponent } from '../food-service/food-service.component';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModifyFoodService } from '../modify-food.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modify-food',
  templateUrl: './modify-food.component.html',
  styleUrls: ['./modify-food.component.css']
})
export class ModifyFoodComponent implements OnInit {
modifyDataForm : FormGroup;
id:any;
foodName : any;
vegetarian:any;
price:any;
description:any;
image:any;
foodData : any;
isModified =false;
  constructor(private http : HttpClient , private formBuilder : FormBuilder , private modifyService : ModifyFoodService ) {
    this.modifyDataForm = formBuilder.group({
      vegetarian:[null,Validators.required],
      foodName:['',Validators.required],
      price:[null,Validators.required],
      description:['',Validators.required],
      image:['',Validators.required]
       })
   }

  ngOnInit(): void {
this.modifyService.fetchFoods$.subscribe(
  result =>{
    this.foodData=result;
    const jsonResponse = JSON.parse(this.foodData);
this.id = jsonResponse.id;
this.foodName = jsonResponse.foodName;
this.vegetarian = jsonResponse.vegetarian;
this.price=jsonResponse.price;
this.description=jsonResponse.description;
this.image=jsonResponse.image;
  }
)

  }
  
modify():void{
  if(this.modifyDataForm.value.foodName === ''){
    this.modifyDataForm.value.foodName = this.foodName;
  }
  if(this.modifyDataForm.value.price === null){
    this.modifyDataForm.value.price = this.price;
  }
  if(this.modifyDataForm.value.description === ''){
    this.modifyDataForm.value.description = this.description;
  }
  if(this.modifyDataForm.value.image === ''){
    this.modifyDataForm.value.image = this.image;
  }
  const url = 'http://localhost:8080/food/modifyById/'+this.id;
this.http.post<any>(url,this.modifyDataForm.value).subscribe(
  result =>{
    console.log('modified '+result);
    this.isModified=true;
    this.modifyDataForm.reset();
  },error =>{
    console.log(error);
  }
)
}
}
