import { Component, OnInit } from '@angular/core';
import { Users } from '../../../../models/users';
import { UsersService } from '../../../../services/users.service';
import { ListasService } from '../../../../services/listas.service';
import { SolicitudService } from '../../../../services/reclutamiento/solicitud.service';
import { NgForm } from '@angular/forms';
import { Rcl_Solicitud } from '../../../../models/reclutamiento/rcl_solicitud';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public user= new Rcl_Solicitud(null,null,null,null,null,null,null,null,null,null,null);
  public pais: Array<any>;
  public genero: Array<any>;
  public roles: Array<any>;
  public solicitante: String;
  public tipo_requerimiento: Array<any>;
  public descripcion_trabajo: Array<any>;
  public area_trabajo: Array<any>;
  public cargo: Array<any>;
  public profesion: Array<any>;
  public conocimiento: Array<any>;
  public status: String;
  public message: String;

  constructor(
    private _userservice : UsersService, 
    public _listaservice : ListasService,
    public _solicitudservice : SolicitudService, 
  ) { 
    this.user = new Rcl_Solicitud(null,null,null,null,null,null,null,null,null,null,null);
  }

  ngOnInit() {
    this._listaservice.getPais().subscribe(
      response => { this.pais = response.data; } ,
      error => { this.pais = error.data; }
    );

    this._listaservice.getDescripcionTrabajo().subscribe(
      response => { this.descripcion_trabajo = response.data; } ,
      error => { this.descripcion_trabajo = error.data }
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
  }

  onSubmit(form){
    this._solicitudservice.crear(this.user).subscribe(
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

        } ,
        error => {
          console.log(<any>error)
        }
    );
  }


}
