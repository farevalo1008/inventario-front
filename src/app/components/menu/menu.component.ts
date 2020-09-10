import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu : Array<any>;

  constructor(
    private _menuService : MenuService
  ) { 

  }

  ngOnInit() {
    /*
    this._menuService.getMenu().subscribe(
      response => { this.menu = response.data; } ,
      error => { this.menu = error.data; }
    );
    */
  }

}
