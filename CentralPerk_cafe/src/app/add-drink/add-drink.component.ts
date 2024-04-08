import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css']
})
export class AddDrinkComponent implements OnInit {
drinkForm : FormGroup;
drinkresult :any;
drinkName:any;
url:any='http://localhost:8080/drinks/add';
  constructor(private http : HttpClient , private formBuilder : FormBuilder) {
    this.drinkForm = this.formBuilder.group({
      nameOfDrink: ['',Validators.required],
      alcohalic: [false,Validators.required],
      price:[null,Validators.required],
      brand: ['',Validators.required],
      typeOfDrink: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
addDrink():void{
  this.http.post<any>(this.url,this.drinkForm.value).subscribe(
    response =>{
      console.log('drink is added to data base '+response);
      this.drinkresult=true;
      this.drinkName=this.drinkForm.value.nameOfDrink;

    },
    error =>{
      console.log('Oooops check the details again '+error);
    }
  )
}
}
