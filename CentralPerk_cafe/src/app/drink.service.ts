import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from './drink.model';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
private apiUrl ='http://localhost:8080/drinks/findAll'
  constructor(private http : HttpClient) { }

  getAllDrinks():Observable<Drink[]>{
    return this.http.get<Drink[]>(this.apiUrl);
  }
}
