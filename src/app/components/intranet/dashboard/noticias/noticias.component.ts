import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../../../services/intranet/publicaciones.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

	public publicaciones: Array<any>;

  constructor(private _servicioPublicaciones : PublicacionesService,) { }

  ngOnInit() {
  	this._servicioPublicaciones.getNoticias().subscribe(

      response => {
        this.publicaciones = response.publicaciones; }
    );
  }

}
