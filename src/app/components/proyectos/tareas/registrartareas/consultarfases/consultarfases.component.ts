import { Component, OnInit } from '@angular/core';
import { RegistrarfasesService } from 'src/app/services/proyecto/registrarfases.service';
import { ListasService } from '../../../../../services/listas.service';
import {  Registrarfases} from 'src/app/models/proyecto/registrarfases';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { from } from 'rxjs';

import {Consultarfases} from 'src/app/models/proyecto/consultarfases';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';
import { Registrarproyecto } from 'src/app/models/proyecto/registrarproyecto';
import { isArray } from 'util';



@Component({
  selector: 'app-consultarfases',
  templateUrl: './consultarfases.component.html',
  styleUrls: ['./consultarfases.component.css'],
  providers: [ RegistrarfasesService, RegistrarproyectoService]
  
})
export class ConsultarfasesComponent implements OnInit {
  
  public status: string;
  public id_periodo:Array<any>;
  public id_turno:Array<any>;
 
  public mes: any;
  public dias: any;
  public horainicio: any;
  public horafin: any;
  public turno: any;
  public consultarfases: Consultarfases;
  public id_proyecto: any;
  public fecha: any;
  public ffin:any;
  public fase:any;

  width = 600;
  height = 400;
  type = "angulargauge";
  dataFormat = "json";
  dataSource: Object;
  hola = 50;

  constructor(public _listaservice: ListasService,
    private  _route: ActivatedRoute,
    private _router: Router,
    private _registrarproyectoService: RegistrarproyectoService,
    private _registrarfasesService: RegistrarfasesService
    ) { 
      this.consultarfases = new Consultarfases( null,'', '' , '' , '', '', null)
    
      this.dataSource = {
        chart: {
          caption: "Walmart's Customer Satisfaction Score",
          subcaption: "2017",
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
              value: this.hola,
              tooltext: "<b>9%</b> lesser that target"
            }
          ]
        },
        
      };
    
    }
  ngOnInit() {
    console.log(this.consultarfases);
    console.log('consultarfases.component cargado');

    this._listaservice.getTipoSprint().subscribe(
      response => {this.id_periodo = response.data; },
      error => { this.id_periodo = error.data; }
    );
    this._listaservice.getTipoProyecto().subscribe(
      response => {this.id_proyecto = response.data},
      error => { this.id_proyecto = error.data; }
      
    );
   
    
    }
   coger(){

      for( var i = 0 ; i < this.id_periodo.length; i++){
        if(this.consultarfases.id_periodo == this.id_periodo[i].id_periodo){
          this.mes =this.id_periodo[i].mes;
          this.dias =this.id_periodo[i].dias;
          this.horainicio =this.id_periodo[i].hora_inicio;
          this.horafin =this.id_periodo[i].hora_fin;
        }
      }
     
     }
     obtener(){

      for( var i = 0 ; i < this.id_proyecto.length; i++){
    
        if(this.consultarfases.id_proyecto == this.id_proyecto[i].id_proyecto){
          this.fecha =this.id_proyecto[i].fecha_inicio;
          this.ffin =this.id_proyecto[i].fecha_fin;
          this.fase=this.id_proyecto[i].sprint;
    
        }
      }

      this._listaservice.getProyectoPe(this.consultarfases.id_proyecto).subscribe(
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
     
  

     onSubmit(){
      console.log(this.consultarfases);
    }

}
