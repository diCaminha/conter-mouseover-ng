import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  counter1:number = 0;
  counter2:number = 0;
  counter3:number = 0;
  
  incMouseoverCounter(cardId) {
    switch(cardId) {
      case "1": this.counter1++;break;
      case "2": this.counter2++; break;
      case "3": this.counter3++; break;
    }
  }
}
