import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visualizar-usuario',
  templateUrl: './visualizar-usuario.component.html',
  styleUrls: ['./visualizar-usuario.component.css']
})
export class VisualizarUsuarioComponent implements OnInit {
  //@Input() dataShared:1;

  public usuario;

  constructor(
    private _servicioUsers : UsersService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

  mostrar(id){
    this._servicioUsers.mostrarUsuario(id).subscribe(
      response => {
        this.usuario = response.data;
        console.log(response);
      }
    );
  }

  // removerclass(dataShared){

  //  let visualizarUsuario = document.getElementById('visualizarUsuario');
  //  visualizarUsuario.classList.remove('none'); 

  // }
}
