import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmpleadoService } from '../../../../services/reclutamiento/empleado.service';
import { ListasService } from '../../../../services/listas.service';

@Component({
  selector: 'app-observacion-contrato',
  templateUrl: './observacion-contrato.component.html',
  styleUrls: ['./observacion-contrato.component.css']
})
export class ObservacionContratoComponent implements OnInit {

  public id_candidato:number;
  public status: String;
  public message: String;
  public error:String;
  public obsContrato: Array<any>;
  public errorcontratocan:String;
  public contratoon:boolean=false;
  public contratooon:boolean=false;
  public aceptoon:boolean=false;
  public rechazoon:boolean=false;
  public contratooff:boolean=false;
  public observacionesContrato: Array<any>;
  public cargoContrato: Array<any>;
  public rechazoObsContrato: Array<any>;

  constructor(
    private _servicioEmpleado : EmpleadoService,
    public _listaservice : ListasService,
    private _route: ActivatedRoute,   
    private _router:ActivatedRoute,
  ) {
    this._router.params.subscribe( params =>{
      this.id_candidato = params['id_candidato'];
    });

   }

  ngOnInit() {
    let id_candidato = +this._route.snapshot.paramMap.get('id_candidato');

    this._servicioEmpleado.reclutamientoverObservacionesContrato(id_candidato).subscribe(
  
      response => {

        if(response.contratocan ==''){
          this.rechazoon = true;
        }

        if(response.rechazocan !=''){
          this.contratooon = true;
          this.rechazoon = false;
          this.rechazoObsContrato = response.rechazocan;
          console.log(this.rechazoObsContrato);
        }
        if(response.rechazocan==''){
          this.aceptoon = true;
        }
        if(response.contratocan!=''){
          this.contratoon = true;
          this.aceptoon = false;
          this.observacionesContrato = response.contratocan;
          this.cargoContrato = response.cargo;
          console.log(this.observacionesContrato);
        }

    });

  }

}
