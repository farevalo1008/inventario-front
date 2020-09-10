import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../../../services/intranet/publicaciones.service';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {


	public publicaciones: Array<any>;
 
  constructor(private _servicioPublicaciones : PublicacionesService,) { 

  }

  ngOnInit() {
  	 this._servicioPublicaciones.getPublicaciones().subscribe(

      response => {
        console.log(response);
        this.publicaciones =response.publicaciones; }
    );
  }
}
