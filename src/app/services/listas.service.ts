import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ListasService {
  public url: string;
  public errorHttp: boolean;
  public pais: any;

  constructor( 
    public _http : HttpClient 
  
  ){ 
      this.url = GLOBAL.url;
  }

  getPais(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getpais');    
  }

  getDescripcionTrabajo(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getdescripciontrabajo');    
  }

  getGenero(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getgenero');
  }

  getRoles(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getroles');
  }

  getProfesion(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getprofesion');
  }

  getNacionalidad(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getnacionalidad');
  }

  getConocimientos(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getconocimientos');
  }

  getTipoEstudio(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipoestudio');
  }

  getTipoRequerimiento(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettiporequerimiento');
  }

  getAreaTrabajo(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getareatrabajo');
  }

  getCargos(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getcargos');
  }

  getIdiomas(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getidiomas');
  }
  

  getStatus(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'getstatus');
  }

  getTipoDepartamento(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipodepartamento');
  }

  getTipoDocumento(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipodocumento');
  }

  getTipoCliente(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipocliente');
  }

  getTipoExtension(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipoextension');
  }
  
  getTipoProcedencia(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipoprocedencia');
  }
  getTipoTurno(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipoturno');    
  }
  getTipoProyecto(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipoproyecto');    
  }
  getTipoSprint(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettiposprint');    
  }
 
  getTipoActividad(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipoactividad');    
  }
  
  getTipoUser(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
    return this._http.get(this.url+'gettipouser');    
  }
  getProyecto(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this._http.get(this.url+'getProyectoac');
    }

    getProyectoPe(id_proyecto): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.get(this.url+'getProyectoPe/'+ id_proyecto);
    }

    getProyectoPra(id_periodo): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.get(this.url+'getProyectoPra/'+ id_periodo);
    }

    getProyectouser(id_datpers): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.get(this.url+'getProyectouser/'+ id_datpers);
    }
    getTipoUserdos(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'getTipoUserdos');    
    }
    actividadrealizada(id_actividad_ejec): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'getTipoActividadRealizada/'+ id_actividad_ejec);    
    }
    actividaduser(id_datpers): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'getTipoActividadRealizadaUser/'+ id_datpers);    
    }

    getStatusArt(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'getstatusart');
    }
  
    getArticuloCompu(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'getarticulocompu');
    }
  
    getArticuloMobi(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'getarticulomobi');
    }
  
    getArticuloElec(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'getarticuloelec');
    }
  
    getMarcaComputacion(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'inventario/getmarcacomputacion');
    }
  
    getMarcaMobiliario(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'inventario/getmarcamobiliario');
    }
  
    getArticuloUso(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'inventario/getarticulouso');
    }
  
    getArticuloDep(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'inventario/getarticulodep');
    }
  
    getDepartamento(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'getdepartamento');
    }
  
    getClasificacion(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencode');
      return this._http.get(this.url+'getclasificacion');
    }

}
