import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { ListasService } from '../../../services/listas.service';
import { CandidatoService } from '../../../services/reclutamiento/candidato.service';
import { NgForm } from '@angular/forms';
import { Datosacademicos } from '../../../models/reclutamiento/datosacademicos';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-datos-academicos',
  templateUrl: './datos-academicos.component.html',
  styleUrls: ['./datos-academicos.component.css']
})
export class DatosAcademicosComponent implements OnInit {

  public datosacademicos: Datosacademicos;
  public id_candidato:number;
  public pais: Array<any>;
  public tipo_estudio: Array<any>;
  public institucion: String;
  public status: String;
  public message: String;
  public verAcademicos:any;
  public aca:boolean=false;
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
    this.datosacademicos = new Datosacademicos(this.id_candidato,null,null,'');

  }

  ngOnInit() {
    this._listaservice.getPais().subscribe(
      response => { this.pais = response.data; } ,
      error => { this.pais = error.data; }
    );

    this._listaservice.getTipoEstudio().subscribe(
      response => { this.tipo_estudio = response.data; } ,
      error => { this.tipo_estudio = error.data }
    );

    this.verDatosAcademicos(this.id_candidato);
  }

  onSubmit(form){
    this._servicioCandidato.datosacademicos(this.datosacademicos).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();

            this.verDatosAcademicos(this.id_candidato);
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

  verDatosAcademicos(candidato){
    console.log("buscar datos academicos del candidato");
    this._servicioCandidato.reclutamientoVerDatosAcademicos(candidato).subscribe( response =>{
      

      if(response.status == "erroracademico"){
        this.show=false;
      }else{
        this.show=true;
        this.verAcademicos = response.academicos;
      }
      

      // if(response.academicos = 'No ha Registrado los Datos Academicos.'){
      //   this.aca=false;
      // }else{
      //   this.aca=true;
      // }

      console.log(this.verAcademicos);
    });
  }
}
