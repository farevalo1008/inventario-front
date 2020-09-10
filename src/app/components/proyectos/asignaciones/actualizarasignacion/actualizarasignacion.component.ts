import { Component, OnInit } from '@angular/core';
import { CrearasignacionService } from 'src/app/services/proyecto/crearasignacion.service';
import {Registraractividad} from 'src/app/models/proyecto/registraractividad';
import { RegistraractividadService } from 'src/app/services/proyecto/registraractividad.service';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { from } from 'rxjs';
import { Crearasignacion } from 'src/app/models/proyecto/crearasignacion';
import { ListasService } from 'src/app/services/listas.service';
import { Actualizarasignacion } from 'src/app/models/proyecto/actualizarasignacion';
import { isArray } from 'util';
import { all } from 'q';

@Component({
  selector: 'app-actualizarasignacion',
  templateUrl: './actualizarasignacion.component.html',
  styleUrls: ['./actualizarasignacion.component.css'],
  providers: [CrearasignacionService]
})
export class ActualizarasignacionComponent implements OnInit {
  public status: string;
  public id_proyecto:Array<any>;
  public id_actividad:Array<any>;
  public fecha: any;
  public ffin: any;
  public cliente: any;
  public id_act_user:Array<any>;
  public actualizarasignacion: Actualizarasignacion;
  public id_periodo:Array<any>;
  public turn: any;
  public dura: any;
  public observa: any;
  public avan: any;
  public id_datpers:Array<any>;
  public id_datperss:Array<any>;
  public id_actv_user: Array<any>;
  public actividad: any;
  public user: any;
  
  constructor(public _listaservice: ListasService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _crearasignacionService: CrearasignacionService,
    ) {this.actualizarasignacion = new Actualizarasignacion (null, null, null, null, null, null, null); }

  ngOnInit() {
    console.log('crearasignacion.component cargado correctamente');
    console.log(this.actualizarasignacion);
    this._listaservice.getTipoActividad().subscribe(
      response => {this.id_actividad= response.data; },
      error => { this.id_actividad = error.data; }
    );
    this._listaservice.getTipoProyecto().subscribe(
      response => {this.id_proyecto = response.data; },
      error => { this.id_proyecto = error.data; }
    );
    
    this._listaservice.getTipoUser().subscribe(
      response => {this.id_datpers = response.data; },
      error => { this.id_datpers = error.data; }
    );

    this._listaservice.getTipoUserdos().subscribe(
      response => {this.id_datperss = response.data; },
      error => { this.id_datperss = error.data; }
    );
  }
 
  obtener(){

    for( var i = 0 ; i < this.id_proyecto.length; i++){
      if(this.actualizarasignacion.id_proyecto == this.id_proyecto[i].id_proyecto){
        this.fecha =this.id_proyecto[i].fecha_inicio;
        this.ffin =this.id_proyecto[i].fecha_fin;
        this.cliente =this.id_proyecto[i].cliente;
      }
    }
    this._listaservice.getProyectoPe(this.actualizarasignacion.id_proyecto).subscribe(
      
  response => {
  
      if(isArray(response.data))
      {
        this.id_periodo = response.data;
      } else 
      {
        this.id_periodo = []; 
      }
    },
      error => { this.id_periodo = error.data; }
    );
   
   }
   cobtener(){

    for( var i = 0 ; i < this.id_actividad.length; i++){
      if(this.actualizarasignacion.id_actividad == this.id_actividad[i].id_actividad){
        this.turn =this.id_actividad[i].turno;
        this.dura =this.id_actividad[i].duracion;
        this.observa =this.id_actividad[i].observaciones;
        this.avan =this.id_actividad[i].avance;
       
      }
    }
    this._listaservice.getProyectoPra(this.actualizarasignacion.id_periodo).subscribe(
     
  response => {
        if(isArray(response.data))
      {
        this.id_actividad = response.data;
      } else 
      {
        this.id_actividad = []; 
      }
    },
      error => { this.id_actividad = error.data; }
    );

   }
 
   cobtenera(){

   
    console.log('asd',this.actualizarasignacion.id_actividad);
 
    this._listaservice.getProyectouser(this.actualizarasignacion.id_actividad).subscribe(

  response => {

      if(isArray(response.data))
      {
        this.id_datpers = response.data;
      } else 
      {
        this.id_datpers = []; 
      }

    },
      error => { this.id_datpers = error.data; }
    );

   }

    
   onSubmit(){
    console.log(this.actualizarasignacion.id_periodo);
    this._crearasignacionService.actualizo( this.id_datpers[0].id_act_user, this.actualizarasignacion.id_datperss
      ).subscribe(
      response => {
        console.log(response);
        
    if(response.status == 'success'){
      this.status = response.status;

      //vaciar el formulario
      this.actualizarasignacion = new Actualizarasignacion (null, null, null, null, null, null, null);
     

      console.log('registrar-proyecto.component cargado correctamente!!');
    }else{
      this.status = 'error'

    }

      },
      error =>{
      console.log(<any>error);
      }
    );

}
   
  

}
