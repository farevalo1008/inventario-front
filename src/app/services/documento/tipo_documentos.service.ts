import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
  export class Tipo_documentosService {
    public url: string;
    constructor( 
      public _http : HttpClient 
  ){ 
      this.url = GLOBAL.url;
  }
   
  registrar(tipo_documentos) : Observable<any> {
   
  
      let json = JSON.stringify(tipo_documentos);
      let params = 'json='+json;   
  
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      console.log(params);
      return this._http.post(this.url+'documentos/tipo_documento' , params , { headers : headers} );
    }
  }