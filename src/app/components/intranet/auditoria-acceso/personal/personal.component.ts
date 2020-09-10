import { Component, OnInit } from '@angular/core';
import { ReporteaccesoService } from '../../../../services/intranet/reporteacceso.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
	public personal;
  public id_user:number;
  constructor(private _servicioReporteAcceso: ReporteaccesoService,) 
   {

   }

  ngOnInit() {
  	this._servicioReporteAcceso.getReportePersonal().subscribe(

        response => {
          console.log(response);
          this.personal = response.data;
        }
      );
  }

}
