import { Routes, RouterModule } from '@angular/router';
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



//COMPONENTES
export const PROYECTOS_ROUTES: Routes = [
    { path: 'tareas/crear', component: CrearTareaComponent },
    { path: 'proyecto/crear' , component: CrearProyectoComponent },
    { path: 'asignaciones/crear-asignacion', component: CrearAsignacionComponent},
    { path: 'proyecto/crear-proyecto/registar-proyecto', component: RegistarProyectoComponent},
    { path: 'proyecto/crear-proyecto/actualizar-proyecto', component: ActualizarProyectoComponent},
    { path: 'tareas/registrartareas/registraractividad', component: RegistraractividadComponent},
    { path:'proyecto/consultar-proyecto/consultarproyecto', component: ConsultarproyectoComponent},
    { path:'asignaciones/consultar-asignaciones/consultarasignaciones', component: ConsultarasignacionesComponent},
    { path: 'tareas/registrartareas/registrarfases', component: RegistrarfasesComponent},
    { path: 'tareas/registrartareas/actualizarfases', component: ActualizarfasesComponent},
    { path: 'tareas/registrartareas/actualizaractividades', component: ActualizaractividadesComponent},
    {path: 'tareas/registrartareas/consultarfases', component: ConsultarfasesComponent},
    {path: 'tareas/tareasrealizadas', component: TareasrealizadasComponent},
    {path: 'asignaciones/actualizarasignacion', component: ActualizarasignacionComponent},


    { path: '**' , redirectTo: '404' }
];

