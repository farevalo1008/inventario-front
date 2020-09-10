import { Component, OnInit, ɵConsole } from '@angular/core';
import { ListasService } from 'src/app/services/listas.service';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';
import { Registrarproyecto } from 'src/app/models/proyecto/registrarproyecto';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { from } from 'rxjs';
import { Consultaractividad } from 'src/app/models/proyecto/consultaractividad';
import { Registrarfases } from 'src/app/models/proyecto/registrarfases';
import { RegistrarfasesService } from 'src/app/services/proyecto/registrarfases.service';
import { isArray } from 'util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Console } from '@angular/core/src/console';


@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css'],
  providers: [RegistrarproyectoService, RegistrarfasesService]
})
export class CrearTareaComponent implements OnInit {


  public status: string;
  public id_proyecto: Array<any>;
  public fecha: any;
  public ffin: any;
  public cliente: any;
  public consultaractividad: Consultaractividad;
  public id_periodo: Array<any>;
  public sprint: any;
  public id_actividad: Array<any>;
  public id_turno: Array<any>;
  public nombre: any;
  public n: any;
  public tasks: any;
  public processes: any;
  public categories: any;
  public categoriesMeses: any;
  public categoriesSemanas: any;
  public fecha_fin: any;
  public ffinSprint: any;
  public fecha_inicio: any;
  public month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
  //fecha: Date;
  fechaMesInicio: Date;
  fechaMesFin: Date;
  nombreDias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  fechaFinSemana: Date;
  mesInicioSprint: Date;
  mesFinSprint: Date;



  width = 600;
  height = 400;
  type = "msbar3d";
  dataFormat = "json";
  dataSource: Object;
  
  factin: any;
  nombreac:any;
  ffactin:any;
  //public month: any;
  fechaInicio:any;
  fechaInicioreal:any;
  fechaFinreal:any;
  fechaFin:any;
  fechaActual:any;
  fechaActualreal:any;
  diffTotal:any;
  diffTotalreal:any;
  diffParcial:any;
  diffParcialreal:any;
  porcentajeFaltante:any;
  porcentajeFaltantereal:any;
  porcentajeCompletado:any;
  porcentajeCompletadoreal:any;

  public id_actividad_ejec:Array<any>;

  constructor(public _listaservice: ListasService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _registrarfasesService: RegistrarfasesService,
    private _registrarproyectoService: RegistrarproyectoService) {
    this.consultaractividad = new Consultaractividad('', '', '', '', null, null, null, '', null, null, null, null,null );
    this.dataSource = {};

  }

  ngOnInit() {
    console.log('consultarproyecto.component cargado correctamente');

    this._listaservice.getTipoProyecto().subscribe(
      response => { this.id_proyecto = response.data },
      error => { this.id_proyecto = error.data; }

    );
    /* this._listaservice.getTipoActividad().subscribe(
   response => { this.id_actividad = response.data; },
   error => { this.id_actividad = error.data; }
 );*/

  }
  obtener() {
    for (var i = 0; i < this.id_proyecto.length; i++) {
      if (this.consultaractividad.id_proyecto == this.id_proyecto[i].id_proyecto) {
        this.fecha = this.id_proyecto[i].fecha_inicio;
        this.ffin = this.id_proyecto[i].fecha_fin;
        this.cliente = this.id_proyecto[i].cliente;
      }
    }

    this._listaservice.getProyectoPe(this.consultaractividad.id_proyecto).subscribe(
      //response => {this.id_periodo = response.data; },
      response => {

        if (isArray(response.data)) {
          //obtiene todos los periodos asociados al proyecto seleccionado
          this.id_periodo = response.data;

        } else {
          this.id_periodo = [];
        }
      },
      error => { this.id_periodo = error.data; }
    );

  }

