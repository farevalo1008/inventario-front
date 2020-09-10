import { Component, OnInit } from '@angular/core';
import { ListasService } from 'src/app/services/listas.service';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';
import { Registrarproyecto} from 'src/app/models/proyecto/registrarproyecto';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {from } from 'rxjs';
import { Consultarasignacion } from 'src/app/models/proyecto/consultarasignacion';
import { isArray } from 'util';

@Component({
  selector: 'app-consultarasignaciones',
  templateUrl: './consultarasignaciones.component.html',
  styleUrls: ['./consultarasignaciones.component.css'],
  providers: [RegistrarproyectoService]
})
export class ConsultarasignacionesComponent implements OnInit {
public status: string;
public id_proyecto: Array<any>;
public proy_actv_user: any;
public fecha: any;
public ffin: any;
public cliente: any;
public nombre:any;
public nombres:any;
public datos_personales:any;
public id_actividad:Array<any>;
public id_datpers: Array<any>; 
public nombreac:any;
public factin:any;
public ffactin:any;
public id_periodo:Array<any>;
public id_actividad_ejec:Array<any>;
public consultarasignacion: Consultarasignacion;

  width = 700;
  height = 300;
  type = "angulargauge";
  dataFormat = "json";
  dataSource: Object;
  fechaInicio:any;
  fechaFin:any;
  fechaActual:any;
  diffTotal:any;
  diffParcial:any;
  porcentajeFaltante:any;
  porcentajeCompletado:any;
  fecha_inicio_real: any;
  
  constructor(public _listaservice: ListasService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _registrarproyectoService: RegistrarproyectoService) 
    { 
      this.consultarasignacion = new Consultarasignacion( null,null, null, null, null, null,null );
      this.dataSource = {};
    


    }
  //this.consultarasignacion = new Consultarasignacion(null, null, null);-->
  ngOnInit() {

    console.log('consultarasignacion.component cargado correctamente');


    this._listaservice.getTipoProyecto().subscribe(
      response => {this.id_proyecto = response.data},
      error => { this.id_proyecto = error.data; }
      
    );

    this._listaservice.getTipoActividad().subscribe(
      response => {this.id_actividad= response.data; },
      error => { this.id_actividad = error.data; }
    );
    this._listaservice.getTipoUser().subscribe(
      response => {this.id_datpers = response.data; },
      error => { this.id_datpers = error.data; }
    );
    /*this._listaservice.actividadrealizada().subscribe(
      response => {this.id_actividad_ejec = response.data; },
      error => { this.id_actividad_ejec = error.data; }
    );*/
  }
  obtener(){

    for( var i = 0 ; i < this.id_proyecto.length; i++){
      if(this.consultarasignacion.id_proyecto == this.id_proyecto[i].id_proyecto){
        this.fecha =this.id_proyecto[i].fecha_inicio;
        this.ffin =this.id_proyecto[i].fecha_fin;
        this.cliente =this.id_proyecto[i].cliente;
      }
    }

    this._listaservice.getProyectoPe(this.consultarasignacion.id_proyecto).subscribe(
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
   
   }

   cobtener(){

    this._listaservice.getProyectoPra(this.consultarasignacion.id_periodo).subscribe(
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
   
   cobtenera(){

    
    console.log('asd',this.consultarasignacion.id_actividad);
 
    this._listaservice.getProyectouser(this.consultarasignacion.id_actividad).subscribe(

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
    console.log("factthis.in", this.consultarasignacion.id_actividad);
   }
   actividadrealizada() {
    console.log('asd',this.consultarasignacion.id_actividad);
 
    this._listaservice.actividadrealizada(this.consultarasignacion.id_actividad).subscribe(

  response => {
      if(isArray(response.data))
      {
        this.id_actividad_ejec = response.data;
      } else 
      {
        this.id_actividad_ejec = []; 
      }
    },
      error => { this.id_actividad_ejec = error.data; }
    );
    

  }
  

onSubmit(){


  this.fechaInicio = new Date(this.id_actividad_ejec[0].fecha_inicio_real+'T00:00:00').getTime();
  this.fechaFin = new Date( this.id_actividad_ejec[0].fecha_fin_real+'T00:00:00').getTime();


  console.log("this.id_actividad_ejec[0].fecha_inicio_real ", this.id_actividad_ejec[0].fecha_inicio_real);
  console.log("this.id_actividad_ejec[0].fecha_fin_real ", this.id_actividad_ejec[0].fecha_fin_real);
  console.log('fechaInicio ',new Date(this.fecha+'T00:00:00')); 
  console.log('fechaFin ',new Date(this.ffin+'T00:00:00'));

 this.fechaActual = new Date();
 this.fechaActual.setHours(0);
 this.fechaActual.setMinutes(0);
 this.fechaActual.setSeconds(0);
 this.fechaActual.setMilliseconds(0);

 this.fechaActual.getTime();
 

this.diffTotal = Math.floor((this.fechaFin -this.fechaInicio) / (1000 * 60 * 60 * 24));
if(this.fechaFin < this.fechaActual ){
  this.fechaActual = this.fechaFin;
}
this.diffParcial = Math.floor((this.fechaFin - this.fechaActual) / (1000 * 60 * 60 * 24));

this.porcentajeFaltante = ((100 * this.diffParcial) / this.diffTotal);

this.porcentajeCompletado = 100 - this.porcentajeFaltante;


    
    console.log("id_actividad", this.id_actividad_ejec[0]);


  this.dataSource = {
    chart: {
      //caption: "Walmart's Customer Satisfaction Score",
      //subcaption: "2017",
      lowerlimit: "0",
      upperlimit: "100",
      showvalue: "1",
      numbersuffix: "%",
      theme: "fusion"
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "50",
          code: "#F2726F"
        },
        {
          minvalue: "50",
          maxvalue: "75",
          code: "#FFC533"
        },
        {
          minvalue: "75",
          maxvalue: "100",
          code: "#62B58F"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: this.porcentajeCompletado ,
          tooltext: "<b>9%</b> lesser that target"
        }
      ]
    },
    
  };

}

}
