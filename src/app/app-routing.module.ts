import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarParteComponent } from './componentes/agregar-parte/agregar-parte.component';
import { EditarParteComponent } from './componentes/editar-parte/editar-parte.component';
import { ImprimirParteComponent } from './componentes/imprimir-parte/imprimir-parte.component';
import { ListarParteComponent } from './componentes/listar-parte/listar-parte.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'listar-parte'},
  {path: 'agregar-parte', component: AgregarParteComponent},
  {path: 'listar-parte', component: ListarParteComponent},
  {path: 'editar-parte/:id', component: EditarParteComponent},
  {path: 'imprimir-parte/:id', component: ImprimirParteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
