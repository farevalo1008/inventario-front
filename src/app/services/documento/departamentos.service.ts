import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';



@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  public url: string;
  constructor( 
    public _http : HttpClient 
){ 
    this.url = GLOBAL.url;
}
 
registrar(departamentos) : Observable<any> {
 

    let json = JSON.stringify(departamentos);
    let params = 'json='+json;   

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    console.log(params);
    return this._http.post(this.url+'documentos/departamento' , params , { headers : headers} );
  }
}
