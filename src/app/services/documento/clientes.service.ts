import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public url: string;
  constructor( 
    public _http : HttpClient 
){ 
    this.url = GLOBAL.url;
}
 
registrar(clientes) : Observable<any> {
 

    let json = JSON.stringify(clientes);
    let params = 'json='+json;   

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    console.log(params);
    return this._http.post(this.url+'documentos/cliente' , params , { headers : headers} );
  }
}
