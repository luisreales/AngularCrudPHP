import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPacienteComponent } from './paciente/list-paciente/list-paciente.component';
import { AgregarPacienteComponent } from './paciente/agregar-paciente/agregar-paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarPacienteComponent } from './paciente/editar-paciente/editar-paciente.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPacienteComponent,
    AgregarPacienteComponent,
    EditarPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
