import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
	public url: string;
  public errorHttp: boolean;

  constructor(
  	 public _http : HttpClient
  	) {
  		 this.url = GLOBAL.url;
  	 }

  	getPublicaciones(): Observable<any>{
    return this._http.get(this.url+'intranet/publicaciones');
  }

  createPublicaciones(NewsModel): Observable<any>{
    let json = JSON.stringify(NewsModel);
    let params = 'json='+json;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  
    return this._http.post(this.url+'intranet/publicaciones/store' , params , { headers : headers });
  }

    getNoticias(): Observable<any>{
    return this._http.get(this.url+'intranet/noticias');
  }
}
