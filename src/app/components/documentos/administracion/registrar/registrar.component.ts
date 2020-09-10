import { Component, OnInit } from '@angular/core';
import { Tipo_documentosService } from 'src/app/services/documento/tipo_documentos.service';
import { Tipo_documentos } from 'src/app/models/documento/tipo_documentos';
import { DepartamentosService } from 'src/app/services/documento/departamentos.service';
import { ClientesService } from 'src/app/services/documento/clientes.service';
import { Clientes } from 'src/app/models/documento/clientes';

import { Departamentos } from 'src/app/models/documento/departamentos';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [Tipo_documentosService,DepartamentosService,ClientesService]
})
export class RegistrarComponent implements OnInit {
  public tipo_documentos = new Tipo_documentos ('','');
  public departamentos = new Departamentos ('');
  public clientes = new Clientes('','', '' ,'','');
 
 
  public status : string;
  public myVar;
  constructor(
    private _router : Router,
    private _route : ActivatedRoute,
    private _tipo_documentoService :Tipo_documentosService,
    private _departamentoService :DepartamentosService,
    private _clienteService : ClientesService

  ) {
    this.tipo_documentos = new Tipo_documentos('','');
    this.departamentos = new Departamentos('');
    this.clientes = new Clientes('','', '' ,'','');
   }

  ngOnInit() {
  }

  onSubmit2(form){
    console.log(this.tipo_documentos);
    this._tipo_documentoService.registrar(this.tipo_documentos).subscribe(
        response => {
        console.log(response);
        if(response.status == 'success'){
          this.status = response.status;
         
          this.ngOnInit();
          this.tipo_documentos = new Tipo_documentos('','');
  
         }else{
           this.status = response.status;
          
         }
        }
      );
      }
      onSubmit3(form){
      console.log(this.departamentos);
      this._departamentoService.registrar(this.departamentos).subscribe(
          response => {
          console.log(response);
          if(response.status == 'success'){
            this.status = response.status;
           
            this.ngOnInit();
            
            this.departamentos = new Departamentos('');
   
           }else{
             this.status = response.status;
            
           }
          }
        );}
        onSubmit(form){
        console.log(this.clientes);
        this._clienteService.registrar(this.clientes).subscribe(
            response => {
            console.log(response);
            if(response.status == 'success'){
              this.status = response.status;
             
              this.ngOnInit();
              this.clientes = new Clientes('','', '' ,'','');
        
             }else{
               this.status = response.status;
              
             }
            }
          );
        }
  
}
