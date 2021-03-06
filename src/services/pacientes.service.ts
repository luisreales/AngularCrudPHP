import { Pacientes } from './../model/pacientes';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacienteApiService {

  constructor(private http:HttpClient) { }

  getPacientes(){
    return this.http.get<Pacientes[]>('http://localhost/AngularCrud/listarpacientes.php')
  }

  borrarPaciente(id:string) : Observable<PacienteApiService>{
    return this.http.get<PacienteApiService>('http://localhost/AngularCrud/eliminarpaciente.php?id='+id);
  }



  crearPaciente(paciente:Pacientes): Observable<PacienteApiService>  {    
    
    return this.http.post<PacienteApiService>('http://localhost/AngularCrud/insertarpaciente.php', JSON.stringify(paciente));
  }

  obtenerPacienteId(id:string){
    return this.http.get<Pacientes>('http://localhost/AngularCrud/detallepaciente.php?id='+id);
  }

  editarPaciente(paciente:Pacientes):Observable<PacienteApiService>{
    return this.http.post<PacienteApiService>('http://localhost/AngularCrud/editarpaciente.php',JSON.stringify(paciente));
  }

}
