import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DatosPersonales } from '../../../../../../models/datos_personales';
import { AsignacionService } from '../../../../../../services/inventario/asignacion.service';
import { ListasService } from '../../../../../../services/listas.service';
import { RegistroartService } from '../../../../../../services/inventario/registroart.service';
import { Articulo } from '../../../../../../models/inventario/articulo';
import { Tipoarticulo } from '../../../../../../models/inventario/tipoarticulo';
import { Asignacion } from '../../../../../../models/inventario/asignacion';
import { Depusuario } from '../../../../../../models/inventario/depusuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-mobi-dep',
  templateUrl: './mobi-dep.component.html',
  styleUrls: ['./mobi-dep.component.css'],
  providers: [RegistroartService]
})
export class MobiDepComponent implements OnInit {
  public departamento: Array<any>;
  public infoarticulo: any;
  public tipodato:Tipoarticulo;
  public title:string;
  public result:string;
  public status:string;
  public message: string;
  public valor;
  public show:boolean=false;
  public verselect: number;
  public vermarca:string;
  public data:Array<any>;
  public uso : Array<any>;
  public id_tipo_articulo: Array<any>;
  public id_articulo: Array<any>;
  public DniModel= new DatosPersonales(null,null,null,null);
  public AsigModel= new Asignacion(null,null,null,null,null);
  public TipoModel= new Tipoarticulo(null,null,null,null);
  public depusuario: Depusuario;
  public listaEquipo = [];
  public verEquipo = [];
  public verEquipoActual = [];
  public listaCodigo : Array<any>;
  public arrayList = new Array();
  public verificList:boolean=false;
  public showNoDisponible:boolean=false;
  public delete;
  public deleteb; 
  public deletec; 
  public deleted;
  public aux;
  public conta;
  public variable;
  public showred;
  public eliminar;
  public var;
  public showErase:boolean=false;
  public ListaMante;




  constructor(
    private http: HttpClient,
    private _route: ActivatedRoute,
    private _router: Router,
    private  _asignacionService: AsignacionService,
    public _listaservice : ListasService,
    public _registroartservice : RegistroartService,
  ) { 
    this.tipodato = new Tipoarticulo(null,null,null,null);
    this.depusuario = new Depusuario(null,null,null);
  }

  ngOnInit() {
    this._listaservice.getDepartamento().subscribe(
      response => { this.departamento = response.data;
        console.log("LINEA 64",this.departamento); } ,
      error => { this.departamento = error.data; }
      
    );

    this._listaservice.getArticuloMobi().subscribe(
      response => { this.id_tipo_articulo = response.data; } ,
      error => { this.id_tipo_articulo = error.data; }
    );
    
    this._listaservice.getMarcaMobiliario().subscribe(
      response => { this.data = response.data; },
      error => { this.data = error.data; }
    );

    this._listaservice.getArticuloDep().subscribe(
      response => { this.uso = response.data; },
      error => { this.uso = error.data; }
    );

    //TRAE LOS ARTICULOS QUE ESTAN EN MANTENIMIENTO
    this._registroartservice.getListaMante().subscribe(
      response => {this.ListaMante = response.data; 
      console.log("ARTICULOS en mante",this.ListaMante);},
      error => {this.ListaMante = error.data;},
          
        );

    console.log('compu-asig.component cargado correctamente!!');
  }

  capturaDep(){
    this.show=false;
    this.showErase = false;
    console.log("LINEA 83",this.depusuario);
    
    this._asignacionService.asignacionesOneDepa(this.depusuario).subscribe(
      response => {

      this.verEquipo  = response.data;
      if(this.verEquipo.length != 0 ){
        this.infoarticulo = response.data;
      }
      console.log("LINEA 154",this.verEquipo);

      for(var i = 0; i < this.verEquipo.length; i++){
        this.verEquipoActual.push(this.verEquipo[i]);
      }; 
      console.log("LINEA 159",this.verEquipoActual);

      if(response.status == 'success'){
        this.status = response.status;
        this.message = response.message;
      }
      if(response.status == 'error'){
        console.log("Linea de error 48 Asig-Pers",response);
          this.status = response.status;
          this.message = response.message;
        }
      } //Aqui cierra el servicio
      );

  }

