import { Routes, RouterModule } from '@angular/router';
import { CandidatoComponent } from './components/reclutamiento/candidato/candidato.component';
import { SolicitudComponent } from './components/reclutamiento/solicitud/solicitud.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CreateComponent } from './components/reclutamiento/candidato/create/create.component';
import { VisualizarCandidatoComponent } from './components/reclutamiento/candidato/visualizar-candidato/visualizar-candidato.component';
import { ReclutamientoComponent } from './components/reclutamiento/reclutamiento/reclutamiento.component';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { VisualizarUsuarioComponent } from './components/administracion/visualizar-usuario/visualizar-usuario.component';
import { CrearComponent } from './components/reclutamiento/solicitud/crear/crear.component';
import { VisualizarSolicitudComponent } from './components/reclutamiento/solicitud/visualizar-solicitud/visualizar-solicitud.component';
import { EmpleadosComponent } from './components/reclutamiento/empleados/empleados.component';
import { ObservacionContratoComponent } from './components/reclutamiento/empleados/observacion-contrato/observacion-contrato.component';
import { RecursosInternosComponent } from './components/reclutamiento/empleados/recursos-internos/recursos-internos.component';
import { VisualizarRecursoInternoComponent } from './components/reclutamiento/empleados/recursos-internos/visualizar-recurso-interno/visualizar-recurso-interno.component';

export const RECLUTAMIENTO_ROUTES: Routes = [
    { path: 'registro', component: RegistroComponent },
    { path: '' , component: ReclutamientoComponent },
    { path: 'candidatos' , component: CandidatoComponent },
    { path: 'candidato/create' , component: CreateComponent },
    { path: 'candidato/visualizar/:id_candidato' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/cita' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/cita/:id_candidato' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/cita/delete/:id_candidato' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/status' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/status/:id_candidato' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/status/delete/:id_candidato' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/observacion' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/observacion/:id_candidato' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/obsanalista' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/obstecnico' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/obsgerencia' , component: VisualizarCandidatoComponent },
    { path: 'candidato/visualizar/asignacion/:id_candidato' , component: VisualizarCandidatoComponent },

    { path: 'usuarios' , component: UsuariosComponent },
    { path: 'usuarios/mostrar/:id', component: VisualizarUsuarioComponent },
    { path: 'usuarios/delete/:id' , component: UsuariosComponent },
    { path: 'usuarios/actualizar/:id' , component: UsuariosComponent },
    { path: 'registrousuarios' , component: RegistroComponent },
    { path: 'editarusuarios/:id' , component: RegistroComponent },

    { path: 'solicitudes' , component: SolicitudComponent },    
    { path: 'solicitud/crear' , component: CrearComponent },
    { path: 'solicitud/visualizar/:id_solicitud' , component: VisualizarSolicitudComponent },
    { path: 'solicitud/visualizar/candidatoporsolicitud/:id_solicitud' , component: VisualizarSolicitudComponent },
  
    { path: 'posiblesempleados' , component: EmpleadosComponent },    
    { path: 'posiblesempleados/:id_candidato' , component: ObservacionContratoComponent },

    { path: 'recursosinternos' , component: RecursosInternosComponent },
    { path: 'recursosinternos/visualizarrecursointerno/:id_candidato' , component: VisualizarRecursoInternoComponent },

    { path: '**' , redirectTo: '404' }
];

