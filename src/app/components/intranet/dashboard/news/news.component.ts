import { Component, OnInit,Input } from '@angular/core';
import {MuroComponent} from '../muro/muro.component';
import {FormControl, Validators} from '@angular/forms';
import { News } from '../../../../models/intranet/news';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { UsersService } from '../../../../services/users.service';
import { PublicacionesService } from '../../../../services/intranet/publicaciones.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	public NewsModel = new News(null, null, null);
	public identity;
	public status: String;
  	public message: String;
  	public show: Boolean;
  	@Input() muro: MuroComponent;
  constructor(private _userService : UsersService, private _servicioPublicaciones : PublicacionesService,) {
  	this.identity = this._userService.getIdentity();
   }

  ngOnInit() {
  	let rol = this.identity.rol;
  	if(rol>=3){
  		this.show= true; 
  	}
  }
  	

  	news(form){
	  	let nombre = this.identity.nombres+' '+this.identity.apellidos;
	  	this.NewsModel.user_name = nombre; 
	  	this._servicioPublicaciones.createPublicaciones(this.NewsModel).subscribe(

	      response => {
	        console.log(response);
	        if(response.status == 'success'){
	            this.status = response.status;
	            this.message = response.message;
	            form.reset();
	            this.muro.ngOnInit();
	        }


	      });
  	}

}