  capturaMarca(){
    this.showNoDisponible = false;
    this.showErase = false;
    this.id_articulo = null;
    this.listaCodigo = null;
    this.tipodato = new Tipoarticulo(null,null,null,null);
    this.tipodato = new Tipoarticulo(this.TipoModel.id_tipo_articulo,null,null,null);
    this._asignacionService.compararback(this.tipodato).subscribe(
      response => {
        console.log(response);
        this.id_articulo = response.data;
        if(response.status == "success"){
          this.showred = false;
          this.status = response.status;
          this.message = response.message;
          
        }
        if(response.status == "error"){
            this.showred = true;
            this.status = response.status;
            this.message = response.message;
          }
    }
    );
    this.valor = (<HTMLInputElement>document.getElementById('sel_id_tipo_articulo')).value
    if(this.valor!=null){
      this.verselect = this.TipoModel.id_tipo_articulo;
    } 
  
    
  }
  
  capturar(){
    var listaCodigo = new Array();
    this.conta = 0;
    for (var i = 0; i < this.data.length; i++) {  
      if(this.data[i].marca == this.TipoModel.marca && this.data[i].id_tipo_articulo == this.TipoModel.id_tipo_articulo){
        listaCodigo.push(this.data[i]);
        this.conta++;
      }   
   };
   this.conta -- ;
   for (var i = 0; i < listaCodigo.length; i++) {   
      for (var j = 0; j < this.uso.length; j++) {   
  
        if(listaCodigo[i].id_articulo == this.uso[j].id_articulo){
          console.log("linea 177",listaCodigo[i].id_articulo);
          this.delete = listaCodigo[i];
          this.deleteb = listaCodigo[this.conta];
          listaCodigo[this.conta] = this.delete;
          listaCodigo[i] = this.deleteb;
          listaCodigo.pop();
          this.conta -- ;
      }
    }
  }

  for (var i = 0; i < listaCodigo.length; i++) {   
    for (var j = 0; j < this.ListaMante.length; j++) {   
      
        if(listaCodigo[i].id_articulo == this.ListaMante[j].id_articulo){
          console.log("linea 296",listaCodigo[i].id_articulo);
          this.delete = listaCodigo[i];
          this.deleteb = listaCodigo[this.conta];
          listaCodigo[this.conta] = this.delete;
          listaCodigo[i] = this.deleteb;
          listaCodigo.pop();
          this.conta -- ;
        }
    }
  }
  this.listaCodigo = listaCodigo;
  if(this.listaCodigo.length == 0){
    this.showNoDisponible = true;
    console.log("No hay disponibles");
  }
  this.valor = (<HTMLInputElement>document.getElementById('marca')).value
  if(this.valor!=null){
    this.vermarca = this.TipoModel.marca;
  } 
  }
  
