import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';

import { Registrarproyecto } from 'src/app/models/proyecto/registrarproyecto'

@Injectable()
export class RegistrarproyectoService{
 
    public url: string;
  //consultarasignagetcion: any;
  //consultarasignacion: any;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }
    /*pruebads(){
        return "hola mundo";
    }*/
    register(proyecto): Observable<any>{
        let json = JSON.stringify(proyecto);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'proyecto/crearproyecto', params, {headers: headers});  
    }

    actualizo(actualizarproyecto, id_proyecto): Observable<any>{
        let json = JSON.stringify( actualizarproyecto);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.put(this.url+'proyecto/actualizarproyecto/'+ id_proyecto, params, {headers: headers} );
        
    }
    getProyecto(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'proyecto/getProyectoac', { headers : headers });
    }
}