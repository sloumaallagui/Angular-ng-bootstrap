import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solution1';
  content = ` 1 - npm install @ng-bootstrap/ng-bootstrap                
  2- import {NgbModule} from '@ng-bootstrap/ng-bootstrap' ;                      
   3- add NgbModule to imports in app.module.ts <br>                           
   4- add bootstrap css to index.html <br>` ;
}
