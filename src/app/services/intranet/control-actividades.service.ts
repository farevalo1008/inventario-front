import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ControlActividadesService {
  public url: string;
  public errorHttp: boolean;
    constructor(
    public _http : HttpClient
  ) { 
      this.url = GLOBAL.url;
    }

    getHistorialActividades(historial):Observable<any>{
    let json = JSON.stringify(historial);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  
    return this._http.post(this.url+'intranet/controldeactividades/historial' , params , { headers : headers });
    }

   registroActividades(Actividad): Observable<any>{
    let json = JSON.stringify(Actividad);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  
    return this._http.post(this.url+'intranet/controldeactividades/store' , params , { headers : headers });
  }
}
