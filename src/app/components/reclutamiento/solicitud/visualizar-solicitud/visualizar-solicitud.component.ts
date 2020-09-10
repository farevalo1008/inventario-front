import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../../../services/reclutamiento/solicitud.service';
import { ListasService } from '../../../../services/listas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visualizar-solicitud',
  templateUrl: './visualizar-solicitud.component.html',
  styleUrls: ['./visualizar-solicitud.component.css']
})
export class VisualizarSolicitudComponent implements OnInit {

  public pais: Array<any>;
  public genero: Array<any>;
  public roles: Array<any>;
  public solicitante: String;
  public tipo_requerimiento: Array<any>;
  public id_candidato:number;
  public id_solicitud:number;
  public descripcion_trabajo: Array<any>;
  public area_trabajo: Array<any>;
  public cargo: Array<any>;
  public profesion: Array<any>;
  public conocimiento: Array<any>;
  public datosSolicitud: Array<any>;
  public status: String;
  public message: String;
  public verCandidatoSolicitud:any;
  public error:boolean=false;

  constructor(
    private _servicioSolicitud : SolicitudService,
    public _listaservice : ListasService,
    private _route: ActivatedRoute,
    private _router:ActivatedRoute
  ) { 
    this._router.params.subscribe( params =>{
      this.id_solicitud = params['id_solicitud'];
    });

    console.log(this._route.snapshot.paramMap.get('id_solicitud'));
  }

  ngOnInit() {
    this._listaservice.getDescripcionTrabajo().subscribe(
      response => { this.descripcion_trabajo = response.data; } ,
      error => { this.descripcion_trabajo = error.data }
    );
    
    let id_solicitud = +this._route.snapshot.paramMap.get('id_solicitud');
    console.log(id_solicitud);
    this._servicioSolicitud.reclutamientoverSolicitud(id_solicitud).subscribe(
  
      response => {
        console.log(response.data);
        this.datosSolicitud = response.data;
      }
        
    );

    this._servicioSolicitud.reclutamientoVerCandidatoPorSolicitud(this.id_solicitud).subscribe( response =>{
      if(response.status=='error'){
        this.error=true;
      }else{
        this.error=false;
        this.verCandidatoSolicitud = response.data;
      }
    });

  }

  onSubmit(){
  // verCandidatoPorSolicitud(solicitud){
    this._servicioSolicitud.reclutamientoVerCandidatoPorSolicitud(this.id_solicitud).subscribe( response =>{
      if(response.status=='error'){
        this.error=true;
      }else{
        this.error=false;
        this.verCandidatoSolicitud = response.data;
      }
      
    });
  // }
  }
}


