import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../../services/intranet/publicaciones.service';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

	public publicaciones: Array<any>;

  constructor(private _servicioPublicaciones : PublicacionesService,) { 

  }

  ngOnInit() {
  	 this._servicioPublicaciones.getPublicaciones().subscribe(

      response => {
        console.log(response.data);
        this.publicaciones = response.data; }
    );
  }

}
