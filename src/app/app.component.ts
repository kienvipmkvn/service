import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentselected = 'company';
  componentSelect(feature: string){
    this.componentselected = feature;
  }
}
