import { Component, OnInit } from '@angular/core';
import { PersonalActivoInactivoService } from '../../../../../services/intranet/personal-activo-inactivo.service';
@Component({
  selector: 'app-personalactivo',
  templateUrl: './personalactivo.component.html',
  styleUrls: ['./personalactivo.component.css']
})
export class PersonalactivoComponent implements OnInit {
  public personal;
  constructor(private _servicioPersonalActivoInactivo : PersonalActivoInactivoService,) { }

  ngOnInit() {
  	this._servicioPersonalActivoInactivo.getPesonalActivoInactivo().subscribe(

      response => {
        console.log(response);
        this.personal = response.activos;
         }
    );
  }

}