  SetDatos(){
    for (var i = 0; i < this.id_tipo_articulo.length; i++) { 
      if(this.id_tipo_articulo[i].id_tipo_articulo == this.TipoModel.id_tipo_articulo){
        this.AsigModel.equipo = this.id_tipo_articulo[i].descripcion;
      }
    }
  
    for (var i = 0; i < this.listaCodigo.length; i++) {   
      if(this.listaCodigo[i].id_articulo == this.TipoModel.id_articulo){
        this.AsigModel.marca = this.listaCodigo[i].marca;
        this.AsigModel.id_articulo = this.listaCodigo[i].id_articulo;
        this.AsigModel.cod_soaint = this.listaCodigo[i].cod_soaint;
        this.depusuario.id_articulo = this.listaCodigo[i].id_articulo;
      }   
   }
  
  this.AsigModel.caracteristicas = this.TipoModel.caracteristica;
  this.infoarticulo = this.AsigModel;
  console.log("LINEA 207",this.AsigModel);
  this.depusuario.motivo = this.TipoModel.caracteristica;
  
  var array = new Array();
  array["id_articulo"] = this.AsigModel.id_articulo;
  array["equipo"] = this.AsigModel.equipo;
  array["marca"] = this.AsigModel.marca;
  array["caracteristicas"] = this.AsigModel.caracteristicas;
  array["cod_soaint"] = this.AsigModel.cod_soaint;
  
  
  if(this.arrayList.length != 0){
    this.arrayList.forEach(element => {
      if(this.AsigModel.id_articulo == element["id_articulo"]){
        this.verificList = true;
      }
    });
  }
  
  if(this.verificList != true){
    this.verEquipo.push(array);
    this.verEquipoActual.push(this.depusuario);
    this.listaEquipo.push(JSON.stringify(this.depusuario));
    this.arrayList.push(array); 
    this.verificList = false;
  }else{
    this.verificList = false;
  }
  
console.log("LINEA 309",this.arrayList);
console.log("LINEA 310",this.verEquipo);
console.log("LINEA 311",this.depusuario);
console.log("LINEA 312",this.verEquipoActual);
console.log("LINEA 313",this.listaEquipo);
console.log("LINEA 314",this.verificList);

this.id_tipo_articulo = null;
this.id_articulo = null;
this.listaCodigo = null;
this.tipodato = new Tipoarticulo(null,'','','');
this.ngOnInit();
  
  }

visualizar(indice){
    this.var = indice;
}
  
BorrarAsignacion(){
    
    for(var i = 0; i < this.verEquipo.length; i++){
  
        if(this.var == i){
  
          this.delete = this.verEquipo[i];
          this.deleteb = this.listaEquipo[i];
          this.deletec = this.arrayList[i];
          this.deleted = this.verEquipoActual[i];
          this.variable = i
          
        }
        this.conta = i;
    }
  
    this.verEquipo[this.variable] = this.verEquipo[this.conta];
    this.verEquipo[this.conta] = this.delete;
    this.verEquipo.pop();
  
    this.listaEquipo[this.variable] = this.listaEquipo[this.conta];
    this.listaEquipo[this.conta] = this.deleteb;
    this.listaEquipo.pop();
  
    this.arrayList[this.variable] = this.arrayList[this.conta];
    this.arrayList[this.conta] = this.deletec;
    this.arrayList.pop();

    this.verEquipoActual[this.variable] = this.verEquipoActual[this.conta];
    this.verEquipoActual[this.conta] = this.deleted;
    this.eliminar = this.verEquipoActual[this.conta];
    this.verEquipoActual.pop();
  
    if(this.verEquipo[0]==null){
      this.infoarticulo = null;
    }
  console.log("LINEA 364",this.listaEquipo);
  console.log("LINEA 365",this.verEquipo);
  console.log("linea 366", this.arrayList);
  console.log("linea 367", this.verEquipoActual);
  console.log("linea 368", this.eliminar);

    this._asignacionService.borrarAsignacionDep(this.eliminar).subscribe(
      response => {
    
      if(response.status == 'success'){
        this.showErase = true;
        this.status = response.status;
        this.message = response.message;
        console.log("linea 254", this.message);
      }
    
      if(response.status == 'error'){
        console.log(response);
          this.status = response.status;
          this.message = response.message;
        }
      }
      );
 $('#exampleModalCenter').modal("hide");
 this.ngOnInit();
    
     
}


aceptar(){
  this.showErase = false;
}


  GuardarAsigancion(FormSave){
  
    this._asignacionService.guardarasignaciondep(this.listaEquipo).subscribe(
    response => {
  
    if(response.status == 'success'){
      this.show=true;
      this.status = response.status;
      this.message = response.message;
      this.ngOnInit();
      this.depusuario = new Depusuario(null,null,null);
    }
  
    if(response.status == 'error'){
      console.log(response);
        this.status = response.status;
        this.message = response.message;
      }
    }
    );
  
    for(var i = 0; i < this.verEquipo.length+1; i++){
      this.verEquipo.pop();
    }
    for(var i = 0; i < this.listaEquipo.length+1; i++){
      this.listaEquipo.pop();
    }
    for(var i = 0; i < this.arrayList.length+1; i++){
      this.arrayList.pop();
    }

  this.showErase = false;
  this.verEquipo = null;
  this.infoarticulo = null;
  this.ngOnInit();
    
    
  }
  
  
  









}
