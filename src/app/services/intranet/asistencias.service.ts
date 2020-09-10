import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {
  public url: string;
  public errorHttp: boolean;

  constructor(
    public _http : HttpClient
  ) { 
      this.url = GLOBAL.url;
    }

  asistenciaGetHistorial(identidad): Observable<any>{
    let json = JSON.stringify(identidad);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  
    return this._http.post(this.url+'intranet/controldeacceso' , params , { headers : headers });
  }

  asistenciaCreate(AsistenciasModel): Observable<any>{
    let json = JSON.stringify(AsistenciasModel);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'intranet/controldeacceso/store' , params , { headers : headers });
  }

  asistenciaUpdate(AsistenciasModel): Observable<any>{
    let json = JSON.stringify(AsistenciasModel);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'intranet/controldeacceso/update' , params , { headers : headers });
  }

  asistenciaPermisoSalida(permisoModel): Observable<any>{
    let json = JSON.stringify(permisoModel);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'intranet/controldeacceso/permisosalida' , params , { headers : headers });
  }

  asistenciaPermisoEntrada(permisoEntradaModel): Observable<any>{
    let json = JSON.stringify(permisoEntradaModel);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'intranet/controldeacceso/permisoentrada' , params , { headers : headers });
  }
}
