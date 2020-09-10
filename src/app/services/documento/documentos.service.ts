import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GLOBAL } from '../global';
@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  public url: string;
  constructor( 
    public _http : HttpClient ,
    private router: Router
){ 
    this.url = GLOBAL.url;
}



  
guardar(documentos) : Observable<any> {
 
  let json = JSON.stringify(documentos);
  let params = 'json='+json;   
  console.log(documentos,"aqui");
  let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  console.log(params);
 return this._http.post(this.url+'documentos/documento' , params, { headers : headers} );
}

  


public descargarArchivo(file): Observable<Blob> {   
  //const options = { responseType: 'blob' }; there is no use of this
      let uri = this.url+'documentos/download/'+ file;
      // this.http refers to HttpClient. Note here that you cannot use the generic get<Blob> as it does not compile: instead you "choose" the appropriate API in this way.
      return this._http.get(uri, { responseType: 'blob' });
  }
getdocumentointerno(): Observable<any>{
  return this._http.get(this.url+'documentos/getdocumentointerno');
}
getdocumentoexterno(): Observable<any>{
  return this._http.get(this.url+'documentos/getdocumentoexterno');
}

buscarDocumentointerno(nombre): Observable<any>{
  let json = JSON.stringify(nombre);
  let params = 'json='+json;
  console.log('linea 40',nombre);
  let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  return this._http.post(this.url+'documentos/getdocumentointerno', params , { headers : headers });
}

buscarDocumentoexterno(nombre): Observable<any>{
  let json = JSON.stringify(nombre);
  let params = 'json='+json;
  console.log('linea 48',nombre);
  let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  return this._http.post(this.url+'documentos/getdocumentoexterno', params , { headers : headers });
}

 

Update(actualizar, id_documento): Observable<any>{
  let json = JSON.stringify(actualizar, id_documento);
  let params = 'json='+json;
  console.log(params);
  let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
   return this._http.put(this.url+'documentos/update/' + id_documento , params , { headers : headers });
}




}
