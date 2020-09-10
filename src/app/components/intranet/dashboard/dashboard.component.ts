import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { MenuService } from '../../../services/menu.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public identity;
  public token;
  public show : boolean;
  public menu : Array<any>;
  public sidebar; 

  constructor(
    private _router:Router,
    private _userService : UsersService,
    private _menuService : MenuService
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
  ngOnInit() {
    
    if(this.token!=null && this.identity!=null){
      this.show = true;
      this._menuService.getMenu(this.identity.rol).subscribe(
        response => { this.menu = response.data } ,
        error => { this.menu = error.data; }
      );
    }else{
      alert("Debe iniciar sesion nuevamente");
      this._router.navigate(['/login']);
    }


  }

}
