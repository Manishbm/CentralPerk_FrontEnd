import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'http://localhost:8080/food/findAll';

  constructor(private http : HttpClient) { }
  getAllFoods(): Observable<Food[]>{
    return this.http.get<Food[]>(this.apiUrl);
  }
}
