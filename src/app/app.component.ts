import { Component } from '@angular/core';
import { Axentix } from 'axentix';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'immobilier';
  
  constructor() {
    new Axentix('all');
  }
}
