import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarParteComponent } from './componentes/agregar-parte/agregar-parte.component';
import { EditarParteComponent } from './componentes/editar-parte/editar-parte.component';
import { ListarParteComponent } from './componentes/listar-parte/listar-parte.component';
import { ImprimirParteComponent } from './componentes/imprimir-parte/imprimir-parte.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarParteComponent,
    EditarParteComponent,
    ListarParteComponent,
    ImprimirParteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
