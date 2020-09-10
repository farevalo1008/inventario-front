import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ReporteactividadesService } from '../../../../services/intranet/reporteactividades.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporteactividades',
  templateUrl: './reporteactividades.component.html',
  styleUrls: ['./reporteactividades.component.css']
})
export class ReporteactividadesComponent implements OnInit {
	public reporte;
  public nombre;
  public cedula;
  public id_user: number;
  public cantidad;
  public hora_curso;
  public hora_proyecto;
  public hora_cliente;
  public hora_permiso;
  public hora_otros;
  public total_horas;
  public show;
  public message;

  constructor(private _servicioReporteActividades:ReporteactividadesService ,private _router: ActivatedRoute,) { 
    this._router.params.subscribe( params =>{
    this.id_user = params['id_user'];
  });
     console.log(this._router.snapshot.paramMap.get('id_user'));
	}

  ngOnInit() {
  	let id_user = +this._router.snapshot.paramMap.get('id_user');
  	this._servicioReporteActividades.getReporteActividades(id_user).subscribe(
  		response=>{
  			console.log(response);
        if(response.cantidad == 0){
          this.show = true;
          this.message = 'No ha cargado actividades este mes';
        }else{
          this.show = false;
          this.reporte = response.data;
        }
          this.hora_curso = response.hora_curso;
          this.hora_proyecto = response.hora_proyecto;
          this.hora_cliente = response.hora_cliente;
          this.hora_permiso = response.hora_permiso;
          this.hora_otros = response.hora_otros;
          this.total_horas = response.total_horas;
          this.nombre = response.nombre;
          this.cedula = response.cedula;

  		});
  }

  generarPDF(){
    var imgWidth = 208; 
    var pageHeight = 295; 
    var doc = new jsPDF('p', 'mm', 'a4');
    html2canvas(document.querySelector("#datos")).then(canvas => {
       var img1 = canvas.toDataURL('image/png');
       var nombre = (<HTMLInputElement>document.getElementById('nombre')).innerHTML;
       var d = new Date();
       var month = new Array();
       month[0] = "Enero";
       month[1] = "Febrero";
       month[2] = "Marzo";
       month[3] = "Abril";
       month[4] = "Mayo";
       month[5] = "Junio";
       month[6] = "Julio";
       month[7] = "Agosto";
       month[8] = "Septiembre";
       month[9] = "Octubre";
       month[10] = "Noviembre";
       month[11] = "Diciembre";
       var mes = month[d.getMonth()];
       var year = d.getFullYear();
       var fecha = mes+year;
       var imgHeight1 = canvas.height * imgWidth / canvas.width;
 
       html2canvas(document.querySelector("#contenido")).then(canvas => {
          var img2 = canvas.toDataURL('image/png');
          var imgHeight2 = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight2;
          var position = 45;
          var img =new Image();
          img.src = "assets/img/logo.jpg";
          img.onload = function(){
            doc.text(5,20,'Control de Actividades');
            doc.text(5,26,'Mes: '+mes);
            doc.text(5,32,'Año: '+year);
            doc.addImage(this, 130,0);
            doc.addImage(img1, 'JPEG', 0, position, imgWidth, imgHeight1);
            doc.addImage(img2, 'JPEG', 0, 60, imgWidth, imgHeight2);
            doc.save('AuditoriaDeActividades('+nombre+'-'+fecha+').pdf');
          }
          
       });
    });
  }

}
