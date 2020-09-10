import { Component, OnInit } from '@angular/core';
import { ReporteaccesoService } from '../../../../services/intranet/reporteacceso.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-colectivo',
  templateUrl: './colectivo.component.html',
  styleUrls: ['./colectivo.component.css']
})
export class ColectivoComponent implements OnInit {
	public personal;
  constructor(private _servicioReporteAcceso : ReporteaccesoService,) { }

  ngOnInit() {

  }

  ngGetReporteColectivo(){
    let mes = (<HTMLInputElement>document.getElementById('mes')).value;
    console.log(mes);
    
    if(mes != '00'){
      this._servicioReporteAcceso.getReporteColectivo(mes).subscribe(

        response => {
          console.log(response);
          this.personal = response.data;
         }
      );
    }
   
  }


  generarPDF(){
    var imgWidth = 208; 
    var pageHeight = 295; 
    var doc = new jsPDF('p', 'mm', 'a4');
    html2canvas(document.querySelector("#contenido")).then(canvas => {
          var mon  = (<HTMLInputElement>document.getElementById('mes')).value;
          var month = new Array();
           month['01'] = "Enero";
           month['02'] = "Febrero";
           month['03'] = "Marzo";
           month['04'] = "Abril";
           month['05'] = "Mayo";
           month['06'] = "Junio";
           month['07'] = "Julio";
           month['08'] = "Agosto";
           month['09'] = "Septiembre";
           month['10'] = "Octubre";
           month['11'] = "Noviembre";
           month['12'] = "Diciembre";
           var mes = month[mon];
          var d = new Date();
          var year = d.getFullYear();
          var fecha = mes+year;
          var imge = canvas.toDataURL('image/png');
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
          var position = 45;
          var img =new Image();
          img.src = "assets/img/logo.jpg";
          img.onload = function(){
            doc.text(5,20,'Control de Acceso Colectivo');
            doc.text(5,26,'Mes: '+mes);
            doc.text(5,32,'Año: '+year);
            doc.addImage(this, 130,0);
            doc.addImage(imge, 'JPEG', 0, position, imgWidth, imgHeight);
            doc.save('AuditoriaDeAccesoColectiva('+fecha+').pdf');
          }
    });
  }
}
