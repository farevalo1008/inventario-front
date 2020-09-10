import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public url: string;
  public errorHttp: boolean;
  public pais: any;

  constructor( 
    public _http : HttpClient 
  
  ){ 
      this.url = GLOBAL.url;
  }

  getMenu(data): Observable<any>{
    let json = JSON.stringify(data);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'getmenu', params , { headers : headers });    
  }
}
