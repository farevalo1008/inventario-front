import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [UsersService]
})
export class AppComponent implements OnInit  {
  public identity;
  public token;
  public show : boolean;
  public menu : Array<any>;

  constructor(
  ){
  }

  ngOnInit(){
    
  }


}
