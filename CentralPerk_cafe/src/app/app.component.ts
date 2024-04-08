import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CentralPerk_cafe';
  message :any =false;
  recieve($event : any){
    this.message = $event;
  }
}
