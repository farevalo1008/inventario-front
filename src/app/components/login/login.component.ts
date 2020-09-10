import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string;
  public user : Users;
  public mensaje : String;
  public token ;
  public identity ;
  public loading : boolean;

  constructor( 
      private _userservice : UsersService,
      private _router : Router,
      private _route : ActivatedRoute
    ) {
      this.user = new Users('','',null,null,null,null,'','','',null,null,null,'');
  }

  ngOnInit() {
    this.logout();
    this.loading = false;
  }

  onSubmit(form){
    this.loading = true;
   
    this._userservice.signup(this.user).subscribe(
        response => {
          this.loading = true;
          
          if(response.status == 'error'){
            this.mensaje = response.message;
            this.loading = false;
          }else{
              //token
              this.token = response;
              localStorage.setItem('token',this.token); 
              

              this._userservice.signup(this.user, true).subscribe(
                response => { 
                  //identidad
                  this.identity = response;
                  localStorage.setItem('identity', JSON.stringify(this.identity)); 

                  
                  //window.location.reload();
                  this._router.navigate(['/dashboard/intranet/controldeacceso']);
                }
              );

              
            
            }


        } ,
        error => { 
          console.log(<any>error);
        }
    );
  }

  logout(){
    this._route.params.subscribe(params => {
      let logout = +params['id'];
      if(logout==1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;
        this._router.navigate(['login']);
      }
    });
  }

}
