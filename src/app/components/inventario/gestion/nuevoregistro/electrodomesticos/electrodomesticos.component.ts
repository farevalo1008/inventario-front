import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Articulo } from '../../../../../models/inventario/articulo';
import { ListasService } from '../../../../../services/listas.service';
import { RegistroartService } from '../../../../../services/inventario/registroart.service';

@Component({
  selector: 'app-electrodomesticos',
  templateUrl: './electrodomesticos.component.html',
  styleUrls: ['./electrodomesticos.component.css'],
  providers: [RegistroartService]

})
export class ElectrodomesticosComponent implements OnInit {
  public status:String;
  public message: string;
  public articulo:Articulo;
  public id_status: Array<any>;
  public id_tipo_articulo: Array<any>;
  public show:boolean=false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private  _registroartService: RegistroartService, 
    public _listaservice : ListasService,
  ) { 
    this.articulo = new Articulo(2,null,null,'',null,null,'','',null,null,null,null);

  }

  ngOnInit() {
    this._listaservice.getStatusArt().subscribe(
      response => { this.id_status = response.data; } ,
      error => { this.id_status = error.data; }
    );

    this._listaservice.getArticuloElec().subscribe(
      response => { this.id_tipo_articulo = response.data; } ,
      error => { this.id_tipo_articulo = error.data; }
    );

    console.log('electrodomesticos.component cargado correctamente!!');

  }

  OnSubmit(Form){
    console.log(this.articulo);
    this._registroartService.registrar(this.articulo).subscribe(
    response => {
    console.log(response);
    if(response.status == 'success'){
      this.show=true;
      this.status = response.status;
      this.message = response.message;

      this.ngOnInit();
      this.articulo = new Articulo(2,null,null,'',null,null,'','',null,null,null,null);
    }

      if(response.status == 'error'){
        console.log(response);
        this.status = response.status;
        this.message = response.message;
      }
    } 
    );
  }
}
