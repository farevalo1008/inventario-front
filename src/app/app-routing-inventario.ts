import { Routes, RouterModule } from '@angular/router';
import { ActivosComponent } from './components/inventario/administracion/activos/activos.component';
import { NuevoRegistroComponent } from './components/inventario/gestion/nuevoregistro/nuevoregistro.component';
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
import { HistorialComponent } from './components/inventario/administracion/historial/historial.component';
// import { MuroInfraComponent } from './components/intranet/dashboard/muro-infra/muro-infra.component';
import { AsignacionInfraestructuraComponent } from './components/inventario/gestion/asignacion/asignacion-infraestructura/asignacion-infraestructura.component';
import { InfraCompuComponent } from './components/inventario/gestion/asignacion/asig-personal/infra-compu/infra-compu.component';
import { InfraCompuDepComponent } from './components/inventario/gestion/asignacion/asig-departamento/infra-compu-dep/infra-compu-dep.component';


export const INVENTARIO_ROUTES: Routes = [
    { path: 'nuevoregistro', component: NuevoRegistroComponent },
    { path: 'administracion/activos/ver', component: ActivosComponent },
    { path: 'administracion/clasificacionarticulo/crear', component: ClasificacionArticuloComponent },
    { path: 'asignacion', component: AsignacionComponent },
    { path: 'nuevoregistro/computacion', component: ComputacionComponent },
    { path: 'nuevoregistro/mobiliarios', component: MobiliariosComponent },
    { path: 'nuevoregistro/electrodomesticos', component: ElectrodomesticosComponent },
    { path: 'asignacion/personal', component: AsigPersonalComponent },
    { path: 'asignacion/personal/computacion', component: CompuAsigComponent },
    { path: 'asignacion/personal/mobiliario', component: MobiAsigComponent },
    { path: 'asignacion/departamental', component: AsigDepartamentoComponent },
    { path: 'asignacion/departamental/computacion', component: CompuDepComponent },
    { path: 'asignacion/departamental/mobiliario', component: MobiDepComponent },
    { path: 'mantenimiento', component: MantenimientoComponent },
    { path: 'historial', component: HistorialComponent },
    // { path: 'intranet', component: MuroInfraComponent },
    { path: 'tipo/asignacion', component: AsignacionInfraestructuraComponent },
    { path: 'tipo/asignacion/personal/computacion', component: InfraCompuComponent },
    { path: 'tipo/asignacion/departamental/computacion', component: InfraCompuDepComponent },
    
    { path: '**' , redirectTo: '404' }
];
 




