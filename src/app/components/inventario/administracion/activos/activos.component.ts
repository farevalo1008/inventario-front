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
// import { Users } from '../../../../models/users';
// import { UsersService } from '../../../../services/users.service';
var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-tipo-inventario',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css'],
  providers: [RegistroartService]
})
export class ActivosComponent implements OnInit {
  public articulos: Array<any>;
  public ListaArticulos:Array<any>;
  public articulo: Articulo;
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
  public showDelete:boolean=false;
  public showMante:boolean=false;
  public showActualizar:boolean=false;
  public showVacio:boolean = false;
  public showManteError:boolean = false;
  public showDeleteError:boolean = false;
  public showManteOtro:boolean = false;
  public showInventario:boolean;
  public EnvioMante:boolean;
  public DeleteArt:boolean;
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
  public uso;
  public ultimoUso:number;
  public ultimoDep:number;
  public NroAsignados:number;
  public total:number;
  public totalFinal:number;
  public cantidad:number;
  



  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private  _registroartService: RegistroartService,
    public _listaservice : ListasService,
    public _asignacionService: AsignacionService
  ) { 
    this.actualizado = new Actualizado('','','','',null,'',null,null,null);
    
  }

  pageActual:number = 1;

  ngOnInit() {

   this.EnvioMante = true;
   this.DeleteArt = true;
  

    this._registroartService.getArticulo().subscribe(
        response =>  {
          if(response.status == 'success'){
            this.ListaArticulos = response.data;  
            this.showInventario = true;
            this.totalFinal = this.ListaArticulos.length;
            this.total = this.ListaArticulos.length;
            
            console.log("ARTICULOS ",this.ListaArticulos);
            console.log("TOTAL ",this.total);
          }
        },
        error => {}
    );

    this._listaservice.getClasificacion().subscribe(
      response => {
        if(response.status == 'success'){
          this.clasificacion = response.data;
        }
      },error => {});

    this._registroartService.getListaMante().subscribe(
      response => {
        if(response.status == 'success'){
          this.ListaMante = response.data;
          this.articulos = null;
          this.articulos = new Array();
          this.ultimo = this.ListaArticulos.length;
  
          for(var i = 0; i < this.ListaMante.length; i++){
            for(var j = 0; j < this.ListaArticulos.length; j++){
              if(this.ListaMante[i].id_articulo == this.ListaArticulos[j].id_articulo){
  
                this.delete = this.ListaArticulos[j];
                this.ListaArticulos[j] = this.ListaArticulos[this.ultimo-1];
                this.ListaArticulos[this.ultimo-1] = this.delete;
                this.ListaArticulos.pop();
                this.ultimo = this.ListaArticulos.length;
              }
            }
          }
          this.articulos = this.ListaArticulos;
          this.total = this.ListaArticulos.length;
          this.showInventario = true;
          this.NroMante = this.ListaMante.length;
        }else{
          this.articulos = this.ListaArticulos;
          this.NroMante = 0;
        }
      },
    );

    this._listaservice.getArticuloUso().subscribe(
      response => { this.uso = response.data; 
      console.log("ARTICULOS YA ASIGNADOS",this.uso);
     
      this.ultimoUso = null;
      this.ultimoUso = this.ListaArticulos.length;
      console.log('linea 137 ACTCOMP', this.ultimoUso);
      console.log('linea 138 ACTCOMP',this.uso);
      for(var i = 0; i < this.uso.length; i++){
        for(var j = 0; j < this.ListaArticulos.length; j++){
          if(this.uso[i].id_articulo == this.ListaArticulos[j].id_articulo){
            this.ultimoUso = this.ultimoUso - 1;
            
          }
        }
      }
    },
      error => { this.uso = error.data; }
    );

    this._listaservice.getArticuloDep().subscribe(
      response => { this.uso = response.data;
        console.log("ARTICULOS YA ASIGNADOS",this.uso); 
    for(var i = 0; i < this.uso.length; i++){
      for(var j = 0; j < this.ListaArticulos.length; j++){
        if(this.uso[i].id_articulo == this.ListaArticulos[j].id_articulo){
          this.ultimoUso = this.ultimoUso - 1;
        }
      }
    }
    this.NroArticulos = this.ultimoUso;
    this.NroAsignados = this.total - this.ultimoUso;
    console.log("ARTICULOS YA ASIGNADOS",this.total);
      },
      error => { this.uso = error.data; }
    );
  }


  visualizar(id_articulo){
    this.showDelete = false;
    this.showMante = false;
    this.showActualizar = false;
    this.showManteOtro = false;
    this.var = id_articulo;
    console.log("LINEA 40 ",id_articulo);
    this._registroartService.getDetalles(id_articulo).subscribe(
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


  actualizar(form){
      console.log("LINEA 71",this.articulo);
      this._registroartService.updateArticulo(this.articulo).subscribe(
        response => {
          if(response.status == 'success'){
            this.articulo = response.articulo;
            this.showActualizar = true
           
          
            console.log("LINEA 79",this.articulo);
           
          }else{
            console.log("ERROR NO EXISTE ESE ID");
          }
        },
        error => {
          console.log(<any>error);
        }
      );

      $('#exampleModal').modal("hide");
      
  }


  capturaTipo(){

    this.ultimoUso = null;
    this.ultimoDep = null;
    this.NroAsignados = null;
    this.showVacio = false;
    this.articulos = new Array();
    this.id_tipo_articulo = null;
    this.objeto = null;
    this.showDelete = false;
    this.showMante = false;
    this.showActualizar = false;
    this.showManteError = false;
    this.showDeleteError = false;
    this.showManteOtro = false;
    this.NroArticulos = 0;
    this.NroMante = 0;
    console.log("LINEA 122",this.getclasificacion);
    
    this._registroartService.getArticuloClas(this.getclasificacion).subscribe(
      response =>  {
        if(response.status == 'success'){
          this.ListaArticulos = response.data;
          this.total = this.ListaArticulos.length;
          this.totalFinal = this.ListaArticulos.length;
        }

        this._registroartService.getListaMante().subscribe(
          response => {
        if(response.status == 'success'){
              this.ListaMante = response.data;
    
        this.ultimo = this.ListaArticulos.length;
        console.log('linea 189 ACTCOMP', this.ultimo);
        
        for(var i = 0; i < this.ListaMante.length; i++){
          for(var j = 0; j < this.ListaArticulos.length; j++){
            if(this.ListaMante[i].id_articulo == this.ListaArticulos[j].id_articulo){

              this.delete = this.ListaArticulos[j];
              this.ListaArticulos[j] = this.ListaArticulos[this.ultimo-1];
              this.ListaArticulos[this.ultimo-1] = this.delete;
              this.ListaArticulos.pop();
              this.ultimo = this.ListaArticulos.length;
            }
          }
        }
        this.articulos = this.ListaArticulos;
        this.showInventario = true;
        this.NroArticulos = this.ListaArticulos.length;
        this.total = this.ListaArticulos.length;
        if(this.NroArticulos == 0){
          this.showVacio = true;
          this.showInventario = false;
        }


        this._registroartService.getListaManteEspe().subscribe(
          response =>  {
            if(response.status == 'success'){
              this.ListaMante = response.data;
              for(var i = 0; i < this.ListaMante.length; i++){
                if(this.ListaMante[i].clasificacion == this.getclasificacion.id_clas_art){
                  this.NroMante++;
                }
              }
            }
          },
          error => {
            console.log('linea 27 ACTCOMP', error);
          });
      }else{
        if(response.status == 'error'){
          this.articulos = this.ListaArticulos;
          this.NroArticulos = this.ListaArticulos.length;
          this.NroMante = 0;
        }
      }
      }
      );


      this._listaservice.getArticuloUso().subscribe(
        response => { this.uso = response.data; 
        console.log("ARTICULOS YA ASIGNADOS",this.uso);
      
        this.ultimoUso = this.ListaArticulos.length;
        console.log('linea 325 ACTCOMP', this.ultimoUso);
        console.log('linea 326 ACTCOMP',this.uso);
        for(var i = 0; i < this.uso.length; i++){
          for(var j = 0; j < this.ListaArticulos.length; j++){
            if(this.uso[i].id_articulo == this.ListaArticulos[j].id_articulo){
              this.ultimoUso  = this.ultimoUso - 1;
              
            }
          }
        }
        console.log('linea 341 ACTCOMP', this.ultimoUso);
        console.log('linea 341 ACTCOMP', this.articulos);
      },
        error => { this.uso = error.data; }
      );
  
      this._listaservice.getArticuloDep().subscribe(
        response => { this.uso = response.data;
          console.log("ARTICULOS YA ASIGNADOS",this.uso); 

      for(var i = 0; i < this.uso.length; i++){
        for(var j = 0; j < this.ListaArticulos.length; j++){
          if(this.uso[i].id_articulo == this.ListaArticulos[j].id_articulo){
            this.ultimoUso  = this.ultimoUso - 1;
          }
        }
      }
      this.NroArticulos = this.ultimoUso;
      this.NroAsignados = this.total - this.ultimoUso;
      console.log('linea 366 ACTCOMP', this.ultimoUso);
        },
        error => { this.uso = error.data; }
  
        
      );




    }
  );

  if(this.getclasificacion.id_clas_art == 0){
    this.ngOnInit();
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
    this.showDeleteError = false;
    this.ultimoUso = null;
    this.ultimoDep = null;
    this.NroAsignados = null;
    this.showVacio = false;
    this.NroArticulos = 0;
    this.NroMante = 0;
    this.objeto = null;
    this.articulos = new Array();
    
    this.tipo = new Tipoarticulo(null,null,null,null);
    this.tipo = new Tipoarticulo(this.TipoModel.id_tipo_articulo,null,null,null);

    this.getclasificacion.id_tipo_articulo = this.tipo.id_tipo_articulo;
    this._registroartService.getArticuloTipo(this.getclasificacion).subscribe(
      response =>  {
        if(response.status == 'success'){
          this.ListaArticulos = response.data;
          this.totalFinal = this.ListaArticulos.length;
        }

        this._registroartService.getListaMante().subscribe(
          response => {
        if(response.status == 'success'){
              this.ListaMante = response.data;

        this.ultimo = this.ListaArticulos.length;
        console.log('linea 277 ACTCOMP', this.ultimo);
        for(var i = 0; i < this.ListaMante.length; i++){
          for(var j = 0; j < this.ListaArticulos.length; j++){
            if(this.ListaMante[i].id_articulo == this.ListaArticulos[j].id_articulo){

              this.delete = this.ListaArticulos[j];
              this.ListaArticulos[j] = this.ListaArticulos[this.ultimo-1];
              this.ListaArticulos[this.ultimo-1] = this.delete;
              this.ListaArticulos.pop();
              this.ultimo = this.ListaArticulos.length;
            }
          }
        }
        this.articulos = this.ListaArticulos;
        this.showInventario = true;
        this.NroArticulos = this.ListaArticulos.length;

        if(this.NroArticulos == 0){
          this.showVacio = true;
          this.showInventario = false;
        }


       
        this._registroartService.getListaManteEspe().subscribe(
          response =>  {
            if(response.status == 'success'){
              this.ListaMante = response.data;
              for(var i = 0; i < this.ListaMante.length; i++){
                if(this.ListaMante[i].tipo_articulo == this.getclasificacion.id_tipo_articulo){
                  this.NroMante++;
                }
              }
            }
          },
          error => {
            console.log('linea 27 ACTCOMP', error);
          });
        console.log('linea 291 ACTCOMP', this.articulos);

      }else{
        if(response.status == 'error'){
          this.articulos = this.ListaArticulos;
          this.NroArticulos = this.ListaArticulos.length;
          this.NroMante = 0;
        }
      }

    });





    this._listaservice.getArticuloUso().subscribe(
      response => { this.uso = response.data; 
      console.log("ARTICULOS YA ASIGNADOS LINEA 513",this.uso);
    
      this.ultimoUso = this.ListaArticulos.length;
      this.cantidad = this.ListaArticulos.length;
      console.log('linea 516 ACTCOMP', this.ultimoUso);
      console.log('linea 517 ACTCOMP',this.uso);
      console.log('linea 518 ACTCOMP',this.getclasificacion);
      
      for(var i = 0; i < this.uso.length; i++){
      if(this.uso[i].tipo_articulo == this.getclasificacion.id_tipo_articulo){
            this.ultimoUso  = this.ultimoUso - 1;
          }
      }
      console.log('linea 523 ACTCOMP', this.ultimoUso);
    },
      error => { this.uso = error.data; }
    );

    this._listaservice.getArticuloDep().subscribe(
      response => { this.uso = response.data;
        console.log("ARTICULOS YA ASIGNADOS",this.uso); 
        
        for(var i = 0; i < this.uso.length; i++){
        if(this.uso[i].tipo_articulo == this.getclasificacion.id_tipo_articulo){
              this.ultimoUso  = this.ultimoUso - 1;
            }
        }
        console.log('linea 523 ACTCOMP', this.ultimoUso);
 

    this.NroArticulos = this.ultimoUso;
    this.NroAsignados = this.cantidad - this.ultimoUso;
    
      },
      error => { this.uso = error.data; }

    );
      





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
    this.ultimoUso = null;
    this.ultimoDep = null;
    this.NroAsignados = null;
    this.showVacio = false;
    this.NroArticulos = 0;
    this.NroMante = 0;
    this.articulos = new Array();
    this.getclasificacion.marca = this.TipoModel.marca;

    this.getclasificacion.id_tipo_articulo = this.tipo.id_tipo_articulo;
    this._registroartService.getArticuloTipoMarca(this.getclasificacion).subscribe(
      response =>  {
        if(response.status == 'success'){
          this.ListaArticulos = response.data;
          this.totalFinal = this.ListaArticulos.length;
        }

        this._registroartService.getListaMante().subscribe(
          response => {
        if(response.status == 'success'){
              this.ListaMante = response.data;

        this.ultimo = this.ListaArticulos.length;
        console.log('linea 336 ACTCOMP', this.ultimo);
        for(var i = 0; i < this.ListaMante.length; i++){
          for(var j = 0; j < this.ListaArticulos.length; j++){
            if(this.ListaMante[i].id_articulo == this.ListaArticulos[j].id_articulo){

              this.delete = this.ListaArticulos[j];
              this.ListaArticulos[j] = this.ListaArticulos[this.ultimo-1];
              this.ListaArticulos[this.ultimo-1] = this.delete;
              this.ListaArticulos.pop();
              this.ultimo = this.ListaArticulos.length;
            }
          }
        }
        this.articulos = this.ListaArticulos;
        this.showInventario = true;
        this.NroArticulos = this.ListaArticulos.length;
        if(this.NroArticulos == 0){
          this.showVacio = true;
          this.showInventario = false;
        }


        this._registroartService.getListaManteEspe().subscribe(
          response =>  {
            if(response.status == 'success'){
              this.ListaMante = response.data;
              for(var i = 0; i < this.ListaMante.length; i++){
                if(this.ListaMante[i].tipo_articulo == this.getclasificacion.id_tipo_articulo){
                  if(this.ListaMante[i].marca == this.getclasificacion.marca){
                  this.NroMante++;
                  }
                }
              }
            }
          },
          error => {
            console.log('linea 27 ACTCOMP', error);
          });

        


          this._listaservice.getArticuloUso().subscribe(
            response => { this.uso = response.data; 
            console.log("ARTICULOS YA ASIGNADOS LINEA 513",this.uso);
          
            this.ultimoUso = this.ListaArticulos.length;
            this.cantidad = this.ListaArticulos.length;
            console.log('linea 516 ACTCOMP', this.ultimoUso);
            console.log('linea 517 ACTCOMP',this.uso);
            console.log('linea 518 ACTCOMP',this.getclasificacion);
            
            for(var i = 0; i < this.uso.length; i++){
            if(this.uso[i].marca == this.getclasificacion.marca){
                  this.ultimoUso  = this.ultimoUso - 1;
                }
            }
            console.log('linea 523 ACTCOMP', this.ultimoUso);
          },
            error => { this.uso = error.data; }
          );
      
          this._listaservice.getArticuloDep().subscribe(
            response => { this.uso = response.data;
              console.log("ARTICULOS YA ASIGNADOS",this.uso); 
              
              for(var i = 0; i < this.uso.length; i++){
              if(this.uso[i].marca == this.getclasificacion.marca){
                    this.ultimoUso  = this.ultimoUso - 1;
                  }
              }
              console.log('linea 523 ACTCOMP', this.ultimoUso);
       
      
          this.NroArticulos = this.ultimoUso;
          this.NroAsignados = this.cantidad - this.ultimoUso;
          
            },
            error => { this.uso = error.data; }
      
          );









        console.log('linea 350 ACTCOMP', this.articulos);

       
      }else{
        if(response.status == 'error'){
          this.articulos = this.ListaArticulos;
          this.NroArticulos = this.ListaArticulos.length;
          this.NroMante = 0;
        }
      }
      });
  });

  }



Mantenimiento(){
  this.ManteModel.id_articulo = this.var;
  
  this._listaservice.getArticuloUso().subscribe(
    response => { this.uso = response.data; 
   
    for(var i = 0; i < this.uso.length; i++){
    if(this.uso[i].id_articulo == this.ManteModel.id_articulo){ 
          this.EnvioMante = false;
          this.showManteError = true;
        }
    }

    this._listaservice.getArticuloDep().subscribe(
      response => { this.uso = response.data;
        for(var i = 0; i < this.uso.length; i++){
        if(this.uso[i].id_articulo == this.ManteModel.id_articulo){
             
              this.EnvioMante = false;
              this.showManteError = true;
             
            }
        }
        if(this.EnvioMante == true){
          this._registroartService.enviarMante(this.ManteModel).subscribe(
            response =>  {
              if(response.status == 'success'){
                this.message = response.message;
                this.showMante = true;
                this.ngOnInit();
                this.ngOnInit();
              }
              console.log('linea 285', this.message);
            },
            error => {});
          }
      },
      error => { this.uso = error.data; }
    );
  },
    error => { this.uso = error.data; }
  );

$('#mantenimiento').modal("hide");



}


Borrar(){
  this.DeleteArt = true;
  console.log("LINEA 423",this.var);
  
  console.log("LINEA 424",this.ManteModel);

  this._listaservice.getArticuloUso().subscribe(
    response => { this.uso = response.data; 
      console.log("LINEA 742",this.uso);
      this.ManteModel.id_articulo = this.var;
    for(var i = 0; i < this.uso.length; i++){
    if(this.uso[i].id_articulo == this.ManteModel.id_articulo){ 
          this.DeleteArt = false;
          this.showDeleteError = true;  
        }
    }
    console.log(this.DeleteArt);
  },

  );

  this._listaservice.getArticuloDep().subscribe(
    response => { this.uso = response.data;
      console.log("LINEA 753",this.uso);
      this.ManteModel.id_articulo = this.var;
      for(var i = 0; i < this.uso.length; i++){
      if(this.uso[i].id_articulo == this.ManteModel.id_articulo){
            this.DeleteArt = false;
            this.showDeleteError = true;
          }
      }
      console.log(this.DeleteArt);
      if(this.DeleteArt == true){
        this._registroartService.borrarArticulo(this.ManteModel).subscribe(
          response => {
            if(response.status == 'success'){
              this.message = response.message;
              this.showDelete = true;
              
              console.log("LINEA 46",this.message);
              this.ngOnInit();
              
             
            }else{
              console.log("ERROR NO EXISTE ESE ID");
            }
          },
          error => {
            console.log(<any>error);
          }
        );
        }
    },
    error => { this.uso = error.data; }
  );

  $('#exampleModalCenter').modal("hide");
  this.ManteModel= new Mantenimiento(null,null,null,null,null,null,null,null,null,null,null);
 
}

aceptar(){
  this.showDeleteError = false;
  this.showManteError = false;
  this.showDelete = false;
  this.showMante = false;
  this.showActualizar = false;
  this.showManteOtro = false;
}


Busquedas(){
  console.log('linea 76 ACTCOMP', this.articulos);
  console.log(this.codigo);
  

  this.articulos = new Array();
  
  this._registroartService.getArticuloCodAct(this.codigo).subscribe(
    response =>  {
      if(response.status == 'success'){
        this.ListaArticulos = response.data;
        
      }
      this.articulos = this.ListaArticulos;
      this.showManteOtro = false;

      for(var i = 0; i < this.ListaMante.length; i++){
          if(this.ListaMante[i].id_articulo == this.articulos[0].id_articulo){
            this.ListaArticulos[0] = 0;
            this.showManteOtro = true;
          }
      }

  });
}








  
}
