import { Component, OnInit } from '@angular/core';
import {FormControl,  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { UsersService } from '../../../../services/users.service';
import  { ControlActividadesService }  from '../../../../services/intranet/control-actividades.service';

@Component({
  selector: 'app-todayactivitys',
  templateUrl: './todayactivitys.component.html',
  styleUrls: ['./todayactivitys.component.css']
})
export class TodayactivitysComponent implements OnInit {
  myForm: FormGroup;
	public identity;
  public status: String;
  public fin: String;
  public mes;
  public dia;
  public min;
  public date: String;
  public mensaje: String;
  public messagetwo: String;
  constructor(public fb: FormBuilder, private _userService : UsersService, private _ControlActividadesService: ControlActividadesService,) {
  	this.identity = this._userService.getIdentity();
    this.myForm = this.fb.group({
      'fecha': ['',[Validators.required]],
      'tipo_actividad': ['Tipos de Actividad',[Validators.required]],
      'hora': ['', [Validators.required,Validators.minLength(1), Validators.maxLength(5),Validators.max(18), Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]],
      'descripcion':['',[Validators.required,Validators.minLength(5), Validators.maxLength(40)]],
      'user':[''],
      });

   }


  


  ngOnInit() {
   
    let f = new Date();
    this.mes = f.getMonth()+1;
    this.min = f.getMonth();
    this.dia = f.getDate();

    if(this.dia<10){
      this.dia = '0'+this.dia;
    }

    if(this.mes<10){
      this.mes = '0'+this.mes;
    }

    this.date = f.getFullYear() + "-" + this.mes + "-" + this.dia;
    this.fin = this.date;
    this.min = f.getFullYear() + "-" + this.mes + "-" + '01';
    this.messagetwo = this.min;
    console.log(this.min);
  }

	registroActividad(){
     if (this.myForm.value['hora'] > 0 &&  this.myForm.value['hora'] < 18){

      this.myForm.value['hora'] = String(this.myForm.value['hora']);
      this.myForm.value['user'] = String(this.identity.sub);

      console.log(this.myForm.value);
      this._ControlActividadesService.registroActividades(this.myForm.value).subscribe(
        response => {
        console.log(response);
        if(response.status == 'success'){
          this.status = response.status;
          this.mensaje = response.message;
          
          
         }else{
           this.status = response.status;
           this.mensaje = response.message;
         }
        }
      );

      this.ngOnInit();

     }else{
       this.status = 'error';
       this.mensaje= 'Usted registro '+this.myForm.value['hora']+' horas y el sistema acepta un rango 0.1-18 horas, por favor verifique.';
     }
	}
}
