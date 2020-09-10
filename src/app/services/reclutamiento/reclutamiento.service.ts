import { Injectable } from '@angular/core';
import { Users } from '../../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ReclutamientoService {
  public url: string;
  public errorHttp: boolean;


  constructor(
    public _http : HttpClient
  ) { 
    this.url = GLOBAL.url;
  }

  reclutamientoGet(): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento');
  }
  
}
