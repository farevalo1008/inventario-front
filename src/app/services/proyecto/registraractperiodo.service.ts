import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {GLOBAL} from '../global';
import { Registraractividad } from '../../models/proyecto/registraractividad';




@Injectable()
export class registroActPeriodoService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }/*
    pruebads(){
        return "hola mundo";
    }*/
   
    registroActPeriodo(id_actividad, id_periodo): Observable<any>{
        let json = JSON.stringify(id_actividad, id_periodo);
        let params = 'json='+json;

       let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'proyecto/actperiodo', params, {headers: headers});  
    }
   
}
    
