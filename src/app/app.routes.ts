import { Routes, RouterModule } from '@angular/router';
import { GuardarComponent } from './guardar/guardar.component';
import { BuscartodosComponent } from './buscartodos/buscartodos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'componente-guardar', component: GuardarComponent },
    { path: 'componente-buscartodos', component: BuscartodosComponent }
]
export const routing = RouterModule.forRoot(routes);