  caturaSprint() {

    for (var i = 0; i < this.id_periodo.length; i++) {
      if (this.consultaractividad.id_periodo == this.id_periodo[i].id_periodo) {
        this.consultaractividad.sprint = this.id_periodo[i].sprint;
        this.consultaractividad.fecha_inicio = this.id_periodo[i].fecha_inicio_per;
        this.consultaractividad.fecha_fin = this.id_periodo[i].fecha_fin_per;

      }//Fin if
    }//Fin For

    this._listaservice.getProyectoPra(this.consultaractividad.id_periodo).subscribe(
      response => {

        if (isArray(response.data)) {
          this.id_actividad = response.data;
        } else {
          this.id_actividad = [];
        }
      },
      error => { this.id_actividad = error.data; }

    ); //Fin _listaservice.getProyectoPra

  }// Fin caturasprint()
  cobtener() {
    for (var i = 0; i < this.id_actividad.length; i++) {
      if (this.consultaractividad.id_actividad == this.id_actividad[i].id_actividad) {
        this.nombreac = this.id_actividad[i].nombre;
        this.factin = this.id_actividad[i].fecha_inicio;
        this.ffactin = this.id_actividad[i].fecha_fin;

      }
    }

    
 
    this.fechaInicio = new Date(this.factin+'T00:00:00').getTime();
    this.fechaFin = new Date(this.ffactin+'T00:00:00').getTime();

    console.log('fechaInicio ',new Date(this.factin+'T00:00:00')); 
    console.log('fechaFin ',new Date(this.ffactin+'T00:00:00'));

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
  }//fin de cobtener
  actividadrealizada() {
    console.log('asd',this.consultaractividad.id_actividad);
 
    this._listaservice.actividadrealizada(this.consultaractividad.id_actividad).subscribe(

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

  onSubmit() {
    //console.log("this.id_actividad_ejec[0].fecha_inicio_real ", this.id_actividad_ejec[0].fecha_inicio_real);
   // console.log("this.id_actividad_ejec[0].fecha_fin_real ", this.id_actividad_ejec[0].fecha_fin_real);
   this.fechaInicioreal = new Date(this.id_actividad_ejec[0].fecha_inicio_real+'T00:00:00').getTime();
    this.fechaFinreal = new Date( this.id_actividad_ejec[0].fecha_fin_real+'T00:00:00').getTime();
  
  
    //console.log("this.id_actividad_ejec[0].fecha_inicio_real ", this.id_actividad_ejec[0].fecha_inicio_real);
    //console.log("this.id_actividad_ejec[0].fecha_fin_real ", this.id_actividad_ejec[0].fecha_fin_real);
    
   this.fechaActualreal = new Date();
   this.fechaActualreal.setHours(0);
   this.fechaActualreal.setMinutes(0);
   this.fechaActualreal.setSeconds(0);
   this.fechaActualreal.setMilliseconds(0);
  
   this.fechaActualreal.getTime();
   
  
  this.diffTotalreal = Math.floor((this.fechaFinreal -this.fechaInicioreal) / (1000 * 60 * 60 * 24));
  if(this.fechaFinreal < this.fechaActualreal ){
    this.fechaActualreal = this.fechaFinreal;
  }
  this.diffParcialreal = Math.floor((this.fechaFinreal - this.fechaActualreal) / (1000 * 60 * 60 * 24));
  
  this.porcentajeFaltantereal = ((100 * this.diffParcialreal) / this.diffTotalreal);
  
  this.porcentajeCompletadoreal = 100 - this.porcentajeFaltantereal;
  
  console.log("this.porcentajeFaltantereal", this.porcentajeFaltantereal);
      
     // console.log("id_actividad", this.id_actividad_ejec[0]);
  
this.dataSource= {
  chart: {
    caption: "Actividades",
    subcaption: "Actividades Planeadas vs Ejecutadas",
    plottooltext: "$label TIENE <b>$dataValue</b> %  $seriesName",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: this.nombreac
        },
        
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Actividades Planeadas",
      data: [
        {
          
           value: this.porcentajeCompletado,
        },

      ]
    },
    {
      seriesname: "Actividades Ejecutadas",
      data: [
        {
          value:  this.porcentajeCompletadoreal,
        },
       
      ]
    }
  ]
};
        
  } // Fin onSubmit

}//Fin class CrearTareaComponent
