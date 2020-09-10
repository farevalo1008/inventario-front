import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs';
import { DatosPersonales } from '../../models/datos_personales';


@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }
   
   asig_personal():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'inventario/traerpersona', { headers : headers });
   }

  compararback(tipodato):Observable<any>{
    let json = JSON.stringify(tipodato);
    let params = 'json_='+json; 
    console.log("linea 28 SAsignacion",params);
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'inventario/personal' , params , { headers : headers} );
  }
  
  guardarasignacion(listaEquipo):Observable<any>{
    let json = listaEquipo;
    let params = 'json_='+"["+json+"]";
    console.log("linea 36 SRegistro",params);

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      
      return this._http.post(this.url+'inventario/guardarasignacion' , params , { headers : headers} );
  }

  guardarasignaciondep(listaEquipo):Observable<any>{
    let json = listaEquipo;
    let params = 'json_='+"["+json+"]";
    console.log("linea 46 SRegistro",params);

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      
      return this._http.post(this.url+'inventario/guardarasignaciondep' , params , { headers : headers} );
  }

  buscarPersonal():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'inventario/buscarpersonal', { headers : headers });
  }


  asignacionesOnePerson(variable):Observable<any>{
    let json = JSON.stringify(variable);
    let params =  'json_='+json;
    console.log("linea 62 SRegistro",params);

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'inventario/asignacionesoneperson' , params , { headers : headers} );
  }

  borrarAsignacion(eliminar):Observable<any>{
    let json = JSON.stringify(eliminar);
    let params =  'json_='+json;
    console.log("linea 46 SRegistro",params);

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      
      return this._http.post(this.url+'inventario/borrarasignacion' , params , { headers : headers} );
  }

  borrarAsignacionDep(eliminar):Observable<any>{
    let json = JSON.stringify(eliminar);
    let params =  'json_='+json;
    console.log("linea 81 SRegistro",params);

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      
      return this._http.post(this.url+'inventario/borrarasignaciondep' , params , { headers : headers} );
  }


  asignacionesOneDepa(depusuario):Observable<any>{
    let json = JSON.stringify(depusuario);
    let params =  'json_='+json;
    console.log("linea 92 SRegistro",params);

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'inventario/asignacionesonedepa' , params , { headers : headers} );
  }
  
      
  



}
