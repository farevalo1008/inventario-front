import { Component, OnInit } from '@angular/core';
import { ReporteaccesoService } from '../../../services/intranet/reporteacceso.service';

@Component({
  selector: 'app-auditoria-actividades',
  templateUrl: './auditoria-actividades.component.html',
  styleUrls: ['./auditoria-actividades.component.css']
})
export class AuditoriaActividadesComponent implements OnInit {
	public personal;
  constructor(private _servicioReporteAcceso: ReporteaccesoService,) { }

  ngOnInit() {
  	this._servicioReporteAcceso.getReportePersonal().subscribe(

        response => {
          console.log(response);
          this.personal = response.data;
        }
      );
  }

}
