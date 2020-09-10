import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/intranet/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReciboPagoComponent } from './components/nomina/recibo-pago/recibo-pago.component';
import { PreNominaComponent } from './components/nomina/pre-nomina/pre-nomina.component';
import { MenuComponent } from './components/menu/menu.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { RECLUTAMIENTO_ROUTES } from './app-routing-reclutamiento';
import { INTRANET_ROUTES } from './app-routing-intranet';
import { NOMINA_ROUTES } from './app-routing-nomina';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { DatosLaboralesComponent } from './components/aspirante/datos-laborales/datos-laborales.component';
import { DatosAcademicosComponent } from './components/aspirante/datos-academicos/datos-academicos.component';
import { HabilidadesComponent } from './components/aspirante/habilidades/habilidades.component';
import { ArchivosComponent } from './components/aspirante/archivos/archivos.component';
import { DOCUMENTOS_ROUTES } from './app-routing-documentos';
import { PROYECTOS_ROUTES } from './app-routing-proyectos';
import { INVENTARIO_ROUTES } from './app-routing-inventario';

const rutasApp: Routes = [
  { path: '' , component: HomeComponent, pathMatch: 'full' },
  { path: 'inicio' , component: HomeComponent, pathMatch: 'full' },
  { path: 'login' , component: LoginComponent},  
 // { path: 'login' , redirectTo:'192.168.1.200/login',component: LoginComponent, pathMatch: 'full'},  

  //RUTAS ASPIRANTE
  { path: 'aspirante', component: AspiranteComponent },
  { path: 'aspirante/datosacademicos' , component: DatosAcademicosComponent },
  { path: 'aspirante/datosacademicos/:id_candidato' , component: DatosAcademicosComponent },
  { path: 'aspirante/datoslaborales' , component: DatosLaboralesComponent },
  { path: 'aspirante/datoslaborales/:id_candidato' , component: DatosLaboralesComponent },
  { path: 'aspirante/habilidades' , component: HabilidadesComponent },
  { path: 'aspirante/habilidades/:id_candidato' , component: HabilidadesComponent },
  { path: 'aspirante/archivos' , component: ArchivosComponent },
  { path: 'aspirante/archivos/:id_candidato' , component: ArchivosComponent },

  
  { path: 'dashboard' , component: DashboardComponent , 
            children:  
            [
              { path: 'reclutamiento' , 
                children: RECLUTAMIENTO_ROUTES            
              },
              { path: 'intranet' , 
                children: INTRANET_ROUTES            
              },
              { path: 'nomina' , 
                children: NOMINA_ROUTES            
              },  
              { path: 'proyectos' , 
              children: PROYECTOS_ROUTES            
              },    
			        { path: 'documentos' , 
              children: DOCUMENTOS_ROUTES          
              },
              { path: 'inventario' , 
              children: INVENTARIO_ROUTES          
              },
              { path: 'logout/:id' , component: LoginComponent },
          ]
  },
  { path: 'registro' , component: RegistroComponent },
  { path: 'usuarios' , component: UsuariosComponent },
  
  /*
  
  { path: 'reclutamiento/candidato/xxxxx' , component: UsuariosComponent },
  { path: 'ngstyle' , component: DirectivaNgStyleNgClassComponent },
  { path: 'lista-libros' , component: DirectivaNgForComponent },
  { path: 'acerca' , component: AcercaDeComponent },
  { path: 'encabezado' , component: EncabezadoComponent },
  { path: 'detalles' , component: DetalleComponent },
  { path: 'detalles/:id' , component: DetalleComponent },
  { path: 'paises' , component: PaisesComponent},
  */
  { path: '404' , component: Error404Component },  
  { path: '**' , redirectTo: '404' }
  
]
@NgModule({
  imports: [RouterModule.forRoot(rutasApp,{useHash:true})],
  exports: [RouterModule]
})
// { onSameUrlNavigation: 'reload' }
export class AppRoutingModule { }
