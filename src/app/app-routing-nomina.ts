import { Routes, RouterModule } from '@angular/router';
import { ReciboPagoComponent } from './components/nomina/recibo-pago/recibo-pago.component';
import { PreNominaComponent } from './components/nomina/pre-nomina/pre-nomina.component';


export const NOMINA_ROUTES: Routes = [
    { path: 'recibopago' , component: ReciboPagoComponent},
    { path: 'prenomina' , component: PreNominaComponent},
    { path: '**' , redirectTo: '404' }

];

