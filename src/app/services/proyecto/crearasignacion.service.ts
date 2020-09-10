import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {GLOBAL} from '../global';
import { Crearasignacion } from '../../models/proyecto/crearasignacion';

@Injectable()
export class CrearasignacionService{
    public url: string;

    constructor(
        public _http: HttpClient

    ){
    this.url = GLOBAL.url;
    }
/*
    pruebas(){
        return "hola mundo!";
    }*/

    register(crearasignacion): Observable<any>{
        let json = JSON.stringify(crearasignacion);
        let params = 'json='+json;

       let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'proyecto/asignacion', params, {headers: headers});  
    }
    
    actualizo(id_act_user, id_datperss): Observable<any>{
        let json = JSON.stringify({id_datpers: id_datperss});
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.put(this.url+'proyecto/actualizarasignacion/'+ id_act_user, params, {headers: headers} );
        
    }
    
    
}

















    /*
    actividadlista(actividad): Observable<any>{
        let json = JSON.stringify(actividad);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'proyecto/gettipoactividad', params, {headers: headers});  
    }

    userlista(nombres): Observable<any>{
        let json = JSON.stringify(nombres);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'proyecto/gettipouser', params, {headers: headers});  
    }*/

