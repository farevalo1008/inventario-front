import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Articulo } from '../../../../models/inventario/articulo';
import { Actualizado } from '../../../../models/inventario/actualizado';
import { Mantenimiento } from '../../../../models/inventario/mantenimiento';
import { RegistroartService } from '../../../../services/inventario/registroart.service';
import { Tipoarticulo } from '../../../../models/inventario/tipoarticulo';
import { ListasService } from '../../../../services/listas.service';
import { AsignacionService } from '../../../../services/inventario/asignacion.service';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { Asignacion } from 'src/app/models/inventario/asignacion';
var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  public articulos: Array<any>;
  public ListaArticulos:Array<any>;
  public articulo: Articulo;
  public codigo =  new Asignacion(null,null,null,null,null);
  public actualizado: Actualizado;
  public getclasificacion = new Articulo(null,null,null,'','','','',null,'',null,null,null);
  public TipoModel= new Tipoarticulo(null,null,null,null);
  public ManteModel= new Mantenimiento(null,null,null,null,null,null,null,null,null,null,null);
  public id_tipo_articulo: Array<any>;
  public clasificacion: Array<any>;
  public valor;
  public verselect;
  public valor2;
  public verselect2;
  public tipo: Tipoarticulo;
  public tipodato: Tipoarticulo;
  public objeto: Array<any>;
  public show:boolean=false;
  public showDelete:boolean=false;
  public showMante:boolean=false;
  public showActualizar:boolean=false;
  public showVacio:boolean = false;
  public showInventario:boolean;
  public message;
  public status;
  public valorclas;
  public articulosTipo:Array<any>;
  public var;
  public ListaMante: Array<any>;
  public delete: Array<any>;
  public ultimo;
  public NroArticulos:number;
  public NroMante:number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private  _registroartService: RegistroartService,
    public _listaservice : ListasService,
    public _asignacionService: AsignacionService
  ) { }

  pageActual:number = 1; 

  ngOnInit() {
    this._registroartService.getHistorial().subscribe(
      response =>  {
        if(response.status == 'success'){
          this.articulos  = response.data;
          
          
        }
        
        console.log('linea 76 ACTCOMP', this.articulos);
      },
      error => {
        console.log('linea 27 ACTCOMP', error);
      }

  );

  this._listaservice.getClasificacion().subscribe(
    response => {
      if(response.status == 'success'){
        this.clasificacion = response.data;
      }
      console.log('linea 54 ACTCOMP', this.clasificacion);
    },
    error => {
      console.log('linea 57 ACTCOMP', error);
    }
  );

  }


  visualizar(id_hist){
    this.var = id_hist;
    console.log("LINEA 40 ",id_hist);
    this._registroartService.getDetallesHistorial(id_hist).subscribe(
      response => {
        if(response.status == 'success'){
          this.articulo = response.articulo;
          
          console.log("LINEA 46",this.articulo);
         
        }else{
          console.log("ERROR NO EXISTE ESE ID");
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }



  capturaTipo(){
    this.articulos = new Array();
    this.id_tipo_articulo = null;
    this.objeto = null;
   
    console.log("LINEA 122",this.getclasificacion);
    
    this._registroartService.getArticuloClasHist(this.getclasificacion).subscribe(
      response =>  {
        if(response.status == 'success'){
          this.ListaArticulos = response.data;
        }
        this.articulos = this.ListaArticulos;
        console.log("LINEA 129",this.ListaArticulos);
    }
  );

  if(this.getclasificacion.id_clas_art == 0){
    this.ngOnInit();
  }

    if(this.getclasificacion.id_clas_art == 1){
      this._listaservice.getArticuloCompu().subscribe(
        response => {
          if(response.status == 'success'){
            this.id_tipo_articulo = response.data;
          }
        },
        error => {
          console.log(error);
        }
      );
    }
      if(this.getclasificacion.id_clas_art == 2){
        this._listaservice.getArticuloElec().subscribe(
          response => {
            if(response.status == 'success'){
              this.id_tipo_articulo = response.data;
            }
          },
          error => {
            console.log(error);
          }
        );
      }

      if(this.getclasificacion.id_clas_art == 3){
        this._listaservice.getArticuloMobi().subscribe(
          response => {
            if(response.status == 'success'){
              this.id_tipo_articulo = response.data;
            }
          },
          error => {
            console.log(error);
          }
        );
      }
  
    this.valor = (<HTMLInputElement>document.getElementById('sel_clasificacion')).value
    if(this.valor!=null){
      this.verselect = this.getclasificacion.id_clas_art;
    }
    
  }

  capturaMarca(){
    this.objeto = null;
    this.articulos = new Array();
    
    this.tipo = new Tipoarticulo(null,null,null,null);
    this.tipo = new Tipoarticulo(this.TipoModel.id_tipo_articulo,null,null,null);

    this.getclasificacion.id_tipo_articulo = this.tipo.id_tipo_articulo;
    this._registroartService.getArticuloTipoHist(this.getclasificacion).subscribe(
      response =>  {
        if(response.status == 'success'){
          this.ListaArticulos = response.data;
        }
        this.articulos = this.ListaArticulos;
   }
  );
  }


  Busqueda(){
    console.log('linea 76 ACTCOMP', this.articulos);
    console.log(this.codigo);
    

    this.articulos = new Array();
    
    this._registroartService.getArticuloCodHist(this.codigo).subscribe(
      response =>  {
        if(response.status == 'success'){
          this.ListaArticulos = response.data;
          
        }
        this.articulos = this.ListaArticulos;
        console.log(this.articulos);
    });
  }






}
