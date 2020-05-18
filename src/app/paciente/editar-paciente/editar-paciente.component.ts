import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PacienteApiService } from 'src/services/pacientes.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {
  
  editForm : FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,private apiService:PacienteApiService) { }

  ngOnInit(): void {
    
    let pacienteId = window.localStorage.getItem("editPacienteId");
    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required]
    });
    
    if(!pacienteId) {
      alert("Ocurrio un error.")
      this.router.navigate(['']);
      return;
    }else{
      this.cargarDetallePaciente(pacienteId)
    }

  }

  cargarDetallePaciente(id:string){
    debugger;
    this.apiService.obtenerPacienteId(id)
    .subscribe( data => {
      debugger;
      this.editForm.setValue(data);
    });
  }
  onSubmit(){
    debugger;
    this.apiService.editarPaciente(this.editForm.value)   
    .subscribe(
      data => {
        if(data["resultado"] == "OK"){
        
          this.router.navigate(['paciente/listar']);
        }
        
      })
  }
}
