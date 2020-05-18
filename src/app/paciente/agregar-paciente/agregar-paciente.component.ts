import { PacienteApiService } from './../../../services/pacientes.service';

import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';



@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.css']
})
export class AgregarPacienteComponent implements OnInit {

  addForm:FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private apiService: PacienteApiService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required]
     
    });

  }

  onSubmit(){
    
    let form = this.addForm.value;
    console.log(form);
    this.apiService.crearPaciente(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['paciente/listar']);
    });
  }

}
