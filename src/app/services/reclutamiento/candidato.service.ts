import { Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';
import { Rcl_candidato } from '../../models/reclutamiento/rcl_candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  public url: string;
  public errorHttp: boolean;

  constructor(
    public _http : HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  reclutamientoGetCandidato(): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/candidato');
  }
  reclutamientoverCandidato(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/candidato/visualizar/' + id_candidato);
  }

  reclutamientoVerStatusCandidato(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/candidato/visualizar/status/' + id_candidato);
  }

  reclutamientoVerObservacionesCandidato(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/candidato/visualizar/observacion/' + id_candidato);
  }

  reclutamientoVerSolicitudPorCandidato(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/candidato/visualizar/asignacion/' + id_candidato);
  }
  
  reclutamientoVerCitaCandidato(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/candidato/visualizar/cita/' + id_candidato);
  }

  reclutamientoVerDatosAcademicos(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'aspirante/datosacademicos/' + id_candidato);
  }

  reclutamientoVerDatosLaborales(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'aspirante/datoslaborales/' + id_candidato);
  }

  reclutamientoVerDatosHabilidades(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'aspirante/habilidades/' + id_candidato);
  }

  reclutamientoVerDatosArchivos(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'aspirante/archivos/' + id_candidato);
  }

  create(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'reclutamiento/candidato/create' , params , { headers : headers });
  }

  getAspirante(dni):Observable<any>{
   let json = JSON.stringify(dni);
   let params = 'json='+json;
   console.log(params);
   let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
   return this._http.post(this.url+'aspirante', params , { headers : headers });
  }

  statusCandidato(statuscandidato): Observable<any> {
    let json = JSON.stringify(statuscandidato);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'reclutamiento/candidato/visualizar/status' , params , { headers : headers });
  }

  citaCandidato(citacandidato): Observable<any> {
    let json = JSON.stringify(citacandidato);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'reclutamiento/candidato/visualizar/cita' , params , { headers : headers });
  }

  solicitudAcandidato(solicitudacandidato): Observable<any> {
    let json = JSON.stringify(solicitudacandidato);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'reclutamiento/candidato/visualizar/solicitud' , params , { headers : headers });
  }

  observacionesCandidato(observacionescandidato): Observable<any> {
    let json = JSON.stringify(observacionescandidato);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'reclutamiento/candidato/visualizar/observacion' , params , { headers : headers });
  }

  procesoObsAnalista(procesoanalista): Observable<any> {
    let json = JSON.stringify(procesoanalista);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'reclutamiento/candidato/visualizar/obsanalista' , params , { headers : headers });
  } 

  datosacademicos(datosacademicos): Observable<any> {
    let json = JSON.stringify(datosacademicos);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'aspirante/datosacademicos' , params , { headers : headers });
  }  

  datoslaborales(datoslaborales): Observable<any> {
    let json = JSON.stringify(datoslaborales);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'aspirante/datoslaborales' , params , { headers : headers });
  } 

  habilidades(habilidades): Observable<any> {
    let json = JSON.stringify(habilidades);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'aspirante/habilidades' , params , { headers : headers });
  }
  
  archivos(archivos): Observable<any> {
    let json = JSON.stringify(archivos);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'aspirante/archivos' , params , { headers : headers });
  }

  borrarStatus(id_candidato_status): Observable<any>{
    console.log(id_candidato_status);
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.post(this.url+'reclutamiento/candidato/visualizar/status/delete/'+id_candidato_status,id_candidato_status);
  }

  borrarCita(id_candidato_entrevista): Observable<any>{
    console.log(id_candidato_entrevista);
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.post(this.url+'reclutamiento/candidato/visualizar/cita/delete/'+id_candidato_entrevista,id_candidato_entrevista);
  }

  buscarCandidatoNombres(nombres): Observable<any>{
    let json = JSON.stringify(nombres);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'reclutamiento/candidato', params , { headers : headers });
  }
}
