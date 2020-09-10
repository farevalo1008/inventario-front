import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../../../../services/intranet/actividades.service';

@Component({
  selector: 'app-next-event',
  templateUrl: './next-event.component.html',
  styleUrls: ['./next-event.component.css']
})
export class NextEventComponent implements OnInit {

	public nextEvent: Array<any>;
  public mes;
  public dia;
  public meses: Array<any>;
  public m;
  public arreglo;
  public matriz;

  constructor(private _servicioActividades : ActividadesService,) { }

  ngOnInit() {
  	this._servicioActividades.getNextEvent().subscribe(

      response => {
        this.nextEvent =response.data;
        this.meses = ["enero","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
        this.matriz= new Array(this.nextEvent.length);
        for (var i = 0; i < this.nextEvent.length; ++i) {
            console.log(this.nextEvent[i].fecha_inicio.split('-',3));
            let f = this.nextEvent[i].fecha_inicio.split('-',3);
            
            if(f[1]<10){
              this.m = f[1].split('0',2);
            }

            this.dia = f[2];
            this.mes = this.meses[this.m[1]];
            console.log(this.mes);
            console.log(this.dia);
            this.arreglo= new Array(2);
            this.arreglo[0]=this.mes;
            this.arreglo[1]=this.dia;
            this.matriz[i]=this.arreglo;
        }console.log(this.matriz);
         

      });
  }

}
