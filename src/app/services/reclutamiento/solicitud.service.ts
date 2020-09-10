import { Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  public url: string;
  public errorHttp: boolean;


  constructor(
    public _http : HttpClient
  ) {
    this.url = GLOBAL.url;
   }

  reclutamientoGetSolicitud(): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/solicitud');
  }
  
  reclutamientoverSolicitud(id_solicitud): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/solicitud/visualizar/' + id_solicitud);
  }

  reclutamientoVerCandidatoPorSolicitud(id_solicitud): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/solicitud/visualizar/candidatoporsolicitud/' + id_solicitud);
  }

  crear(user): Observable<any>{
    let json = JSON.stringify(user);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'reclutamiento/solicitud/crear' , params , { headers : headers });
  }

  buscarSolicitanteSolicitud(solicitante): Observable<any>{
  let json = JSON.stringify(solicitante);
   let params = 'json='+json;
   console.log(params);
   let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
   return this._http.post(this.url+'reclutamiento/solicitud', params , { headers : headers });
  }

}
