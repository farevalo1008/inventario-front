import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Articulo } from '../../../../../models/inventario/articulo';
import { ListasService } from '../../../../../services/listas.service';
import { RegistroartService } from '../../../../../services/inventario/registroart.service';

@Component({
  selector: 'app-computacion',
  templateUrl: './computacion.component.html',
  styleUrls: ['./computacion.component.css'],
  providers: [RegistroartService]
})
export class ComputacionComponent implements OnInit {
  public status:string;
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
    this.articulo = new Articulo(1,null,null,'','','','',null,'',null,null,null);
  }

  ngOnInit() {
    this._listaservice.getStatusArt().subscribe(
      response => { this.id_status = response.data; } ,
      error => { this.id_status = error.data; }
    );

    this._listaservice.getArticuloCompu().subscribe(
      response => { this.id_tipo_articulo = response.data; } ,
      error => { this.id_tipo_articulo = error.data; }
    );
    
      console.log('computacion.component cargado correctamente!!');
     

  }

  OnSubmit(form){
    console.log("linea 50 CA",this.articulo);
    
    this._registroartService.registrar(this.articulo).subscribe(
    response => {
    console.log("linea 52 CA",response);   
    if(response.status == 'success'){
      this.show=true;
      this.status = response.status;
      this.message = response.message;
     
      this.ngOnInit();
      this.articulo = new Articulo(1,null,null,'','','','',null,'',null,null,null);
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

