import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Clasificacion } from '../../../../models/inventario/clasificacion';
import { ListasService } from '../../../../services/listas.service';
import { RegistroartService } from '../../../../services/inventario/registroart.service';

@Component({
  selector: 'app-clasificacion-articulo',
  templateUrl: './clasificacion-articulo.component.html',
  styleUrls: ['./clasificacion-articulo.component.css'],
  providers: [RegistroartService]
})
export class ClasificacionArticuloComponent implements OnInit {
  public tipoArticulo: Clasificacion;
  public clase: Array<any>;
  public message: string;
  public show:boolean=false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private  _registroartService: RegistroartService, 
    public _listaservice : ListasService,
  ) { 
    this.tipoArticulo = new Clasificacion(null,null);
  }

  ngOnInit() {
    this._listaservice.getClasificacion().subscribe(
      response => { this.clase = response.data; 
      console.log("LINEA 29",this.clase);} ,
      error => { this.clase = error.data; }
    );
  }


  OnSubmit(form){
    console.log("LINEA 36",this.tipoArticulo)

    this._registroartService.tipoRegister(this.tipoArticulo).subscribe(
      response => { 
        this.message = response.message;
        this.show = true;
      console.log("LINEA 42",this.message);} ,
      error => { this.clase = error.data; }
    );

    this.ngOnInit()
    this.tipoArticulo = new Clasificacion('','');
  }

  BorrarMensaje(){
    this.show = false;
  }

}
