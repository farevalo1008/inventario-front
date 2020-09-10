import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { ListasService } from '../../services/listas.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user: Users;
  public pais: Array<any>;
  public genero: Array<any>;
  public roles: Array<any>;
  public nacionalidad: Array<any>;
  public status: String;
  public message: String;
  public mes;
  public dia;
  public min;
  public fecha: String;
  public messagetwo: String;
  public messageone: String; 
  
  constructor( 
    private _userservice : UsersService, 
    public _listaservice : ListasService 
  ) {

    this.user = new Users('','',null,null,null,null,'','','',null,null,null,'');
  }

  ngOnInit() {

      this._listaservice.getPais().subscribe(
        response => { this.pais = response.data; } ,
        error => { this.pais = error.data; }
      );

      this._listaservice.getGenero().subscribe(
        response => { this.genero = response.data; } ,
        error => { this.genero = error.data; }
      );

      this._listaservice.getRoles().subscribe(
        response => { this.roles = response.data; } ,
        error => { this.roles = error.data }
      );

      this._listaservice.getNacionalidad().subscribe(
        response => { this.nacionalidad = response.data; } ,
        error => { this.roles = error.data }
      );

      let f = new Date();
      this.mes = f.getMonth()+1;
      this.min = f.getMonth();
      this.dia = f.getDate();
  
      if(this.dia<10){
        this.dia = '0'+this.dia;
      }
  
      if(this.mes<10){
        this.mes = '0'+this.mes;
      }
  
      this.fecha = f.getFullYear() + "-" + this.mes + "-" + this.dia;
      this.messageone = this.fecha;
      this.min = f.getFullYear() + "-" + this.mes + "-" + '01';
      this.messagetwo = this.min;
      console.log(this.min);
     

  }

  onSubmit(form){
    this._userservice.register(this.user).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status; 
            this.message = response.message;
            form.reset();
          }
          
          if(response.status == 'error'){
            this.status = response.status; 
            this.message = response.message;
          }

        } ,
        error => { 
          console.log(<any>error)
        }
    );
  }

}
