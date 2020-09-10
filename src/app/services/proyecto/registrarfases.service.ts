import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from '../global';
import { Registrarfases} from '../../models/proyecto/registrarfases';


@Injectable()
export class RegistrarfasesService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }
    /*pruebads(){
        return "hola mundo";
    }*/
  
    register(fases): Observable<any>{
        let json = JSON.stringify(fases);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'proyecto/crearfase', params, {headers: headers});  
    }

    actualizo(actualizarfase, id_periodo): Observable<any>{
        let json = JSON.stringify( actualizarfase);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.put(this.url+'proyecto/actualizarfase/'+ id_periodo, params, {headers: headers} );
        
    }
    
}