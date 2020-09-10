import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
  export class ProcedenciasService {
    public url: string;
    constructor( 
      public _http : HttpClient 
  ){ 
      this.url = GLOBAL.url;
  }
   
  registrar(procedencias) : Observable<any> {
   
  
      let json = JSON.stringify(procedencias);
      let params = 'json='+json;   
  
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      console.log(params);
      return this._http.post(this.url+'documentos/procedencia' , params , { headers : headers} );
    }
  }