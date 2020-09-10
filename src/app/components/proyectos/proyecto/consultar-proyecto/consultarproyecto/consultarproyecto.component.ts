import { Component, OnInit } from '@angular/core';
import { ListasService } from '../../../../../services/listas.service';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';
import {Registrarproyecto} from 'src/app/models/proyecto/registrarproyecto';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Consultarproyecto } from 'src/app/models/proyecto/consultarproyecto';
import { from } from 'rxjs';

@Component({
  selector: 'app-consultarproyecto',
  templateUrl: './consultarproyecto.component.html',
  styleUrls: ['./consultarproyecto.component.css'],
  providers: [ RegistrarproyectoService]
})
export class ConsultarproyectoComponent implements OnInit {
public status: string;
public id_proyecto:Array<any>;
public fecha: any;
public ffin: any;
public cliente: any;
public name: any;
public consultarproyecto: Consultarproyecto;

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

  constructor(public _listaservice: ListasService,
    private _route: ActivatedRoute,
    private _router: Router,
   private _RegistrarproyectoService: RegistrarproyectoService
    ) { 
      this.consultarproyecto = new Consultarproyecto('', '', null, null, null);
      
      this.dataSource = {};

    }

  ngOnInit() {
   console.log('consultarproyecto.component cargado correctamente');


   

    this._listaservice.getTipoProyecto().subscribe(
      response => {this.id_proyecto = response.data},
      error => { this.id_proyecto = error.data; }
      
    );

  }
  obtener(){

    for( var i = 0 ; i < this.id_proyecto.length; i++){
      if(this.consultarproyecto.id_proyecto == this.id_proyecto[i].id_proyecto){
        this.fecha =this.id_proyecto[i].fecha_inicio;
        this.ffin =this.id_proyecto[i].fecha_fin;
        this.cliente =this.id_proyecto[i].cliente;
        this.name =this.id_proyecto[i].nombre;
      }


    }
    

    
 
    this.fechaInicio = new Date(this.fecha+'T00:00:00').getTime();
    this.fechaFin = new Date(this.ffin+'T00:00:00').getTime();

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
console.log('diffTotal ',this.diffTotal);
console.log('diffParcial ',this.diffParcial);
console.log('porcentajeFaltante ',this.porcentajeFaltante);
console.log('porcentajeCompletado ',this.porcentajeCompletado);
   }
  onSubmit(){
   // console.log(this.consultarproyecto);
    

    this.dataSource = {
      chart: {
        //caption: this.name,
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
