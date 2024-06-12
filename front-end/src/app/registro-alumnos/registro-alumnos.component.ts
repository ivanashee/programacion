// registro-alumnos.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.css']
})
export class RegistroAlumnosComponent {
  alumno = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    cedula: ''
  };

  responsable = {
    nombre: '',
    apellido: '',
    numero: ''
  };

  mostrarFormularioAlumnos: boolean = false;
  mostrarFormularioResponsables: boolean = false;

  constructor(private apiService: ApiService) {}

  mostrarFormularioAlumno() {
    this.mostrarFormularioAlumnos = true;
    this.mostrarFormularioResponsables = false;
  }

  mostrarFormularioResponsable() {
    this.mostrarFormularioAlumnos = false;
    this.mostrarFormularioResponsables = true;
  }

  submitFormAlumno() {
    this.apiService.registrarAlumno(this.alumno).subscribe(() => {
      console.log('Alumno registrado exitosamente');
      // Aquí podrías mostrar un mensaje de éxito o redirigir a otra página
    }, error => {
      console.error('Error al registrar alumno:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
  }

  submitFormResponsable() {
    this.apiService.registrarResponsable(this.responsable).subscribe(() => {
      console.log('Responsable registrado exitosamente');
      // Aquí podrías mostrar un mensaje de éxito o redirigir a otra página
    }, error => {
      console.error('Error al registrar responsable:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    });
  }
}
