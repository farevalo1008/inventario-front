import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../../../../services/reclutamiento/candidato.service';
import { SolicitudService } from '../../../../../services/reclutamiento/solicitud.service';
import { UsersService } from '../../../../../services/users.service';
import { ListasService } from '../../../../../services/listas.service';
import { Proceso } from '../../../../../models/reclutamiento/proceso';
import { Status } from '../../../../../models/reclutamiento/status';
import { Cita } from '../../../../../models/reclutamiento/cita';
import { Solicitudcandidato } from '../../../../../models/reclutamiento/solicitudcandidato';
import { Observaciones } from '../../../../../models/reclutamiento/observaciones';
import { Procesoanalista } from '../../../../../models/reclutamiento/procesoanalista';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visualizar-recurso-interno',
  templateUrl: './visualizar-recurso-interno.component.html',
  styleUrls: ['./visualizar-recurso-interno.component.css']
})
export class VisualizarRecursoInternoComponent implements OnInit {

  public procesoanalista: Procesoanalista;
  public proceso: Proceso;
  public statuscandidato: Status;
  public citacandidato: Cita;
  public solicitudacandidato: Solicitudcandidato;
  public observacionescandidato: Observaciones;
  public statusCandidatos: Array<any>;
  public observacionesCandidatos: Array<any>;
  public citaCandidato: Array<any>;
  public datosCandidato: Array<any>;
  public datAcademicos: Array<any>;
  public datLaborales: Array<any>;
  public datHabilidades: Array<any>;
  public datArchivos: Array<any>;
  public datCita: Array<any>;
  public id_candidato:number;
  public status: String;
  public message: String;
  public error:String;
  public error1:String;
  public error2:String;
  public error3:String;
  public error4:String;
  public error5:String;
  public errorstatus:String;
  public errorcita:String;
  public errorobs:String;
  public erroracademico:String;
  public errorlaborales:String;
  public errorhabilidades:String;
  public errorarchivos:String;
  public usuario;
  public verCi:any;
  public valor:boolean=false;
  public mostrar:boolean=false;
  public lstatus: Array<any>;
  public descripcion_trabajo: Array<any>;
  public descripcion_trabajoo: Array<any>;
  public roles: Array<any>;
  public verAcademicos:any;
  public verLaborales:any;
  public verHabilidades:any;
  public verArchivos:any;
  public statuson:boolean=false;
  public citaon:boolean=false;
  public obson:boolean=false;
  public academicoon:boolean=false;
  public laboraleson:boolean=false;
  public habilidadeson:boolean=false;
  public archivoson:boolean=false;

  constructor(
    private _servicioCandidato : CandidatoService,
    public _listaservice : ListasService,
    private _servicioUsers : UsersService,
    private _servicioSolicitud : SolicitudService,
    private _route: ActivatedRoute,
    private _router:ActivatedRoute,
  ) { 
    this._router.params.subscribe( params =>{
      this.id_candidato = params['id_candidato'];
    });
  
    this.proceso = new Proceso(this.id_candidato,null);
    this.procesoanalista = new Procesoanalista(this.id_candidato,null,null);
    this.statuscandidato = new Status(this.id_candidato,null);
    this.citacandidato = new Cita(this.id_candidato,null);
    this.observacionescandidato = new Observaciones(this.id_candidato,null,null,null,null);
    this.solicitudacandidato = new Solicitudcandidato(this.id_candidato,null);
      console.log(this._route.snapshot.paramMap.get('id_candidato'));
  }

  ngOnInit() {
    let id_candidato = +this._route.snapshot.paramMap.get('id_candidato');
    console.log(id_candidato);
    this._servicioCandidato.reclutamientoverCandidato(id_candidato).subscribe(
  
      response => {
        if(response.status=="error"){
          this.error = response.data;
          console.log(response.data);
        }else{
          this.datosCandidato = response.data;
          console.log(response.data);
        }          
      }
        
    );

    this._servicioSolicitud.reclutamientoGetSolicitud().subscribe(
      response => { this.descripcion_trabajoo = response.data; } ,
      error => { this.descripcion_trabajoo = error.data; }
    );

    this._listaservice.getStatus().subscribe(
      response => { this.lstatus = response.data; } ,
      error => { this.lstatus = error.data; }
    );

    this._listaservice.getRoles().subscribe(
      response => { this.roles = response.data; } ,
      error => { this.roles = error.data }
    );

    this._listaservice.getDescripcionTrabajo().subscribe(
      response => { this.descripcion_trabajo = response.data; } ,
      error => { this.descripcion_trabajo = error.data }
    );

    this.verStatus(this.id_candidato);
    this.verCita(this.id_candidato);
    this.verDatosAcademicos(this.id_candidato);
    this.verDatosLaborales(this.id_candidato);
    this.verDatosHabilidades(this.id_candidato);
    this.verDatosArchivos(this.id_candidato);
    this.verObservaciones(this.id_candidato);
  }

  onSubmit(form){
    this._servicioCandidato.citaCandidato(this.citacandidato).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();
            
          }

