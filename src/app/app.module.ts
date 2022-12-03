import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarParteComponent } from './componentes/agregar-parte/agregar-parte.component';
import { EditarParteComponent } from './componentes/editar-parte/editar-parte.component';
import { ListarParteComponent } from './componentes/listar-parte/listar-parte.component';
import { ImprimirParteComponent } from './componentes/imprimir-parte/imprimir-parte.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarUsuarioComponent } from './componentes/agregar-usuario/agregar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarParteComponent,
    EditarParteComponent,
    ListarParteComponent,
    ImprimirParteComponent,
    IniciarSesionComponent,
    AgregarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
