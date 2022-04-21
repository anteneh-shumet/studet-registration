
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrarListComponent} from './component/Registrar-list/Registrar-list.component';
import {RegistrarDetailsComponent} from './component/Registrar-details/Registrar-details.component';

const routes: Routes = [
  {path: 'countries', component: RegistrarListComponent},
  {path: 'countries/:id', component: RegistrarDetailsComponent},
  {path: '**', redirectTo: '/countries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
