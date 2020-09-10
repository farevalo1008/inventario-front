import { Component, OnInit, Input} from '@angular/core';
import { TodayactivityComponent } from '../todayactivity/todayactivity.component';
import { FormControl, Validators } from '@angular/forms';
import { ActividadesService } from '../../../../../services/intranet/actividades.service';
import { Actividades } from '../../../../../models/intranet/actividades';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { UsersService } from '../../../../../services/users.service';
import { ModalDirective } from 'ngx-bootstrap/modal'; 
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-var-actividades',
  templateUrl: './var-actividades.component.html',
  styleUrls: ['./var-actividades.component.css']
})
export class VarActividadesComponent implements OnInit {
  
  public allactividad;
  public d;
  public e;
  public fi;
  public ff;
  public t;
  public identity;
  public eliminar;
  public ActividadModel = new Actividades(null, null, null, null, null, null);
  public show: Boolean;

  @Input() actividad: TodayactivityComponent;
  
  constructor(private _servicioActividades : ActividadesService,
                private _userService : UsersService,
              ) { 
                  this.identity = this._userService.getIdentity();
              }
  
  ngOnInit() {

    if(this.identity.rol>=3){
      this.show=true;
    }else{
      this.show=false;
    }
  	 this._servicioActividades.getActividades().subscribe(

      response => {
        console.log(response.alldata);
        this.allactividad =response.alldata;
        
      }
    );
  }


 ngremoveClass(){
   let element = document.getElementById("var-actividades");
   element.classList.toggle("d-none");
   
 }


 ngCreateActividad(form){
   console.log(this.ActividadModel);

   this._servicioActividades.createActividad(this.ActividadModel).subscribe(

        response => {
          console.log(response);
          if(response.status == 'success'){
              form.reset();
              
              this.actividad.ngOnInit();
              this.ngOnInit();
              $('#crearActividad').modal("hide");
          }


        });
 }

  ngGetActivity(){
    console.log('casa');
    let id = (<HTMLInputElement>document.getElementById('id')).value; 
    console.log(id);

    this._servicioActividades.GetActivity(id).subscribe(

          response => {
            console.log(response.data.id);

            if(response.status == 'success'){
                this.d = response.data.descripcion;
                this.e = response.data.encargado;
                this.fi = response.data.fecha_inicio;
                this.ff = response.data.fecha_fin;
                this.t = response.data.titulo;
            }


          });
  }

 ngGetActivityE(){
    console.log('casa');
    let id = (<HTMLInputElement>document.getElementById('delete')).value; 
    console.log(id);

    this._servicioActividades.GetActivity(id).subscribe(

          response => {
            console.log(response.data.id);

          });
  }

  ngEditActividad(form){
    let id = (<HTMLInputElement>document.getElementById('id')).value;
    let titulo = (<HTMLInputElement>document.getElementById('title')).value;
    let descripcion = (<HTMLInputElement>document.getElementById('description')).value;
    let encargado = (<HTMLInputElement>document.getElementById('boss')).value;
    let fecha_inicio = (<HTMLInputElement>document.getElementById('date')).value;
    let fecha_fin = (<HTMLInputElement>document.getElementById('date_end')).value;

    this.ActividadModel.id = id;
    this.ActividadModel.titulo = titulo;
    this.ActividadModel.descripcion = descripcion;
    this.ActividadModel.encargado = encargado;
    this.ActividadModel.fecha_inicio = fecha_inicio;
    this.ActividadModel.fecha_fin = fecha_fin;
    console.log(this.ActividadModel);
    

    this._servicioActividades.UpdateActividad(this.ActividadModel).subscribe(
      response => {
        
        console.log(response);
        
        this.ngOnInit();
        this.actividad.ngOnInit();
        $('#editarActividad').modal("hide");

      });
  }

  ngDeleteActividad(form){
    this.eliminar = (<HTMLInputElement>document.getElementById('delete')).value;

    this._servicioActividades.DeleteActividad(this.eliminar).subscribe(
      response=>{
            console.log(response);
            
            this.actividad.ngOnInit();
            $('#eliminarActividad').modal("hide");
            this.ngOnInit();     
          });
  }


}
