import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class PersonalActivoInactivoService {
	public url: string;
  	public errorHttp: boolean;
	constructor(
		 public _http : HttpClient
		) {
			 this.url = GLOBAL.url;
		 }

  	getPesonalActivoInactivo(): Observable<any>{
    return this._http.get(this.url+'intranet/auditoriadeacceso');
  }
}
