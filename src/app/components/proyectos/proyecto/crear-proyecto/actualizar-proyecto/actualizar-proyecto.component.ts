import { Component, OnInit } from '@angular/core';
import { ListasService } from 'src/app/services/listas.service';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';
import { Registrarproyecto } from 'src/app/models/proyecto/registrarproyecto';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { from } from 'rxjs';
import { Actualizarproyecto } from 'src/app/models/proyecto/actualizarproyecto';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-actualizar-proyecto',
  templateUrl: './actualizar-proyecto.component.html',
  styleUrls: ['./actualizar-proyecto.component.css'],
  providers: [ RegistrarproyectoService ]
})
export class ActualizarProyectoComponent implements OnInit {

  public status: string;
  public id_proyecto:Array<any>;
  public fecha: any;
  public ffin: any;
  public Cliente:any;
  public actualizarproyecto: Actualizarproyecto;
  public id: any;
  public nombre: any;

  constructor(public _listaservice: ListasService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _registrarproyectoService: RegistrarproyectoService) { 
      this.actualizarproyecto = new Actualizarproyecto (null, '', '', null,null );
    }



    onSubmit(form){
    
        console.log(this.actualizarproyecto.id_proyecto);
        //console.log(this.id_proyecto);
        
        
        this._registrarproyectoService.actualizo( this.actualizarproyecto, this.actualizarproyecto.id_proyecto).subscribe(
          response => {
            console.log(response);
            if(response.status == 'success'){
              this.status = response.status;
        
              //vaciar el formulario
              this.actualizarproyecto = new Actualizarproyecto(null, '', '', null,null );
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

  ngOnInit() {
    //console.log(this.actualizarproyecto.id_proyecto);
    //console.log(this.id_proyecto);
    this.actualizarproyecto = new Actualizarproyecto (null, '', '', null,null );
    console.log('consultarproyecto.component cargado correctamente');
    this._listaservice.getTipoProyecto().subscribe(
      response => {
        if(response.status == 'success'){
        this.id_proyecto = response.data}
      error => { this.id_proyecto = error.data; }
        }
    );
   

  }

  obtener(){

    for( var i = 0 ; i < this.id_proyecto.length; i++){
      if(this.actualizarproyecto.id_proyecto == this.id_proyecto[i].id_proyecto){
        this.fecha =this.id_proyecto[i].fecha_inicio;
        this.ffin =this.id_proyecto[i].fecha_fin;
        this.id = this.id_proyecto[i].id_proyecto;
        this.Cliente = this.id_proyecto[i].cliente;
        this.nombre = this.id_proyecto[i].nombre;
  
      }
    }
   
   }

}
