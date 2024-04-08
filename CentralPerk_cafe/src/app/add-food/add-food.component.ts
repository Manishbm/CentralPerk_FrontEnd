import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
url:string='http://localhost:8080/food/add';
foodNames:any ;
foodresult :any;
foodDataForm : FormGroup;
  constructor(private http : HttpClient , private formBuilder : FormBuilder) {
    this.foodDataForm = formBuilder.group({
   vegetarian:[true,Validators.required],
   foodName:['',Validators.required],
   price:[null,Validators.required],
   description:['',Validators.required],
   image:['',Validators.required]
    })
   }
  ngOnInit(): void {
  }
addFood():void{
  this.http.post<any>(this.url,this.foodDataForm.value).subscribe(
    Response => {
console.log('food added to database :'+ Response);
this.foodNames = this.foodDataForm.value.foodName;
this.foodDataForm.reset();
this.foodresult = true;
    },error =>{
      console.log('Oooops please enter again :'+error);
    }
  );
}
}
