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
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css'],
  providers: [RegistroartService]
})
export class MantenimientoComponent implements OnInit {
  public articulos: Array<any>;
  public ListaArticulos:Array<any>;
  public articulo: Array<any>;
  public actualizado: Actualizado;
  public codigo =  new Asignacion(null,null,null,null,null);
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
  public showMenu:boolean=false;
  public showMensaje:boolean=false;
  public showActualizar:boolean=false;
  public showDelete:boolean=false;
  public showMante:boolean=false;
  public showManteOtro:boolean = false;
  public message;
  public status;
  public valorclas;
  public articulosTipo:Array<any>;
  public var;
  public variable;
  public ListaMante: Array<any>;
  public delete: Array<any>;
  public ultimo;
  public envio: Articulo;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private  _registroartService: RegistroartService,
    public _listaservice : ListasService,
    public _asignacionService: AsignacionService
  ) {
    this.actualizado = new Actualizado('','','','',null,'',null,null,null);
    this.envio = new Articulo (null,null,null,null,null,null,null,null,null,null,null,null);
   }

   pageActual:number = 1;

  ngOnInit() {
    this.show = false;
    //ESTO ES PARA TOMAR LOS DATOS DE LOS ACTIVOS QUE ESTAN EN MANTENIMIENTO
    this._registroartService.getArticuloModif().subscribe(
      response =>  {
        if(response.status == 'success'){
          this.ListaArticulos = response.data;
        }
        console.log('linea 35 ACTCOMP', this.ListaArticulos);
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

    //AQUI ESTAN TODOS LOS ACTIVOS QUUE ESTAN EN MANTENIMIENTO
    this._registroartService.getListaMante().subscribe(
      response => {
        if(response.status == 'success'){
          this.ListaMante = response.data;
          this.showMenu = true;
          this.showMensaje = false
          console.log('linea 93 ACTCOMP', this.ListaMante);
          this.articulos = null;
          this.articulos = new Array();
  
          for(var i = 0; i < this.ListaMante.length; i++){
            for(var j = 0; j < this.ListaArticulos.length; j++){
              if(this.ListaMante[i].id_articulo == this.ListaArticulos[j].id_articulo){
  
                this.articulos.push(this.ListaArticulos[j]);
  
              }
            }
          }
          console.log('linea 107 ACTCOMP', this.articulos);
        }else{
          if(response.status == 'error'){
            this.showMenu = false;
            this.showMensaje = true
            this.message = response.message;
            console.log('linea 100 ACTCOMP', response.message);
          }
        }     
      },
      

    );
  }

visualizar(id_articulo){
    this.showActualizar = false;
    this.showDelete = false;
    this.showActualizar = false;
    this.showMante = false;
    this.showManteOtro = false;
    this.var = id_articulo;
    this.variable = id_articulo;
    
        console.log("LINEA 40 ",id_articulo);
        this._registroartService.getDetalles(id_articulo).subscribe(
          response => {
            if(response.status == 'success'){
              
              this.var = response.articulo
              console.log("LINEA 122",this.var);
              this.ManteModel.id_articulo = this.var[0].id_articulo;
              this.ManteModel.cod_soaint = this.var[0].cod_soaint;
              this.ManteModel.clasificacion = this.var[0].clasificacion;
              this.ManteModel.tipo_articulo = this.var[0].tipo_articulo;
              this.ManteModel.marca = this.var[0].marca;
              this.ManteModel.modelo = this.var[0].modelo;
              this.ManteModel.costo = this.var[0].costo;
              this.ManteModel.serial = this.var[0].serial;
              this.ManteModel.status = this.var[0].status;
              this.ManteModel.caracteristicas = this.var[0].caracteristicas;

              for(var i = 0; i < this.ListaMante.length; i++){
                if(this.ManteModel.id_articulo == this.ListaMante[i].id_articulo){
                  this.ManteModel.observaciones = this.ListaMante[i].observaciones;
                }
              }
              console.log("LINEA 138",this.ManteModel);
              
              this.articulo =  new Array(this.ManteModel) 

             
              console.log("LINEA 46",this.articulo);
             
             
            }else{
              console.log("ERROR NO EXISTE ESE ID");
            }
            this.ManteModel= new Mantenimiento(null,null,null,null,null,null,null,null,null,null,null);
          },
          error => {
            console.log(<any>error);
          }
        );
}
    
    
actualizar(form){
    
          console.log("LINEA 71",this.articulo);
    
          this._registroartService.updateArticuloAveriado(this.articulo).subscribe(
            response => {
              if(response.status == 'success'){
                this.articulo = response.articulo;       
                this.showActualizar = true;
              
              
                console.log("LINEA 173",this.articulo);
               
              }else{
                console.log("ERROR NO EXISTE ESE ID");
              }
            },
            error => {
              console.log(<any>error);
            }
          );
    
          $('#exampleModal').modal("hide");
          this.ngOnInit();
          this.ngOnInit();
}
    
capturaTipo(){
        this.showActualizar = false;
        this.showDelete = false;
        this.showMante = false;
        this.showManteOtro = false;
        this.articulos = new Array();
        this.id_tipo_articulo = null;
        this.objeto = null;
    console.log("LINEA 122",this.getclasificacion);

    
    this._registroartService.getArticuloClas(this.getclasificacion).subscribe(
      response =>  {
        if(response.status == 'success'){
          this.ListaArticulos = response.data;
        }

        this.ultimo = this.ListaArticulos.length;
        console.log('linea 189 ACTCOMP', this.ultimo);
        for(var i = 0; i < this.ListaMante.length; i++){
          for(var j = 0; j < this.ListaArticulos.length; j++){
            if(this.ListaMante[i].id_articulo == this.ListaArticulos[j].id_articulo){

              this.articulos.push(this.ListaArticulos[j]);
              
            }
          }
        }
        console.log('linea 187 ACTCOMP', this.articulos);

      },
      error => {
        console.log('linea 147 ACTCOMP', error);
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
        this._registroartService.getArticuloTipo(this.getclasificacion).subscribe(
          response =>  {
            if(response.status == 'success'){
              this.ListaArticulos = response.data;
            }
    
            this.ultimo = this.ListaArticulos.length;
            console.log('linea 277 ACTCOMP', this.ultimo);
            for(var i = 0; i < this.ListaMante.length; i++){
              for(var j = 0; j < this.ListaArticulos.length; j++){
                if(this.ListaMante[i].id_articulo == this.ListaArticulos[j].id_articulo){
    
                  this.articulos.push(this.ListaArticulos[j]);
                }
              }
            }
            console.log('linea 270 ACTCOMP', this.articulos);
    
          },
          error => {
            console.log('linea 267 ACTCOMP', error);
          }
    
      );
    
      this.tipodato = new Tipoarticulo(null,null,null,null);
      this.tipodato = new Tipoarticulo(this.TipoModel.id_tipo_articulo,null,null,null);
        this._asignacionService.compararback(this.tipodato).subscribe(
          response => {
            this.objeto = response.data;
            console.log("HOLA MUNDO",this.objeto);
            if(response.status == 'success'){
              console.log("listo");
    
            }
            if(response.status == 'error'){
                this.show = true;
                this.status = response.status;
                this.message = response.message;
              }
        }
        );
        this.valor2 = (<HTMLInputElement>document.getElementById('sel_id_tipo_articulo')).value
        if(this.valor!=null){
          this.verselect2 = this.TipoModel.id_tipo_articulo;
        } 
    
}
     
capturar(){

        this.articulos = new Array();
        this.getclasificacion.marca = this.TipoModel.marca;
    
        this.getclasificacion.id_tipo_articulo = this.tipo.id_tipo_articulo;
        this._registroartService.getArticuloTipoMarca(this.getclasificacion).subscribe(
          response => {
            if(response.status == 'success'){
              this.ListaArticulos = response.data;
            }
    
            this.ultimo = this.ListaArticulos.length;
            console.log('linea 336 ACTCOMP', this.ultimo);
            for(var i = 0; i < this.ListaMante.length; i++){
              for(var j = 0; j < this.ListaArticulos.length; j++){
                if(this.ListaMante[i].id_articulo == this.ListaArticulos[j].id_articulo){
    
                  this.articulos.push(this.ListaArticulos[j]);
                }
              }
            }
            console.log('linea 325 ACTCOMP', this.articulos);
    
           
          },
          error => {
            console.log('linea 147 ACTCOMP', error);
          }
      );
    
}


Reincorporar(){
        console.log(this.envio);
        this.envio.id_tipo_articulo = this.var[0].id_articulo;
        console.log(this.envio);

        this._registroartService.devolverMante(this.envio).subscribe(
          response =>  {
            if(response.status == 'success'){
              this.message = response.message;
              this.showMante = true;
            }
            console.log('linea 285', this.message);
          },
          error => {
            console.log('linea 288', error);
          }
      );
      
      $('#reincorporar').modal("hide");
      
      this.ngOnInit();
      this.ngOnInit();
}

Borrar(){
  console.log("LINEA 410",this.variable);
  this.ManteModel.id_articulo = this.variable;
  console.log("LINEA 412",this.ManteModel);

  this._registroartService.borrarArticulo(this.ManteModel).subscribe(
    response => {
      if(response.status == 'success'){
        this.message = response.message;
        this.showDelete = true;
        
        console.log("LINEA 422",this.message);
       
      }else{
        console.log("ERROR NO EXISTE ESE ID");
      }
    },
    error => {
      console.log(<any>error);
    }
  );

  $('#exampleModalCenter').modal("hide");

  this.ngOnInit();
  this.ManteModel= new Mantenimiento(null,null,null,null,null,null,null,null,null,null,null);
}

aceptar(){
    this.showActualizar = false;
    this.showDelete = false;
    this.showActualizar = false;
    this.showMante = false;
    this.showManteOtro = false;
}

Busquedas(){
  console.log('linea 76 ACTCOMP', this.articulos);
  console.log(this.codigo);
  

  this.articulos = new Array();
  

  this._registroartService.getArticuloCodMant(this.codigo).subscribe(
    response =>  {
      if(response.status == 'success'){
        this.ListaArticulos = response.data;
        
      }
      this.articulos = this.ListaArticulos;
      this.showManteOtro = false;
 

      for(var j = 0; j < this.articulos.length; j++){
        if(this.articulos[j].cod_soaint != this.codigo.cod_soaint){
          this.showManteOtro = true;
          
        }
      }
  });
}


}
