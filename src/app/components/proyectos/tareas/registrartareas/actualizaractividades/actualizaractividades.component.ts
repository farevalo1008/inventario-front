import { Component, OnInit } from '@angular/core';
import { RegistraractividadService } from 'src/app/services/proyecto/registraractividad.service';
import { ListasService } from '../../../../../services/listas.service';
import { Actualizaractividades } from 'src/app/models/proyecto/actualizaractividades';
import { ActivatedRoute, Router,Params } from '@angular/router';

import { RegistrarfasesService } from 'src/app/services/proyecto/registrarfases.service';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';
import { isArray } from 'util';


@Component({
  selector: 'app-actualizaractividades',
  templateUrl: './actualizaractividades.component.html',
  styleUrls: ['./actualizaractividades.component.css'],
  providers: [ RegistraractividadService, RegistrarproyectoService,RegistrarfasesService]
})
export class ActualizaractividadesComponent implements OnInit {
 
  public status: string;

  public id_turno:Array<any>;
  public id_periodo:Array<any>;
  public id_actividad:Array<any>;
  public turn: any;
  public dura: any;
  public observa: any;
  public avan: any;
  public activ:any;
  public proy:any;
  public nombre:any;
  public actualizaractividades: Actualizaractividades;
  public id_proyecto:Array<any>;
  public fecha: any;
  public ffin: any;
  public sprint: any;
  public fechat: any;
  public ffint: any;
  public fecha_inicio;
  public fecha_fin;

  constructor(public _listaservice: ListasService,
    private  _route: ActivatedRoute,
    private _router: Router,
    private _registrarfasesService: RegistrarfasesService,
    private _registraractividadService: RegistraractividadService) 
    { 
      this.actualizaractividades = new Actualizaractividades(null, '', '', '', '', null, null, null, null);
    }

  ngOnInit() {
    this.actualizaractividades = new Actualizaractividades(null, '', '', '', '', null, null, null, null);
    console.log(this.actualizaractividades);
    console.log('actualizaractividad.component cargado correctamente');

    this._listaservice.getTipoActividad().subscribe(
      response => {this.id_actividad = response.data; },
      error => { this.id_actividad = error.data; }
    );
    this._listaservice.getTipoTurno().subscribe(
      response => {this.id_turno= response.data; },
      error => { this.id_turno = error.data; }
    );
    this._listaservice.getTipoProyecto().subscribe(
      response => {this.id_proyecto = response.data},
      error => { this.id_proyecto = error.data; }
      
    );
  }
  obtener(){

    for( var i = 0 ; i < this.id_actividad.length; i++){
      if(this.actualizaractividades.id_actividad == this.id_actividad[i].id_actividad){
        this.turn =this.id_actividad[i].turno;
        this.dura =this.id_actividad[i].duracion;
        this.observa =this.id_actividad[i].observaciones;
        this.avan =this.id_actividad[i].avance;
        this.activ =this.id_actividad[i].nombre;
        this.fechat =this.id_actividad[i].fecha_inicio;
        this.ffint =this.id_actividad[i].fecha_fin;
      }
    }
    this._listaservice.getProyectoPra(this.actualizaractividades.id_periodo).subscribe(
      //response => {this.id_periodo = response.data; },
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
   cobtener(){
  


    for( var i = 0 ; i < this.id_proyecto.length; i++){
  
      if(this.actualizaractividades.id_proyecto == this.id_proyecto[i].id_proyecto){
        this.fecha =this.id_proyecto[i].fecha_inicio;
        this.ffin =this.id_proyecto[i].fecha_fin;
        
  
      }
      
    }
    
    
    this._listaservice.getProyectoPe(this.actualizaractividades.id_proyecto).subscribe(
      //response => {this.id_periodo = response.data; },
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
  //console.log("133",this.id_periodo);
 
 
 }
 captuta(){

  for( var i = 0 ; i < this.id_periodo.length; i++){
    if(this.actualizaractividades.id_periodo == this.id_periodo[i].id_periodo){
      this.sprint =this.id_actividad[i].sprint;
      
      
    }
  }
  /*this._listaservice.getProyectoPra(this.actualizaractividades.id_periodo).subscribe(
    //response => {this.id_periodo = response.data; },
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
  );*/
//console.log("133",this.id_actividad);

 }

   
   onSubmit(form){
    console.log("fgtydcet", this.actualizaractividades);
   this._registraractividadService.actualizo( this.actualizaractividades, this.actualizaractividades.id_actividad).subscribe(
      response => {
        console.log(response);
        
    if(response.status == 'success'){
      this.status = response.status;

      //vaciar el formulario
      this.actualizaractividades = new Actualizaractividades(null, '', '', '', '', null, null, null, null);
      form.reset;

      console.log('registrar-proyecto.component cargado correctamente!!');
    }else{
      this.status = 'error'

    }

      },
    );

}
}
