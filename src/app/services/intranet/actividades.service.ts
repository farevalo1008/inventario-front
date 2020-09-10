import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
	public url: string;
	public errorHttp: boolean;

    constructor(
    public _http : HttpClient
  ) { 
      this.url = GLOBAL.url;
    }

  	getActividades(): Observable<any>{
		return this._http.get(this.url+'intranet/actividades');
  	}

    createActividad(ActividadModel): Observable<any>{
    let json = JSON.stringify(ActividadModel);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

     return this._http.post(this.url+'intranet/actividades/store' , params , { headers : headers });
  }


  GetActivity(Activity): Observable<any>{
    let json = JSON.stringify(Activity);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

     return this._http.post(this.url+'intranet/actividades/actividad' , params , { headers : headers });
  }


   UpdateActividad(ActividadModel): Observable<any>{
    let json = JSON.stringify(ActividadModel);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

     return this._http.post(this.url+'intranet/actividades/update' , params , { headers : headers });
  }

  DeleteActividad(id): Observable<any>{
    let json = JSON.stringify(id);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

     return this._http.post(this.url+'intranet/actividades/delete' , params , { headers : headers });
  }

  getNextEvent(): Observable<any>{
    return this._http.get(this.url+'intranet/eventos');
    }
}
