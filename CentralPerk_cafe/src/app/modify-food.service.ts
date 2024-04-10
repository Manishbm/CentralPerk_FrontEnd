import { Injectable } from '@angular/core';
import { FoodServiceComponent } from './food-service/food-service.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifyFoodService {
food:any;
  constructor( ) { }
  private fetchFoodResultSubject = new BehaviorSubject<any>(null);
fetchFoods$ = this.fetchFoodResultSubject.asObservable();

setFetchFoodResult(result: any) {
  this.fetchFoodResultSubject.next(result);
}
}
