import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';


import { FusionChartsModule } from 'angular-fusioncharts';
// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as ChartsWidgets from 'fusioncharts/fusioncharts.widgets';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as chartGantt from 'fusioncharts/fusioncharts.gantt';
import * as Charts from 'fusioncharts/fusioncharts.charts';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts,Charts,FusionTheme,chartGantt,ChartsWidgets)


//import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/intranet/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReciboPagoComponent } from './components/nomina/recibo-pago/recibo-pago.component';
import { PreNominaComponent } from './components/nomina/pre-nomina/pre-nomina.component';
import { MenuComponent } from './components/menu/menu.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { LoadingComponent } from './components/loading/loading.component';
import { VisualizarUsuarioComponent } from './components/administracion/visualizar-usuario/visualizar-usuario.component';

//RECLUTAMIENTO
import { CreateComponent } from './components/reclutamiento/candidato/create/create.component';
import { VisualizarCandidatoComponent } from './components/reclutamiento/candidato/visualizar-candidato/visualizar-candidato.component';
import { SolicitudComponent } from './components/reclutamiento/solicitud/solicitud.component';
import { CandidatoComponent } from './components/reclutamiento/candidato/candidato.component';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { DatosLaboralesComponent } from './components/aspirante/datos-laborales/datos-laborales.component';
import { DatosAcademicosComponent } from './components/aspirante/datos-academicos/datos-academicos.component';
import { HabilidadesComponent } from './components/aspirante/habilidades/habilidades.component';
import { ArchivosComponent } from './components/aspirante/archivos/archivos.component';
import { ReclutamientoComponent } from './components/reclutamiento/reclutamiento/reclutamiento.component';
import { CrearComponent } from './components/reclutamiento/solicitud/crear/crear.component';
import { VisualizarSolicitudComponent } from './components/reclutamiento/solicitud/visualizar-solicitud/visualizar-solicitud.component';
import { EmpleadosComponent } from './components/reclutamiento/empleados/empleados.component';
import { ObservacionContratoComponent } from './components/reclutamiento/empleados/observacion-contrato/observacion-contrato.component';
import { RecursosInternosComponent } from './components/reclutamiento/empleados/recursos-internos/recursos-internos.component';
import { VisualizarRecursoInternoComponent } from './components/reclutamiento/empleados/recursos-internos/visualizar-recurso-interno/visualizar-recurso-interno.component';

//INTRANET

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
import { PoliticasAsistenciaComponent } from './components/intranet/control-acceso/politicas/politicas-asistencia/politicas-asistencia.component';
import { IniciosoaComponent } from './components/intranet/iniciosoa/iniciosoa.component';
//DOCUMENTOS
import { ArchivarDocumentoComponent } from './components/documentos/gestion/archivar-documento/archivar-documento.component';
import { ConsultarDocumentoComponent } from './components/documentos/gestion/consultar-documento/consultar-documento.component';
import { RegistrarComponent } from './components/documentos/administracion/registrar/registrar.component';
import { ConsultarInternoComponent } from './components/documentos/gestion/consultar-interno/consultar-interno.component';
import { ConsultarExternoComponent } from './components/documentos/gestion/consultar-externo/consultar-externo.component';


//proyecto
import { CrearAsignacionComponent } from "./components/proyectos/asignaciones/crear-asignacion/crear-asignacion.component";
import { CrearTareaComponent } from './components/proyectos/tareas/crear-tarea/crear-tarea.component';
import { CrearProyectoComponent } from './components/proyectos/proyecto/crear-proyecto/crear-proyecto.component';
import { RegistarProyectoComponent } from './components/proyectos/proyecto/crear-proyecto/registar-proyecto/registar-proyecto.component';
import { ActualizarProyectoComponent } from './components/proyectos/proyecto/crear-proyecto/actualizar-proyecto/actualizar-proyecto.component';
import { RegistraractividadComponent } from './components/proyectos/tareas/registrartareas/registraractividad/registraractividad.component';
import { ConsultarproyectoComponent } from './components/proyectos/proyecto/consultar-proyecto/consultarproyecto/consultarproyecto.component';
import { ConsultarasignacionesComponent } from './components/proyectos/asignaciones/consultar-asignaciones/consultarasignaciones/consultarasignaciones.component';
import { RegistrarfasesComponent } from './components/proyectos/tareas/registrartareas/registrarfases/registrarfases.component';
import { ActualizarfasesComponent } from './components/proyectos/tareas/registrartareas/actualizarfases/actualizarfases.component';
import { ActualizaractividadesComponent } from './components/proyectos/tareas/registrartareas/actualizaractividades/actualizaractividades.component';
import { ConsultarfasesComponent } from './components/proyectos/tareas/registrartareas/consultarfases/consultarfases.component';
import { TareasrealizadasComponent } from './components/proyectos/tareas/tareasrealizadas/tareasrealizadas.component';
import { ActualizarasignacionComponent } from './components/proyectos/asignaciones/actualizarasignacion/actualizarasignacion.component';


