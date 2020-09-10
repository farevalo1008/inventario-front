import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { ListasService } from '../../../services/listas.service';
import { CandidatoService } from '../../../services/reclutamiento/candidato.service';
import { NgForm } from '@angular/forms';
import { Archivos } from '../../../models/reclutamiento/archivos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {

  public archivos: Archivos;
  public id_candidato: number;
  public nombre_archivo: String;
  public ruta_archivo: String;
  public status: String;
  public message: String;
  public verArchivos:any;
  public verArchivos1:any;
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
      this.archivos = new Archivos(this.id_candidato,'','');
   }

  ngOnInit() {
    this.verDatosArchivos(this.id_candidato);
  }

  onSubmit(form){
    this._servicioCandidato.archivos(this.archivos).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();
            this.verDatosArchivos(this.id_candidato);
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

  verDatosArchivos(candidato){
    console.log("buscar archivos del candidato");
    this._servicioCandidato.reclutamientoVerDatosArchivos(candidato).subscribe( response =>{
      
      if(response.status == "errorarchivos"){
        this.show=false;
      }else{
        this.show=true;
        this.verArchivos = response.archivos;
      }

      console.log(this.verArchivos);
    });
  }
  
}
