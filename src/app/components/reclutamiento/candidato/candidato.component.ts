import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../../services/reclutamiento/candidato.service';
import { Rcl_candidato } from '../../../models/reclutamiento/rcl_candidato';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {

  BuscarNombresModel = new Rcl_candidato(null,'','','',null,null,null,'');
  public nombre : String;
  public apellido: String;
  public datosCandidatos: Array<any>;
  public error:String;
  public rol: number;
  public getCandidatos: boolean = false;
  public buscarnombres: Array<any>;
  public bnombres: boolean = false;
  public getCandidatos2: boolean = false;
  public datanombres: Array<any>;
  public mensajeError: boolean = false;

  constructor( 
    private _servicioCandidato : CandidatoService
  ) { }

  ngOnInit() {    

    this._servicioCandidato.reclutamientoGetCandidato().subscribe(

      response => {
        if(response.status=="error"){
          this.error = response.data;
          console.log(response.data);
          console.log(this.rol);
        }else{
        console.log(response);
        this.getCandidatos = true;
        this.datosCandidatos = response.data 
      }
    }
    );
    this.getCandidatos = false;
  }

  nombresSubmit(){
    console.log(this.BuscarNombresModel.nombres); 
    this._servicioCandidato.buscarCandidatoNombres(this.BuscarNombresModel).subscribe(
        response => {
          
          console.log(response.data);
          this.buscarnombres = response.data[0];
          this.bnombres = true;
          this.getCandidatos = false;
          console.log();
          this.datanombres = response.data;
          if(response.data == 'no data'){
            this.mensajeError=true;
            this.bnombres = false
          }
        } 
    );
    this.mensajeError=false;
    this.bnombres = false;
    
  }
}
