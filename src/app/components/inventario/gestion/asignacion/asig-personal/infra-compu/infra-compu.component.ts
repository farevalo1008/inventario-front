import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DatosPersonales } from '../../../../../../models/datos_personales';
import { AsignacionService } from '../../../../../../services/inventario/asignacion.service';
import { ListasService } from '../../../../../../services/listas.service';
import { RegistroartService } from '../../../../../../services/inventario/registroart.service';
import { Articulo } from '../../../../../../models/inventario/articulo';
import { Tipoarticulo } from '../../../../../../models/inventario/tipoarticulo';
import { Asignacion } from '../../../../../../models/inventario/asignacion';
import { Usuarioart } from '../../../../../../models/inventario/usuarioart';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-infra-compu',
  templateUrl: './infra-compu.component.html',
  styleUrls: ['./infra-compu.component.css'],
  providers: [RegistroartService]
})
export class InfraCompuComponent implements OnInit {
  public grupo: Array<any>;
  public todos: Array<any>;
  public datospersona: string;
  public infoarticulo: any;
  public tipodato:Tipoarticulo;
  public title:string;
  public result:string;
  public status:string;
  public message: string;
  public valor;
  public show:boolean=false;
  public showErase:boolean=false;
  public verprimero:number;
  public verselect: number;
  public vermarca:string;
  public data:Array<any>;
  public uso : Array<any>;
  public id_tipo_articulo: Array<any>;
  public id_articulo: Array<any>;
  public DniModel= new DatosPersonales(null,null,null,null);
  public AsigModel= new Asignacion(null,null,null,null,null);
  public TipoModel= new Tipoarticulo(null,null,null,null);
  public usuarioart: Usuarioart;
  public listaEquipo = [];
  public verEquipoActual = [];
  public verEquipo = [];
  public comparar = [];
  public listaCodigo : Array<any>;
  public arrayList = new Array();
  public verificList:boolean=false;
  public showNoDisponible:boolean = false;
  public delete;
  public deleteb; 
  public deletec; 
  public deleted;
  public aux;
  public conta;
  public variable;
  public showred;
  public eliminar;
  public guardar = [];
  public provicional = [];
  public var:number;
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
      this.usuarioart = new Usuarioart(null,null,null);

    }


  ngOnInit() {
    //TRAE UN ARRAY DE TODO EL PERSONAL PARA EL AUTOCOMPLETE
    this._asignacionService.buscarPersonal().subscribe(
      response => {
        this.grupo = response.data;
        console.log("LINEA 86",this.grupo);
      }
    );

    //TRAE LA TABLA DE DATOS PERSONALES CON JOINS
    this._asignacionService.asig_personal().subscribe(
      response => {
        this.todos = response.data;
      },
      error =>{
        console.log(error);
      }
    );

  
    this._listaservice.getArticuloCompu().subscribe(
      response => { this.id_tipo_articulo = response.data; } ,
      error => { this.id_tipo_articulo = error.data; }
    );

    this._listaservice.getMarcaComputacion().subscribe(
      response => { this.data = response.data; },
      error => { this.data = error.data; }
    );

    //TRAE LOS ARTICULOS YA ASIGNADOS DE LA BASE DE DATOS (TODOS)
    this._listaservice.getArticuloUso().subscribe(
      response => { this.uso = response.data; 
      console.log("ARTICULOS YA ASIGNADOS",this.uso); },
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



  filteredBrands: any[];
  brand: string;

filterBrands(event) {
  this.verprimero = 0;
      this.filteredBrands = [];
      for(let i = 0; i < this.grupo.length; i++) {
          let brand = this.grupo[i];
          if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
              this.filteredBrands.push(brand);
          }
      }

    };

  setDni(){
    this.verEquipoActual = [];
    this.comparar = [];
    this.listaEquipo= [];
    console.log("LINEA 133",this.verEquipo);
    console.log("LINEA 134",this.uso);
    console.log("LINEA 135",this.verEquipoActual);
    console.log("LINEA 136",this.usuarioart);
    console.log("LINEA 137",this.datospersona);
    console.log("LINEA 138",this.listaCodigo);
    console.log("LINEA 139",this.tipodato);
    console.log("LINEA 140",this.TipoModel);
    console.log("LINEA 141",this.AsigModel);
    console.log("LINEA 142",this.infoarticulo);
    console.log("LINEA 143",this.arrayList);
    


    this.showErase = false;
    this.valor = null;
    this.variable = null;
    
    for(var i = 0; i < this.grupo.length; i++){
      if(this.brand == this.grupo[i]){
        this.valor = i;
        this.variable = this.todos[i];

      }
     }

    this._asignacionService.asignacionesOnePerson(this.variable).subscribe(
      response => {

      this.verEquipo  = response.data;
      if(this.verEquipo.length != 0 ){
        this.infoarticulo = response.data;
      }
      console.log("LINEA 154",this.verEquipo);

      for(var i = 0; i < this.verEquipo.length; i++){
        this.verEquipoActual.push(this.verEquipo[i]);
        this.comparar.push(this.verEquipo[i]);
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
    console.log( "--------------------");

    this._asignacionService.asig_personal().subscribe(
      response => {
      for (var i = 0; i < response.data.length; i++) {   
        if(response.data[i].dni == this.variable.dni){
          this.result = response.data[i].dni;
          this.datospersona = response.data[i];
          this.usuarioart.id_datpers = response.data[i].id_datpers;
        }   
     } 

    if(this.result != this.variable.dni || this.result == null){
      this.result = "Persona no encontrada"
      this.datospersona = " Error"
    } 
    
    
      if(response.status == 'success'){
        this.show=false;
        this.status = response.status;
        this.message = response.message;
      }
      if(response.status == 'error'){
        console.log("Linea de error 218 Asig-Pers",response);
          this.status = response.status;
          this.message = response.message;
        }
      } //Aqui cierra el servicio
      );  
      
    } //Cierre del SetDni

capturaMarca(){

  this.showErase = false;
  this.id_articulo = null;
  this.listaCodigo = null;
  this.tipodato = new Tipoarticulo(null,null,null,null);
  this.tipodato = new Tipoarticulo(this.TipoModel.id_tipo_articulo,null,null,null);
  this._asignacionService.compararback(this.tipodato).subscribe(
    response => {
      this.id_articulo = response.data;
      if(response.status == 'success'){
        this.showred = false;
        this.status = response.status;
        this.message = response.message;
             
      }
      if(response.status == 'error'){
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
  }
 this.conta -- ;
 console.log("linea 278",listaCodigo);
 console.log("linea 279",this.uso);
 

 for (var j = 0; j < this.uso.length; j++) {   
  for (var i = 0; i < listaCodigo.length; i++){   
      
        if(listaCodigo[i].id_articulo == this.uso[j].id_articulo){
          console.log("linea AAA",listaCodigo[i]);
          console.log("linea BBB",this.uso[j]);
          this.delete = listaCodigo[i];
          this.deleteb = listaCodigo[this.conta];
          listaCodigo[this.conta] = this.delete;
          listaCodigo[i] = this.deleteb;
          listaCodigo.pop();
          this.conta -- ;
        }
  }
}

for (var j = 0; j < this.ListaMante.length; j++) {   
  for (var i = 0; i < listaCodigo.length; i++) {   
    
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
console.log("linea 307",listaCodigo);
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
      this.usuarioart.id_articulo = this.listaCodigo[i].id_articulo;
    }   
 }

this.AsigModel.caracteristicas = this.TipoModel.caracteristica;
this.infoarticulo = this.AsigModel;
console.log("LINEA 207",this.AsigModel);
this.usuarioart.motivo = this.TipoModel.caracteristica;

var array = new Array();
array["id_articulo"] = this.AsigModel.id_articulo;
array["equipo"] = this.AsigModel.equipo;
array["marca"] = this.AsigModel.marca;
array["caracteristicas"] = this.AsigModel.caracteristicas;
array["cod_soaint"] = this.AsigModel.cod_soaint;



console.log(this.arrayList);
if(this.arrayList.length != 0){
  this.arrayList.forEach(element => {
    if(this.AsigModel.id_articulo == element["id_articulo"]){
      this.verificList = true;
    }
  });
}

if(this.verificList != true){
  this.verEquipo.push(array);
  this.verEquipoActual.push(this.usuarioart);
  this.listaEquipo.push(JSON.stringify(this.usuarioart));
  this.arrayList.push(array); 
  this.verificList = false;
}else{
  this.verificList = false;
}

console.log("LINEA 309",this.arrayList);
console.log("LINEA 310",this.verEquipo);
console.log("LINEA 311",this.usuarioart);
console.log("LINEA 312",this.verEquipoActual);
console.log("LINEA 313",this.listaEquipo);
console.log("LINEA 314",this.verificList);
console.log("LINEA 31",this.comparar);

this.showErase = false;
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
 

 this._asignacionService.borrarAsignacion(this.eliminar).subscribe(
    response => {
  
    if(response.status == 'success'){
      this.showErase = true;
      this.status = response.status;
      this.message = response.message;
      console.log("linea 396", this.message);
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

console.log("LINEA 412",this.arrayList);
console.log("LINEA 413",this.verEquipo);
console.log("LINEA 414",this.usuarioart);
console.log("LINEA 415",this.verEquipoActual);
console.log("LINEA 416",this.listaEquipo);
console.log("LINEA 417",this.verificList);
console.log("LINEA 418",this.comparar);


}

aceptar(){
  this.showErase = false;
}


GuardarAsigancion(FormSave){
//   this.guardar = [];
//   this.provicional = []

// this.provicional = this.verEquipoActual
// var conta = this.provicional.length;
// console.log("LINEA 438",conta);

// for(var i = 0; i < this.comparar.length; i++){
//   for(var j = 0; j < this.provicional.length; j++){
//     if(this.comparar[i].id_articulo == this.provicional[j].id_articulo){

//       this.delete = this.provicional[j];
//       this.provicional[j] = this.provicional[conta];
//       this.provicional[conta] = this.delete;
//       this.provicional.pop();
//     }
//   }
// }

// console.log("LINEA 452",this.provicional);


  this._asignacionService.guardarasignacion(this.listaEquipo).subscribe(
  response => {

  if(response.status == 'success'){
    this.show=true;
    this.status = response.status;
    this.message = response.message;
    this.ngOnInit();
    this.usuarioart = new Usuarioart(null,null,null);
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
  this.datospersona = null;
  this.ngOnInit();
  
}






} //cierre del export
