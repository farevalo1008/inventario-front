import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';


@Injectable({
  providedIn: 'root'
})
export class ReporteaccesoService {
  public url: string;
  public errorHttp: boolean;
  constructor( public _http : HttpClient
  	) {
  		 this.url = GLOBAL.url;
  	 }

  getReporteColectivo(mes): Observable<any>{
    let json = JSON.stringify(mes);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'intranet/auditoriadeacceso/show' , params , { headers : headers });
  }

  getReportePersonal():Observable<any>{
    return this._http.get(this.url+'intranet/auditoriadeacceso/showusers');
  }

  getReporteUserMonth(id_user):Observable<any>{
    return this._http.get(this.url+'intranet/auditoriadeacceso/showpersonal/' + id_user);
  }

  getUser(id_user):Observable<any>{
    return this._http.get(this.url+'intranet/auditoriadeacceso/getuser/' + id_user);
  }
}
