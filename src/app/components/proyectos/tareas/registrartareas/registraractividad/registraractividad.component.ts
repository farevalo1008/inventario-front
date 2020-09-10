import { Component, OnInit, ɵConsole } from '@angular/core';
import { ListasService } from '../../../../../services/listas.service';
import {Registraractividad} from 'src/app/models/proyecto/registraractividad';
import { RegistraractividadService } from 'src/app/services/proyecto/registraractividad.service';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';
import {  Registrarfases} from 'src/app/models/proyecto/registrarfases';
import { Registrarproyecto } from 'src/app/models/proyecto/registrarproyecto';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { from } from 'rxjs';
import { RegistrarfasesService } from 'src/app/services/proyecto/registrarfases.service';
import { Capturaidactividad } from 'src/app/models/proyecto/carturaidactividad';
import {  registroActPeriodoService } from 'src/app/services/proyecto/registraractperiodo.service';
import { isArray } from 'util';


@Component({
  selector: 'app-registraractividad',
  templateUrl: './registraractividad.component.html',
  styleUrls: ['./registraractividad.component.css'],
  providers: [RegistraractividadService, RegistrarproyectoService, RegistrarfasesService, registroActPeriodoService],
  
})
export class RegistraractividadComponent implements OnInit {
 
  public status: string;
  public id_proyecto:Array<any>;
  public id_turno:Array<any>;
  public id_periodo:any;
  public registraractividad: Registraractividad;
  public fecha: any;
  public ffin: any;
  public id_actividad:any;
  public actividad: any;
  public capturaactividad: Capturaidactividad;
  public registroActPeriodo: registroActPeriodoService;
  public id_periodo_Sel:any;
  public id_actividad_Sel:any;

  constructor(public _listaservice: ListasService,
    private  _route: ActivatedRoute,
    private _router: Router,
    private _registraractividadService: RegistraractividadService,
    private _registrarfasesService: RegistrarfasesService,
    private _registrarproyectoService: RegistrarproyectoService,
    private _registrarActPeriodoService: registroActPeriodoService) { 
    this.registraractividad = new Registraractividad (null ,null, '','', '', '',null, null, null );
  
    }
    onSubmit(){  
      this.id_periodo_Sel = this.registraractividad.id_periodo;

     this._registraractividadService.register(this.registraractividad).subscribe(
       response => 
      {
        
        if(response.status == 'success'){
          this.status = response.status;
          this.id_actividad_Sel = response.id_actividad;
                  
          //vaciar el formulario
          this.registraractividad = new Registraractividad (null,null, '','', '', '',null, null, null );
          
          //GUARDAR EN LA OTRA TABLA
          this._registraractividadService.registre(this.id_actividad_Sel, this.id_periodo_Sel).subscribe(
            response => 
           {
             
             if(response.status == 'success'){
               this.status = response.status;

               //vaciar el formulario
               //this.capturaactividad = new Capturaidactividad ('', '');

             }else{
               this.status = 'error';
             }
      
           },          
           error => {
             console.log(<any>error)
           }
          );//FIN _registraractividadService.registre

        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error)
      }
     );// _registraractividadService.register
     
     }

  ngOnInit() {
    
    this._listaservice.getTipoTurno().subscribe(
      response => {this.id_turno= response.data; },
      error => { this.id_turno = error.data; }
      
    );

    this._listaservice.getTipoProyecto().subscribe(
      response => {this.id_proyecto = response.data},
      error => { this.id_proyecto = error.data; }
      
    );
    this._listaservice.getTipoSprint().subscribe(
      response => {this.id_periodo = response.data; },
      error => { this.id_periodo = error.data; }
    );
    this._listaservice.getTipoActividad().subscribe(
      response =>{ this.id_actividad = response.data;},
      error => { this.id_actividad = error.data;}
      
    );
    //console.log(this.id_actividad);
    console.log("LINEA86",this.registroActPeriodo);
    console.log("linea84", this.registraractividad);
    console.log("linea85",this.id_periodo);
//console.log("LINEA89", this.id_proyecto);
  }

  captuta(){
 
    for( var j = 0 ; j < this.id_actividad.length; j++){
      if(this.registraractividad.id_actividad == this.id_actividad[j].id_actividad){
        this.actividad = this.id_actividad[j].id_actividad;
        this.actividad = this.id_actividad[j].actividad;
      }

    }
  }
 obtener(){
  


  for( var i = 0 ; i < this.id_proyecto.length; i++){

    if(this.registraractividad.id_proyecto == this.id_proyecto[i].id_proyecto){
      this.fecha =this.id_proyecto[i].fecha_inicio;
      this.ffin =this.id_proyecto[i].fecha_fin;
      

    }
    
  }
  
  
  this._listaservice.getProyectoPe(this.registraractividad.id_proyecto).subscribe(
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
 
}
