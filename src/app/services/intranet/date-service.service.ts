import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
  public url: string;
  public errorHttp: boolean;
  public pais: any;

  constructor(public _http : HttpClient ) { 
    this.url = GLOBAL.url;
  }

  getDateService(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'intranet/systemDateTime');    
  }
}
