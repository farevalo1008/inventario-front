import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {GLOBAL} from '../global';
import { Actividadejecutada } from 'src/app/models/proyecto/actividadejecutada';

@Injectable()
export class ActividadejecutadaService{
    public url: string;

    constructor(
        public _http: HttpClient

    ){
    this.url = GLOBAL.url;
    }

    pruebas(){
        return "hola mundo!";
    }

    register(actividadejecutada): Observable<any>{
        let json = JSON.stringify(actividadejecutada);
        let params = 'json='+json;

       let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'proyecto/actividadrealizada', params, {headers: headers});  
    }
    

    
}