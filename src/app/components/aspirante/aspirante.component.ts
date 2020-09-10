import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../services/reclutamiento/candidato.service';
import { Aspirante } from '../../models/reclutamiento/aspirante';
import { Rcl_candidato } from '../../models/reclutamiento/rcl_candidato';
import { Users } from '../../models/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aspirante',
  templateUrl: './aspirante.component.html',
  styleUrls: ['./aspirante.component.css']
})
export class AspiranteComponent implements OnInit {
  AspiranteModel = new Aspirante(null);
  public status: String;
  public message: String;
  public id_candidato:number;
  public datosAspirante: Array<any>;
  public aspirante: Array<any>;
  public show:boolean=false;
  public noRegistrado: boolean=false;
  public error:String;
  public dni : Number;
  public user: Users;

  constructor(private _servicioCandidato : CandidatoService,
    private _router:ActivatedRoute,
    ) {
    this._router.params.subscribe( params =>{
      this.id_candidato = params['id_candidato'];
    });
    this.user = new Users('','',null,null,null,null,'','','',null,null,null,'');
  }

  ngOnInit() {
    this.show = false;
  }

  onSubmit(){
    console.log(this.AspiranteModel.dni); 
    this._servicioCandidato.getAspirante(this.AspiranteModel).subscribe(
        response => {

          if(response.status=="error"){
            this.error = response.data;
            console.log(response.data);
          }else{
            this.show = true;
            this.error = null;
            console.log(response.data);
            this.aspirante = response.data[0];
            this.datosAspirante = response.data; 
          }
        } 
    );
    
  }


}