//INVENTARIOS
import { NuevoRegistroComponent } from './components/inventario/gestion/nuevoregistro/nuevoregistro.component';
import { ActivosComponent } from './components/inventario/administracion/activos/activos.component';
import { ClasificacionArticuloComponent } from './components/inventario/administracion/clasificacion-articulo/clasificacion-articulo.component';
import { AsignacionComponent } from './components/inventario/gestion/asignacion/asignacion.component';
import { ComputacionComponent } from './components/inventario/gestion/nuevoregistro/computacion/computacion.component';
import { MobiliariosComponent } from './components/inventario/gestion/nuevoregistro/mobiliarios/mobiliarios.component';
import { ElectrodomesticosComponent } from './components/inventario/gestion/nuevoregistro/electrodomesticos/electrodomesticos.component';
import { AsigPersonalComponent } from './components/inventario/gestion/asignacion/asig-personal/asig-personal.component';
import { AsigDepartamentoComponent } from './components/inventario/gestion/asignacion/asig-departamento/asig-departamento.component';
import { CompuAsigComponent } from './components/inventario/gestion/asignacion/asig-personal/compu-asig/compu-asig.component';
import { MobiAsigComponent } from './components/inventario/gestion/asignacion/asig-personal/mobi-asig/mobi-asig.component';
import { CompuDepComponent } from './components/inventario/gestion/asignacion/asig-departamento/compu-dep/compu-dep.component';
import { MobiDepComponent } from './components/inventario/gestion/asignacion/asig-departamento/mobi-dep/mobi-dep.component';
import { MantenimientoComponent } from './components/inventario/administracion/mantenimiento/mantenimiento.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HistorialComponent } from './components/inventario/administracion/historial/historial.component';
// import { MuroInfraComponent } from './components/intranet/dashboard/muro-infra/muro-infra.component';
import { AsignacionInfraestructuraComponent } from './components/inventario/gestion/asignacion/asignacion-infraestructura/asignacion-infraestructura.component';
import { InfraCompuComponent } from './components/inventario/gestion/asignacion/asig-personal/infra-compu/infra-compu.component';
import { InfraCompuDepComponent } from './components/inventario/gestion/asignacion/asig-departamento/infra-compu-dep/infra-compu-dep.component';



//
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistroComponent,
    ReciboPagoComponent,
    PreNominaComponent,
    ControlAccesoComponent,
    ControlActividadesComponent,
    MenuComponent,
    Error404Component,
    HomeComponent,
    UsuariosComponent,
    LoadingComponent,
    //RECLUTAMIENTO
    CreateComponent,
    SolicitudComponent,
    CandidatoComponent,
    VisualizarCandidatoComponent,
    AspiranteComponent,
    DatosLaboralesComponent,
    DatosAcademicosComponent,
    HabilidadesComponent,
    ArchivosComponent,
    ReclutamientoComponent,
    VisualizarUsuarioComponent,
    CrearComponent,
    VisualizarSolicitudComponent,
    EmpleadosComponent,
    ObservacionContratoComponent,
    RecursosInternosComponent,
    VisualizarRecursoInternoComponent,

    //PROYECTOS
    CrearAsignacionComponent,
    CrearTareaComponent,
    CrearProyectoComponent,
    RegistarProyectoComponent,
    ActualizarProyectoComponent,
    RegistraractividadComponent,
    ConsultarproyectoComponent,
    ConsultarasignacionesComponent,
    RegistrarfasesComponent,
    ActualizarfasesComponent,
    ActualizaractividadesComponent,
    ConsultarfasesComponent,
    TareasrealizadasComponent,
    ActualizarasignacionComponent,


    //INTRANET
    RelojComponent,
    PublicacionesComponent,
    NavbarComponent,
    FooterComponent,
    InfoIntranetComponent,
    CelebracionesComponent,
    MuroComponent,
    ActividadesComponent,
    NewsComponent,
    AuditoriaAccesoComponent,
    VerticaltabsComponent,
    PersonalactivoComponent,
    PersonalinactivoComponent,
    VarActividadesComponent,
    TodayactivityComponent,
    PersonalComponent,
    ColectivoComponent,
    ReportePersonalComponent,
    TodayactivitysComponent,
    HistorialActividadesComponent,
    AuditoriaActividadesComponent,
    ReporteactividadesComponent,
    NoticiasComponent,
    NextEventComponent,
    PoliticasAsistenciaComponent,
    IniciosoaComponent,
    //DOCUMENTOS

    ArchivarDocumentoComponent,
    ConsultarDocumentoComponent,
    RegistrarComponent,
    ConsultarInternoComponent,
    ConsultarExternoComponent,

       //INVENTARIOS
       NuevoRegistroComponent,
       ActivosComponent,
       ClasificacionArticuloComponent,
       AsignacionComponent,
       ComputacionComponent,
       MobiliariosComponent,
       ElectrodomesticosComponent,
       AsigPersonalComponent,
       AsigDepartamentoComponent,
       CompuAsigComponent,
       MobiAsigComponent,
       CompuDepComponent,
       MobiDepComponent,
       MantenimientoComponent,
       HistorialComponent,
       AsignacionInfraestructuraComponent,
       InfraCompuComponent,
       InfraCompuDepComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    NgxPaginationModule,
    FusionChartsModule // Include in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
