import { EditarPacienteComponent } from './paciente/editar-paciente/editar-paciente.component';
import { AgregarPacienteComponent } from './paciente/agregar-paciente/agregar-paciente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPacienteComponent } from './paciente/list-paciente/list-paciente.component';


const routes: Routes = [

  { path: "paciente/listar", component: ListPacienteComponent },
  { path: "paciente/agregar", component: AgregarPacienteComponent },
  { path: "paciente/editar", component: EditarPacienteComponent },
  { path: "agregar", component: AgregarPacienteComponent },
  { path: "", component: ListPacienteComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

