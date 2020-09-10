import { Component, OnInit, ɵConsole } from '@angular/core';
import { CrearasignacionService } from 'src/app/services/proyecto/crearasignacion.service';
import {Registraractividad} from 'src/app/models/proyecto/registraractividad';
import { RegistraractividadService } from 'src/app/services/proyecto/registraractividad.service';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';
import {  Registrarfases} from 'src/app/models/proyecto/registrarfases';
import {Registrarproyecto} from 'src/app/models/proyecto/registrarproyecto';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { from } from 'rxjs';
import { Crearasignacion } from 'src/app/models/proyecto/crearasignacion';
import { ListasService } from 'src/app/services/listas.service';
import { isArray } from 'util';


//import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';



@Component({
  selector: 'app-crear-asignacion',
  templateUrl: './crear-asignacion.component.html',
  styleUrls: ['./crear-asignacion.component.css'],
  providers: [RegistraractividadService, CrearasignacionService, RegistrarproyectoService],
})
export class CrearAsignacionComponent implements OnInit {

  public status: string;
  public id_proyecto:Array<any>;
  public id_actividad:Array<any>;
  public id_datpers:Array<any>;
  public crearasignacion: Crearasignacion;
  public fecha: any;
  public ffin: any;
  public cliente: any;
  public id_periodo:Array<any>;
  public turn: any;
  public dura: any;
  public observa: any;
  public avan: any;
  public activ:any;

  constructor(public _listaservice: ListasService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _registraractividadService: RegistraractividadService,
    private _crearasignacionService: CrearasignacionService,
    private _registrarproyectoService: RegistrarproyectoService,
    
    ) {
      this.crearasignacion = new Crearasignacion( null , null,null, null);
     }

  ngOnInit() {

    console.log('crearasignacion.component cargado correctamente');
   
    this._listaservice.getTipoProyecto().subscribe(
      response => {this.id_proyecto = response.data; },
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
  }
  obtener(){

    for( var i = 0 ; i < this.id_proyecto.length; i++){
      if(this.crearasignacion.id_proyecto == this.id_proyecto[i].id_proyecto){
        this.fecha =this.id_proyecto[i].fecha_inicio;
        this.ffin =this.id_proyecto[i].fecha_fin;
        this.cliente =this.id_proyecto[i].cliente;
      }
    }
    this._listaservice.getProyectoPe(this.crearasignacion.id_proyecto).subscribe(
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

    for( var i = 0 ; i < this.id_actividad.length; i++){
      if(this.crearasignacion.id_actividad == this.id_actividad[i].id_actividad){
        this.turn =this.id_actividad[i].turno;
        this.dura =this.id_actividad[i].duracion;
        this.observa =this.id_actividad[i].observaciones;
        this.avan =this.id_actividad[i].avance;
       
      }
    }
    this._listaservice.getProyectoPra(this.crearasignacion.id_periodo).subscribe(
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


  OnSubmit(){
    console.log(this.crearasignacion);
    //console.log(this._crearasignacionService.pruebas());
  
  this._crearasignacionService.register(this.crearasignacion).subscribe(
    response =>{
      
      if(response.status == 'success'){
        this.status = response.status;
        //vaciar el formulario
        this.crearasignacion = new Crearasignacion( null , null, null, null);
      }else{

        this.status = 'error';
      }

    },
    error => {
      console.log(<any>error)
    }
  );
  }

}
