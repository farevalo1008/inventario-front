import { Component, OnInit } from '@angular/core';
import { ListasService } from 'src/app/services/listas.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ActividadejecutadaService }from 'src/app/services/proyecto/actividadejecutada.service';
import { from } from 'rxjs';
import { Actividadejecutada } from 'src/app/models/proyecto/actividadejecutada';
import { isArray } from 'util';


@Component({
  selector: 'app-tareasrealizadas',
  templateUrl: './tareasrealizadas.component.html',
  styleUrls: ['./tareasrealizadas.component.css'],
  providers: [ActividadejecutadaService]
 
  
})
export class TareasrealizadasComponent implements OnInit {

  public status: string;
  public id_turno:Array<any>;
  public id_actividad:Array<any>;
  public tareasrealizadas: Actividadejecutada ;
  public id_actividad_ejec:Array<any>;
  public id_datpers: Array<any>; 

  constructor(public _listaservice: ListasService,

    private  _route: ActivatedRoute,
    private _router: Router,
    private _actividadejecutadaService: ActividadejecutadaService,
    ) { 
      this.tareasrealizadas = new Actividadejecutada(null, null, '' , null,'','', '', null, null, null);
    }

  ngOnInit() {
     
    this._listaservice.getTipoTurno().subscribe(
      response => {this.id_turno= response.data; },
      error => { this.id_turno = error.data; }
      
    );
    /*
    this._listaservice.actividaduser(this.id_datpers).subscribe(
      response =>{ this.id_actividad = response.data;},
      error => { this.id_actividad = error.data;}
      
    );*/
    this._listaservice.getTipoActividad().subscribe(
      response =>{ this.id_actividad = response.data;},
      error => { this.id_actividad = error.data;}
      
    );
    console.log('tareasrealizadas.component ');
  }
  actividaduser() {
    
    this._listaservice.actividaduser(this.tareasrealizadas.id_actividad).subscribe(

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
  OnSubmit(){
    console.log(this.tareasrealizadas);
    console.log(this._actividadejecutadaService.pruebas());
    this._actividadejecutadaService.register(this.tareasrealizadas).subscribe(
      response => 
     {
       
       if(response.status == 'success'){
         this.status = response.status;
         //vaciar el formulario
         this.tareasrealizadas = new Actividadejecutada(null, null, '' , null,'','', '', null, null, null);
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
