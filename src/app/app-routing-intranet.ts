import { Routes, RouterModule } from '@angular/router';
import { ControlAccesoComponent } from './components/intranet/control-acceso/control-acceso.component';
import { ControlActividadesComponent } from './components/intranet/control-actividades/control-actividades.component';
import { RelojComponent } from './components/intranet/control-acceso/reloj/reloj.component';
import { PublicacionesComponent } from './components/home/publicaciones/publicaciones.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { InfoIntranetComponent } from './components/home/info-intranet/info-intranet.component';
import { CelebracionesComponent } from './components/home/celebraciones/celebraciones.component';
import { MuroComponent } from './components/intranet/dashboard/muro/muro.component';
import { ActividadesComponent } from './components/intranet/dashboard/actividades/actividades.component';
import { NewsComponent } from './components/intranet/dashboard/news/news.component';
import { AuditoriaAccesoComponent } from './components/intranet/auditoria-acceso/auditoria-acceso.component';
import { VerticaltabsComponent } from './components/intranet/auditoria-acceso/verticaltabs/verticaltabs.component';
import { PersonalactivoComponent } from './components/intranet/auditoria-acceso/verticaltabs/personalactivo/personalactivo.component';
import { PersonalinactivoComponent } from './components/intranet/auditoria-acceso/verticaltabs/personalinactivo/personalinactivo.component';
import { VarActividadesComponent } from './components/intranet/dashboard/actividades/var-actividades/var-actividades.component';
import { TodayactivityComponent } from './components/intranet/dashboard/actividades/todayactivity/todayactivity.component';
import { PersonalComponent } from './components/intranet/auditoria-acceso/personal/personal.component';
import { ColectivoComponent } from './components/intranet/auditoria-acceso/colectivo/colectivo.component';
import { ReportePersonalComponent } from './components/intranet/auditoria-acceso/personal/reporte-personal/reporte-personal.component';
import { TodayactivitysComponent } from './components/intranet/control-actividades/todayactivitys/todayactivitys.component';
import { HistorialActividadesComponent } from './components/intranet/control-actividades/historial-actividades/historial-actividades.component';
import { AuditoriaActividadesComponent } from './components/intranet/auditoria-actividades/auditoria-actividades.component';
import { ReporteactividadesComponent } from './components/intranet/auditoria-actividades/reporteactividades/reporteactividades.component';
import { NoticiasComponent } from './components/intranet/dashboard/noticias/noticias.component';
import { NextEventComponent } from './components/intranet/dashboard/next-event/next-event.component';
import { IniciosoaComponent } from './components/intranet/iniciosoa/iniciosoa.component';

export const INTRANET_ROUTES: Routes = [
    { path: '' , component: IniciosoaComponent},
    { path: 'controldeacceso' , component: ControlAccesoComponent},
    { path: 'controldeactividades' , component: ControlActividadesComponent},
  	{ path: 'auditoriadeacceso' , component: AuditoriaAccesoComponent },
  	{ path: 'auditoriadeacceso/show' , component: ColectivoComponent },
  	{ path: 'auditoriadeacceso/showusers' , component: PersonalComponent },
  	{ path: 'auditoriadeacceso/showpersonal/:id_user' , component: ReportePersonalComponent },
  	{ path: 'auditoriadeacceso/getuser/:id_user' , component: ReportePersonalComponent },
  	{ path: 'controldeacceso' , component: ControlAccesoComponent },
  	{ path: 'controldeacceso/store' , component: ControlAccesoComponent },
	  { path: 'controldeacceso/update' , component: ControlAccesoComponent },
    { path: 'controldeacceso/permisosalida' , component: ControlAccesoComponent },
    { path: 'controldeacceso/permisoentrada' , component: ControlAccesoComponent },
	  { path: 'noticias' , component: NoticiasComponent },
  	{ path: 'publicaciones' , component: PublicacionesComponent },
  	{ path: 'publicaciones/store' , component: NewsComponent },
  	{ path: 'actividades' , component: ActividadesComponent },
  	{ path: 'actividades/store' , component: VarActividadesComponent },
  	{ path: 'actividades/update' , component: VarActividadesComponent },
  	{ path: 'actividades/actividad' , component: VarActividadesComponent },
  	{ path: 'actividades/delete' , component: VarActividadesComponent },
  	{ path: 'controldeactividades/store' , component: TodayactivitysComponent },
	  { path: 'controldeactividades/historial' , component: HistorialActividadesComponent },
	  { path: 'auditoriadeactividades' , component: AuditoriaActividadesComponent },
    { path: 'auditoriadeactividades/actividadespersonales/:id_user' , component: ReporteactividadesComponent },
    { path: 'eventos' , component: NextEventComponent },
 
	  { path: '**' , redirectTo: '404' }
];

