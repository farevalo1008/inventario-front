import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Asistencias } from '../../../models/intranet/asistencias';
import { Permiso } from '../../../models/intranet/permiso';
import { UsersService } from '../../../services/users.service';
import { AsistenciasService } from '../../../services/intranet/asistencias.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ModalDirective } from 'ngx-bootstrap/modal'; 
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-control-acceso',
  templateUrl: './control-acceso.component.html',
  styleUrls: ['./control-acceso.component.css']
})
export class ControlAccesoComponent implements OnInit {

  public identity;
  public token;
  public tomaPausaActiva: Array<any>;
  public show : boolean;
  public menu : Array<any>;
  public historialAsistencias: Array<any>;
  public asistenciasCreate: Array<any>;
  public asistenciasUpdate: Array<any>;
  public estado;
  public message: String;
  public hora;
  public PermisoModel = new Permiso(null, null, null);
  public AsistenciasModel = new Asistencias(null,null);
  public showOtrosSalida:boolean;
  public showOtrosEntrada: boolean;


  constructor(private _userService : UsersService, private _servicioAsistencias : AsistenciasService,
    
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(){

    if(this.token!=null && this.token!=null){
      this.show = true;
    }else{
      this.show = false;
    }
    
    this._servicioAsistencias.asistenciaGetHistorial(this.identity).subscribe(

      response => {
        this.show = false;
        this.historialAsistencias = response.data
        console.log(response);
        console.log(response.data);
        if(response.data != ''){
          if (response.data[0].fecha == response.fecha ) {
            if(response.data[0].status_otros == null){
              this.showOtrosSalida = true;
            }

            if(response.data[0].status_otros == 3){
              this.showOtrosSalida = true;
              this.showOtrosEntrada = false;

            }

            if(response.data[0].status_otros == 1){
              this.showOtrosEntrada = true;
              this.showOtrosSalida = false;
            }

            if(response.data[0].pausa_activa <= 10){
              
              if(response.data[0].pausa_activa > 0){
                
                if(response.hora>=12){
                  this.show = true;
                }
                
              }else{
                this.show = false;
              }
   
            }

            if(response.data[0].pausa_activa > 10){
              this.show = true;
            }
          }
        }
      }
    );    
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
  

  onSubmit(asistencia){
    this.AsistenciasModel.evento = asistencia;
    this.AsistenciasModel.id = this.identity.sub;

    this._servicioAsistencias.asistenciaCreate(this.AsistenciasModel).subscribe(

      response => {
        this.asistenciasCreate = response.data;
        if(response.status == 'success'){
            this.estado = response.status;
            this.message = response.message;
            
          }

        if(response.status == 'error'){
            this.estado = response.status;
            this.message = response.message;
        }
   
        
      });
    this.ngOnInit();

  }

  Submit(asistencia){
    this.AsistenciasModel.evento = asistencia;
    this.AsistenciasModel.id = this.identity.sub;

    this._servicioAsistencias.asistenciaUpdate(this.AsistenciasModel).subscribe(

      response => {
        this.asistenciasUpdate = response.data;
       
        if(response.status == 'success'){
            this.estado = response.status;
            this.message = response.message;
          }

        if(response.status == 'error'){
            this.estado = response.status;
            this.message = response.message;
        }
      });

    this.ngOnInit();
  }


  permisoSalida(form){
    this.PermisoModel.id = this.identity.sub;
    console.log(this.PermisoModel);
    $('#modal').modal("hide");
    console.log(this.PermisoModel);
    this._servicioAsistencias.asistenciaPermisoSalida(this.PermisoModel).subscribe(

      response => {
       console.log(response);
        this.asistenciasCreate = response.data;
       
        if(response.status == 'success'){
            this.estado = response.status;
            this.message = response.message;
          }

        if(response.status == 'error'){
          console.log(response);
            this.estado = response.status;
            this.message = response.message;
        }

        form.reset();
        
      });

    this.ngOnInit();
  }

  permisoEntrada(){
    this.PermisoModel.id = this.identity.sub;
    this.PermisoModel.status = 3;
    this.PermisoModel.evento = '/Regreso del permiso';
    console.log(this.PermisoModel);
    this._servicioAsistencias.asistenciaPermisoEntrada(this.PermisoModel).subscribe(

      response => {
        console.log('188',response);
      });

    this.ngOnInit();
  }

}
