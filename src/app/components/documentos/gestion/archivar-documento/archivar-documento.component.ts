import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DocumentosService } from 'src/app/services/documento/documentos.service';
import { Documentos } from 'src/app/models/documento/documentos';

import { ListasService } from '../../../../services/listas.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-archivar-documento',
  templateUrl: './archivar-documento.component.html',
  styleUrls: ['./archivar-documento.component.css'],
  providers: [DocumentosService]

})

export class ArchivarDocumentoComponent implements OnInit {
  public rutaPrueba = null;
  public nombreDocumentoPrueba = null;

  public documentos = new Documentos('', '', null, null, null, '', '', '', '', null, null, null, null);
  public title: string;

  public status: string;
  public valor;
  public id_departamento: Array<any>;
  public id_tipo_doc: Array<any>;
  public paramaconi: string;
  public myFile: string;
  public id_cliente: Array<any>;
  public id_extension: Array<any>;
  public id_procedencia: Array<any>;
  opcionSeleccionado: number; // Iniciamos
  verSeleccion: number;
  public archivoSeleccionado: any;
  public mes;
  public dia;
  public min;
  public fecha: String;
  public messagetwo: String;
  public message: String;
  filedata: any;
  fileEvent(e) {
    this.filedata = e.target.files[0];
      }

  constructor(

    private _documentoService: DocumentosService,

    private _router: Router,
    private _route: ActivatedRoute,
    public _listaservice: ListasService,
    public http: HttpClient


  ) {

  }



  ngOnInit() {

    function makeid(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;

    }

    console.log(makeid(10));
    let r = makeid(10);
    this.paramaconi = r;

    let f = new Date();
    this.mes = f.getMonth() + 1;
    this.min = f.getMonth();
    this.dia = f.getDate();

    if (this.dia < 10) {
      this.dia = '0' + this.dia;
    }

    if (this.mes < 10) {
      this.mes = '0' + this.mes;
    }

    this.fecha = f.getFullYear() + "-" + this.mes + "-" + this.dia;
    this.message = this.fecha;
    this.min = f.getFullYear() + "-" + this.mes + "-" + '01';
    this.messagetwo = this.min;
    console.log(this.min);

    this._listaservice.getTipoDepartamento().subscribe(
      response => { this.id_departamento = response.data; },
      error => { this.id_departamento = error.data; }
    )


    this._listaservice.getTipoExtension().subscribe(
      response => { this.id_extension = response.data; },
      error => { this.id_extension = error.data; }
    )

    this._listaservice.getTipoDocumento().subscribe(
      response => { this.id_tipo_doc = response.data; },
      error => { this.id_tipo_doc = error.data; }
    )

    this._listaservice.getTipoCliente().subscribe(
      response => { this.id_cliente = response.data; },
      error => { this.id_cliente = error.data; }
    )

    this._listaservice.getTipoProcedencia().subscribe(
      response => { this.id_procedencia = response.data; },
      error => { this.id_procedencia = error.data; }
    )

  }



  onSubmit1(form) {

   
    this.nombreDocumentoPrueba =   this.filedata.name;
    this.documentos.codigo = this.paramaconi;
    this.documentos.ruta = this.nombreDocumentoPrueba.replace(/ /g, "");
    this._documentoService.guardar(this.documentos).subscribe(
      response => {
        console.log(response, 'prueba1');
        if (response.status == 'success') {
          this.status = response.status;
          this.prueba();

          this.ngOnInit();
        } else {
          this.status = response.status;
        }
      });


  }





  prueba() {
    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('image', this.filedata);
    
    this.http.post('http://localhost:8000/soaint/api/documentos/subirArchivo', myFormData, {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    });

  }



  capturar() {
    this.valor = (<HTMLInputElement>document.getElementById('opcionSeleccionado')).value

    if (this.valor != null) {
      this.verSeleccion = this.valor;
    }


  }








}



