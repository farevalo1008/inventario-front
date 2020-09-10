import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { ListasService } from '../../../services/listas.service';
import { VisualizarUsuarioComponent } from '../visualizar-usuario/visualizar-usuario.component';
import { ModalDirective } from 'ngx-bootstrap/modal'; 
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  //@Output() emitEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  //@Input() visualizar: VisualizarUsuarioComponent;

  public modal: ModalDirective;
  public datosUsuarios: Array<any>;
  public status: String;
  public message: String;
  public user: User;
  public email: String;
  public id: number;
  public email1;
  public roles: Array<any>;
  public error:String;
  
  constructor(
    private _servicioUsers : UsersService, 
    public _listaservice : ListasService,
    private _route: ActivatedRoute,
    private _router:ActivatedRoute,
  ) {
    this._router.params.subscribe( params =>{
      this.id = params['id'];
    });

    this.user = new User(null,null,null,);
    console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    console.log(id);

    this._listaservice.getRoles().subscribe(
      response => { this.roles = response.data; } ,
      error => { this.roles = error.data }
    );

    this._servicioUsers.reclutamientoGetUsuarios().subscribe(

      response => {
        if(response.status=="error"){
          this.error = response.data;
          console.log(response.data);
        }else{
        this.datosUsuarios = response.data;
        console.log(this.datosUsuarios); 
        }
      });
    // let id = +this._route.snapshot.paramMap.delete('id');
    // console.log(id);
    // this._servicioUsers.borrarUsuario(id).subscribe(
  
    //   response => {
    //     console.log(response.data);
    //     this.datosUsuarios = response.data;
    //   }
        
    // );
    
  }

  remove(id){
    //alert('Esta seguro de eliminar el Usuario???');
    this._servicioUsers.borrarUsuario(id).subscribe(

      response => {
        if(response.status == 'success'){
          console.log(response);
          $('#Modal-1'+id).modal("hide");
          this.ngOnInit();
        }
      }
        
    );
  }

  onSubmit(form){
    console.log(form);
    this._servicioUsers.updateUser(this.user).subscribe(
        response => {
          // let email1 = (<HTMLInputElement>document.getElementById('usuarios.email')).value;
          // console.log(email1);
          if(response.status == 'success'){
            this.status = response.status;
            this.message = response.message;
            form.reset();
            $('#Modal-0'+this.id).modal("hide");
            this.ngOnInit();
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

}

