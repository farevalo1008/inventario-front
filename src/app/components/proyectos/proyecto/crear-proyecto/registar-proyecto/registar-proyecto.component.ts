import { Component, OnInit } from '@angular/core';
import { Registrarproyecto } from 'src/app/models/proyecto/registrarproyecto';
import { RegistrarproyectoService } from 'src/app/services/proyecto/registrarproyecto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registar-proyecto',
  templateUrl: './registar-proyecto.component.html',
  styleUrls: ['./registar-proyecto.component.css'],
  providers: [RegistrarproyectoService]
})
export class RegistarProyectoComponent implements OnInit {
  public registrarproyecto : Registrarproyecto;
  public status: string;
  constructor(
    private  _route: ActivatedRoute,
    private _router: Router,
    private _registrarproyectoService: RegistrarproyectoService
  ) {
    this.registrarproyecto = new Registrarproyecto('', '', null, null);
  }

  ngOnInit() {
    //console.log('registrar-proyecto.component cargado correctamente!!');
    //console.log(this.registrarproyecto);
  }
OnSubmit(form){
//console.log(this.registrarproyecto);
//console.log(this._registrarproyectoService.pruebads())
this._registrarproyectoService.register(this.registrarproyecto).subscribe(
  response => {
   
    if(response.status == 'success'){
      this.status = response.status;

      //vaciar el formulario
      this.registrarproyecto = new Registrarproyecto('', '', null, null);
      form.reset;

      console.log('registrar-proyecto.component cargado correctamente!!');
    }else{
      this.status = 'error'

    }

  },
  error => {
    console.log(<any>error)
  }
);
}
}
