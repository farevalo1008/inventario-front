import { Routes, RouterModule } from '@angular/router';
import { ArchivarDocumentoComponent } from './components/documentos/gestion/archivar-documento/archivar-documento.component';
import { ConsultarDocumentoComponent } from './components/documentos/gestion/consultar-documento/consultar-documento.component';
import { RegistrarComponent } from './components/documentos/administracion/registrar/registrar.component';
import { ConsultarInternoComponent } from './components/documentos/gestion/consultar-interno/consultar-interno.component';
import { ConsultarExternoComponent } from './components/documentos/gestion/consultar-externo/consultar-externo.component';

export const DOCUMENTOS_ROUTES: Routes = [
    { path: 'archivar', component: ArchivarDocumentoComponent },
    { path: 'consultar', component: ConsultarDocumentoComponent },
    
    { path: 'consultarInterno', component: ConsultarInternoComponent },
    { path: 'consultarExterno', component: ConsultarExternoComponent },
   
   
    { path: 'administracion/registrar/crear' , component: RegistrarComponent },
   
    { path: '**' , redirectTo: '404' }
];

