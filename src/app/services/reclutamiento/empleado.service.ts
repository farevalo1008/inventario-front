import { Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  public url: string;
  public errorHttp: boolean;
  
  constructor(
    public _http : HttpClient
  ) { 
    this.url = GLOBAL.url;
  }

  reclutamientoGetRecursosInternos(): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/recursosinternos');
  }

  reclutamientoGetPosiblesEmpleados(): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/posiblesempleados');
  }

  reclutamientoverObservacionesContrato(id_candidato): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/posiblesempleados/' + id_candidato);
  }

  aceptoContrato(aceptocontrato): Observable<any> {
    let json = JSON.stringify(aceptocontrato);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'reclutamiento/posiblesempleados/contrato' , params , { headers : headers });
  }

  rechazoContrato(rechazocontrato): Observable<any> {
    let json = JSON.stringify(rechazocontrato);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'reclutamiento/posiblesempleados/rechazocontrato' , params , { headers : headers });
  }

}


