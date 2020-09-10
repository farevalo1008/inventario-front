import { Component, OnInit } from '@angular/core';
import { DateServiceService } from '../../../../services/intranet/date-service.service';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

 
	public hora: String;
	public fecha;
	public x;
   
	constructor(
		
		public _dateServiceService : DateServiceService,
	
	) { }
  
	ngOnInit() {
		this.dateTime();
		this.x = setInterval (() => {this.dateTime();}, 20000);
		  
	}
  
	dateTime(){
		this._dateServiceService.getDateService().subscribe(
		response => { 
						this.hora = response.time;
						this.fecha = response.date;
					   } ,
  
		error => { this.hora = error.data; }
	  );
	}

}
