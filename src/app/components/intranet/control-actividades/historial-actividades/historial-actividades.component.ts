import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import  { ControlActividadesService }  from '../../../../services/intranet/control-actividades.service';
import { Reporteactividades } from '../../../../models/intranet/reporteactividades';

@Component({
  selector: 'app-historial-actividades',
  templateUrl: './historial-actividades.component.html',
  styleUrls: ['./historial-actividades.component.css']
})
export class HistorialActividadesComponent implements OnInit {
	public identity;
	public actividad = new Reporteactividades(null,null);
	public actividades;
  public hora_curso    :number;
  public hora_proyecto :number;
  public hora_cliente  :number;
  public hora_permiso  :number;
  public hora_otros    :number;
  public total_horas   :number;
  public mostrar: boolean;
  public message: String;
  public show: boolean;
  constructor(private _userService : UsersService, private _ControlActividadesService: ControlActividadesService,) {
  	this.identity = this._userService.getIdentity();
   }

  ngOnInit() {
  }

  ngGetReportePersonalActividades(){
  	let mes = (<HTMLInputElement>document.getElementById('mes')).value;
    
    this.actividad.mes= mes;
    this.actividad.user_id= this.identity.sub;
    console.log(this.actividad);
    if(mes != '00'){
    	this._ControlActividadesService.getHistorialActividades(this.actividad).subscribe(
    	response => {
        console.log(response);
        if(response.cantidad>0){
          this.mostrar = true;
          this.show = false;
          this.actividades = response.data;
          this.hora_curso = response.hora_curso;
          this.hora_proyecto = response.hora_proyecto;
          this.hora_cliente = response.hora_cliente;
          this.hora_permiso = response.hora_permiso;
          this.hora_otros = response.hora_otros;
          this.total_horas = response.total_horas;
        }

        if(response.cantidad==0){
          this.message = 'No ha registrado actividad para este mes';
          this.show = true;
          this.mostrar = false;
        }
        
      	});
    }
  }
}
