import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url: string;
  public identity;
  public token;

  constructor( 
      public _http : HttpClient 
  ){ 
      this.url = GLOBAL.url;
  }

  register(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'register' , params , { headers : headers });
  }

  signup(user, gettoken = null) : Observable<any> {
    
    if(gettoken != null){
      user.gettoken = 'true';
    }
    let json = JSON.stringify(user);
    let params = 'json='+json;   
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'login' , params , { headers : headers} );
  }

  // usuario(user) : Observable<any> {
    
  //   let json = JSON.stringify(user);
  //   let params = 'json='+json;   
  //   console.log(params);
  //   let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

  //   return this._http.post(this.url+'usuariohist' , params , { headers : headers} );
    
  // }



  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity != "undefined"){
      this.identity = identity;
    }else{
      this.identity = null;
    }
    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != "undefined"){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

  reclutamientoGetUsuarios(): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/usuarios');
  }

  deleteUsuario(id): Observable<any>{
    let json = JSON.stringify(id);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'reclutamiento/usuarios/delete/{id}', params , { headers : headers} );
  }

  borrarUsuario(id): Observable<any>{
    console.log(id);
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.post(this.url+'reclutamiento/usuarios/delete/'+id,id);
  }

  mostrarUsuario(id): Observable<any>{
    console.log(id);
    //let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'reclutamiento/usuarios/mostrar/' + id );
  }

  updateUser(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this._http.post(this.url+'reclutamiento/usuarios/actualizar/{id}', params , { headers : headers });
  }
  
}
