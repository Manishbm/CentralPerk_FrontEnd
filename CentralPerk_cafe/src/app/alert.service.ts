import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
confirm(message : string):boolean{
  return window.confirm(message);
}
  constructor() { }
}
