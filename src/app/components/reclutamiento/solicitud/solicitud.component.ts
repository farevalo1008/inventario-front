import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../../services/reclutamiento/solicitud.service';
import { ListasService } from '../../../services/listas.service';
import { Rcl_Solicitud } from '../../../models/reclutamiento/rcl_solicitud';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  BuscarSolicitanteModel = new Rcl_Solicitud('',null,null,null,null,null,'','','',null,null);
  public nombre : String;
  public cargo : Number;
  public apellido: String;
  public datosSolicitudes: Array<any>;
  public buscarsolicitante: Array<any>;
  public datasolicitante: Array<any>;
  public tipo_requerimiento: Array<any>;
  public descripcion_trabajo: Array<any>;
  public bsolicitante: boolean = false;
  public getSolicitudes: boolean = false;
  public mensajeError: boolean = false;
  public error:String;

  constructor( 
    private _servicioSolicitud : SolicitudService,
    public _listaservice : ListasService
  ) { }

  ngOnInit() {
    this._listaservice.getTipoRequerimiento().subscribe(
      response => { this.tipo_requerimiento = response.data; } ,
      error => { this.tipo_requerimiento = error.data }
    );

    this._listaservice.getDescripcionTrabajo().subscribe(
      response => { this.descripcion_trabajo = response.data; } ,
      error => { this.descripcion_trabajo = error.data }
    );
    
    this.verSolicitudes();

      
    }

  verSolicitudes(){
    this._servicioSolicitud.reclutamientoGetSolicitud().subscribe(
  
      response => {
        if(response.status=="error"){
          this.error = response.data;
          console.log(response.data);
        }else{
          console.log(response);
          this.getSolicitudes = true;
          this.datosSolicitudes = response.data     
      }
    }
        
    );
    this.getSolicitudes = false;
  }

  solicitanteSubmit(){
    console.log(this.BuscarSolicitanteModel.solicitante); 
    this._servicioSolicitud.buscarSolicitanteSolicitud(this.BuscarSolicitanteModel).subscribe(
        response => {
          
          console.log(response.data);
          this.buscarsolicitante = response.data[0];
          this.bsolicitante = true;
          this.getSolicitudes = false;
          console.log();
          this.datasolicitante = response.data;
          if(response.data == 'no data'){
            this.mensajeError=true;
            this.bsolicitante = false
          }
        } 
    );
    this.mensajeError=false;
    this.bsolicitante = false;
    
  }

}
