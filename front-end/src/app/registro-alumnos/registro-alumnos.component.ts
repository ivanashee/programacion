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

  inscripcion = {
    cedulaAlumno: '',
    nombreResponsable: '',
    apellidoResponsable: '',
    relacionResponsable: '',
    nivel: '',
    ciclo: '',
    especializacion: 'ninguna',
    gradoCurso: '',
    turno: '',
    matricula: ''
  };

  mostrarFormularioAlumnos: boolean = false;
  mostrarFormularioResponsables: boolean = false;
  mostrarFormularioInscripcion: boolean = false;

  constructor(private apiService: ApiService) {}

  mostrarFormularioAlumno() {
    this.mostrarFormularioAlumnos = true;
    this.mostrarFormularioResponsables = false;
    this.mostrarFormularioInscripcion = false;
  }

  mostrarFormularioResponsable() {
    this.mostrarFormularioResponsables = true;
    this.mostrarFormularioAlumnos = false;
    this.mostrarFormularioInscripcion = false;
  }

  mostrarFormularioInscripciones() {
    this.mostrarFormularioInscripcion = true;
    this.mostrarFormularioAlumnos = false;
    this.mostrarFormularioResponsables = false;
  }

  submitFormAlumno() {
    this.apiService.registrarAlumno(this.alumno).subscribe(() => {
      alert('Alumno registrado con éxito');
      this.alumno = {
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        cedula: ''
      };
    }, error => {
      console.error('Error al registrar alumno:', error);
    });
  }

  submitFormResponsable() {
    this.apiService.registrarResponsable(this.responsable).subscribe(() => {
      alert('Responsable registrado con éxito');
      this.responsable = {
        nombre: '',
        apellido: '',
        numero: ''
      };
    }, error => {
      console.error('Error al registrar responsable:', error);
    });
  }

  submitFormInscripcion() {
    this.apiService.inscribirAlumno(this.inscripcion).subscribe(() => {
      alert('Alumno inscrito con éxito');
      this.inscripcion = {
        cedulaAlumno: '',
        nombreResponsable: '',
        apellidoResponsable: '',
        relacionResponsable: '',
        nivel: '',
        ciclo: '',
        especializacion: 'ninguna',
        gradoCurso: '',
        turno: '',
        matricula: ''
      };
    }, error => {
      console.error('Error al inscribir alumno:', error);
    });
  }
}