          if(response.status == 'error'){
            console.log(response);
            this.status = response.status;
            this.message = response.message;
          }

        } ,
        error => {
          console.log(<any>error)
        }
    );

    this.ngOnInit();
  }

  onSubmit1(form){
    this._servicioCandidato.observacionesCandidato(this.observacionescandidato).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();
            
          }

          if(response.status == 'error'){
            console.log(response);
            this.status = response.status;
            this.message = response.message;
          }

        } ,
        error => {
          console.log(<any>error)
        }
    );

    this.ngOnInit();
  }

  onSubmit2(form){
    this._servicioCandidato.statusCandidato(this.statuscandidato).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();
            
          }

          if(response.status == 'error'){
            console.log(response);
            this.status = response.status;
            this.message = response.message;
          }

        } ,
        error => {
          console.log(<any>error)
        }
    );

    this.ngOnInit();
  }

  onSubmit3(form){
    this._servicioCandidato.solicitudAcandidato(this.solicitudacandidato).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();
            
          }

          if(response.status == 'error'){
            console.log(response);
            this.status = response.status;
            this.message = response.message;
          }

        } ,
        error => {
          console.log(<any>error)
        }
    );

    this.ngOnInit();
  }

  verDatosAcademicos(candidato){
    console.log("buscar datos academicos del candidato");
    this._servicioCandidato.reclutamientoVerDatosAcademicos(candidato).subscribe( 
      response =>{
        if(response.status=="erroracademico"){
          this.erroracademico = response.academicos;
          console.log(response.academicos);
        }else{
          this.academicoon = true;
          this.erroracademico = null;
          console.log(response.academicos);
          this.verAcademicos = response.academicos;
        }
      //this.verAcademicos = response.academicos;
    });
  }

  verDatosLaborales(candidato){
    console.log("buscar datos laborales del candidato");
    this._servicioCandidato.reclutamientoVerDatosLaborales(candidato).subscribe( 
      response =>{
        if(response.status=="errorlaborales"){
          this.errorlaborales = response.laborales;
          console.log(response.laborales);
        }else{
          this.laboraleson = true;
          this.errorlaborales = null;
          console.log(response.laborales);
          this.verLaborales = response.laborales;
        }
      //this.verLaborales = response.laborales;
    });
  }

  verDatosHabilidades(candidato){
    console.log("buscar habilidades del candidato");
    this._servicioCandidato.reclutamientoVerDatosHabilidades(candidato).subscribe( 
      response =>{
        if(response.status=="errorhabilidades"){
          this.errorhabilidades = response.habilidades;
          console.log(response.habilidades);
        }else{
          this.habilidadeson = true;
          this.errorhabilidades = null;
          console.log(response.habilidades);
          this.verHabilidades = response.habilidades;
        }
      //this.verHabilidades = response.habilidades;
    });
  }

  verDatosArchivos(candidato){
    console.log("buscar archivos del candidato");
    this._servicioCandidato.reclutamientoVerDatosArchivos(candidato).subscribe( 
      response =>{
        if(response.status=="errorarchivos"){
          this.errorarchivos = response.archivos;
          console.log(response.archivos);
        }else{
          this.archivoson = true;
          this.errorarchivos = null;
          console.log(response.archivos);
          this.verArchivos = response.archivos;
        }
      //this.verArchivos = response.archivos;
    });
  }

  verObservaciones(candidato){
    this._servicioCandidato.reclutamientoVerObservacionesCandidato(candidato).subscribe(

      response => {
        if(response.status=="errorobs"){
          this.errorobs = response.obscan;
          console.log(response.obscan);
        }else{
          this.obson = true;
          this.errorstatus = null;
          console.log(response.obscan);
          this.observacionesCandidatos = response.obscan;
        }
        //this.observacionesCandidatos = response.obscan;
      
    });
  }

  verStatus(candidato){
    this._servicioCandidato.reclutamientoVerStatusCandidato(candidato).subscribe(

      response => {
        if(response.status=="errorstatus"){
          this.errorstatus = response.statuscan;
          console.log(response.statuscan);
        }else{
          this.statuson = true;
          this.errorstatus = null;
          console.log(response.statuscan);
          this.statusCandidatos = response.statuscan;
        }
        //this.statusCandidatos = response.statuscan;
      
    });
  }

  verCita(candidato){
    this._servicioCandidato.reclutamientoVerCitaCandidato(candidato).subscribe(

      response => {
        if(response.status=="errorcita"){
          this.errorcita = response.citacan;
          console.log(response.citacan);
        }else{
          this.citaon = true;
          this.errorcita = null;
          console.log(response.citacan);
          this.citaCandidato = response.citacan;
        }
        //this.citaCandidato = response.citacan;
        //console.log(this.citaCandidato);
    });
  }

  removeStatus(id_candidato_status){
    //alert('Esta seguro de eliminar el Usuario???');
    this._servicioCandidato.borrarStatus(id_candidato_status).subscribe(

      response => {
        console.log(response);
      }
        
    );
    //window.location.reload();
    this.ngOnInit();
    
  }

  removeCita(id_candidato_entrevista){
    //alert('Esta seguro de eliminar el Usuario???');
    this._servicioCandidato.borrarCita(id_candidato_entrevista).subscribe(

      response => {
        console.log(response);
        
      }    
    );
    //window.location.reload();   
    this.ngOnInit();
    
  }

}
