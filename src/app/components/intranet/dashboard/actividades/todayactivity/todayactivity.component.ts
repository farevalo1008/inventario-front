import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../../../../../services/intranet/actividades.service';
@Component({
  selector: 'app-todayactivity',
  templateUrl: './todayactivity.component.html',
  styleUrls: ['./todayactivity.component.css']
})
export class TodayactivityComponent implements OnInit {
	public actividades: Array<any>;
  constructor(private _servicioActividades : ActividadesService,) { }

  ngOnInit() {
  	 this._servicioActividades.getActividades().subscribe(

      response => {
        this.actividades =response.data;
        
      }
    );
  }

}
