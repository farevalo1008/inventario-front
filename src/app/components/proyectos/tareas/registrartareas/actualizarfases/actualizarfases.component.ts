import { Component, OnInit } from '@angular/core';
import { RegistrarfasesService } from 'src/app/services/proyecto/registrarfases.service';
import { ListasService } from '../../../../../services/listas.service';

import { ActivatedRoute, Router,Params } from '@angular/router';

import { Actualizarfases } from 'src/app/models/proyecto/actualizarfases';

import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';

import { isArray } from 'util';



@Component({
  selector: 'app-actualizarfases',
  templateUrl: './actualizarfases.component.html',
  styleUrls: ['./actualizarfases.component.css'],
  providers: [ RegistrarfasesService, RegistrarproyectoService, RegistrarfasesService]
})
export class ActualizarfasesComponent implements OnInit {

  public status: string;
  public id_periodo:Array<any>;
  public id_turno:Array<any>;
  public id_proyecto:Array<any>;
  public mesi: any;
  public diasi: any;
  public horainicio: any;
  public horafin: any;
  public turno: any;
  public actualizarfases: Actualizarfases;
  public id: any;
  public fecha: any;
  public ffin: any


  constructor(public _listaservice: ListasService,
    private  _route: ActivatedRoute,
    private _router: Router,
    private _registrarproyectoService: RegistrarproyectoService,
    private _registrarfasesService: RegistrarfasesService) { 
      
      this.actualizarfases = new Actualizarfases( null,'', '' , '' , '', '', null, null)
    }

  ngOnInit() {
    this.actualizarfases = new Actualizarfases( null,'', '' , '' , '', '', null, null)

    console.log(this.actualizarfases);
    console.log('actualizarfases.component cargado');
    
    this._listaservice.getTipoProyecto().subscribe(
      response => {this.id_proyecto = response.data},
      error => { this.id_proyecto = error.data; }
      
    );

    this._listaservice.getTipoSprint().subscribe(
      response => {this.id_periodo = response.data; },
      error => { this.id_periodo = error.data; }
    );
    this._listaservice.getTipoTurno().subscribe(
      response => {this.id_turno= response.data; },
      error => { this.id_turno = error.data; }
    );
  }
  coger(){

    for( var i = 0 ; i < this.id_periodo.length; i++){
      if(this.actualizarfases.id_periodo == this.id_periodo[i].id_periodo){
        this.mesi =this.id_periodo[i].mes;
        this.diasi =this.id_periodo[i].dias;
        this.horainicio =this.id_periodo[i].hora_inicio;
        this.horafin =this.id_periodo[i].hora_fin;
      
      }
    }
   
   }
   obtener(){

    for( var i = 0 ; i < this.id_proyecto.length; i++){
  
      if(this.actualizarfases.id_proyecto == this.id_proyecto[i].id_proyecto){
        this.fecha =this.id_proyecto[i].fecha_inicio;
        this.ffin =this.id_proyecto[i].fecha_fin;
        
  
      }

    }

    this._listaservice.getProyectoPe(this.actualizarfases.id_proyecto).subscribe(
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
   onSubmit(form){
    console.log(this.actualizarfases.id_periodo);
    this._registrarfasesService.actualizo( this.actualizarfases, this.actualizarfases.id_periodo).subscribe(
      response => {
        console.log(response);
        if(response.status == 'success'){
          this.status = response.status;
    
          //vaciar el formulario
          this.actualizarfases = new Actualizarfases( null,'', '' , '' , '', '', null, null);
          form.reset;
    
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
