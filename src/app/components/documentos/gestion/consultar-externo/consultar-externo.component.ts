import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documento/documentos.service';
import { ListasService } from '../../../../services/listas.service';
import { Buscarmodel } from 'src/app/models/documento/buscarModel';
import { Documentos } from 'src/app/models/documento/documentos';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

var jquery: any;
declare var $: any;
@Component({
  selector: 'app-consultar-externo',
  templateUrl: './consultar-externo.component.html',
  styleUrls: ['./consultar-externo.component.css']
})
export class ConsultarExternoComponent implements OnInit {
  public buscarmodel = new Buscarmodel('', '', null, null, null, null, 'servidor', '', '', null, null, null, null, null);

  public bandera: boolean = false;

  public datanombres: Array<any>;
  public datospersona: string;
  public error: String;
  public status: String;
  public getDocumentos: boolean = false;
  public datosDocumentos: Array<any>;
  public mensajeError: boolean = false;
  public buscarnombres: Array<any>;

  public id_departamento: Array<any>;
  public id_tipo_doc: Array<any>;
  public id_cliente: Array<any>;
  public id_extension: Array<any>;
  public id_procedencia: Array<any>;
  public id_documento: Array<any>;

  public rutaPrueba = null;
  public nombreDocumentoPrueba = null;

  public descripcion: any;
  public nombre: any;
  public end: any;
  public begin: any;
  public cliente: any;
  public codigo: any;
  public id: any;
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
    public http: HttpClient,
    public _listaservice: ListasService
  ) { }

  ngOnInit() {
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
    this._documentoService.getdocumentoexterno().subscribe(
      response => {
        if (response.status == "error") {
          this.error = response.data;
          console.log(response.data);
        } else {
          console.log(response);
          this.getDocumentos = true;

          this.datosDocumentos = response.data
          console.log("linea 38", this.datosDocumentos);

        }
      }
    );
    this.getDocumentos = false;


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


  onSubmit() {
    console.log(this.buscarmodel.nombre);
    this._documentoService.buscarDocumentoexterno(this.buscarmodel).subscribe(
      response => {

        console.log("LINEA 54", response.data);
        this.buscarnombres = response.data[0];
        this.bandera = true;
        this.getDocumentos = false;

        this.datanombres = response.data;
        if (response.data == 'no data') {
          this.mensajeError = true;
          this.bandera = false;
        }
      }
    );
    this.mensajeError = false;
    this.bandera = false;

  }

  traerDatos(x) {
    this.buscarmodel = x;
    console.log('prueba', x);



  }

  Editar(form) {

    this.nombreDocumentoPrueba = this.filedata.name;
    this.buscarmodel.ruta = this.nombreDocumentoPrueba.replace(/ /g, "");

    console.log(this.buscarmodel);
    this._documentoService.Update(this.buscarmodel, this.buscarmodel.id_documento).subscribe(
      response => {
        console.log(response);
        if (response.status == 'success') {
          this.status = response.status;


          console.log("aqui");
          this.ngOnInit();
          this.subirArchivo();
        } else {
          this.status = response.status;

        }
      }
    );
    this.ngOnInit();
    $('#editar').modal("hide");


  }

  public descargarArchivo(archivo): void {
    this.buscarmodel = archivo;
    archivo = this.buscarmodel.ruta;
    console.log(this.buscarmodel.ruta, 'AQUI');
    this._documentoService.descargarArchivo(this.buscarmodel.ruta)
      .subscribe(x => {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        var newBlob = new Blob([x], { type: "application/pdf" });

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }

        // For other browsers: 
        // Create a link pointing to the ObjectURL containing the blob.
        const data = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data;
        link.download = this.buscarmodel.ruta;
        // this is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

        setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }
  subirArchivo() {
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



}
