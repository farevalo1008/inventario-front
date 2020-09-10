import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-auditoria-acceso',
  templateUrl: './auditoria-acceso.component.html',
  styleUrls: ['./auditoria-acceso.component.css']
})
export class AuditoriaAccesoComponent implements OnInit {
	public id;
	public id2;
  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  redireccionar(){
    this.router.navigate(['/inicio']);
    this.router.navigate(['intranet/auditoriadeacceso']);
  }

  ngGetReporte(e){
 
  	if(e == 1){
  		this.id = 'personal';
  		this.id2= 'colectivo';
  	}

  	if(e == 2){
  		this.id = 'colectivo';
  		this.id2= 'personal';
  	}

  	let element = document.getElementById(this.id);
  	element.classList.add('d-block');
  	let element2 = document.getElementById(this.id2);
  	element2.classList.remove('d-block');
  	element2.classList.add('d-none');
  	let element3 = document.getElementById('auditoria');
  	element3.classList.add('d-none');

  }

}
