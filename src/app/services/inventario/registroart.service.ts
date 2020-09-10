import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../global';
import { Observable } from 'rxjs';
import { Articulo } from '../../models/inventario/articulo';

@Injectable({
  providedIn: 'root'
})
export class RegistroartService {
  public url: string;  

  constructor(
      public _http: HttpClient
  ) { 
    this.url = GLOBAL.url;
  }

  registrar(articulo):Observable<any>{
    let json = JSON.stringify(articulo);
    let params = 'json_='+json; 
    console.log("linea 22 SRegistro",params);

      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      
      return this._http.post(this.url+'inventario/cargainicial' , params , { headers : headers} );
  }

  getArticulo(): Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'inventario/verarticulo', { headers : headers });
  }

  getArticuloModif(): Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'inventario/verarticulomodif', { headers : headers });
  }

  getArticuloClas(getclasificacion): Observable<any>{
    let json = JSON.stringify(getclasificacion);
    let params = 'json_='+json; 
    
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'inventario/verarticuloclas',params, { headers : headers });
  }

  getArticuloClasHist(getclasificacion): Observable<any>{
    let json = JSON.stringify(getclasificacion);
    let params = 'json_='+json; 
    
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'inventario/getarticuloclashist',params, { headers : headers });
  }


  

  getArticuloTipo(getclasificacion): Observable<any>{
    let json = JSON.stringify(getclasificacion);
    let params = 'json_='+json

    console.log("linea 43 SRegistro",params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'inventario/verarticulotipo',params,{ headers : headers });
  }

  getArticuloTipoHist(getclasificacion): Observable<any>{
    let json = JSON.stringify(getclasificacion);
    let params = 'json_='+json

    console.log("linea 67 SRegistro",params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'inventario/getarticulotipohist',params,{ headers : headers });
  }
  
  getArticuloTipoMarca(getclasificacion): Observable<any>{
    let json = JSON.stringify(getclasificacion);
    let params = 'json_='+json

    console.log("linea 50 SRegistro",params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'inventario/verarticulotipomarca',params,{ headers : headers });
  }

  getDetalles(id_articulo):Observable<any>{
    return this._http.get(this.url+'inventario/detallesarticulo/' + id_articulo);
  }

  getDetallesHistorial(id_hist):Observable<any>{
    return this._http.get(this.url+'inventario/detallesarticulohistorial/' + id_hist);
  }

  updateArticulo(articulo, id_articulo = articulo[0].id_articulo):Observable<any>{
    let json = JSON.stringify(articulo[0]);
    let params = 'json_='+json; 
    console.log("linea 44 SRegistro",params);

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.put(this.url+'inventario/actualizar/articulo/'+ id_articulo, params, { headers : headers });
  }

  updateArticuloAveriado(articulo, id_articulo = articulo[0].id_articulo):Observable<any>{
    let json = JSON.stringify(articulo[0]);
    let params = 'json_='+json; 
    console.log("linea 77 SRegistro",params);

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.put(this.url+'inventario/actualizar/articulo/averiado/'+ id_articulo, params, { headers : headers });
  }

  

  tipoRegister(tipoArticulo):Observable<any>{
    let json = JSON.stringify(tipoArticulo);
    let params = 'json_='+json

    console.log("linea 78 SRegistro",params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'inventario/tiporegister',params,{ headers : headers });
  }
  
  enviarMante(ManteModel):Observable<any>{
    let json = JSON.stringify(ManteModel);
    let params = 'json_='+json

    console.log("linea 87 SRegistro",params);
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.post(this.url+'inventario/enviarmantenimiento',params,{ headers : headers });
  }


  getListaMante():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'inventario/getlistamante', { headers : headers });
  }

  getListaManteEspe():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'inventario/getListamantespe', { headers : headers });
  }

  


    devolverMante(envio, id_articulo = envio.id_tipo_articulo):Observable<any>{
      let json = JSON.stringify(envio);
      console.log("linea 112 SRegistro",envio);
      console.log("linea 112 SRegistro",json);
      let params = 'json_='+json; 
      console.log("linea 113 SRegistro",params);
  
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.put(this.url+'inventario/reincorporar/articulo/averiado/'+ id_articulo, params, { headers : headers });
    }
  
    borrarArticulo(ManteModel):Observable<any>{
      let json = JSON.stringify(ManteModel);
      let params = 'json_='+json

      console.log("linea 125 SRegistro",params);
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'inventario/borrararticulo',params,{ headers : headers });
    }

    getHistorial():Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.get(this.url+'inventario/gethistorial', { headers : headers });
    }
  
    getAccionHist(tipodato): Observable<any>{
      let json = JSON.stringify(tipodato);
      let params = 'json_='+json
  
      console.log("linea 170 SRegistro",params);
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'inventario/getaccionhist',params,{ headers : headers });
    }

    getArticuloCodHist(codigo): Observable<any>{

      let json = JSON.stringify(codigo);
      let params = 'json_='+json
  
      console.log("linea 67 SRegistro",params);
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'inventario/getarticulocodhist',params,{ headers : headers });
    }

    getArticuloCodAct(codigo): Observable<any>{

      let json = JSON.stringify(codigo);
      let params = 'json_='+json
  
      console.log("linea 67 SRegistro",params);
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'inventario/getarticulocodact',params,{ headers : headers });
    }

    getArticuloCodMant(codigo): Observable<any>{

      let json = JSON.stringify(codigo);
      let params = 'json_='+json
  
      console.log("linea 67 SRegistro",params);
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'inventario/getarticulocodmant',params,{ headers : headers });
    }

}
