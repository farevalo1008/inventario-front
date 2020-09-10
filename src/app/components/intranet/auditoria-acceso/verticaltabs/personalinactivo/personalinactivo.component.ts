import { Component, OnInit } from '@angular/core';
import { PersonalActivoInactivoService } from '../../../../../services/intranet/personal-activo-inactivo.service';

@Component({
  selector: 'app-personalinactivo',
  templateUrl: './personalinactivo.component.html',
  styleUrls: ['./personalinactivo.component.css']
})
export class PersonalinactivoComponent implements OnInit {
 public retardo;
 public personal;
  constructor(private _servicioPersonalActivoInactivo : PersonalActivoInactivoService,) { }

  ngOnInit() {
  	this._servicioPersonalActivoInactivo.getPesonalActivoInactivo().subscribe(

      response => {
        console.log(response);
        this.personal = response.inactivos;
        this.retardo = response.retardo;
         }
    );
  }
}
