import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../services/reclutamiento/empleado.service';
import { ActivatedRoute } from '@angular/router';
import { Aceptocontrato } from '../../../models/reclutamiento/aceptocontrato';
import { ListasService } from '../../../services/listas.service';
import { Rechazocontrato } from '../../../models/reclutamiento/rechazocontrato';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public datosPosiblesEmpleados: Array<any>;
  public error:String;
  public getdatosPosiblesEmpleados: boolean = false;
  public id_candidato;
  public aceptocontrato: Aceptocontrato;
  public rechazocontrato: Rechazocontrato;
  public status: String;
  public message: String;
  public cargos: Array<any>;

  constructor(
    private _servicioEmpleado : EmpleadoService,
    public _listaservice : ListasService,
    private _route: ActivatedRoute,   
    private _router:ActivatedRoute,
  ) { 
    this._router.params.subscribe( params =>{
      this.id_candidato = params['id_candidato'];
    });

    this.aceptocontrato = new Aceptocontrato(this.id_candidato,null,null,null,null);
    this.rechazocontrato = new Rechazocontrato(this.id_candidato,null);
    console.log(this._route.snapshot.paramMap.get('id_candidato'));
  }

  ngOnInit() {
    let id_candidato = +this._route.snapshot.paramMap.get('id_candidato');
    console.log(id_candidato);

    this._listaservice.getCargos().subscribe(
      response => { this.cargos = response.data; } ,
      error => { this.cargos = error.data }
    );

    this._servicioEmpleado.reclutamientoGetPosiblesEmpleados().subscribe(
  
      response => {
        if(response.status=="error"){
          this.error = response.data;
          console.log(response.data);
        }else{
        console.log(response);
        this.getdatosPosiblesEmpleados = true;
        this.datosPosiblesEmpleados = response.data;
        console.log('aqui');
        console.log(this.datosPosiblesEmpleados);

      }
    
    });
    this.getdatosPosiblesEmpleados = false;
  }

  onSubmit(form){

    this.id_candidato=(<HTMLInputElement>document.getElementById('id_candidato'));
    console.log(this.id_candidato.value);
    this.aceptocontrato.id_candidato = form;
    console.log(this.aceptocontrato);
    console.log(form);

    this._servicioEmpleado.aceptoContrato(this.aceptocontrato).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            //form.reset();
            
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
    window.location.reload();
    this.ngOnInit();
  }

  onSubmit1(form){
    let id_candidato=(<HTMLInputElement>document.getElementById('id_candidato'));
    console.log(id_candidato.value);
    this.rechazocontrato.id_candidato = form;
    console.log(this.rechazocontrato);
    console.log(form);

    this._servicioEmpleado.rechazoContrato(this.rechazocontrato).subscribe(
        response => {
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            //form.reset();
            
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
    window.location.reload();
    this.ngOnInit();
  }
}
