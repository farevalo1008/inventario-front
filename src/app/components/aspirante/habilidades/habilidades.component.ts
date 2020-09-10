import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { ListasService } from '../../../services/listas.service';
import { CandidatoService } from '../../../services/reclutamiento/candidato.service';
import { NgForm } from '@angular/forms';
import { Habilidades } from '../../../models/reclutamiento/habilidades';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public habilidades: Habilidades;
  public id_candidato: number;
  public profesion: Array<any>;
  public conocimiento: Array<any>;
  public idiomas: Array<any>;
  public status: String;
  public message: String;
  public verHabilidades:any;
  public verHabilidades1:any;
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
    this.habilidades = new Habilidades(this.id_candidato,null,null,null);
  }

  ngOnInit() {
    this._listaservice.getProfesion().subscribe(
      response => { this.profesion = response.data; } ,
      error => { this.profesion = error.data }
    );

    this._listaservice.getConocimientos().subscribe(
      response => { this.conocimiento = response.data; } ,
      error => { this.conocimiento = error.data }
    );

    this._listaservice.getIdiomas().subscribe(
      response => { this.idiomas = response.data; } ,
      error => { this.idiomas = error.data }
    );

    this.verDatosHabilidades(this.id_candidato);
  }

  onSubmit(form){
    this._servicioCandidato.habilidades(this.habilidades).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();
            this.verDatosHabilidades(this.id_candidato);
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

  verDatosHabilidades(candidato){
    console.log("buscar habilidades del candidato");
    this._servicioCandidato.reclutamientoVerDatosHabilidades(candidato).subscribe( response =>{
      
      console.log(response);
      if(response.status == "errorhabilidades"){
        this.show=false;
      }else{
        this.show=true;
        this.verHabilidades = response.habilidades;
      }
      console.log(this.verHabilidades);
    });
  }
}
