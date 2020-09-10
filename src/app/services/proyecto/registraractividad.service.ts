import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {GLOBAL} from '../global';
import { Registraractividad } from '../../models/proyecto/registraractividad';
import {Capturaidactividad } from 'src/app/models/proyecto/carturaidactividad';




@Injectable()
export class RegistraractividadService{
    public url: string;
  

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }/*
    pruebads(){
        return "hola mundo";
    }*/
   
    register(actividad): Observable<any>{
        let json = JSON.stringify(actividad);
        let params = 'json='+json;

       let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
       
        return this._http.post(this.url+'proyecto/registroactividad', params, {headers: headers});  
  
    }
    registre(id_actividad_Sel, id_periodo_Sel): Observable<any>{        

        let json = JSON.stringify({id_periodo: id_periodo_Sel,id_actividad: id_actividad_Sel});
        let params = 'json='+json;
        //let params = "'json='{id_actividad_Sel:55,id_periodo_Sel:3}";
        console.log(json);       
        console.log(params);
       let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'proyecto/actperiodo', params, {headers: headers});  
    }
    actualizo(actualizaractividad, id_actividad): Observable<any>{
        let json = JSON.stringify( actualizaractividad);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.put(this.url+'proyecto/actualizaractividad/'+ id_actividad, params, {headers: headers} );
        
    }
}
    