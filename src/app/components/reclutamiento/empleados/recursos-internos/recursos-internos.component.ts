import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../../services/reclutamiento/empleado.service';

@Component({
  selector: 'app-recursos-internos',
  templateUrl: './recursos-internos.component.html',
  styleUrls: ['./recursos-internos.component.css']
})
export class RecursosInternosComponent implements OnInit {

  public basicos: Array<any>;
  public academicos: Array<any>;
  public laborales: Array<any>;
  public habilidades: Array<any>;
  public archivos: Array<any>;
  public error:String;
  public show:boolean=false;
  public nombre;
  public apellido;

  constructor(private _servicioEmpleado : EmpleadoService) { }

  ngOnInit() {
    this._servicioEmpleado.reclutamientoGetRecursosInternos().subscribe(
  
      response => {
        console.log(response);
        
        if(response.status=="error"){
          this.error = response.data;
          console.log(response.data);
        }else{
          this.show = true;
          this.error = null;
          this.basicos = response.dataCan;

          for (var i = 0; i < this.basicos.length; ++i) {
            // console.log(this.basicos[i].nombres.substring(0, 1));
            // console.log(this.basicos[i].apellidos.substring(0, 1));
            this.nombre = this.basicos[i].nombres.substring(0, 1);
            this.apellido = this.basicos[i].apellidos.substring(0, 1);
            console.log(this.nombre);
            console.log(this.apellido);
          }
        }
        
      }
        
    );
  }

}
