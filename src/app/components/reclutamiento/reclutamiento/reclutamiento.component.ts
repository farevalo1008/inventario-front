import { Component, OnInit } from '@angular/core';
import { ReclutamientoService } from '../../../services/reclutamiento/reclutamiento.service';

@Component({
  selector: 'app-reclutamiento',
  templateUrl: './reclutamiento.component.html',
  styleUrls: ['./reclutamiento.component.css']
})
export class ReclutamientoComponent implements OnInit {

  public candidatosconsolicitud: Array<any>;
  public candidatossinsolicitud: Array<any>;
  public solicitudconcandidatos: Array<any>;
  public solicitudsincandidatos: Array<any>;
  public datosContSol: Array<any>;
  public datosContCan: Array<any>;
  public datosContEmp: Array<any>;
  public datosContUser: Array<any>;
  public ultEmp: Array<any>;
  public ultCan: Array<any>;
  public ultSol: Array<any>;
  public ultUser: Array<any>;
  public cita: Array<any>;
  public solicitud: Array<any>;
  public dia;
  public dian;
  public dialetra: Array<any>;
  public mes;
  public mesletra: Array<any>;
  public anio;
  public fecha: Array<any>;
  public meses: Array<any>;
  public semana: Array<any>;
  public mostrarcita: boolean = false;
  public mostrarsolicitud: boolean = false;
  public ocultarcita: boolean = false;
  public ocultarsolicitud: boolean = false;

  constructor(private _servicioReclutamiento : ReclutamientoService) { }

  ngOnInit() {
    this._servicioReclutamiento.reclutamientoGet().subscribe(
  
      response => {
        console.log(response);
        //this.getSolicitudes = true;
        this.meses = ["Enero","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        this.semana = ["Lunes","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
        this.fecha = response.fecha;
        this.anio = response.anio;
        this.mes = response.mes;
        this.mesletra = this.meses[this.mes];
        this.dian = response.dian;
        this.dialetra = this.semana[this.dian];
        this.dia = response.dia;
        
        if(response.data9==''){
          this.ocultarcita=true;
          this.mostrarcita=false;
          console.log(response.data9);
        }else{
          this.mostrarcita=true;
          this.ocultarcita=false;
          this.cita = response.data9;
          console.log(this.cita);
        }
        if(response.data10==''){
          this.ocultarsolicitud=true;
          this.mostrarsolicitud=false;
          console.log(response.data10);
        }else{
          this.mostrarsolicitud=true;
          this.ocultarsolicitud=false;
          this.solicitud = response.data10;
          console.log(this.solicitud);
        }
        this.candidatossinsolicitud = response.candidatossinsolicitud;
        this.solicitudsincandidatos = response.solicitudsincandidatos;
        this.ultEmp = response.data8;
        this.ultCan = response.data7;
        this.ultSol = response.data6;
        this.ultUser = response.data5;
        this.datosContUser = response.data4;
        this.datosContEmp = response.data3;
        this.datosContCan = response.data2;
        this.datosContSol = response.data;
      }
        
    );
    //this.getSolicitudes = false;
  
  }

}
