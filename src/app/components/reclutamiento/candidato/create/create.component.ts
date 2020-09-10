import { Component, OnInit } from '@angular/core';
import { Users } from '../../../../models/users';
import { UsersService } from '../../../../services/users.service';
import { ListasService } from '../../../../services/listas.service';
import { CandidatoService } from '../../../../services/reclutamiento/candidato.service';
//import { NgForm } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public user: Users;
  public pais: Array<any>;
  public genero: Array<any>;
  public roles: Array<any>;
  public nombres: String;
  public apellidos: String;
  public tipo_requerimiento: Array<any>;
  public area_trabajo: Array<any>;
  public cargo: Array<any>;
  public profesion: Array<any>;
  public conocimiento: Array<any>;
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
    public _listaservice : ListasService,
    public _candidatoservice : CandidatoService,
    private _servicioCandidato : CandidatoService,
  ) { 
    this.user = new Users('','',null,null,null,null,'','','',null,null,null,'');
  }

  ngOnInit() {
    this._listaservice.getPais().subscribe(
      response => { this.pais = response.data; } ,
      error => { this.pais = error.data; }
    );

    this._listaservice.getRoles().subscribe(
      response => { this.roles = response.data; } ,
      error => { this.roles = error.data }
    );

    this._listaservice.getTipoRequerimiento().subscribe(
      response => { this.tipo_requerimiento = response.data; } ,
      error => { this.tipo_requerimiento = error.data }
    );

    this._listaservice.getAreaTrabajo().subscribe(
      response => { this.area_trabajo = response.data; } ,
      error => { this.area_trabajo = error.data }
    );

    this._listaservice.getCargos().subscribe(
      response => { this.cargo = response.data; } ,
      error => { this.cargo = error.data }
    );

    this._listaservice.getProfesion().subscribe(
      response => { this.profesion = response.data; } ,
      error => { this.profesion = error.data }
    );

    this._listaservice.getConocimientos().subscribe(
      response => { this.conocimiento = response.data; } ,
      error => { this.conocimiento = error.data }
    );

    this._listaservice.getGenero().subscribe(
      response => { this.genero = response.data; } ,
      error => { this.genero = error.data }
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
    
    this._servicioCandidato.create(this.user).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();
          }

          if(response.status == 'error'){
          console.log(response);
            this.status = response.status;
            this.message = response.message;
          }

        }
    );
  }

}
