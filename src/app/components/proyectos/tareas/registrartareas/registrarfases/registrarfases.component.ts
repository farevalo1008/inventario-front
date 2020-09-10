import { Component, OnInit } from '@angular/core';
import { Registrarfases } from 'src/app/models/proyecto/registrarfases';
import { RegistrarfasesService } from 'src/app/services/proyecto/registrarfases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListasService } from '../../../../../services/listas.service';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';



@Component({
  selector: 'app-registrarfases',
  templateUrl: './registrarfases.component.html',
  styleUrls: ['./registrarfases.component.css'],
  providers: [RegistrarfasesService, RegistrarproyectoService
  ]
})
export class RegistrarfasesComponent implements OnInit {
  public registrarfases: Registrarfases;
  public status: string;
  public id_turno:Array<any>;
  public id_proyecto:Array<any>;
  public fecha: any;
  public ffin: any;

  constructor(public _listaservice: ListasService,
    private  _route: ActivatedRoute,
    private _router: Router,
    private _registrarfasesService: RegistrarfasesService,
    private _registrarproyectoService: RegistrarproyectoService
    
    ) { 
    this.registrarfases = new Registrarfases('', '', '', '', '',null,null,null, null);
  }


  OnSubmit(){
    console.log(this.registrarfases);
    //console.log(this._registrarfasesService.pruebads());
    this._registrarfasesService.register(this.registrarfases).subscribe(
      response => {
        
        if(response.status == 'success'){
          this.status = response.status;
          //vaciar for
          this.registrarfases = new Registrarfases('', '', '', '', '', null,null,null,null);
  
        }else{
          this.status = 'error';
          
        }
      },
      
      error => {
        console.log(<any>error)
      }
    );
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
    console.log('registrarfases.component ');
  }
  obtener(){

    for( var i = 0 ; i < this.id_proyecto.length; i++){
  
      if(this.registrarfases.id_proyecto == this.id_proyecto[i].id_proyecto){
        this.fecha =this.id_proyecto[i].fecha_inicio;
        this.ffin =this.id_proyecto[i].fecha_fin;
        
  
      }
    }
   
   }

}
