import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
  export class ExtensionService {
    public url: string;
    constructor( 
      public _http : HttpClient 
  ){ 
      this.url = GLOBAL.url;
  }
   
  registrar(extension) : Observable<any> {
   
  
      let json = JSON.stringify(extension);
      let params = 'json='+json;   
  
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      console.log(params);
      return this._http.post(this.url+'documentos/extension' , params , { headers : headers} );
    }
  }