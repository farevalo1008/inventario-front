import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { ListasService } from '../../../services/listas.service';
import { CandidatoService } from '../../../services/reclutamiento/candidato.service';
import { NgForm } from '@angular/forms';
import { Datoslaborales } from '../../../models/reclutamiento/datoslaborales';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datos-laborales',
  templateUrl: './datos-laborales.component.html',
  styleUrls: ['./datos-laborales.component.css']
})
export class DatosLaboralesComponent implements OnInit {

  public datoslaborales: Datoslaborales;
  public id_candidato: number;
  public empresa: String;
  public area_trabajo: Array<any>;
  public funciones_principales: String;
  public status: String;
  public message: String;
  public verLaborales:any;
  public verLaborales1:any;
  public show:boolean=false;

  constructor(
    private _router:ActivatedRoute,
    private _userservice : UsersService, 
    public _listaservice : ListasService,
    public _candidatoservice : CandidatoService,
    private _servicioCandidato : CandidatoService,
  ) { 
      this._router.params.subscribe( params =>{
      this.id_candidato = params['id_candidato'];
    });
    this.datoslaborales = new Datoslaborales(this.id_candidato,'',null,'');
    //alert(this.id_candidato);
  }

  ngOnInit() {
    this._listaservice.getAreaTrabajo().subscribe(
      response => { this.area_trabajo = response.data; } ,
      error => { this.area_trabajo = error.data; }
    );

    this.verDatosLaborales(this.id_candidato);
  }

  onSubmit(form){
    this._servicioCandidato.datoslaborales(this.datoslaborales).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();

            this.verDatosLaborales(this.id_candidato);
          }

          if(response.status == 'error'){
          console.log(response);
            this.status = response.status;
            this.message = response.message;
          }

        } ,
        error => {
          console.log(<any>error)
        }
    );
  }

  verDatosLaborales(candidato){
    console.log("buscar datos laborales del candidato");
    this._servicioCandidato.reclutamientoVerDatosLaborales(candidato).subscribe( response =>{
      
      if(response.status == "errorlaborales"){
        this.show=false;
      }else{
        this.show=true;
        this.verLaborales = response.laborales;
      }
    });
  }
}
